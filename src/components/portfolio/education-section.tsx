"use client";

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionWrapper, SectionHeading } from './section';
import { educationData } from '@/lib/portfolio-data';

export function EducationSection() {
  return (
    <SectionWrapper id="education" className="bg-card/80 backdrop-blur-sm">
      <div className="text-center">
        <SectionHeading>{educationData.title}</SectionHeading>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <Card className="max-w-3xl mx-auto shadow-lg bg-transparent">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-semibold text-primary">{educationData.degree}</h3>
                <p className="text-lg text-foreground">{educationData.university}</p>
                <p className="text-muted-foreground">{educationData.duration}</p>
                <p className="text-muted-foreground">{educationData.year}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionWrapper>
  );
}
