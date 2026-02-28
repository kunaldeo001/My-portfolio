"use client";

import { motion } from 'framer-motion';
import { Code2, Database, Cloud, GitBranch, BrainCircuit, BookOpen, LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SectionWrapper, SectionHeading, SectionDescription } from './section';
import { skillsData } from '@/lib/portfolio-data';

const iconMap: { [key: string]: LucideIcon } = {
  Programming: Code2,
  'Data Structures & Algorithms': GitBranch,
  'Core CS Concepts': BookOpen,
  Databases: Database,
  'Cloud & DevOps': Cloud,
  'AI/ML': BrainCircuit,
};

export function SkillsSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      y: -8,
      scale: 1.05,
      rotateY: 7,
      transition: { type: "spring", stiffness: 400, damping: 20 }
    }
  };

  return (
    <SectionWrapper id="skills">
      <div className="text-center">
        <SectionHeading>{skillsData.title}</SectionHeading>
        <SectionDescription className="mt-4">{skillsData.description}</SectionDescription>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 [perspective:1000px]">
        {skillsData.categories.map((category, index) => {
          const Icon = iconMap[category.title] || Code2;
          return (
            <motion.div
              key={category.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="flex h-full flex-col shadow-lg transition-shadow duration-300 hover:shadow-xl bg-card/80 backdrop-blur-sm">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-xl text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-muted-foreground">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
