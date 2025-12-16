"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks, portfolioData } from '@/lib/portfolio-data';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-headline text-xl font-bold text-primary">
          {portfolioData.name}.dev
        </Link>
        <NavLinks />
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
                      <Link href="/" className="font-headline text-xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        {portfolioData.name}.dev
                      </Link>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetClose>
                  </div>
                  <NavLinks isMobile={true} />
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
