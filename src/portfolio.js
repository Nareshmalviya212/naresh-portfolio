/* Naresh Luhar - Personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* =========================
   Splash Screen
========================= */

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

/* =========================
   Summary And Greeting
========================= */

const illustration = {
  animated: true
};

const greeting = {
  username: "Naresh Luhar",

  title: "Hi, I'm Naresh Luhar",

  subTitle: emoji(
    "GenAI Engineer with 3+ years of experience architecting production-grade multi-agent systems, enterprise RAG platforms, and real-time Voice AI. I specialize in LangGraph, LangChain, GPT-4, LLaMA, RAG, Agentic AI, MCP, multimodal AI, and AI workflow orchestration. 🚀"
  ),

  resumeLink: "",

  displayGreeting: true
};

/* =========================
   Social Media Links
========================= */

const socialMediaLinks = {
  github: "https://github.com/Nareshmalviya212",

  linkedin:
    "https://www.linkedin.com/in/naresh-luhar-8121a6205",

  gmail: "malviyanaresh6219@gmail.com",

  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",

  display: true
};

/* =========================
   Skills Section
========================= */

const skillsSection = {
  title: "What I Do",

  subTitle:
    "I BUILD PRODUCTION-GRADE GENERATIVE AI SYSTEMS THAT SOLVE REAL BUSINESS PROBLEMS",

  skills: [
    emoji(
      "⚡ Build enterprise RAG platforms for document intelligence and knowledge retrieval"
    ),

    emoji(
      "⚡ Design Agentic AI and Multi-Agent systems using LangGraph, LangChain and LLMs"
    ),

    emoji(
      "⚡ Build real-time Voice AI systems with streaming STT, RAG, LLM and TTS pipelines"
    ),

    emoji(
      "⚡ Develop multimodal AI solutions using OCR, vision-language models and LLMs"
    ),

    emoji(
      "⚡ Build AI agents with tool calling, function calling and Model Context Protocol (MCP)"
    ),

    emoji(
      "⚡ Evaluate and optimize RAG systems using RAGAS and Promptfoo"
    ),

    emoji(
      "⚡ Fine-tune open-source LLMs using Hugging Face Transformers and PEFT/LoRA"
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "GPT-4",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "LLaMA",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "LangGraph",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "CrewAI",
      fontAwesomeClassname: "fas fa-users"
    },
    {
      skillName: "Agno",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "HuggingFace",
      fontAwesomeClassname: "fas fa-face-smile"
    },
    {
      skillName: "Ollama",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "RAG",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "RAGAS",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Promptfoo",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "FAISS",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "ChromaDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "BERT",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "ResNet50",
      fontAwesomeClassname: "fas fa-image"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fas fa-globe"
    }
  ],

  display: true
};

/* =========================
   Education
========================= */

const educationInfo = {
  display: true,

  schools: [
    {
      schoolName: "ITvedant Institute, Mumbai",

      /*
       * Using an existing template image temporarily.
       * We can replace this with the actual institute logo later.
       */
      logo: require("./assets/images/harvardLogo.jpg"),

      subHeader: "Certification in Data Science and AI",

      duration: "October 2021 - May 2022",

      desc:
        "Professional certification focused on Data Science and Artificial Intelligence.",

      descBullets: []
    },

    {
      schoolName: "Bhupal Nobles University, Udaipur",

      /*
       * Using an existing template image temporarily.
       * We can replace this with the actual university logo later.
       */
      logo: require("./assets/images/stanfordLogo.jpg"),

      subHeader: "Bachelor of Computer Applications",

      duration: "July 2018 - August 2021",

      desc:
        "Bachelor of Computer Applications with a foundation in computer science and software development.",

      descBullets: []
    }
  ]
};

/* =========================
   Technical Expertise
========================= */

const techStack = {
  viewSkillBars: true,

  experience: [
    {
      Stack: "Generative AI & Agentic AI",
      progressPercentage: "95%"
    },

    {
      Stack: "RAG & LLM Applications",
      progressPercentage: "95%"
    },

    {
      Stack: "Python & AI Backend Development",
      progressPercentage: "90%"
    }
  ],

  displayCodersrank: false
};

/* =========================
   Professional Experience
========================= */

const workExperiences = {
  display: true,

  experience: [
    {
      role: "GenAI Engineer",

      company: "Logicloop",

      companylogo: require("./assets/images/logicloop.png"),

      date: "September 2025 - June 2026",

      desc:
        "Architected and developed production-grade Generative AI systems across fintech, manufacturing and real estate use cases.",

      descBullets: [
        "Built an AI-powered email agent for Mswipe that automated customer complaint processing for payment, KYC and device issues, reducing manual support ticket creation time by an estimated 70%.",

        "Developed a multimodal extraction pipeline processing emails, attachments and threads using OCR and LLMs to extract customer, device and issue details.",

        "Integrated helpdesk APIs for automated ticket creation and designed missing-information workflows with automated email responses.",

        "Architected FactoryGuard AI, a LangGraph-based multi-agent predictive maintenance platform with Health Monitoring, Root Cause Analysis and Maintenance Planning agents.",

        "Designed a dual-RAG architecture over machine manuals, troubleshooting guides, historical failure records and maintenance SOPs to deliver explainable root-cause analysis and automate maintenance workflows.",

        "Built a low-latency Real-Time Voice AI Agent using Pipecat and LiveKit with a streaming STT → RAG → OpenAI → TTS pipeline.",

        "Designed real-estate knowledge retrieval workflows for live queries related to flats, pricing, amenities and locations, with call transcript storage for business analytics.",

        "Architected a modular Enterprise Agentic RAG Platform using Docling and Unstructured for advanced enterprise document parsing.",

        "Built end-to-end chunking, embedding and vector search pipelines using HuggingFace, Ollama and PostgreSQL.",

        "Evaluated RAG pipeline performance using RAGAS and Promptfoo to measure answer quality, faithfulness and retrieval effectiveness.",

        "Built an MCP-powered AI interface enabling natural-language interaction with a low-code platform through LLM-callable tools.",

        "Implemented tool-calling workflows that translated natural-language requests into backend API operations for platform configuration and application creation.",

        "Built an OCR Intelligence System for handwritten customer forms using Qwen2.5-VL and advanced prompt engineering.",

        "Fine-tuned an open-source LLM using Hugging Face Transformers and PEFT/LoRA on a custom dataset containing 3,000+ instruction-response pairs for enterprise document Q&A."
      ]
    },

    {
      role: "AI Researcher",

      company: "Konverge Technologies",

      companylogo: require("./assets/images/konverge.jpg"),

      date: "March 2024 - May 2025",

      desc:
        "Developed Generative AI, NLP, computer vision and document intelligence solutions for real-world business applications.",

      descBullets: [
        "Built a GenAI-powered financial RAG system using LangChain, GPT-4 and FAISS to extract real-time insights from financial news through natural-language queries.",

        "Engineered a medical document intelligence pipeline using LLaMA and OCR to extract structured data from medical bills, reducing manual data entry by approximately 80%.",

        "Developed and fine-tuned a ResNet50-based breast X-ray classification model achieving 91%+ accuracy for early-stage anomaly detection.",

        "Built an OCR-driven analytics system processing garage bills to identify frequently replaced components and support inventory planning and demand forecasting.",

        "Developed a domain-specific educational chatbot and no-code Q&A framework using TF-IDF for rapid deployment across multiple domains."
      ]
    },

    {
      role: "AI Developer",

      company: "Cloudstrats Technologies",

      companylogo: require("./assets/images/cloudstrats.png"),

      date: "June 2022 - December 2023",

      desc:
        "Developed NLP, speech processing, document intelligence and machine learning solutions.",

      descBullets: [
        "Built multilingual NLP systems for text translation across 10+ Indian languages using LSTM-based models.",

        "Developed GPT-2-based solutions for text generation and abstractive summarization.",

        "Built a BERT-based sentiment analysis engine for large-scale social media data.",

        "Designed a Hindi speech-to-text system with noise reduction for real-world audio environments.",

        "Engineered intelligent document processing solutions to extract structured information from identity documents including Aadhaar, driving licences, passports and bills.",

        "Built automated Selenium-based data scraping pipelines to curate datasets for computer vision applications."
      ]
    }
  ]
};

/* =========================
   GitHub / Open Source
========================= */

const openSource = {
  showGithubProfile: "true",
  display: false
};

/* =========================
   Featured Projects
========================= */

const bigProjects = {
  title: "Featured AI Projects",

  subtitle:
    "REAL-WORLD GENERATIVE AI, RAG, AGENTIC AI AND AUTOMATION SYSTEMS",

  projects: [
    {
      image: require("./assets/images/factoryguard.jpg"),

      projectName: "FactoryGuard AI",

      projectDesc:
        "Enterprise multi-agent predictive maintenance platform built with LangGraph. Orchestrates Health Monitoring, Root Cause Analysis and Maintenance Planning agents. Uses a dual-RAG architecture over machine manuals, troubleshooting guides, historical failure records and maintenance SOPs to provide explainable failure diagnosis and maintenance recommendations.",

      footerLink: []
    },

    {
      image: require("./assets/images/rag.jpg"),

      projectName: "Enterprise Agentic RAG Platform",

      projectDesc:
        "Modular enterprise RAG platform for document intelligence and knowledge retrieval. Integrates Docling and Unstructured for document parsing, HuggingFace and Ollama for AI processing, and PostgreSQL for storage and vector search. RAGAS and Promptfoo are used for evaluation and optimization.",

      footerLink: []
    },

    {
      image: require("./assets/images/voiceai.jpg"),

      projectName: "Real-Time Voice AI Agent",

      projectDesc:
        "Low-latency conversational Voice AI Agent built using Pipecat and LiveKit with a streaming STT → RAG → OpenAI → TTS pipeline. Designed for real-estate conversations around flats, pricing, amenities and locations, with call transcripts stored for analytics.",

      footerLink: []
    },

    {
      image: require("./assets/images/email.webp"),

      projectName: "Email AI Agent — Mswipe",

      projectDesc:
        "AI-powered email agent for automatically processing customer complaints related to payment, KYC and device issues. Uses OCR and LLMs to process emails, attachments and threads, extracts structured information and integrates with helpdesk APIs to automatically create support tickets.",

      footerLink: []
    },

    {
      image: require("./assets/images/mcp.png"),

      projectName: "AI Backend Interface — SolidX MCP System",

      projectDesc:
        "MCP-powered AI interface enabling natural-language interaction with a low-code platform. Exposes platform capabilities as LLM-callable tools and translates user requests into backend API operations for configuration and application creation.",

      footerLink: []
    },

    {
      image: require("./assets/images/ocr.png"),

      projectName: "OCR Intelligence System — Reliance",

      projectDesc:
        "AI digitization system for handwritten customer forms from fuel stations. Uses Qwen2.5-VL and advanced prompt engineering to extract customer and vehicle information from noisy handwritten forms.",

      footerLink: []
    },

    {
      image: require("./assets/images/finetune.jpg"),

      projectName: "Custom LLM Fine-Tuning with LoRA",

      projectDesc:
        "Fine-tuned an open-source LLM using Hugging Face Transformers and PEFT/LoRA on a custom dataset containing 3,000+ instruction-response pairs created from enterprise documents for domain-specific document Q&A.",

      footerLink: []
    },

    {
      image: require("./assets/images/atom.webp"),

      projectName: "ATOM — Personalized Health Chatbot",

      projectDesc:
        "Conversational AI assistant using a domain-specific RAG pipeline with LLM integration and memory management to provide context-aware responses.",

      footerLink: []
    },

    {
      image: require("./assets/images/music.jpg"),

      projectName: "Music Recommendation System",

      projectDesc:
        "Music recommendation engine using collaborative filtering to recommend songs based on user interaction history and mood-based clustering.",

      footerLink: []
    }
  ],

  display: true
};

/* =========================
   Certifications
========================= */

const achievementSection = {
  title: emoji("Certifications & Professional Learning 🏆"),

  subtitle:
    "Certifications and professional learning across Artificial Intelligence, Generative AI and Responsible AI.",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure AI Fundamentals",

      subtitle:
        "Microsoft certification covering fundamental Artificial Intelligence concepts and Azure AI capabilities.",

      image: require("./assets/images/azure.jpg"),

      imageAlt: "Microsoft Azure AI Fundamentals",

      footerLink: []
    },

    {
      title: "Introduction to Responsible AI",

      subtitle:
        "Professional learning focused on responsible and ethical approaches to developing and deploying AI systems.",

      image: require("./assets/images/googleAssistantLogo.webp"),

      imageAlt: "Responsible AI",

      footerLink: []
    },

    {
      title: "Complete Generative AI Course with LangChain and HuggingFace",

      subtitle:
        "Professional training focused on Generative AI application development using LangChain and HuggingFace.",

      image: require("./assets/images/genail.webp"),

      imageAlt: "Generative AI with LangChain and HuggingFace",

      footerLink: []
    }
  ],

  display: true
};

/* =========================
   Blogs
========================= */

const blogSection = {
  title: "Blogs",

  subtitle: "",

  displayMediumBlogs: "false",

  blogs: [],

  display: false
};

/* =========================
   Talks
========================= */

const talkSection = {
  title: "Talks",

  subtitle: "",

  talks: [],

  display: false
};

/* =========================
   Podcast
========================= */

const podcastSection = {
  title: emoji("Podcast 🎙️"),

  subtitle: "",

  podcast: [],

  display: false
};

/* =========================
   Resume
========================= */

/*
 * We will enable this after adding your actual CV PDF
 * to the project.
 */

const resumeSection = {
  title: "Resume",

  subtitle: "Download my resume",

  display: false
};

/* =========================
   Contact
========================= */

const contactInfo = {
  title: emoji("Let's Build Something With AI 🤝"),

  subtitle:
    "Have an AI project, automation idea, or technical challenge? Feel free to reach out. I'm always open to discussing interesting AI problems and building practical solutions.",

  number: "+91 7357027318",

  email_address: "malviyanaresh6219@gmail.com"
};

/* =========================
   Twitter
========================= */

const twitterDetails = {
  userName: "",

  display: false
};

/* =========================
   Hiring Status
========================= */

const isHireable = true;

/* =========================
   Export
========================= */

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};