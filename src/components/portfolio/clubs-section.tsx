
"use client";

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionWrapper, SectionHeading, SectionDescription } from './section';
import { clubsData } from '@/lib/portfolio-data';

export function ClubsSection() {
  return (
    <SectionWrapper id="clubs" className="bg-card/80 backdrop-blur-sm">
      <div className="text-center">
        <SectionHeading>{clubsData.title}</SectionHeading>
        <SectionDescription className="mt-4">{clubsData.description}</SectionDescription>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 [perspective:1000px]">
        {clubsData.items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, rotateY: 7, scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 20 } }}
            className="col-span-1"
          >
            <Card className="max-w-sm mx-auto shadow-lg bg-transparent h-full">
              <CardContent className="p-8 flex flex-col items-center justify-center text-center gap-4 h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-primary">{item.name}</h3>
                  <p className="text-md text-foreground">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
