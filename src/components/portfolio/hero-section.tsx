"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { heroData, portfolioData } from '@/lib/portfolio-data';
import { Mail } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const avatar = PlaceHolderImages.find((img) => img.id === 'user-profile-avatar');
  
  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden bg-transparent pt-32 pb-20">
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative mx-auto mb-6 h-32 w-32">
            <Avatar className="h-full w-full border-4 border-primary/20 shadow-lg">
              <AvatarImage src={avatar?.imageUrl} alt={portfolioData.name} data-ai-hint={avatar?.imageHint || 'man with motorcycle'} />
              <AvatarFallback>{portfolioData.name.charAt(0)}</AvatarFallback>
            </Avatar>
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
