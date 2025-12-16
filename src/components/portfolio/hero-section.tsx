"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { heroData, portfolioData } from '@/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Download, Mail } from 'lucide-react';

export function HeroSection() {
  const avatarImage = PlaceHolderImages.find((img) => img.id === 'kunal-deo-avatar');

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {avatarImage && (
            <Avatar className="mx-auto mb-6 h-32 w-32 border-4 border-primary/20 shadow-lg">
              <AvatarImage src={avatarImage.imageUrl} alt={portfolioData.name} data-ai-hint={avatarImage.imageHint} />
              <AvatarFallback>{portfolioData.name.charAt(0)}</AvatarFallback>
            </Avatar>
          )}

          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            {portfolioData.name}
          </h1>
          <p className="mt-3 font-headline text-lg text-foreground sm:text-xl md:text-2xl">
            {heroData.title}
          </p>
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
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link href={portfolioData.resumeUrl} target="_blank">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Link>
          </Button>
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
