import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaXTwitter,
} from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

// Centralized content so you can update portfolio details without touching component logic.
export const portfolioData = {
  name: 'Sarthak',
  role: 'Frontend Developer',
  taglines: ['Building delightful web experiences.', 'Turning ideas into interactive products.'],
  heroDescription:
    'I design and build performant, accessible interfaces with modern JavaScript and React.',
  resumeUrl: '#',
  about:
    'I am a developer who loves crafting bold user interfaces and thoughtful digital experiences. I enjoy building products that are fast, intuitive, and visually memorable.',
  skills: [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Git', icon: FaGitAlt },
  ],
  projects: [
    {
      title: 'Interactive Dashboard',
      description: 'A role-based analytics dashboard with charts, filtering, and responsive layouts.',
      tags: ['React', 'Chart.js', 'CSS'],
      githubUrl: '#',
      demoUrl: '#',
      thumbnail:
        'https://images.unsplash.com/photo-1551281044-8b2d7f3b8e7f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'AI Content Studio',
      description: 'A content creation interface with rich editor tools and reusable prompt workflows.',
      tags: ['React', 'Hooks', 'Framer Motion'],
      githubUrl: '#',
      demoUrl: '#',
      thumbnail:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Developer Portfolio',
      description: 'A conversion-focused personal portfolio site with smooth animations and dark theme.',
      tags: ['React', 'Vite', 'Responsive UI'],
      githubUrl: '#',
      demoUrl: '#',
      thumbnail:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    },
  ],
  experiences: [
    {
      date: '2025 - Present',
      title: 'Frontend Developer Intern',
      organization: 'TechNova Labs',
      description: 'Built reusable UI components and improved page performance across flagship products.',
    },
    {
      date: '2021 - 2025',
      title: 'B.Tech in Computer Science',
      organization: 'Your University Name',
      description: 'Focused on web technologies, software engineering, and human-computer interaction.',
    },
    {
      date: '2020 - 2021',
      title: 'Open Source Contributor',
      organization: 'GitHub Community',
      description: 'Contributed bug fixes and UI improvements to community-driven projects.',
    },
  ],
  socialLinks: [
    { name: 'GitHub', href: '#', icon: FaGithub },
    { name: 'LinkedIn', href: '#', icon: FaLinkedin },
    { name: 'Twitter / X', href: '#', icon: FaXTwitter },
    { name: 'Email', href: 'mailto:you@example.com', icon: MdEmail },
  ],
}
