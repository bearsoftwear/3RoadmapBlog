import { NextResponse } from 'next/server';

const posts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 15',
    content:
      'Explore the latest features and improvements in Next.js 15, including enhanced performance and new developer tools.',
    date: '2024-01-15',
    author: 'John Doe',
    tags: ['Next.js', 'React', 'Web Development'],
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    content:
      'A deep dive into emerging trends and technologies that are shaping the future of web development.',
    date: '2024-01-10',
    author: 'Emma Wilson',
    tags: ['Web Development', 'Technology', 'Future'],
  },
  {
    id: 3,
    title: 'Building Responsive UIs with Material-UI',
    content:
      'Learn how to create beautiful and responsive user interfaces using Material-UI components and theming.',
    date: '2024-01-05',
    author: 'Michael Chen',
    tags: ['Material-UI', 'React', 'UI/UX'],
  },
  {
    id: 4,
    title: 'TypeScript Best Practices',
    content:
      'Essential TypeScript patterns and practices that will make your code more maintainable and type-safe.',
    date: '2023-12-28',
    author: 'Sarah Johnson',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
  },
  {
    id: 5,
    title: 'State Management in Modern React',
    content:
      'Comparing different state management solutions for React applications, from useState to Zustand.',
    date: '2023-12-20',
    author: 'David Lee',
    tags: ['React', 'State Management', 'JavaScript'],
  },
  {
    id: 6,
    title: 'CSS Grid vs Flexbox: When to Use What',
    content:
      'Understanding the differences between CSS Grid and Flexbox and when to use each layout method.',
    date: '2023-12-15',
    author: 'Rachel Kim',
    tags: ['CSS', 'Layout', 'Web Design'],
  },
  {
    id: 7,
    title: 'Optimizing React Performance',
    content:
      'Learn advanced techniques for optimizing React applications including code splitting, memoization and more.',
    date: '2023-12-10',
    author: 'Jane Smith',
    tags: ['React', 'Performance', 'Optimization'],
  },
  {
    id: 8,
    title: 'Testing React Applications',
    content:
      'A comprehensive guide to testing React applications using Jest, React Testing Library and Cypress.',
    date: '2023-12-05',
    author: 'Bob Wilson',
    tags: ['React', 'Testing', 'Jest'],
  },
  {
    id: 9,
    title: 'Modern CSS Features',
    content:
      'Exploring the latest CSS features including Container Queries, :has selector, and CSS Grid subgrid.',
    date: '2023-12-01',
    author: 'Alex Thompson',
    tags: ['CSS', 'Web Development', 'Frontend'],
  },
  {
    id: 10,
    title: 'Accessibility in React',
    content:
      'Best practices for building accessible React applications following WCAG guidelines.',
    date: '2023-11-25',
    author: 'Mike Brown',
    tags: ['React', 'Accessibility', 'WCAG'],
  },
  {
    id: 11,
    title: 'GraphQL Fundamentals',
    content:
      'Understanding GraphQL basics and how to implement it in your React applications.',
    date: '2023-11-20',
    author: 'Sophie Martinez',
    tags: ['GraphQL', 'API', 'React'],
  },
  {
    id: 12,
    title: 'Responsive Design Patterns',
    content:
      'Modern approaches to creating responsive web designs that work across all devices.',
    date: '2023-11-15',
    author: 'Daniel Park',
    tags: ['CSS', 'Responsive Design', 'Web Development'],
  },
  {
    id: 13,
    title: 'React Server Components',
    content:
      'Deep dive into React Server Components and their impact on application architecture.',
    date: '2023-11-10',
    author: 'Lisa Wang',
    tags: ['React', 'Server Components', 'Performance'],
  },
  {
    id: 14,
    title: 'Web Security Best Practices',
    content: 'Essential security practices for modern web applications.',
    date: '2023-11-05',
    author: 'Chris Anderson',
    tags: ['Security', 'Web Development', 'Best Practices'],
  },
  {
    id: 15,
    title: 'Progressive Web Apps',
    content:
      'Building reliable and engaging Progressive Web Apps with modern web technologies.',
    date: '2023-11-01',
    author: 'Maria Garcia',
    tags: ['PWA', 'Web Development', 'Performance'],
  },
  {
    id: 16,
    title: 'Advanced Git Workflows',
    content: 'Master complex Git operations and team collaboration workflows.',
    date: '2023-10-25',
    author: 'Tom Jenkins',
    tags: ['Git', 'Version Control', 'Collaboration'],
  },
  {
    id: 17,
    title: 'WebAssembly and React',
    content:
      'Integrating WebAssembly modules in React applications for better performance.',
    date: '2023-10-20',
    author: 'Nina Patel',
    tags: ['WebAssembly', 'React', 'Performance'],
  },
  {
    id: 18,
    title: 'Micro-Frontends Architecture',
    content:
      'Implementing and managing micro-frontends in modern web applications.',
    date: '2023-10-15',
    author: 'James Wilson',
    tags: ['Architecture', 'Micro-Frontends', 'Web Development'],
  },
  {
    id: 19,
    title: 'React Query Mastery',
    content: 'Advanced data fetching and state management with React Query.',
    date: '2023-10-10',
    author: 'Emily Brooks',
    tags: ['React', 'React Query', 'State Management'],
  },
  {
    id: 20,
    title: 'Web Performance Optimization',
    content:
      'Advanced techniques for optimizing web application performance and user experience.',
    date: '2023-10-05',
    author: 'Ryan Cooper',
    tags: ['Performance', 'Optimization', 'Web Development'],
  },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return NextResponse.json(posts);
}
