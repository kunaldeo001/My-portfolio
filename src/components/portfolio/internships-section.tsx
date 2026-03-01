
"use client";

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SectionWrapper, SectionHeading, SectionDescription } from './section';
import { internshipsData } from '@/lib/portfolio-data';
import { Badge } from '../ui/badge';

export function InternshipsSection() {
  return (
    <SectionWrapper id="internships">
      <div className="text-center">
        <SectionHeading>{internshipsData.title}</SectionHeading>
        <SectionDescription className="mt-4">{internshipsData.description}</SectionDescription>
      </div>
      <div className="mt-12 [perspective:1000px]">
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true"></div>
          {internshipsData.items.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-8 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <motion.div
                  whileHover={{ y: -8, rotateY: index % 2 === 0 ? 7 : -7, scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                >
                  <Card className="shadow-lg bg-card/80 backdrop-blur-sm">
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-muted-foreground">{item.company}</p>
                          <h3 className="font-headline text-lg font-semibold text-primary">{item.role}</h3>
                        </div>
                        <Badge variant={item.status === 'Ongoing' ? 'default' : 'secondary'}>{item.status}</Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 transform">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Briefcase className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
