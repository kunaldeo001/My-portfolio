
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { heroData, portfolioData } from '@/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState, useEffect } from 'react';

export function LandingPage() {
  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const [wallpaper, setWallpaper] = useState(heroBgImage?.imageUrl);

  useEffect(() => {
    const savedWallpaper = sessionStorage.getItem('customWallpaper');
    if (savedWallpaper) {
      setWallpaper(savedWallpaper);
    }
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {wallpaper && (
        <motion.div
          className="absolute z-0 h-full w-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 15,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          <Image
            src={wallpaper}
            alt={heroBgImage?.description || "Portfolio background"}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroBgImage?.imageHint}
            key={wallpaper}
          />
        </motion.div>
      )}
      <div className="absolute inset-0 z-10 bg-background/60 backdrop-blur-sm"></div>
      
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">Welcome to my portfolio</p>
          <h1 className="font-headline text-6xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl"
              style={{ textShadow: '0 2px 20px hsl(var(--background) / 0.8)'}}
          >
            <span 
              className="bg-gradient-to-br from-primary via-primary/80 to-foreground bg-clip-text text-transparent"
            >
              {portfolioData.firstName}
            </span> {portfolioData.lastName}
          </h1>
          <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground sm:text-base">
            {heroData.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">
              Enter Portfolio
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
