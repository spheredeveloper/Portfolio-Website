import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  carrent,
  jobit,
  tripguide,
  threejs,
  kubernetes,
  ts,
  apis,
  Kube,
  python,
  java,
} from "../assets";
import a from "../assets/gene.jpeg";
import b from "../assets/o.jpeg";
import c from "../assets/sunthar.jpeg";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "about",
    title: "Resume",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Technical Writter",
    icon: backend,
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
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: Kube,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript.",
      "Implemented modern frontend frameworks such as React to enhance user experience.",
      "Collaborated with UX/UI designers to bring designs to life and ensure pixel-perfect implementation.",
      "Optimized web applications for speed and performance to provide a smooth user experience.",
    ],
  },
  {
    title: "Intercultural Mentor",
    company_name: "Oracus ng",
    icon: starbucks,
    iconBg: "#E6DEDD",
    points: [
      "Designed and developed scalable backend APIs using Node.js and Express.",
      "Implemented database schemas and queries, ensuring data integrity and security.",
      "Integrated third-party APIs and services to enhance application functionality.",
      "Performed code reviews and participated in the development lifecycle.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Oracus ng",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining frontend web applications using React.js and Redux.",
      "Designing and implementing backend APIs using Node.js and Express.",
      "Creating and managing databases using MongoDB and MySQL.",
      "Collaborating with cross-functional teams to deliver end-to-end solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Utkarsh was a reliable and consciences student worker with the ability to learn and interact with our clients on a professional level and a strong contributor as IT consultant with IT ,academic, professional, and soft skills.",
    name: "Gene Bollman",
    designation: "IT Support Specialist 3",
    company: "Penn State Berks",
    image: a,
  },
  {
    testimonial:
      "Demonstrated responsibility and professionalism excellence in being the intercultural mentor for new international students at Penn State Berks. Organized tech workshops for students and was able to manage time and resources effectively.",
    name: "Sharon Pitterson-Ogaldez",
    designation: "Ex Coordinator of Diversity and International Programs",
    company: "Penn State Berks",
    image: b,
  },
  {
    testimonial:
      "Demonstrated outstanding skills in Django, Django Rest Framework, React, Next.js, GitLab CI/CD, Tailwind CSS, and Docker for completing a full-stack monolith to microservices transition project at IIT Bombay.",
    name: "Prof. Premakumar Sunthar",
    designation: "Head, Application Software Center",
    company: "Indian Institute of Technology, Bombay",
    image: c,
  },
];

const projects = [
  {
    name: "JBOD Manipulation using C.",
    description:
      "Write a program in C to iterate through a 1MB JBOD split into disks and blocks and copy the data into a user provided buffer.",
    tags: [
      {
        name: "C",
        color: "gray-text-gradient",
      },
      {
        name: "Linux",
        color: "green-text-gradient",
      },
      {
        name: "makefile",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/UDogg/CMPSC311",
  },
  {
    name: "Whack-A-Mole",
    description:
      "Write a program in Python to create a basic Whack-A-Mole game including GUI using pip and pygame packages.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      {
        name: "random",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/UDogg/Whack-A-Mole",
  },
  {
    name: "Django CRM",
    description:
      "This is a high level customer relationship manager created using Django",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/UDogg/djanproj",
  },
  {
    name: "Kubernetes Deployment",
    description: "This 3D website was deployed using Kubernetes",
    tags: [
      {
        name: "Shell",
        color: "blue-text-gradient",
      },
      {
        name: "Linux",
        color: "green-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "pink-text-gradient",
      },
    ],
    image: kubernetes,
    source_code_link: "https://github.com/UDogg/threejs",
  },
  {
    name: "Learning Prisma",
    description: "This is made using TypeScript and Prisma",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: ts,
    source_code_link: "https://github.com/UDogg/Prisma",
  },
  {
    name: "qApply backend(testing) and frontend",
    description:
      "I learned how to use Django Rest Framework and Test-Driven-Development concepts.I also learned how to catch APIs, resolve CORS errors and dynamically call APIs using Next.js",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "Next.js",
        color: "red-text-gradient",
      },
    ],
    image: apis,
    source_code_link: "https://github.com/UDogg/qapply-frontend",
  },
];

export { services, technologies, experiences, testimonials, projects };
