import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    ai,
    webracik,
    webklinik,
    makeover,
    webjasahub,
    webmi,
    webgame,
    futsal,
    php,
    mysql,
    spline,
    canva,
    flutter,
    racikkopi,
    smk9,
    server,
    klinik,
    undangan,
    jasahub,
    faceart,
    hmps,
    shopp,
    taisotalk,
    game,
    webundangan,
    sertifikat_jwd,
    sertifikat_lks,
    sertifikat_tekno,

} from "../assets";

export const navLinks = [{
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

const services = [{
        title: "Junior Network",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Desain Grafis",
        icon: creator,
    },
];

const technologies = [{
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
        name: "PHP",
        icon: php,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "database MYSQL",
        icon: mysql,
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
        name: "Spline",
        icon: spline,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "Canva",
        icon: canva,
    },

];

const experiences = [{
        title: "Junior Network & System Engineer",
        company_name: "Vocational School (TKJ)",
        icon: smk9,
        iconBg: "#383E56",
        date: "July 2020 – May 2023",
        points: [
            "Worked as a Network Administrator in a team project, managing and maintaining teacher user data across the North Sumatra region.",
            "Completed an internship (PKL) at SAMSAT, assisting with vehicle registration document (BPKB) printing and administration.",
            "Represented the school in the Lomba Kompetensi Siswa (LKS) as part of a team project.",
            "Built and configured a client-server network system with 10 clients using Debian 10 ISO deployed via VirtualBox.",
            "Collaborated closely with team members to ensure system stability, connectivity, and proper network configuration.",
        ],
    },
    {
        title: "PHP Native Project",
        company_name: "Racik Kopi",
        icon: racikkopi,
        iconBg: "#E6DEDD",
        date: "Des 2024 - Feb 2025",
        points: [
            "Worked closely with the Racik Kopi team to understand operational needs and translate them into a functional web application.",
            "Collaborated with waiters and internal staff to design a system that minimized order errors and improved service accuracy.",
            "Participated in planning, development, and testing phases to ensure the system met real-world business requirements.",
            "Maintained clear communication within the team to deliver a structured and reliable solution using PHP Native and MySQL.",
        ],
    },
    {
        title: "Web & Mobile Application Developer",
        company_name: "Project-Based Development",
        icon: server,
        iconBg: "#383E56",
        date: "Feb 2025 - May 2025",
        points: [
            "Worked on two web and mobile application projects within a short-term development period.",
            "Developed a futsal field booking web application using native PHP with an Oracle database and a client-server architecture.",
            "Built a Flutter mobile application for 'Recruitment Organizing Polmed' to help students explore and register for UKM organizations.",
            "Collaborated in planning and development to deliver user-focused solutions that addressed real-world needs.",
        ],

    },
    {
        title: "Backend Web Developer",
        company_name: "Klinik Mariana",
        icon: klinik,
        iconBg: "#E6DEDD",
        date: "16 May 2025 - 25 May 2025",
        points: [
            "Developed a clinic web application as a short-term project using Node.js and Express.js.",
            "Implemented backend logic to manage patient data, appointment records, and basic clinic workflows.",
            "Designed RESTful APIs to support communication between the client interface and the server.",
            "Worked with an SQL-based database to store and retrieve structured medical-related data securely.",
            "Collaborated with the project team to define requirements and deliver a functional solution within a tight timeline.",
            "Handled backend development while maintaining a clean and structured codebase.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Winner & Yanti",
        icon: undangan,
        iconBg: "#383E56",
        date: "1 Agus 2025 - 5 Agus 2025",
        points: [
            "Developed a responsive digital invitation website using HTML, CSS, and JavaScript.",
            "Designed a mobile-first layout to ensure compatibility across various devices.",
            "Integrated EmailJS to enable guests to send messages directly to the couple’s email.",
            "Focused on clean, user-friendly interfaces and smooth user experience.",
        ],
    },
    {
        title: "Full Stack Web Developer",
        company_name: "Jasa Hub",
        icon: jasahub,
        iconBg: "#E6DEDD",
        date: "10 October 2025 - 18 October 2025",
        points: [
            "Developed a modern web application using React, Vite, and Tailwind CSS for a fast and responsive user interface.",
            "Built backend services using Node.js and Express.js with MongoDB for data management and API handling.",
            "Integrated animations and interactive elements using AOS and 3D content to enhance user experience.",
            "Collaborated within a team to plan, develop, and deliver a scalable full-stack solution within a tight timeline.",
        ],
    },
    {
        title: "Full Stack AI Web Developer",
        company_name: "Face Art",
        icon: faceart,
        iconBg: "#383E56",
        date: "18 October 2025 - 20 October 2025",
        points: [
            "Developed a full-stack web application independently using React.js and Tailwind CSS for a responsive and interactive interface.",
            "Built a Python-based backend integrated with TensorFlow to detect and process human facial coordinates.",
            "Implemented real-time data flow between frontend and backend without a traditional database architecture.",
            "Designed and delivered an AI-powered visual experience combining web technologies and computer vision within a short development timeline.",
        ],
    },
    {
        title: "Full Stack Web Developer",
        company_name: "HMPS MI",
        icon: hmps,
        iconBg: "#E6DEDD",
        date: "1 Nov 2025 - 7 Nov 2025",
        points: [
            "Developed a company-style organizational website using React, Vite, and Tailwind CSS with modern UI and animations.",
            "Integrated interactive visuals and animations using AOS, Three.js, and JavaScript animation libraries.",
            "Built backend services with Node.js and Express.js, using MongoDB for structured data management.",
            "Implemented real-time data synchronization using Socket.IO to ensure live and dynamic content updates.",
        ],
    },
    {
        title: "Full Stack Web Developer",
        company_name: "Raharpa Shopp",
        icon: shopp,
        iconBg: "#383E56",
        date: "17 Nov 2025 - 29 Nov 2025",
        points: [
            "Developed a real-time chat web application using React, Vite, and Tailwind CSS with smooth animations and modern UI.",
            "Implemented interactive user experiences with JavaScript animation libraries and AOS.",
            "Built backend services using Node.js and Express.js with MongoDB for message and user data management.",
            "Enabled real-time communication between users using Socket.IO for instant message delivery.",
        ],
    },
    {
        title: "Mobile Application Developer",
        company_name: "Taiso Talk",
        icon: taisotalk,
        iconBg: "#E6DEDD",
        date: "3 Dec 2025 - 16 Dec 2025",
        points: [
            "Developed a real-time mobile chat application using Flutter and Dart with a clean and responsive user interface.",
            "Implemented Firebase Firestore for real-time data synchronization and instant message updates.",
            "Integrated Cloudinary API for efficient media storage and file handling within the application.",
            "Designed a scalable real-time communication flow focused on performance, reliability, and user experience.",
        ],
    },
    {
        title: "Junior Game Developer",
        company_name: "Minesweeeper & Math Drive",
        icon: game,
        iconBg: "#383E56",
        date: "22 Dec 2025 - 4 Jan 2026",
        points: [
            "Developed a desktop Minesweeper game using native Java with JFrame to provide a graphical user interface.",
            "Implemented SQLite database integration to store and manage player data and game records.",
            "Built a responsive web-based game using native HTML, JavaScript, and Tailwind CSS.",
            "Enhanced user experience with JavaScript animation effects such as fade-in and fade-out for interactive visuals.",
        ],
    },


];

const testimonials = [{
        name: "Junior Web Devloper",
        image: sertifikat_jwd,
    },
    {

        name: "Lomba Kejuruan Siswa",
        image: sertifikat_lks,
    },
    {
        name: "Lomba Tekno Design",
        image: sertifikat_tekno,
    },
];

const projects = [{
        name: "Search Engine",
        description: "Web application that enables users to search and filter products dynamically using native PHP and CSS, showcasing structured server-side logic and data handling.",

        tags: [{
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "native",
                color: "pink-text-gradient",
            },
        ],
        image: ai,
        source_code_link: "https://github.com/bangpii/kendaraan.git",
    },

    {
        name: "Racik Kopi",
        description: "Web application that allows users to explore and manage coffee recipes, built using native PHP, CSS, and MySQL for dynamic data handling.",

        tags: [{
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "native",
                color: "pink-text-gradient",
            },
        ],
        image: webracik,
        source_code_link: "https://github.com/bangpii/RacikKopi.git",
    },

    {
        name: "Terminal Futsal",
        description: "Web based futsal booking system built using native PHP, CSS, and MySQL, allowing users to reserve fields, manage schedules, and view booking information online in real time.",

        tags: [{
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "native",
                color: "pink-text-gradient",
            },
        ],
        image: futsal,
        source_code_link: "hhttps://github.com/bangpii/Futsal.git",
    },

    {
        name: "Klinik Mariana",
        description: "Web-based clinic consultation system built using Node.js, Express, CSS, and SQL, enabling users to consult with doctors easily and access medical services online.",
        tags: [{
                name: "nodeJS",
                color: "blue-text-gradient",
            },
            {
                name: "sql",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: webklinik,
        source_code_link: "https://github.com/bangpii/Klinik.git",
    },

    {
        name: "Winner & Yanti",
        description: "A responsive wedding invitation website built using native HTML, CSS, and JavaScript, featuring guest message delivery via EmailJS directly to the couple’s email.",
        tags: [{
                name: "js",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "native",
                color: "pink-text-gradient",
            },
        ],
        image: webundangan,
        source_code_link: "https://github.com/bangpii/pernikahan.git",
    },

    {
        name: "Make Over",
        description: "Full-stack web application using React and Tailwind CSS with a Python and TensorFlow backend for human facial coordinate detection.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "python",
                color: "pink-text-gradient",
            },
        ],
        image: makeover,
        source_code_link: "https://github.com/bangpii/MakeOver.git",
    },

    {
        name: "Jasa Hubb",
        description: "Full-stack company profile website built with React and Tailwind CSS, powered by a Node.js, Express, and MongoDB backend, featuring animations, routing, and 3D Spline.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: webjasahub,
        source_code_link: "https://github.com/bangpii/JasaHub.git",
    },
    {
        name: "HMPS MI",
        description: "Full-stack organizational website built with React and Tailwind CSS, featuring 3D visuals, animations, and a Node.js, Express, MongoDB backend.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: webmi,
        source_code_link: "https://github.com/bangpii/baihaqiMI5A.git",
    },
    {
        name: "Math Drive",
        description: "An interactive math-based web game built using native JavaScript and Tailwind CDN, featuring smooth fade-in and fade-out animations for an engaging user experience.",
        tags: [{
                name: "js",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindCDN",
                color: "green-text-gradient",
            },
            {
                name: "native",
                color: "pink-text-gradient",
            },
        ],
        image: webgame,
        source_code_link: "https://github.com/bangpii/MathDrive.git",
    },
];

export {
    services,
    technologies,
    experiences,
    testimonials,
    projects
};