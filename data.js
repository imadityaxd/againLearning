const people = [
  {
    "id": 1,
    "name": "Aditya Sharma",
    "age": 21,
    "isStudent": true,
    "skills": ["JavaScript", "Python", "Java"],
    "contact": {
      "email": "aditya@example.com",
      "phone": "+91-9876543210"
    },
    "projects": [
      {
        "title": "Language Translation Tool",
        "status": "Completed",
        "technologies": ["React", "Flask", "Gemini API"]
      },
      {
        "title": "CampusGigs",
        "status": "In Progress",
        "technologies": ["Node.js", "MongoDB", "Stripe API"]
      }
    ]
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "age": 23,
    "isStudent": false,
    "skills": ["UI/UX Design", "Figma", "Adobe XD"],
    "contact": {
      "email": "priya@example.com",
      "phone": "+91-9123456789"
    },
    "projects": [
      {
        "title": "E-Commerce App",
        "status": "Completed",
        "technologies": ["Flutter", "Firebase"]
      }
    ]
  },
  {
    "id": 3,
    "name": "Rohit Kumar",
    "age": 22,
    "isStudent": true,
    "skills": ["C++", "Data Structures", "Competitive Programming"],
    "contact": {
      "email": "rohit@example.com",
      "phone": "+91-9988776655"
    },
    "projects": [
      {
        "title": "Online Judge Platform",
        "status": "In Progress",
        "technologies": ["Django", "PostgreSQL"]
      }
    ]
  },
  {
    "id": 4,
    "name": "Ananya Singh",
    "age": 24,
    "isStudent": false,
    "skills": ["Project Management", "Scrum", "Agile"],
    "contact": {
      "email": "ananya@example.com",
      "phone": "+91-9098765432"
    },
    "projects": [
      {
        "title": "Team Collaboration Tool",
        "status": "Completed",
        "technologies": ["React", "Node.js", "MySQL"]
      }
    ]
  },
  {
    "id": 5,
    "name": "Vikram Patel",
    "age": 25,
    "isStudent": false,
    "skills": ["DevOps", "AWS", "Docker"],
    "contact": {
      "email": "vikram@example.com",
      "phone": "+91-9345678901"
    },
    "projects": [
      {
        "title": "CI/CD Automation",
        "status": "Completed",
        "technologies": ["Jenkins", "Kubernetes"]
      }
    ]
  },
  {
    "id": 6,
    "name": "Neha Gupta",
    "age": 20,
    "isStudent": true,
    "skills": ["HTML", "CSS", "JavaScript"],
    "contact": {
      "email": "neha@example.com",
      "phone": "+91-9012345678"
    },
    "projects": [
      {
        "title": "Portfolio Website",
        "status": "Completed",
        "technologies": ["HTML", "CSS", "JavaScript"]
      }
    ]
  },
  {
    "id": 7,
    "name": "Sahil Mehta",
    "age": 26,
    "isStudent": false,
    "skills": ["Python", "Machine Learning", "Data Science"],
    "contact": {
      "email": "sahil@example.com",
      "phone": "+91-9876012345"
    },
    "projects": [
      {
        "title": "Stock Price Predictor",
        "status": "Completed",
        "technologies": ["Python", "TensorFlow", "Pandas"]
      }
    ]
  },
  {
    "id": 8,
    "name": "Kriti Joshi",
    "age": 22,
    "isStudent": true,
    "skills": ["Java", "Spring Boot", "MySQL"],
    "contact": {
      "email": "kriti@example.com",
      "phone": "+91-9898989898"
    },
    "projects": [
      {
        "title": "Library Management System",
        "status": "Completed",
        "technologies": ["Java", "Spring Boot", "MySQL"]
      }
    ]
  },
  {
    "id": 9,
    "name": "Amit Yadav",
    "age": 27,
    "isStudent": false,
    "skills": ["C#", ".NET", "SQL Server"],
    "contact": {
      "email": "amit@example.com",
      "phone": "+91-9000112233"
    },
    "projects": [
      {
        "title": "Hospital Management System",
        "status": "Completed",
        "technologies": ["C#", ".NET", "SQL Server"]
      }
    ]
  },
  {
    "id": 10,
    "name": "Riya Kapoor",
    "age": 21,
    "isStudent": true,
    "skills": ["React", "Node.js", "MongoDB"],
    "contact": {
      "email": "riya@example.com",
      "phone": "+91-9234567890"
    },
    "projects": [
      {
        "title": "Social Media Clone",
        "status": "In Progress",
        "technologies": ["React", "Node.js", "MongoDB"]
      }
    ]
  },
  {
    "id": 11,
    "name": "Harsh Vardhan",
    "age": 23,
    "isStudent": false,
    "skills": ["Go", "Microservices", "Kubernetes"],
    "contact": {
      "email": "harsh@example.com",
      "phone": "+91-9112233445"
    },
    "projects": [
      {
        "title": "Real-Time Chat App",
        "status": "Completed",
        "technologies": ["Go", "WebSockets", "Docker"]
      }
    ]
  },
  {
    "id": 12,
    "name": "Sneha Rathi",
    "age": 24,
    "isStudent": false,
    "skills": ["Digital Marketing", "SEO", "Content Writing"],
    "contact": {
      "email": "sneha@example.com",
      "phone": "+91-9556677889"
    },
    "projects": [
      {
        "title": "SEO Optimization for E-Commerce",
        "status": "Completed",
        "technologies": ["Google Analytics", "Ahrefs"]
      }
    ]
  },
  {
    "id": 13,
    "name": "Yash Agarwal",
    "age": 20,
    "isStudent": true,
    "skills": ["Python", "Flask", "SQLite"],
    "contact": {
      "email": "yash@example.com",
      "phone": "+91-9887766554"
    },
    "projects": [
      {
        "title": "Expense Tracker",
        "status": "Completed",
        "technologies": ["Python", "Flask", "SQLite"]
      }
    ]
  },
  {
    "id": 14,
    "name": "Ishita Malhotra",
    "age": 22,
    "isStudent": true,
    "skills": ["Angular", "TypeScript", "Firebase"],
    "contact": {
      "email": "ishita@example.com",
      "phone": "+91-9344556677"
    },
    "projects": [
      {
        "title": "Event Management App",
        "status": "Completed",
        "technologies": ["Angular", "TypeScript", "Firebase"]
      }
    ]
  },
  {
    "id": 15,
    "name": "Manish Tiwari",
    "age": 28,
    "isStudent": false,
    "skills": ["PHP", "Laravel", "MySQL"],
    "contact": {
      "email": "manish@example.com",
      "phone": "+91-9445566778"
    },
    "projects": [
      {
        "title": "Online Food Ordering System",
        "status": "Completed",
        "technologies": ["PHP", "Laravel", "MySQL"]
      }
    ]
  },
  {
    "id": 16,
    "name": "Divya Nair",
    "age": 25,
    "isStudent": false,
    "skills": ["R", "Data Visualization", "Statistics"],
    "contact": {
      "email": "divya@example.com",
      "phone": "+91-9881122334"
    },
    "projects": [
      {
        "title": "Customer Churn Analysis",
        "status": "Completed",
        "technologies": ["R", "ggplot2", "Shiny"]
      }
    ]
  },
  {
    "id": 17,
    "name": "Kunal Sethi",
    "age": 19,
    "isStudent": true,
    "skills": ["JavaScript", "Vue.js", "Tailwind CSS"],
    "contact": {
      "email": "kunal@example.com",
      "phone": "+91-9778899001"
    },
    "projects": [
      {
        "title": "Task Management App",
        "status": "In Progress",
        "technologies": ["Vue.js", "Tailwind CSS", "Firebase"]
      }
    ]
  },
  {
    "id": 18,
    "name": "Tanya Bhatt",
    "age": 23,
    "isStudent": false,
    "skills": ["Python", "NLP", "AI Chatbots"],
    "contact": {
      "email": "tanya@example.com",
      "phone": "+91-9122233344"
    },
    "projects": [
      {
        "title": "Customer Support Chatbot",
        "status": "Completed",
        "technologies": ["Python", "Rasa", "Dialogflow"]
      }
    ]
  },
  {
    "id": 19,
    "name": "Rajeev Ranjan",
    "age": 26,
    "isStudent": false,
    "skills": ["Blockchain", "Solidity", "Ethereum"],
    "contact": {
      "email": "rajeev@example.com",
      "phone": "+91-9344667788"
    },
    "projects": [
      {
        "title": "Decentralized Voting System",
        "status": "Completed",
        "technologies": ["Solidity", "Ethereum", "Web3.js"]
      }
    ]
  },
  {
    "id": 20,
    "name": "Meera Chauhan",
    "age": 21,
    "isStudent": true,
    "skills": ["Swift", "iOS Development", "UI Design"],
    "contact": {
      "email": "meera@example.com",
      "phone": "+91-9009988776"
    },
    "projects": [
      {
        "title": "Fitness Tracking App",
        "status": "In Progress",
        "technologies": ["Swift", "CoreData", "HealthKit"]
      }
    ]
  }
];

module.exports =  people;
