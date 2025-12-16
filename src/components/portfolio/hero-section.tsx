
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { heroData, portfolioData } from '@/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, Pencil } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function HeroSection() {
  const initialAvatar = PlaceHolderImages.find((img) => img.id === 'kunal-deo-avatar');
  const [avatarUrl, setAvatarUrl] = useState(initialAvatar?.imageUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedAvatar = sessionStorage.getItem('customAvatar');
    if (savedAvatar) {
      setAvatarUrl(savedAvatar);
    }
  }, []);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const newAvatarUrl = e.target?.result as string;
        setAvatarUrl(newAvatarUrl);
        try {
          sessionStorage.setItem('customAvatar', newAvatarUrl);
        } catch (error) {
          console.error("Failed to save avatar to sessionStorage:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };
  
  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden bg-transparent pt-32 pb-20">
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative mx-auto mb-6 h-32 w-32 group">
            <Avatar className="h-full w-full border-4 border-primary/20 shadow-lg">
              <AvatarImage src={avatarUrl} alt={portfolioData.name} data-ai-hint={initialAvatar?.imageHint} />
              <AvatarFallback>{portfolioData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleAvatarChange}
              className="hidden"
              accept="image/*"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={handleEditClick}
              className="absolute bottom-0 right-0 z-10 rounded-full h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Change profile picture"
            >
              <Pencil className="h-4 w-4" />
            </Button>
          </div>

          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            {portfolioData.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {heroData.introduction}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href={`mailto:${portfolioData.email}`}>
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
