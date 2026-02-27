"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionWrapper, SectionHeading, SectionDescription } from './section';
import { projectsData } from '@/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ProjectsSection() {
  const getProjectImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

  return (
    <SectionWrapper id="projects">
      <div className="text-center">
        <SectionHeading>{projectsData.title}</SectionHeading>
        <SectionDescription className="mt-4">{projectsData.description}</SectionDescription>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.items.map((project, index) => {
          const projectImage = getProjectImage(project.image);
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group flex h-full flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                {projectImage && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  {project.links.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={project.links.github} target="_blank" aria-label="GitHub Repository">
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                  {project.links.live && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={project.links.live} target="_blank" aria-label="Live Demo">
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
