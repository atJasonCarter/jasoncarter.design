const deChatCover = '/imgs/DE-chat-cover.png';
const ascentDashboardCover = '/imgs/Ascent-Dashboard-cover.png';
const rtActivitiesCover = '/imgs/RT-Activities-cover.png';
const tdDatavizCover = '/imgs/TD-dataviz-cover.png';
const heliosReviewsCover = '/imgs/Helios-reviews-cover.png';

const rawItems = [
  {
    id: '1',
    name: 'Discovery Education',
    imageUrl: deChatCover,
    description: 'Empowering teachers to find the right content for their lessons with a powerful, intuitive chat interface built on top of Discovery Education’s vast library of educational resources.',
    Date: 'EdTech LLM',
    company: 'Discovery Education'  ,
    divider:'∙',
    caseStudyFile: '/case-studies/1.html',  
    year: '2025',
    category: 'Education',
    tag: 'AI ∙ Chat Interfaces ∙ LLMs ∙ Tagging Systems'
  },
  {
    id: '2',
    name: 'Ascent Global Logistics',
    imageUrl: ascentDashboardCover,
    description: 'A flexible dashboard solution for Ascent Global Logistics, designed to adapt to various user roles and preferences.',
    Date: 'Dashboard',
    company: 'Ascent Global Logistics',
    divider:'∙',   
    caseStudyFile: '/case-studies/2.html',
    year: '2020',
    category: 'Logistics',
    tag:'Dashboards'
    
  },
  {
    id: '3',
    name: 'Rocket Travel',
    imageUrl: rtActivitiesCover,
    description: 'A loveable, simple page for finding and booking the next thing to do on your vacation. ',
    Date: 'Activity Selection',
    company: 'Rocket Travel',
    divider:'∙',
    caseStudyFile: '/case-studies/3.html',
    year: '2022',
    category: 'Travel',
    tag: 'Data Organization ∙ Maps ∙ Pricing',
    hidden: true,
  },
  {
    id: '4',
    name: 'TrueData',
    imageUrl: tdDatavizCover,
    description: 'Enabling customers to take action based off our customizable data visualization widgets I designed, built and shipped while at TrueData.',
    Date: 'Actionable Analytics',
    company: 'TrueData',
    divider:'∙',
    caseStudyFile: '/case-studies/4.html',
    year: '2018',
    category: 'Advertising Tech',
    tag: 'Data Visualization',
  },
  {
    id: '5',
    name: 'Helios',
    imageUrl: heliosReviewsCover,
    description: 'A 0 → 1 performance review dashboard and system for Helios, an HR platform, designed to make reviews useful instead of a yearly chore.',
    Date: 'Performance Reviews',
    company: 'Helios',
    divider:'∙',
    caseStudyFile: '/case-studies/5.html',
    year: '2026',
    category: 'HR Tech',
    tag: 'Workflows ∙ Forms ∙ Feedback',
  }
];

const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// URL slug = company + project, e.g. /item/helios-performance-reviews
const items = rawItems.map((it) => ({ ...it, slug: slugify(`${it.company} ${it.Date}`) }));

export default items;