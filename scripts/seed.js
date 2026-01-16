import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Service from '../models/Service.js';
import User from '../models/User.js';

dotenv.config();

const services = [
  {
    name: 'Custom Website Development',
    slug: 'custom-website-development',
    description: 'Full-stack web application development with modern technologies and best practices.',
    fullDescription: 'We build custom websites tailored to your business needs using cutting-edge technologies like React, Next.js, and Node.js. Our development process ensures scalability, performance, and security from the ground up.',
    price: 2999,
    category: 'development',
    features: [
      'Responsive design for all devices',
      'SEO optimization',
      'Fast loading times',
      'Secure authentication',
      'Database integration',
      'Admin dashboard'
    ],
    deliveryTime: '4-6 weeks',
    image: '/images/web-development.jpg',
    tags: ['react', 'nextjs', 'nodejs', 'fullstack']
  },
  {
    name: 'UI/UX Design Services',
    slug: 'ui-ux-design-services',
    description: 'Professional user interface and experience design for web and mobile applications.',
    fullDescription: 'Transform your digital presence with our expert UI/UX design services. We create intuitive, beautiful interfaces that engage users and drive conversions through research-backed design decisions.',
    price: 1499,
    category: 'design',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'High-fidelity mockups',
      'Design system creation',
      'Usability testing',
      'Figma/Adobe XD files'
    ],
    deliveryTime: '2-3 weeks',
    image: '/images/ui-ux-design.jpg',
    tags: ['figma', 'design', 'ux', 'ui']
  },
  {
    name: 'Cybersecurity Audit',
    slug: 'cybersecurity-audit',
    description: 'Comprehensive security assessment and penetration testing for your web applications.',
    fullDescription: 'Protect your digital assets with our thorough cybersecurity audit. We identify vulnerabilities, assess risks, and provide actionable recommendations to strengthen your security posture.',
    price: 1999,
    category: 'security',
    features: [
      'Vulnerability scanning',
      'Penetration testing',
      'Security code review',
      'Compliance assessment',
      'Detailed report with fixes',
      'Follow-up consultation'
    ],
    deliveryTime: '1-2 weeks',
    image: '/images/cybersecurity.jpg',
    tags: ['security', 'pentesting', 'audit']
  },
  {
    name: 'API Development & Integration',
    slug: 'api-development-integration',
    description: 'RESTful API development and third-party service integration for seamless connectivity.',
    fullDescription: 'Build robust APIs or integrate existing services into your application. We specialize in creating scalable, well-documented APIs and connecting various platforms for optimal workflow.',
    price: 1799,
    category: 'development',
    features: [
      'RESTful API design',
      'GraphQL implementation',
      'Third-party integrations',
      'API documentation',
      'Rate limiting & security',
      'Webhook setup'
    ],
    deliveryTime: '2-4 weeks',
    image: '/images/api-development.jpg',
    tags: ['api', 'rest', 'graphql', 'integration']
  },
  {
    name: 'Performance Optimization',
    slug: 'performance-optimization',
    description: 'Speed up your website with advanced optimization techniques and best practices.',
    fullDescription: 'Boost your website performance with our optimization services. We analyze, identify bottlenecks, and implement solutions to achieve lightning-fast load times and improved user experience.',
    price: 999,
    category: 'optimization',
    features: [
      'Performance audit',
      'Code optimization',
      'Image & asset optimization',
      'Caching strategies',
      'CDN setup',
      'Core Web Vitals improvement'
    ],
    deliveryTime: '1 week',
    image: '/images/performance.jpg',
    tags: ['optimization', 'speed', 'performance']
  },
  {
    name: 'Cloud Infrastructure Setup',
    slug: 'cloud-infrastructure-setup',
    description: 'Deploy and configure scalable cloud infrastructure on AWS, Azure, or Google Cloud.',
    fullDescription: 'Leverage the power of cloud computing with our infrastructure setup services. We design and deploy scalable, cost-effective solutions tailored to your application needs.',
    price: 2499,
    category: 'development',
    features: [
      'Cloud architecture design',
      'Server configuration',
      'Auto-scaling setup',
      'Load balancing',
      'Backup & disaster recovery',
      'Monitoring & alerts'
    ],
    deliveryTime: '2-3 weeks',
    image: '/images/cloud-infrastructure.jpg',
    tags: ['aws', 'cloud', 'devops', 'infrastructure']
  },
  {
    name: 'SEO & Analytics Setup',
    slug: 'seo-analytics-setup',
    description: 'Comprehensive SEO optimization and analytics implementation for data-driven growth.',
    fullDescription: 'Improve your search rankings and understand your users better with our SEO and analytics services. We implement best practices and tracking to help you make informed decisions.',
    price: 799,
    category: 'optimization',
    features: [
      'Technical SEO audit',
      'On-page optimization',
      'Google Analytics setup',
      'Search Console integration',
      'Conversion tracking',
      'Monthly reports'
    ],
    deliveryTime: '1 week',
    image: '/images/seo-analytics.jpg',
    tags: ['seo', 'analytics', 'google', 'optimization']
  },
  {
    name: 'Maintenance & Support Package',
    slug: 'maintenance-support-package',
    description: 'Ongoing website maintenance, updates, and technical support to keep your site running smoothly.',
    fullDescription: 'Keep your website secure, updated, and performing optimally with our maintenance package. We handle updates, backups, security patches, and provide priority support.',
    price: 499,
    category: 'maintenance',
    features: [
      'Regular updates & patches',
      'Daily backups',
      'Security monitoring',
      'Bug fixes',
      'Priority support',
      'Monthly reports'
    ],
    deliveryTime: 'Ongoing (monthly)',
    image: '/images/maintenance.jpg',
    tags: ['maintenance', 'support', 'updates']
  },
  {
    name: 'E-commerce Solution',
    slug: 'ecommerce-solution',
    description: 'Complete e-commerce platform with payment integration, inventory management, and more.',
    fullDescription: 'Launch your online store with our comprehensive e-commerce solution. We build feature-rich platforms that handle everything from product management to secure payments.',
    price: 3999,
    category: 'development',
    features: [
      'Product catalog management',
      'Shopping cart & checkout',
      'Payment gateway integration',
      'Order management',
      'Customer accounts',
      'Admin dashboard'
    ],
    deliveryTime: '6-8 weeks',
    image: '/images/ecommerce.jpg',
    tags: ['ecommerce', 'shop', 'payments', 'stripe']
  },
  {
    name: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Cross-platform mobile application development for iOS and Android.',
    fullDescription: 'Reach your users on mobile with our app development services. We create native-quality apps using React Native that work seamlessly on both iOS and Android platforms.',
    price: 4999,
    category: 'development',
    features: [
      'Cross-platform development',
      'Native performance',
      'Push notifications',
      'Offline functionality',
      'App store deployment',
      'Maintenance & updates'
    ],
    deliveryTime: '8-12 weeks',
    image: '/images/mobile-app.jpg',
    tags: ['mobile', 'react-native', 'ios', 'android']
  }
];

const users = [
  {
    name: 'Admin User',
    email: 'admin@monochrome.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    name: 'Test User',
    email: 'user@test.com',
    password: 'test123',
    role: 'user'
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✓ Connected to MongoDB');

    // Clear existing data
    await Service.deleteMany();
    await User.deleteMany();
    console.log('✓ Cleared existing data');

    // Insert services
    await Service.insertMany(services);
    console.log(`✓ Inserted ${services.length} services`);

    // Insert users
    await User.insertMany(users);
    console.log(`✓ Inserted ${users.length} users`);

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ Database seeded successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\nTest Credentials:');
    console.log('Admin: admin@monochrome.com / admin123');
    console.log('User:  user@test.com / test123');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    process.exit(0);
  } catch (error) {
    console.error('✗ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
