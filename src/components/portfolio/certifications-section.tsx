"use client";

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { SectionWrapper, SectionHeading, SectionDescription } from './section';
import { certificationsData } from '@/lib/portfolio-data';

export function CertificationsSection() {
  return (
    <SectionWrapper id="certifications">
      <div className="text-center">
        <SectionHeading>{certificationsData.title}</SectionHeading>
        <SectionDescription className="mt-4">{certificationsData.description}</SectionDescription>
      </div>
      <div className="mt-12">
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true"></div>
          {certificationsData.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-8 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <Card className="shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground">{item.issuer}</p>
                    <h3 className="font-headline text-lg font-semibold text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.status}</p>
                  </div>
                </Card>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 transform">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Award className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
