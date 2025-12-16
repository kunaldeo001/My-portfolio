"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { heroData, portfolioData } from '@/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function LandingPage() {
  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {heroBgImage && (
        <Image
          src={heroBgImage.imageUrl}
          alt="Luxury car on a coastal road at sunset"
          fill
          className="absolute z-0 object-cover opacity-30"
          priority
          data-ai-hint={heroBgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">Welcome to my portfolio</p>
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {portfolioData.firstName}
          </h1>
          <h2 
            className="font-headline text-6xl font-bold tracking-tight text-primary sm:text-7xl md:text-8xl"
            style={{ textShadow: '0 0 15px hsl(var(--primary) / 0.8)'}}
          >
            {portfolioData.lastName}
          </h2>
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
