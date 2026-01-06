export const siteConfig = {
  name: "Dongheon Lee",
  title: "Autonomous Systems Research Engineer",
  description: "Dongheon Lee – Autonomous systems research engineer focusing on multi-agent UAVs and real-world deployment.",
  accentColor: "#1d4ed8",
  social: {
    email: "dongheon.lee97@gmail.com",
    linkedin: "https://linkedin.com/in/dongheon97",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/dongheon97",
  },
  aboutMe:
    "I am a Master’s student in Electrical and Computer Engineering at Purdue University, focusing on autonomous UAV systems. \
    My work emphasizes multi-agent systems and end-to-end system integration, bridging simulation and real-world flight experiments. \
    I am particularly interested in building autonomy that works under real-world constraints such as limited compute, sensing, and communication.",
  skills: [ "C++", "Python", "ROS1/2", "PX4", "MAVLink", "Gazebo", "Isaac Sim", "Git", "Docker"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Applied Intuition",
      title: "Software Engineer",
      dateRange: "Nov 2024 - Jul 2025",
      bullets: [
        "Evaluated the impact of LiDAR specification changes on UAV autonomy performance in simulation with a Tier-1 sensor supplier",
        "Integrated 3D mapping system into the company's in-house simulation platform",
        "Led simulation-based autonomy training workshops for a Korean automotive OEM and an airline R&D center, demonstrating scenario design and validation workflows",
      ],
    },
    {
      company: "EpiSci (Acquired by Applied Intuition)",
      title: "Software Engineer",
      dateRange: "Oct 2023 - Nov 2024",
      bullets: [
        "Developed autonomous drone systems with efficient data exchange and swarm management modules enabling coordinated multi-agent operations",
        "Applied computer vision and machine learning techniques to implement user-interaction markers and 3D Gaussian Splatting for enhanced visualization",
        "Led sim-to-real deployment by transitioning autonomy stacks from Gazebo simulation to real UAVs using ROS2, PX4, and the VOXL platform",
        "Demonstrated autonomous UAV applications through a 3D mapping system for NIST and a multi-agent mesh networking system for DARPA and the U.S. Army",
      ],
    },
    {
      company: "EpiSci (Acquired by Applied Intuition)",
      title: "Software Engineering Intern",
      dateRange: "Sep 2022 - Sep 2023",
      bullets: [
        "Evaluated simulation-based visual-inertial odometry and visual obstacle avoidance algorithms on real indoor UAVs using ROS1",
        "Developed frontier search and object detection modules for PX4-based drones, gaining hands-on hardware and flight testing experience",
        "Implemented a custom Android Team Awareness Kit (ATAK) plugin to control and monitor UAVs for military demonstration use cases",
        "Earned FAA Part 107 certification for commercial small UAV operations in the United States",
      ],
    },
  ],
  education: [
    {
      school: "Purdue University, West Lafayette, IN, United States",
      degree: "M.S. in Electrical and Computer Engineering",
      dateRange: "2025 - Present",
      achievements: [
        "Specializing in Automatic Control",
        "Research interests in reinforcement learning, autonomous systems, and distributed robotics",
        "GPA: 3.61 / 4.0",
      ],
    },
    {
      school: "Chungnam National University, Daejeon, South Korea",
      degree: "B.E. in Computer Science and Engineering",
      dateRange: "2017 - 2023",
      achievements: [
        "Strong foundation in computer science and software engineering",
        "GPA: 3.88 / 4.0 (Ranked 3rd out of 102 students)",
      ],
    },
  ],
  // publications: [
  //   {
  //     title: "Multi-Agent Autonomous Drone System for 3D Mapping",
  //     authors: "Dongheon Lee, et al.",
  //     venue: "IEEE Sensors",
  //     year: "2023",
  //     link: "https://ieeexplore.ieee.org/xxxxx",
  //   },
  //   {
  //     title: "Simulation-Based Evaluation of UAV Autonomy under Sensor Constraints",
  //     authors: "Dongheon Lee, et al.",
  //     venue: "KIICE Journal",
  //     year: "2022",
  //     link: "https://doi.org/xxxxx",
  //   },
  // ],
  publications: [
    {
      title:
        "Feasibility of Measuring Shot Group Using LoRa Technology and YOLOv5",
      authors:
        "Dongheon Lee, et al.",
      venue:
        "IEEE Sensors Applications Symposium, Sundsvall, Sweden",
      year: "2022",
      link: "https://doi.org/10.1109/SAS54819.2022.9881356",
      pdf: "public/papers/SAS-2022.pdf"
    },
    {
      title:
        "A Case Study on Scenario-Based Mobile Application UI Action Test",
      authors: "Dongheon Lee, et al.",
      venue:
        "Korean Institute of Information Scientists and Engineers",
      year: "2021",
      link: "",
    },
  ],
};
