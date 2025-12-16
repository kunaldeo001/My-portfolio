"use client";

import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeading, SectionDescription } from './section';
import { aboutData } from '@/lib/portfolio-data';

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-card">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>{aboutData.title}</SectionHeading>
          <SectionDescription className="mt-4">{aboutData.introduction}</SectionDescription>
          <SectionDescription className="mt-4">{aboutData.careerObjective}</SectionDescription>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div>
            <h3 className="font-headline text-2xl font-semibold text-primary">{aboutData.strengths.title}</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
              {aboutData.strengths.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-2xl font-semibold text-primary">{aboutData.achievements.title}</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
              {aboutData.achievements.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
