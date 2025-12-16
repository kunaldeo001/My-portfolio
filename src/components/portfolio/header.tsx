"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Menu, X, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks, portfolioData } from '@/lib/portfolio-data';
import { usePathname } from 'next/navigation';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isPortfolioPage = pathname === '/portfolio';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ isMobile = false }) => (
    <nav
      className={cn(
        'flex items-center gap-1',
        isMobile ? 'flex-col items-start gap-4 p-4' : 'hidden md:flex'
      )}
    >
      {navLinks.map((link) => (
        <Button
          key={link.href}
          variant="ghost"
          asChild
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          <Link href={link.href} className={cn(isMobile && 'w-full text-left justify-start text-lg')}>
            {link.label}
          </Link>
        </Button>
      ))}
    </nav>
  );

  if (!isPortfolioPage) {
    return null;
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-headline text-xl font-bold text-primary flex items-center gap-2">
          <Home className="h-5 w-5" />
          <span className="hidden sm:inline">Home</span>
        </Link>
        <div className="flex-1 flex justify-center">
            <NavLinks />
        </div>
        <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href={portfolioData.socials.github} target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href={portfolioData.socials.linkedin} target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
                </Link>
            </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                      <Link href="/" className="font-headline text-xl font-bold text-primary flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Home className="h-5 w-5" />
                        Home
                      </Link>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetClose>
                  </div>
                  <NavLinks isMobile={true} />
                  <div className="p-4 mt-auto flex items-center gap-2 justify-center">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href={portfolioData.socials.github} target="_blank" aria-label="GitHub">
                        <Github className="h-6 w-6" />
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href={portfolioData.socials.linkedin} target="_blank" aria-label="LinkedIn">
                        <Linkedin className="h-6 w-6" />
                        </Link>
                    </Button>
                  </div>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
