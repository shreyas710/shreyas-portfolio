import {
  bajaj,
  hitesh,
  lagLlama,
  pathFinding,
  chatIO,
  poolBall,
  chexnet,
  placementPortal,
  sara,
  usc,
  weiji,
  fabric,
  matthew
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
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "Programming Languages",
    tech: [
      {
        name: "C",
        width: "100%",
      },
      {
        name: "C++",
        width: "100%",
      },
      {
        name: "JavaScript",
        width: "100%",
      },
      {
        name: "TypeScript",
        width: "100%",
      },
      {
        name: "Python",
        width: "80%",
      },
      {
        name: "Golang",
        width: "100%",
      },
      {
        name: "Bash",
        width: "100%",
      },
    ],
    color: "text-sky-500",
  },
  {
    name: "Frontend",
    tech: [
      {
        name: "NextJS",
        width: "100%",
      },
      {
        name: "ReactJS",
        width: "100%",
      },
      {
        name: "Redux",
        width: "100%",
      },
      {
        name: "Angular",
        width: "100%",
      },
      {
        name: "ThreeJS",
        width: "60%",
      },
      {
        name: "Tailwind CSS",
        width: "100%",
      },
      {
        name: "Chakra UI",
        width: "100%",
      },
      {
        name: "Material UI",
        width: "100%",
      },
    ],
    color: "text-[#FFBF00]",
  },
  {
    name: "Backend",
    tech: [
      {
        name: "NodeJS",
        width: "100%",
      },
      {
        name: "Rest APIs",
        width: "100%",
      },
      {
        name: "GraphQL",
        width: "80%",
      },
      {
        name: "Spring Boot",
        width: "80%",
      },
      {
        name: "Flask",
        width: "50%",
      },
      {
        name: "Django",
        width: "50%",
      },
      {
        name: "Socket.io",
        width: "100%",
      },
      {
        name: "JWT",
        width: "100%",
      },
    ],
    color: "text-[#5BFF33]",
  },
  {
    name: "Databases",
    tech: [
      {
        name: "MySQL",
        width: "100%",
      },
      {
        name: "MongoDB",
        width: "100%",
      },
      {
        name: "PostgreSQL",
        width: "100%",
      },
      {
        name: "Supabase",
        width: "100%",
      },
      {
        name: "Elasticsearch",
        width: "100%",
      },
    ],
    color: "text-[#5233FF]",
  },
  {
    name: "Devops",
    tech: [
      {
        name: "CI/CD",
        width: "80%",
      },
      {
        name: "Jenkins",
        width: "80%",
      },
      {
        name: "Ansible",
        width: "80%",
      },
      {
        name: "Terraform",
        width: "100%",
      },
      {
        name: "Azure",
        width: "100%",
      },
      {
        name: "AWS",
        width: "100%",
      },
      {
        name: "Docker",
        width: "100%",
      },
      {
        name: "Kubernetes",
        width: "100%",
      },
      {
        name: "MiniKube",
        width: "100%",
      },
    ],
    color: "text-[#33FFE9]",
  },
  {
    name: "Machine Learning",
    tech: [
      {
        name: "Numpy",
        width: "100%",
      },
      {
        name: "Keras",
        width: "60%",
      },
      {
        name: "Pandas",
        width: "100%",
      },
      {
        name: "PyTorch",
        width: "60%",
      },
      {
        name: "Tensorflow",
        width: "60%",
      },
      {
        name: "Neural Networks",
        width: "100%",
      },
      {
        name: "RNN",
        width: "100%",
      },
      {
        name: "CNN",
        width: "100%",
      },
      {
        name: "LLM",
        width: "100%",
      },
      {
        name: "Deep Learning",
        width: "100%",
      },
      {
        name: "Data Analytics",
        width: "100%",
      },
    ],
    color: "text-[#EF1A3F]",
  },
  {
    name: "Game Development",
    tech: [
      {
        name: "Unreal Engine",
        width: "50%",
      },
      {
        name: "3D Math",
        width: "100%",
      },
      {
        name: "3D Computer Vision",
        width: "50%",
      },
      {
        name: "3D Audio",
        width: "50%",
      },
      {
        name: "3D Tracking",
        width: "50%",
      },
      {
        name: "Win32 API",
        width: "50%",
      },
      {
        name: "DirectX",
        width: "50%",
      },
    ],
    color: "text-[#EF1AE5]",
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "SARA Technology Inc.",
    icon: sara,
    iconBg: "#383E56",
    date: "June 2025 - Present",
    points: [
      "Spearheaded state-machine game flow, cutting bug reports by 40% and streamlining transitions across 10+ therapy levels.",
      "Built scalable AWS Lambda services to manage 5K+ children’s voice recordings with less than 100ms latency.",
      "Executed DynamoDB stream triggers to offload statistics computations, decreasing processing time from 5s to 30ms.",
      "Skills: React, Expo, GraphQL, AWS Amplify Gen2, DynamoDB, AWS."
    ],
  },
  {
    title: "Backend Engineer",
    company_name: "Fabric",
    icon: fabric,
    iconBg: "#383E56",
    date: "February 2025 - May 2025",
    points: [
      "Architected real-time analytics pipelines using AWS Step Functions, processing 100K+ telemetry records/day.",
      "Combined Twitter Activity API with Dockerized AWS Lambdas, enabling sub-1ms real-time data relay.",
      "Wrote GitHub Actions & CloudFormation CI/CD pipelines, collaborating with DevOps to reduce deployment time by 60%.",
      "Skills: AWS, Python, CI/CD, Git, Node.js."
    ],
  },
  {
    title: "Graduate Teaching Assistant",
    company_name: "University of Southern California. CSCI 522: Game Engine Development",
    icon: usc,
    iconBg: "#383E56",
    date: "September 2024 - December 2024",
    points: [
      "Mentored 70+ grad students on advanced C++ concepts, boosting assignment performance by 25%.",
      "Created 8+ custom tutorial docs and debug walkthroughs; hosted weekly office hours.",
      "Skills: C, C++, GDB, Python, Maya, Multithreading, GPU."
    ],
  },
  {
    title: "Graduate Research Assistant",
    company_name: "University of Southern California",
    icon: usc,
    iconBg: "#383E56",
    date: "June 2024 - September 2024",
    points: [
      "Built CAD application using WPF C#, replicating FreeCAD Sketcher component.",
      "Coded functionalities Center of Momentum & Moment of Inertia and brought down application size to 500 MB.",
      "Skills: C#, WPF, .NET, FreeCAD.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "SARA Technology Inc.",
    icon: sara,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Engineered React Native app for speech therapy, partnering with designers and QA with 99.8% crash-free sessions.",
      "Streamlined over 1K+ weekly media interactions, cutting TAT by 50% and significantly improving delivery accuracy.",
      "Architected scalable Recoil state management across 15+ screens, accelerating team feature delivery velocity by 40%.",
      "Skills: React, Recoil, AWS Amplify Gen2, GraphQL, DynamoDB."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Bajaj Finserv",
    icon: bajaj,
    iconBg: "#383E56",
    date: "July 2022 - June 2023",
    points: [
      "Formulated customer-facing Angular/Spring Boot modules for 50K+ users, driving $500K+ in revenue.",
      "Led backend development for SLV module, improving engagement by 70% through feature expansion (Jul 2022 – Jun 2023).",
      "Fostered dashboards using ELK stack; collaborated with analytics and product teams to cut down bounce rate by 18%.",
      "Skills: Java, Spring Boot, Kafka, Docker, ELK, AWS, PostgreSQL, Azure."
    ],
  },
];

const testimonials = [
  {
    testimonial: "I had the pleasure of working with Shreyas while getting a critical project off the ground. From the start, he demonstrated remarkable adaptability, quickly mastering the nuances of our serverless AWS infrastructure and contributing critical logic to our systems. He consistently produced high quality work, while demonstrating a high technical aptitude and meticulous attention to detail. Shreyas was a key player on our team, and I would highly recommend him to any organization looking for a developer who can thrive in complex environments and consistently deliver exceptional results.",
    name: "Matthew Aragaw",
    designation: "Co-Founder and CTO",
    company: "Fabric",
    image: matthew,
  },
  {
    testimonial: "I had the privilege of working alongside Shreyas during his summer internship at Sara, where he skillfully handled full-stack development of our core pages, using technologies such as React Native, Expo, and AWS Amplify.\n" +
      "Shreyas quickly adapted to our tech stack, efficiently mastering user data models and React context to enhance the functionality and user experience of our applications. His ability to identify and resolve intricate issues, showcased his meticulous attention to detail and commitment to code quality.\n" +
      "Furthermore, Shreyas demonstrated an exceptional ability to troubleshoot and resolve challenging bugs within AWS Amplify, ensuring robustness and reliability in our deployment processes. His project ownership was exemplary; he not only maintained and improved our codebase through clear abstraction and documentation updates but also managed full-cycle development—from system design to implementation—with minimal supervision.\n" +
      "Shreyas’s proactive approach and technical versatility significantly contributed to our projects. I am confident in his ability to bring the same level of expertise and initiative to any future role. I wholeheartedly recommend him for opportunities that require a dedicated and technically adept engineer.",
    name: "Weiji Huang",
    designation: "Machine Learning Engineer",
    company: "SARA Technology Inc.",
    image: weiji,
  },
  {
    testimonial:
      "I've had the privilege of collaborating with Shreyas Kulkarni at Bajaj Finserv. Shreyas possesses a remarkable blend of innovative thinking, rapid learning, and adept problem-solving skills. His ability to think outside the box consistently results in creative solutions that surpass expectations, while his quick adaptation to new technologies ensures he stays ahead in our ever-evolving industry.\n" +
      "Shreyas is undoubtedly a valuable asset to any team, and I wholeheartedly endorse him for his outstanding contributions and capabilities.",
    name: "Hitesh Solanki",
    designation: "Senior Manager",
    company: "Bajaj Finserv",
    image: hitesh,
  }
];

const projects = [
  {
    name: "Quantized Lag Llama",
    description:
      "Tweaked the GluonTS Lag Llama model to run it on CPU instead of GPU. Brought down the model size from 11.34 MB to 2.01 MB by converting float precision values in GluonTS to integer values.",
    tags: [
      {
        name: "Pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "GluonTS",
        color: "green-text-gradient",
      },
      {
        name: "Numpy",
        color: "pink-text-gradient",
      },
      {
        name: "Time Series",
        color: "blue-text-gradient",
      },
    ],
    image: lagLlama,
    source_code_link: "https://github.com/Naadborole/TimeSeriesForecasting",
  },
  {
    name: "Pool Ball Game",
    description:
      "A 3D Pool Ball Game developed using C++. Implemented the game using various physics concepts like collision detection using SAT and GJK, momentum conservation, and friction.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "OpenGL",
        color: "green-text-gradient",
      },
      {
        name: "DirectX",
        color: "pink-text-gradient",
      },
      {
        name: "Win32 API",
        color: "blue-text-gradient",
      },
    ],
    image: poolBall,
    source_code_link: "https://github.com/shreyas710/Pool-Ball-Game/",
  },
  {
    name: "Path Finding Visualizer",
    description:
      "Application to visualize path between start and end point using various Path finding algorithms like Dijkstra's, BFS, DFS, A*, and Bidirectional Swarm.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "React Context, Hooks",
        color: "pink-text-gradient",
      },
    ],
    image: pathFinding,
    source_code_link: "https://github.com/shreyas710/pathFindingVisualizer",
    live_project_link: "https://shreyas710.github.io/pathFindingVisualizer/",
  },
  {
    name: "Chat.io",
    description:
      "A chat application that enables real-time chat updation and real-time notifications using Socket.io. Implemented JWT Authentication for protecting user chats. Allowed faciity of creating group chats.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Mongoose",
        color: "pink-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "blue-text-gradient",
      },
    ],
    image: chatIO,
    source_code_link: "https://github.com/shreyas710/Chat.io",
    live_project_link: "https://chatapp-prod-70ef3a02f371.herokuapp.com/",
  },
  {
    name: "Summarized Report for Chest X-Rays",
    description:
      "A Streamlit application focused on generating summarized medical report for uploaded Chest X-Rays",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Keras",
        color: "pink-text-gradient",
      },
      {
        name: "Numpy",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: chexnet,
  },
  {
    name: "Career Fair Portal",
    description:
      "Web application for efficiently conducting the career fair process within a university. Students can streamline CV creation, manage job applications, and establish connections with recruiters through this portal.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: placementPortal,
    source_code_link: "https://github.com/sanketwadekar/career_fair_portal",
  },
];

export { technologies, experiences, testimonials, projects };
