import {
    bajaj,
    persistent,
    hitesh,
    lagLlama,
    pathFinding,
    chatIO,
    poolBall,
    chexnet,
    placementPortal,
    sara,
    usc
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
        title: "Software Development Engineer Intern",
        company_name: "SARA Technology Inc.",
        icon: sara,
        iconBg: "#383E56",
        date: "June 2024 - Present",
        points: [
            "Implemented a React Native application using AWS Amplify Gen 2 to develop a speech therapy app for children.",
            "Added user authentication and authorization using AWS Amplify Cognito User Pool, allowing efficient sign-up and sign-in without a backend service. Used DynamoDB to store user-related information.",
            "Researched LLMs to recognize children’s sounds for various phonetics. Integrated it with the app.",
        ],
    },
    {
        title: "Research Assistant",
        company_name: "University of Southern California",
        icon: usc,
        iconBg: "#383E56",
        date: "June 2024 - Present",
        points: [
            "Collaborated with Prof. Babak Boloury to develop a specialized CAD application using WPF C#, focused on replicating the Sketcher component of FreeCAD.",
            "Engineered the application to include advanced functionalities like Center of Momentum and Moment of Inertia calculations.",
            "Achieved significant optimization by reducing the application size from 3 GB to 500 MB, enhancing efficiency and user accessibility.",
        ],
    },
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
    },
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
        live_project_link:
            "https://shreyas710.github.io/pathFindingVisualizer/",
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
