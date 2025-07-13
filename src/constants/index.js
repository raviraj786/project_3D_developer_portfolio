import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  med_user,
  medstown2,
  medstown3,
  medstown4,
   canulo,
  crm,
  munshijee,
  riya,
  transleter ,
  netflix

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
    {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2018 - Jan 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer / contract-based ",
    company_name: "Coginc System",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2022 - January 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Techprime",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "feb 2024 - March 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
     name: "Gyanendra Singh",
    designation: "CEO",
    company: "Coginc System",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
     "He takes ownership of every feature and delivers beyond expectations.",
    name: "medstown",
    designation: "CEO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Medstown - Medicine in 30 mins",
    description: `Built a real-time B2C healthcare app used by 10,000+ users to order medicine and track health status.
 •
 Enabled OTP login, push notifications, and geo-location pharmacy listings.
 •
 Offline-ready via Redux Toolkit & AsyncStorage; improved repeat user rate by 28%.`,
    tags: [
      {
        name: "react Native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: med_user,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.techprime.medstown",
  },
  {
    name: "Medstown - Store Partner App",
    description: `eveloped role-based system for stores to manage stock/orders; cut manual order entry by 90%.
 Integrated real-time order alerts, invoice generation, and prescription uploads.• Pharmacy login system with 
authentication and role-based access.
 Enabled image uploads for prescriptions....`,
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: medstown2,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.techprime.medstownpartner",
  },
  {
    name: "Medstown -Runner",
    description: `Built delivery-side logistics app with live location, OTP confirmation, and digital signature capture, reducing 
failed deliveries by 22%.
Earn more by delivering medicines to Online customers. We connect the orders to registered and authorized delivery partners for tasks.
....`,

    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: medstown3,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.techprime.medstownapp",
  },

  {
    name: "Medstown - Dashboard",
    description: `Created dashboard to manage pharmacies, orders, users, delivery – handling thousands of records daily.
 Added role-based filters, data export (CSV/PDF), and analytics, improving admin task speed by 50%.
 Integrated data visualization (orders, revenue, active users) with dynamic charts. 
Role-based access for super admin, pharmacy, and delivery accounts. Implemented filters, search, and export features 
for admin efficiency`,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: medstown4,
    source_code_link: "https://www.medstown.com/",
  },

  {
    name: "Canulo - Connecting Healthcare (Full-Stack) ",
    description: ` 
 Created a secure admin dashboard (React.js) for managing appointments, patients, doctors, and clinic data with 
role-based access control.
 Engineered secure REST APIs (Node.js + Express) with JWT and Firebase Auth supporting multi-provider login 
(email, phone).
 Integrated Cloudinary for file uploads and SendGrid for notifications; added revenue and booking analytics 
dashboards for admin.`,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: canulo,
    source_code_link: "https://canulo.com/",
  },

  {
    name: "Munshjee.com",
    description: ` 
    MUNSHIJEE MANAGEMENT SOLUTIONS PRIVATE LIMITED (CIN: U74140MP2016PTC035300) is a Private company incorporated on 28 Dec 2016. It is classified as Non-government company and is registered at Registrar of Companies, Gwalior. Its authorized share capital is Rs. 100000.00 and its paid up capital is Rs. 100000.00.
Munshijee helps startups, freelancers, and digital creators handle everything from GST and ITR filing to bookkeeping and trademark registration, all with expert CA support..`,
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Financial Services",
        color: "green-text-gradient",
      },
    ],
    image: munshijee,
    source_code_link: "https://munshijee.com/",
  },
{
  name: "Simple Portfolio",
  description: `A clean and responsive personal portfolio website built to showcase developer skills, projects, and contact information. Deployed with Netlify and styled using modern CSS frameworks.`,
  tags: [
    {
      name: "React.js",
      color: "blue-text-gradient",
    },
    {
      name: "CSS3",
      color: "green-text-gradient",
    },
    {
      name: "Netlify",
      color: "pink-text-gradient",
    },
  ],
  image: riya, // Make sure this is imported and exported
  source_code_link: "https://riyadodeja.netlify.app/",
},
{
  name: "Language Translator App",
  description: `A responsive language translator web application built using React.js. It allows users to translate text between multiple languages instantly. Deployed on Netlify with clean UI and smooth transitions.`,
  tags: [
    {
      name: "html",
      color: "blue-text-gradient",
    },
    {
      name: "CSS3",
      color: "green-text-gradient",
    },
    {
      name: "Netlify",
      color: "pink-text-gradient",
    },
  ],
  image: transleter, // make sure to import/export correctly
  source_code_link: "https://languagetransletor.netlify.app/",
},
{
  name: "Netflix-clone ",
  description: `A responsive Netflix UI clone built using HTML and CSS. This project replicates the look and feel of Netflix's homepage, including hero banners, content sections, and responsive layouts. Deployed on Netlify.`,
  tags: [
    {
      name: "html",
      color: "blue-text-gradient",
    },
    {
      name: "CSS3",
      color: "green-text-gradient",
    },
    {
      name: "Netlify",
      color: "pink-text-gradient",
    },
  ],
  image: netflix, // make sure to import/export correctly
  source_code_link: "https://willowy-axolotl-432dc9.netlify.app/",
}










];


export { services, technologies, experiences, testimonials, projects };
