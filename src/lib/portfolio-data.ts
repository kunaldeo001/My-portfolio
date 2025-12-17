
export const portfolioData = {
  name: 'Kunal Deo',
  firstName: 'Kunal',
  lastName: 'Deo',
  email: 'kunaldeo001@gmail.com',
  resumeUrl: '/resume.pdf', // Assuming resume is in public folder
  socials: {
    github: 'https://github.com/kunaldeo001',
    linkedin: 'https://www.linkedin.com/in/kunal-deo-4592352bb/',
  },
};

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#internships', label: 'Internships' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#clubs', label: 'Clubs' },
  { href: '#contact', label: 'Contact' },
];

export const heroData = {
  title: 'WEB DEVELOPER - UI ENGINEER - AI-ML ENTHUSIAST',
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
        github: 'https://github.com/kunaldeo001/portfolio',
        live: '#',
      },
    },
    {
      title: 'Finwise AI',
      description: 'An AI-powered financial advisor application that provides personalized investment advice and market analysis.',
      image: 'project-2',
      tags: ['Python', 'Flask', 'React', 'Machine Learning', 'AI'],
      links: {
        github: 'https://github.com/kunaldeo001/finwise-ai',
        live: null,
      },
    },
    {
      title: 'Fitness Tracker Dashboard',
      description: 'A data-rich dashboard to visualize fitness activity, track progress, and set goals, built with modern web technologies.',
      image: 'project-3',
      tags: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
      links: {
        github: 'https://github.com/kunaldeo001/fitness-tracker',
        live: null,
      },
    },
    {
      title: 'Responsive Landing Page',
      description: 'A modern, fully responsive landing page for a fictional SaaS product, focusing on clean design and user experience.',
      image: 'project-4',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
      links: {
        github: 'https://github.com/kunaldeo001/responsive-landing-page',
        live: null,
      },
    }
  ],
};

export const internshipsData = {
  title: 'Internships',
  description: 'My professional experience as a web developer.',
  items: [
    {
      company: 'DigiSys Innosol Pvt Ltd',
      role: 'Web Developer Intern',
      status: 'Ongoing',
    },
    {
      company: 'Codeclause',
      role: 'Web Developer Intern',
      status: 'Completed',
    },
    {
      company: 'Codesoft',
      role: 'Web Developer',
      status: 'Completed',
    },
  ],
};

export const educationData = {
  title: 'Education',
  degree: "B.Tech in Computer Science (Core)",
  university: 'SRM Institute of Science and Technology, Kattankulathur, Chennai',
  duration: '2024 - 2028',
  year: 'Second Year Undergraduate',
};

export const certificationsData = {
  title: 'Certifications & Training',
  description: 'My commitment to continuous learning is reflected in the certifications and training programs I have undertaken.',
  items: [
    {
      title: '10X Club',
      issuer: 'Coding Ninjas',
      status: 'Completed',
    },
    {
      title: 'Data Analytics Workshop',
      issuer: 'IIT Kharagpur',
      status: 'Completed',
    },
    {
      title: 'AI Aware and AI Appreciate',
      issuer: 'Intel',
      status: 'Completed',
    },
    {
      title: 'SkillUp: Machine Learning using Python',
      issuer: 'SkillUp',
      status: 'Completed',
    },
    {
      title: 'Artificial Intelligence',
      issuer: 'Infosys',
      status: 'Completed',
    },
    {
      title: 'Technology Job Simulation',
      issuer: 'Deloitte',
      status: 'Completed',
    },
    {
      title: 'Cybersecurity Course',
      issuer: 'Cisco',
      status: 'Completed',
    },
    {
      title: 'Digital Skill: Artificial Intelligence',
      issuer: 'Accenture',
      status: 'Completed',
    },
    {
      title: 'HP Future-Ready AI Program',
      issuer: 'HP',
      status: 'Completed',
    },
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

export const clubsData = {
  title: 'Clubs & Organizations',
  description: 'My involvement in technical clubs and communities.',
  items: [
    {
      name: 'IEEE SRMIST SSIT',
      role: 'R&D Member',
    },
  ],
};

export const contactData = {
    title: "Get in Touch",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.",
    form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        submit: "Send Message",
    },
};

