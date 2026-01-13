// Portfolio Constants
export const links = {
  linkedinLink: "https://www.linkedin.com/in/shashi-shekhar-1a3a1a1a1a/",
  githubLink: "https://github.com/shashishekhar9932",
  instagramLink: "https://www.instagram.com/shashishekhar9932/"
};

export const skillImage = {};

export const projectsdata = [
  {
    id: 1,
    title: "CATrix",
    subtitle: "CAT Preparation Platform",
    description:
      "Backend-driven full-stack platform for CAT preparation featuring authentication, mock tests, performance analytics, and admin workflows. Designed REST APIs, relational data models, and complete test lifecycle handling with a production-ready architecture.",
    image: "https://via.placeholder.com/400x300?text=CATrix",
    techStack: ["Node.js", "Express", "PostgreSQL", "Prisma", "React", "TypeScript"],

    // Detailed Project Information
    why: "Built to address the lack of comprehensive, free CAT preparation platforms. Students needed an all-in-one solution for mock tests, performance tracking, and adaptive learning without expensive subscriptions.",
    when: "December 2024 - January 2025 (6 weeks)",
    how: "Migrated from Supabase to custom Express.js backend with PostgreSQL for full control. Implemented JWT authentication, designed 8-table relational schema with Prisma ORM, created 25 REST API endpoints, and built React frontend with Material-UI components.",

    techStackDetailed: {
      frontend: ["React 18", "TypeScript", "Redux Toolkit", "Material-UI", "Axios", "React Router v6"],
      backend: ["Node.js", "Express.js", "TypeScript", "Prisma ORM", "JWT", "bcrypt"],
      database: ["PostgreSQL", "8 normalized tables", "Relational schema"],
      devops: ["Vercel (Frontend)", "Render/Railway (Backend)", "GitHub Actions"]
    },

    features: [
      "User authentication with JWT (7-day expiration)",
      "Mock test creation and management",
      "Real-time test attempts with timer",
      "Performance analytics dashboard",
      "Admin panel for content management",
      "Question bank with multiple sections",
      "Progress tracking and review system",
      "College cutoff information"
    ],

    repositories: [
      { label: "Frontend Repository", url: "https://github.com/shashi9933/CATrix_frontend" },
      { label: "Backend Repository", url: "https://github.com/shashi9933/CATrix_backend" }
    ],

    websiteLink: null,

    futureScope: [
      "Spaced repetition algorithm for adaptive learning",
      "AI-powered question recommendations",
      "Video explanations for solutions",
      "Community discussion forums",
      "Mobile app (React Native)",
      "Gamification with badges and leaderboards",
      "Integration with payment gateway for premium features",
      "Advanced analytics with ML-based insights"
    ],

    downloadLink: null
  },
  {
    id: 2,
    title: "Dictovo",
    subtitle: "Vocabulary Building Application",
    description:
      "Full-stack vocabulary management application designed for exam preparation. Supports word storage, search, and retrieval with clean REST APIs and a responsive frontend integrated with backend services.",
    image: "https://via.placeholder.com/400x300?text=Dictovo",
    techStack: ["React", "Node.js", "Express", "MongoDB"],

    // Detailed Project Information
    why: "Created to help students build vocabulary systematically for competitive exams like GRE, CAT, and IELTS. Existing apps lacked features like PDF/image upload, custom word lists, and intelligent quiz systems.",
    when: "July 2024 - August 2024 (7 weeks)",
    how: "Migrated from Supabase to MongoDB for flexible schema. Built Express.js REST API with file upload (Multer), OCR (Tesseract.js), and PDF parsing. Implemented Google OAuth 2.0 alongside email/password authentication. Created responsive React UI with Tailwind CSS.",

    techStackDetailed: {
      frontend: ["React 18", "TypeScript", "Tailwind CSS 3", "React Router v6", "Axios", "React Hook Form", "React Hot Toast", "Lucide Icons"],
      backend: ["Node.js", "Express.js", "Mongoose", "JWT", "bcryptjs", "Multer", "Tesseract.js", "pdf-parse"],
      database: ["MongoDB Atlas", "2 collections (Users, Vocabulary)", "Indexed queries"],
      authentication: ["JWT tokens", "Google OAuth 2.0", "Password hashing"],
      devops: ["Vercel (Frontend)", "Render (Backend)", "MongoDB Atlas Cloud"]
    },

    features: [
      "Email/password and Google OAuth authentication",
      "Add words manually with meaning, examples, synonyms",
      "Upload PDF files for automatic word extraction",
      "Upload images with OCR text recognition",
      "Upload text files for bulk word import",
      "Smart quiz system with multiple choice questions",
      "Filter by status (learning, reviewing, mastered)",
      "Search and tag organization",
      "Progress tracking dashboard",
      "Responsive design for mobile and desktop"
    ],

    repositories: [
      { label: "Frontend Repository", url: "https://github.com/shashi9933/Dictovo_client" },
      { label: "Backend Repository", url: "https://github.com/shashi9933/Dictovo_server" }
    ],

    websiteLink: "https://dictovo-client.vercel.app/",

    futureScope: [
      "Offline mode with ServiceWorker",
      "Text-to-speech pronunciation guide",
      "Spaced repetition optimization",
      "Community word lists sharing",
      "Data export (CSV, PDF)",
      "Multi-language support (Hindi, Spanish, French)",
      "Mobile app (React Native)",
      "Gamification (badges, streaks, achievements)",
      "Collaborative learning features",
      "Integration with dictionary APIs for auto-definitions"
    ],

    downloadLink: null
  },
  {
    id: 5,
    title: "DataViz",
    subtitle: "Data Analysis & Visualization Platform",
    description:
      "Intelligent data analytics platform that automatically parses uploaded files (PDF/CSV), performs statistical analysis, and generates interactive visualizations. Built during internship to solve real-world data insight extraction challenges.",
    image: "https://via.placeholder.com/400x300?text=DataViz",
    techStack: ["React", "Node.js", "Express", "Chart.js", "Tailwind CSS"],

    // Detailed Project Information
    why: "Created during internship to solve the problem of manual data analysis. Users needed a tool to quickly upload data files and get instant insights without complex spreadsheet work or coding knowledge.",
    when: "June 2024 - July 2024 (Internship Project, 6 weeks)",
    how: "Built full-stack application with React frontend for interactive UI. Implemented CSV/PDF parsing on backend, statistical calculations, and Chart.js for visualizations. Added PDF report generation using html2canvas and jsPDF for downloadable insights.",

    techStackDetailed: {
      frontend: ["React.js", "Tailwind CSS", "Framer Motion", "Chart.js", "html2canvas", "jsPDF"],
      backend: ["Node.js", "Express.js", "CSV Parser", "PDF Parser"],
      dataProcessing: ["Statistical analysis", "Data validation", "Calculations engine"],
      visualization: ["Interactive charts", "Graphs", "Dashboard components"],
      devops: ["Vercel (Frontend)", "API testing", "Deployment automation"]
    },

    features: [
      "Upload PDF or CSV data files",
      "Automatic data parsing and validation",
      "Statistical analysis (mean, median, trends)",
      "Interactive visualizations (charts, graphs)",
      "Real-time data insights",
      "Downloadable PDF reports",
      "Clean, intuitive dashboard",
      "Responsive design for all devices",
      "Fast processing and rendering",
      "Error handling and data validation"
    ],

    repositories: [
      { label: "GitHub Repository", url: "https://github.com/shashishekhar9932/DataViz-Platform" }
    ],

    websiteLink: "https://insighto-client.vercel.app/",

    futureScope: [
      "Support for Excel and JSON file formats",
      "Advanced ML-based predictive analytics",
      "Custom chart builder with drag-and-drop",
      "Real-time collaborative analysis",
      "Data export in multiple formats",
      "Integration with Google Sheets and APIs",
      "Advanced filtering and querying",
      "Scheduled report generation",
      "Multi-user workspace support",
      "AI-powered insight recommendations"
    ],

    downloadLink: null
  },
  {
    id: 4,
    title: "SmartBundle",
    subtitle: "Role-Based Smart E-Commerce Platform",
    description:
      "Intelligent e-commerce platform featuring role-based product bundling using ML association rule mining. Automatically suggests optimized product bundles for YouTube Creators, Teachers, Students, and Professionals with bulk discounts.",
    image: "https://via.placeholder.com/400x300?text=SmartBundle",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "ML (Apriori Algorithm)"],

    // Detailed Project Information
    why: "Built to solve the problem of users buying products one-by-one across multiple websites. People waste time researching compatible products and miss out on bulk discounts. This platform provides ready-made, optimized bundles based on user roles.",
    when: "August 2024 - October 2024 (10 weeks)",
    how: "Implemented role-based user profiling (Creator, Teacher, Student, Professional). Used Apriori algorithm for association rule mining to identify frequently bought-together products. Built ML model analyzing support, confidence, and lift metrics to optimize bundles. Created dynamic pricing engine for bulk discounts.",

    techStackDetailed: {
      frontend: ["React.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
      backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
      database: ["MongoDB", "User profiles", "Product catalog", "Order history"],
      machineLearning: ["Apriori Algorithm", "Association Rule Mining", "Support/Confidence/Lift calculations", "Python (scikit-learn)"],
      businessLogic: ["Dynamic pricing", "Bundle optimization", "Discount engine", "Inventory management"]
    },

    features: [
      "Role-based user profiling (Creator, Teacher, Student, Pro)",
      "Smart product bundling using ML",
      "YouTube Creator bundles (mic, camera, lights, tripod)",
      "Teacher bundles (tablet, pen, webcam, whiteboard)",
      "Student bundles (laptop, lamp, headphones, accessories)",
      "Bulk discount pricing engine",
      "One-click checkout for entire bundles",
      "Personalized recommendations",
      "Budget-based bundle filtering",
      "Product compatibility checking",
      "Order tracking and management",
      "User reviews and ratings"
    ],

    repositories: [
      { label: "GitHub Repository", url: "https://github.com/shashishekhar9932/E-Commerce-Platform" }
    ],

    websiteLink: "https://appar-client.vercel.app/",

    futureScope: [
      "Skill-level bundles (Beginner/Intermediate/Pro)",
      "AI-powered bundle customization",
      "Real-time price comparison across platforms",
      "Subscription-based bundle updates",
      "Community-created bundle sharing",
      "AR product preview in bundles",
      "Wishlist and bundle saving",
      "Multi-vendor integration",
      "Advanced analytics dashboard for sellers",
      "Mobile app with bundle scanner",
      "Social proof and influencer bundles",
      "Seasonal and trending bundles"
    ],

    downloadLink: null
  },
  {
    id: 3,
    title: "StockSense",
    subtitle: "Stock Market Analysis Platform",
    description:
      "Comprehensive stock market analysis platform with real-time data fetching, technical indicators, ML-based predictions, and interactive visualizations. Features ensemble prediction models and SMS alerts.",
    image: "https://via.placeholder.com/400x300?text=StockSense",
    techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly", "yfinance", "Scikit-learn"],

    // Detailed Project Information
    why: "Developed to democratize stock market analysis by providing free, advanced technical analysis tools. Retail investors needed accessible ML-powered predictions without expensive Bloomberg terminals.",
    when: "September 2024 - November 2024 (10 weeks)",
    how: "Built with Streamlit for rapid prototyping. Integrated yfinance API for real-time stock data with smart caching. Implemented ensemble ML model combining linear regression, polynomial features, ARIMA time-series, and Fourier analysis. Created 40+ technical indicators using TA-Lib and custom algorithms. Added Twilio SMS alerts for price notifications.",

    techStackDetailed: {
      frontend: ["Streamlit", "Plotly", "Interactive charts", "Multi-page app"],
      backend: ["Python 3.9+", "yfinance API", "Twilio API", "Session state management"],
      dataProcessing: ["Pandas", "NumPy", "SciPy (FFT)", "Statsmodels (ARIMA)"],
      machineLearning: ["Scikit-learn", "Linear Regression", "Polynomial Features", "Time-series forecasting", "Ensemble methods"],
      visualization: ["Plotly", "Candlestick charts", "OHLC charts", "Technical indicators overlay"],
      deployment: ["Replit", "Streamlit Cloud", "Environment variables"]
    },

    features: [
      "Real-time stock data for NSE/BSE and global markets",
      "Interactive candlestick and OHLC charts",
      "40+ technical indicators (SMA, EMA, RSI, MACD, Bollinger Bands)",
      "Ensemble ML prediction (4 models combined)",
      "Confidence scoring for predictions",
      "SMS price alerts via Twilio",
      "Historical data analysis (1000+ days)",
      "Range selectors and time period filters",
      "Smart caching (15-min for prices, 24-hr for info)",
      "User-agent rotation to avoid rate limiting"
    ],

    repositories: [
      { label: "GitHub Repository", url: "https://github.com/shashi9933/stockedge" }
    ],

    websiteLink: "https://stockedgedot.streamlit.app/",

    futureScope: [
      "User authentication and portfolio tracking",
      "Backtesting framework for strategy validation",
      "Real-time WebSocket data streaming",
      "News sentiment analysis integration",
      "Options pricing calculator",
      "Portfolio optimization algorithms",
      "Social trading features",
      "Database for persistent alerts and trades",
      "Advanced charting (TradingView integration)",
      "Mobile app version",
      "Multi-timeframe analysis",
      "Automated trading signals"
    ],

    downloadLink: null
  }
];

export const programskills = [
  { id: 1, icon: 'javascript', name: 'JavaScript' },
  { id: 2, icon: 'python', name: 'Python' },
  { id: 3, icon: 'typescript', name: 'TypeScript' },
  { id: 4, icon: 'c', name: 'C' },
  { id: 5, icon: 'cplusplus', name: 'C++' },
  { id: 6, icon: 'java', name: 'Java' },
  { id: 7, icon: 'solidity', name: 'Solidity' }
];

export const databaseskills = [
  { id: 1, icon: 'mongodb', name: 'MongoDB' },
  { id: 2, icon: 'mysql', name: 'MySQL' },
  { id: 3, icon: 'postgres', name: 'PostgreSQL' },
  { id: 4, icon: 'prisma', name: 'Prisma ORM' }
];

export const webskills = [
  { id: 1, icon: 'react', name: 'React' },
  { id: 2, icon: 'node', name: 'Node.js' },
  { id: 3, icon: 'express', name: 'Express.js' },
  { id: 4, icon: 'redux', name: 'Redux Toolkit' },
  { id: 5, icon: 'materialui', name: 'Material-UI' },
  { id: 6, icon: 'tailwind', name: 'Tailwind CSS' },
  { id: 7, icon: 'html', name: 'HTML' },
  { id: 8, icon: 'css', name: 'CSS' },
  { id: 9, icon: 'streamlit', name: 'Streamlit' },
  { id: 10, icon: 'axios', name: 'Axios' },
  { id: 11, icon: 'jwt', name: 'JWT Auth' }
];

export const devops = [
  { id: 1, icon: 'docker', name: 'Docker' },
  { id: 2, icon: 'github', name: 'GitHub' },
  { id: 3, icon: 'vercel', name: 'Vercel' },
  { id: 4, icon: 'render', name: 'Render' },
  { id: 5, icon: 'railway', name: 'Railway' },
  { id: 6, icon: 'actions', name: 'GitHub Actions' }
];

export const machinelearning = [
  { id: 1, icon: 'tensorflow', name: 'TensorFlow' },
  { id: 2, icon: 'pytorch', name: 'PyTorch' },
  { id: 3, icon: 'scikit', name: 'Scikit-learn' },
  { id: 4, icon: 'pandas', name: 'Pandas' },
  { id: 5, icon: 'numpy', name: 'NumPy' },
  { id: 6, icon: 'plotly', name: 'Plotly' },
  { id: 7, icon: 'yfinance', name: 'yfinance' },
  { id: 8, icon: 'arima', name: 'ARIMA' }
];

export const aboutdetails = {
  name: "Shashi Shekhar",
  image: "./src/assets/profile-pic.png",
  resumeLink: "https://example.com/resume.pdf",
  tagline: "B.Tech CSE Student — Software Developer",
  description: "Aspiring and results-driven Web Developer specializing in MERN stack development, CI / CD implementation, and machine learning applications. Strong foundation in full-stack development, cloud deployment, and AI-driven solutions address real-world challenges. Proven ability to improve system performance, build scalable applications, and optimize workflows. Passionate about learning new technologies, improving user experience, and maintaining code quality standards. We are excited to contribute innovative solutions using cutting-edge tools while growing as a software engineer."
};

export const experiencedata = [
  {
    id: 1,
    title: "Web Development Intern",
    subtitle: "Ogma Conceptions",
    description: "Led development of a customer management system within a 4-member team, implementing agile methodology best practices. Engineered React.js UI components following modern design principles, increasing user engagement by 25%. Collaborated to optimize database queries and API endpoints, reducing response time by 40%.",
    image: "https://via.placeholder.com/300?text=Ogma",
    githubLink: "https://github.com/shashishekhar9932/Customer-Management-System"
  }
];

export const educationdata = [
  {
    id: 1,
    college: "Jawahar Navodaya Vidyalaya",
    university: "CBSE",
    course: "Secondary Education (10th)",
    specification: null,
    year: "2017",
    grade: "CGPA: 10"
  },
  {
    id: 2,
    college: "Jawahar Navodaya Vidyalaya",
    university: "CBSE",
    course: "Senior Secondary Education (12th)",
    specification: null,
    year: "2019",
    grade: "Percentage: 80%"
  },
  {
    id: 3,
    college: "Central University of Haryana",
    university: "Central University of Haryana",
    course: "B.Tech in Computer Science & Engineering",
    specification: null,
    year: "Expected July 2025",
    grade: "CGPA: 7.5"
  }
];

export const socialIcon = [
  {
    id: 1,
    href: links.linkedinLink,
    className: "linkedin social",
    icon: "linkedin",
    iconClass: "fa-bounce",
    label: "linkedin",
  },
  {
    id: 2,
    href: links.githubLink,
    className: "github social",
    icon: "github",
    iconClass: "fa-flip",
    label: "github",
  },
  {
    id: 3,
    href: links.instagramLink,
    className: "instagram social",
    icon: "instagram",
    iconClass: "fa-spin",
    label: "instagram",
  },
  {
    id: 4,
    href: "mailto:shashiabc9932@gmail.com",
    className: "gmail social",
    icon: "mail",
    iconClass: "fa-beat-fade",
    label: "gmail",
  }
];

export const headerdata = {
  image: "./images/avatar.png",
  name: "SHASHI SHEKHAR",
  typedarr: ["Learner", "Developer", "Software Engineer", "MERN Stack Developer", "Open Source Contributor"]
};
