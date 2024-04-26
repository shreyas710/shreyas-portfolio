import {
    carrent,
    jobit,
    bajaj,
    persistent,
    tripguide,
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
            {name: 'NextJS'}, {name: "ReactJS"}, {name: "Redux"}, {name: "Angular"}, {name: "ThreeJS"}, {name: "Tailwind CSS"}, {name: "Chakra UI"}, {name: "Material UI"}
        ],
        color: "text-[#FFBF00]"
    },
    {
        name: "Backend",
        tech: [
            {name: "NodeJS"}, {name: "Rest APIs"}, {name: "GraphQL"}, {name: "Spring Boot"}, {name: "Flask"}, {name: "Django"}, {name: "Socket.io"}, {name: "JWT"}
        ],
        color: "text-[#5BFF33]"
    },
    {
        name: "Databases",
        tech: [
            {name: "MySQL"}, {name: "MongoDB"}, {name: "PostgreSQL"}, {name: "Supabase"}, {name: "Elasticsearch"}
        ],
        color: "text-[#5233FF]"
    },
    {
        name: "Devops",
        tech: [
            {name: "CI/CD"}, {name: "Jenkins"}, {name: "Ansible"}, {name: "Terraform"}, {name: "Azure"}, {name: "AWS"}, {name: "Docker"}, {name: "Kubernetes"}, {name: "MiniKube"}
        ],
        color: "text-[#33FFE9]"
    },
    {
        name: "Machine Learning",
        tech: [
            {name: "Numpy"}, {name: "Keras"}, {name: "Pandas"}, {name: "PyTorch"}, {name: "Tensorflow"}, {name: "Neural Networks"}, {name: "RNN"}, {name: "CNN"}, {name: "LLM"}, {name: "Deep Learning"}, {name: "Data Analytics"}
        ],
        color: "text-[#EF1A3F]"
    },
    {
        name: "Game Development",
        tech: [
            {name: "Unreal Engine"}, {name: "3D Math"}, {name: "3D Computer Vision"}, {name: "3D Audio"}, {name: "3D Tracking"}, {name: "Win32 API"}, {name: "DirectX"}
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
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
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
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
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
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export {technologies, experiences, testimonials, projects};