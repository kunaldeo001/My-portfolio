export const portfolioData = {
  name: 'Kunal Deo',
  email: 'kunal.deo@example.com',
  resumeUrl: '/resume.pdf', // Assuming resume is in public folder
  socials: {
    github: 'https://github.com/kunaldeo',
    linkedin: 'https://linkedin.com/in/kunaldeo',
  },
};

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
];

export const heroData = {
  title: 'Aspiring Software Engineer',
  introduction: 'A curious and driven second-year Computer Science student with a passion for building innovative software solutions and exploring the frontiers of technology.',
};

export const aboutData = {
  title: 'About Me',
  introduction:
    'I am a dedicated and motivated undergraduate student with a strong foundation in computer science principles. My journey in tech is fueled by a relentless curiosity and a commitment to continuous learning and growth. I enjoy tackling complex problems and turning ideas into tangible, impactful software.',
  careerObjective: 'To secure a challenging internship or project-based role where I can apply my technical skills, contribute to real-world projects, and further develop my abilities as a software engineer under expert mentorship.',
  strengths: {
    title: 'My Strengths',
    points: ['Problem-Solving', 'Consistent Learner', 'Adaptability', 'Team Collaboration'],
  },
  achievements: {
    title: 'Key Achievements',
    points: ['Maintained a strong academic record', 'Successfully completed several personal projects', 'Actively participating in coding communities'],
  },
};

export const skillsData = {
  title: 'Technical Skills',
  description: 'A collection of technologies and concepts I have worked with through my academic journey and self-learning.',
  categories: [
    {
      title: 'Programming',
      skills: ['C', 'C++', 'Java', 'Python'],
    },
    {
      title: 'Data Structures & Algorithms',
      skills: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Sorting & Searching'],
    },
    {
      title: 'Core CS Concepts',
      skills: ['Operating Systems', 'Computer Organization', 'DBMS Concepts'],
    },
    {
      title: 'Databases',
      skills: ['SQL (MySQL)', 'MongoDB (Basics)'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (Basics)', 'Git & GitHub', 'Docker (Familiarity)'],
    },
    {
      title: 'AI/ML',
      skills: ['Fundamental Concepts', 'Scikit-learn', 'Pandas & NumPy'],
    },
  ],
};

export const projectsData = {
  title: 'My Projects',
  description: 'A selection of academic and personal projects that demonstrate my skills and passion for software development.',
  items: [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio built with Next.js and Tailwind CSS to showcase my skills and projects.',
      image: 'project-1',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      links: {
        github: 'https://github.com/kunaldeo/portfolio',
        live: '#',
      },
    },
    {
      title: 'Task Management App',
      description: 'A simple web application for managing daily tasks, featuring create, read, update, and delete (CRUD) functionality.',
      image: 'project-2',
      tags: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL'],
      links: {
        github: 'https://github.com/kunaldeo/task-manager',
        live: null,
      },
    },
    {
      title: 'Data Visualizer',
      description: 'A Python script that uses Matplotlib and Pandas to parse CSV data and generate insightful charts and graphs.',
      image: 'project-3',
      tags: ['Python', 'Pandas', 'Matplotlib'],
      links: {
        github: 'https://github.com/kunaldeo/data-visualizer',
        live: null,
      },
    },
  ],
};

export const educationData = {
  title: 'Education',
  degree: "Bachelor's in Computer Science",
  university: '[Your University Name]',
  duration: '2022 - 2026',
  year: 'Second Year Undergraduate',
};

export const certificationsData = {
  title: 'Certifications & Training',
  description: 'My commitment to continuous learning is reflected in the certifications and training programs I have undertaken.',
  items: [
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'EduSkills & AWS Academy',
      status: 'In Progress',
    },
    {
      title: 'AI-ML Virtual Internship',
      issuer: 'Google & AICTE',
      status: 'Completed',
    },
    {
      title: 'Python for Everybody',
      issuer: 'Coursera',
      status: 'Completed',
    },
  ],
};
