import {
    bajaj,
    persistent,
    hitesh,
    lagLlama,
    pathFinding,
    chatIO,
    poolBall,
    chexnet,
    placementPortal
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
        id: "projects",
        title: "Projects",
    },
    {
        id: "tech",
        title: "Skills"
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
            },
            {
                name: "C++",
            },
            {
                name: "JavaScript",
            },
            {
                name: "TypeScript"
            },
            {
                name: "Python"
            },
            {
                name: "Golang",
            },
            {
                name: "Bash"
            },
        ],
        color: "text-sky-500"
    },
    {
        name: "Frontend",
        tech: [
            { name: 'NextJS' }, { name: "ReactJS" }, { name: "Redux" }, { name: "Angular" }, { name: "ThreeJS" }, { name: "Tailwind CSS" }, { name: "Chakra UI" }, { name: "Material UI" }
        ],
        color: "text-[#FFBF00]"
    },
    {
        name: "Backend",
        tech: [
            { name: "NodeJS" }, { name: "Rest APIs" }, { name: "GraphQL" }, { name: "Spring Boot" }, { name: "Flask" }, { name: "Django" }, { name: "Socket.io" }, { name: "JWT" }
        ],
        color: "text-[#5BFF33]"
    },
    {
        name: "Databases",
        tech: [
            { name: "MySQL" }, { name: "MongoDB" }, { name: "PostgreSQL" }, { name: "Supabase" }, { name: "Elasticsearch" }
        ],
        color: "text-[#5233FF]"
    },
    {
        name: "Devops",
        tech: [
            { name: "CI/CD" }, { name: "Jenkins" }, { name: "Ansible" }, { name: "Terraform" }, { name: "Azure" }, { name: "AWS" }, { name: "Docker" }, { name: "Kubernetes" }, { name: "MiniKube" }
        ],
        color: "text-[#33FFE9]"
    },
    {
        name: "Machine Learning",
        tech: [
            { name: "Numpy" }, { name: "Keras" }, { name: "Pandas" }, { name: "PyTorch" }, { name: "Tensorflow" }, { name: "Neural Networks" }, { name: "RNN" }, { name: "CNN" }, { name: "LLM" }, { name: "Deep Learning" }, { name: "Data Analytics" }
        ],
        color: "text-[#EF1A3F]"
    },
    {
        name: "Game Development",
        tech: [
            { name: "Unreal Engine" }, { name: "3D Math" }, { name: "3D Computer Vision" }, { name: "3D Audio" }, { name: "3D Tracking" }, { name: "Win32 API" }, { name: "DirectX" }
        ],
        color: "text-[#EF1AE5]"
    }
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Bajaj Finserv",
        icon: bajaj,
        iconBg: "#383E56",
        date: "July 2022 - June 2023",
        points: [
            "Pioneered development of the Switch Loan Variant process, allowing a customer base of 50 million to change loan variants, revamping customer flexibility, satisfaction, and engagement by 70%.",
            "Took end-to-end responsibility for implementing the Increase Credit Line model, allowing customers to access Top-Up loans on existing loans.ICL is now live for over 50,000 customers and is projected to generate a revenue of $1.2 million.",
            "Designed and deployed an end-to-end ELK Stack API Monitoring system using PVCs and Kubernetes. The system improved overall API performance by 60%.",
            "Worked on Google Analytics and ClickStream part for EMI, HEMI, and SALPL Modules.",
        ],
    },
    {
        title: "Software Development Engineer Intern",
        company_name: "Persistent Systems",
        icon: persistent,
        iconBg: "#E6DEDD",
        date: "June 2021 - July 2021",
        points: [
            "Engineered an Angular/TypeScript-based web application exclusively for the Indian Army, enabling seamless online procurement from Army Shops and Canteens.",
            "Added functionality to display new product arrivals resulting in a 20% increase in customer engagement.",
            "Developed feature to select different stores and place orders from different stores using MapMyIndia API.",
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "I've had the privilege of collaborating with Shreyas Kulkarni at Bajaj Finserv. Shreyas possesses a remarkable blend of innovative thinking, rapid learning, and adept problem-solving skills. His ability to think outside the box consistently results in creative solutions that surpass expectations, while his quick adaptation to new technologies ensures he stays ahead in our ever-evolving industry.\n" +
            "Shreyas is undoubtedly a valuable asset to any team, and I wholeheartedly endorse him for his outstanding contributions and capabilities.",
        name: "Hitesh Solanki",
        designation: "Senior Manager",
        company: "Bajaj Finserv",
        image: hitesh,
    },
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
            }
        ],
        image: lagLlama,
        source_code_link: "https://github.com/atharvajoshi10/quantized-lag-llama",
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
            }
        ],
        image: poolBall,
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
        live_project_link: "https://shreyas710.github.io/pathFindingVisualizer/"
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
        live_project_link: "https://chatapp-prod-70ef3a02f371.herokuapp.com/"
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
            }
        ],
        image: placementPortal,
        source_code_link: "https://github.com/sanketwadekar/career_fair_portal"
    },
];

export { technologies, experiences, testimonials, projects };