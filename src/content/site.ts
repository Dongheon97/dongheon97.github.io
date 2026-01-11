import type { SiteContent } from './schema';

const content: SiteContent = {
  hero: {
    name: "Dongheon Lee",
    role_title: "Autonomous Systems Research Engineer",
    one_liner: "Master's student working on UAV systems, multi-agent coordination, and end-to-end autonomous algorithms",
    location: "West Lafayette, IN, U.S.A.",
    profile_image: "images/profile.png",
    links: {
      email: "dongheon.lee97@gmail.com",
      github: "https://github.com/Dongheon97",
      linkedin: "https://linkedin.com/in/dongheon97",
      cv_pdf: "pdf/DongheonLee_CV.pdf"
    }
  },
  expertise: {
    categories: [
      {
        title: "Robotics & Autonomous Systems",
        keywords: ["ROS 1/2", "PX4 Autopilot", "Gazebo", "Isaac Sim"],
        highlight_line: "Building autonomous UAV systems from simulation to real-world deployment"
      },
      {
        title: "Programming & Development",
        keywords: ["C/C++", "Python", "Java", "MySQL", "CMake", "Bash", "Git", "Docker"],
        highlight_line: "Developing robust software for robotics and embedded systems"
      },
      {
        title: "Machine Learning",
        keywords: ["TensorFlow", "PyTorch", "Object Detection", "Gaussian Splatting", "Reinforcement Learning", "Federated Learning"],
        highlight_line: "Applying ML and CV to robotics and sensing applications"
      },
      {
        title: "Hardware & Integration",
        keywords: ["Pixhawk", "VOXL (ModalAI)", "STM32", "FPV Drones", "3D Printers", "Microhard", "DoodleLabs"],
        highlight_line: "Integrating custom hardware for autonomous systems"
      }
    ]
  },
  projects: [
    {
      slug: "lidar-autonomy-evaluation",
      title: "Evaluating Trade-offs Between LiDAR Specifications and Autonomy Performance",
      one_liner: "Built a closed-loop autonomy evaluation framework to quantify how LiDAR specifications impact drone navigation and replanning performance",
      tags: ["ROS 1/2", "Sensor Fusion", "LiDAR", "RRT", "Path Planning", "Collision Avoidance", "Simulation"],
      timeframe: "Apr 2025 – Jul 2025",
      role: "Software Engineer",
      team: "Applied Intuition with Korean Tier-1 sensor supplier",
      stack: ["ROS 1/2", "Python", "C++", "Gazebo", "Applied Intuition Simulation"],
      problem: [
        "Different LiDAR configurations (range, FOV, angular resolution, noise) produced drastically different mapping quality and planner behavior, but their impact on autonomy was not quantitatively understood",
        "In-house simulation infrastructure only supported ROS 2, requiring migration of a legacy ROS 1-based 3D mapping and navigation stack",
        "Dense urban drone scenarios required frequent replanning and reliable collision avoidance",
        "Sensor vendors and autonomy teams lacked a principled way to compare LiDAR options for real-world deployment"
      ],
      approach: [
        "Migrated a GPS-denied drone navigation stack from ROS 1 to ROS 2 on an in-house simulation platform",
        "Built a closed-loop autonomy evaluation pipeline connecting LiDAR simulation, mapping, RRT-based planning, collision checking, and replanning",
        "Parameterized LiDAR models in simulation to vary range, FOV, angular resolution, and noise characteristics",
        "Designed experimental protocols and evaluation pipelines measuring success rate, completion time, replanning frequency, and path efficiency across sensor configurations"
      ],
      contributions: [
        "Designed and implemented a sensor-to-autonomy evaluation framework linking LiDAR specifications to navigation outcomes",
        "Identified critical LiDAR parameter regimes that directly affect planner stability and mission success",
        "Developed standardized autonomy metrics enabling objective comparison between sensor configurations",
        "Produced decision-grade analysis used by autonomy and hardware teams to evaluate LiDAR trade-offs"
      ],
      results: [
        "Successfully migrated and validated a full ROS 1 autonomy stack on ROS 2 without loss of functionality",
        "Quantified how LiDAR range, FOV, and resolution influence replanning behavior, path efficiency, and failure rates",
        "Analysis directly supported proof-of-concept agreements between collaborating companies",
        "Established a reusable evaluation framework for future LiDAR and perception system benchmarking"
      ],
      media: {
        type: "youtube",
        embed_url: "https://www.youtube.com/embed/OOjkADXE0zU",
        description: "In-house simulation showing LiDAR point clouds (left) and a drone navigating a dense urban environment (right)."
      },
      sub_media: {
        type: "youtube",
        embed_url: "https://www.youtube.com/embed/97EqxBJj24M",
        description: "Engineering view of 3D mapping and path planning. The RGB-D map is built from fused LiDAR and camera data, while the green line shows the planned trajectory and waypoints. The system performs real-time collision checking and replanning for autonomous flight."
      },
      links: {},
      thumbnail: "projects/lidar_eval/poc_thumbnail.png"
    },
    {
      slug: "multi-agent-uav-mesh-network",
      title: "Multi-Agent UAV Systems with Mesh-Based Communication",
      one_liner: "Designed and implemented a scalable multi-agent UAV system using mesh networking for robust real-time coordination",
      tags: ["ROS 2", "PX4", "Multi-Agent Systems", "Mesh Networking", "Swarm Robotics", "Distributed Systems"],
      timeframe: "May 2024 – Nov 2024",
      role: "Software Engineer",
      team: "Industry–Academia Collaborative Project",
      stack: ["ROS 2", "PX4", "VOXL", "Python", "C++", "Mesh Radios"],
      problem: [
        "Multi-agent UAV systems require reliable communication to coordinate in dynamic and partially connected environments",
        "Network overhead and latency limited scalability as the number of UAVs increased",
        "Hardware-level mesh networking required custom integration with onboard computers and radios",
        "Swarm coordination depended on real-time exchange of network status, battery, and localization data"
      ],
      approach: [
        "Designed a multi-agent UAV architecture with decentralized mesh-based communication between aerial and ground nodes",
        "Implemented lightweight serialization and JSON-RPC interfaces for efficient inter-agent messaging",
        "Integrated mesh radios with onboard computers using custom mounts and RF tuning",
        "Developed a swarm manager to aggregate and distribute real-time network, battery, and position data"
      ],
      contributions: [
        "Designed and implemented a scalable mesh networking layer for multi-agent UAV coordination",
        "Reduced communication overhead by 50% through custom message serialization and protocol optimization",
        "Led hardware–software integration of mesh radios on UAV platforms"
      ],
      results: [
        "Achieved reliable multi-agent coordination under intermittent and bandwidth-limited network conditions",
        "Demonstrated scalable swarm operation with significantly reduced communication overhead",
        "Validated mesh-based communication as a viable backbone for distributed UAV systems",
        "Enabled real-time sharing of critical agent states including network health, battery, and position"
      ],
      media: {
        type: "youtube",
        embed_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "ddd"
      },
      links: {},
      thumbnail: "projects/analytics-dashboard.png"
    },
    {
      slug: "gps-denied-3d-mapping",
      title: "GPS-Denied Indoor Navigation – NIST 5.0 3D Mapping Challenge",
      one_liner: "Implemented advanced 3D mapping using Gaussian Splatting for GPS-denied environments",
      tags: ["ROS", "Gaussian Splatting", "Voxblox", "3D Object Detection", "VOXL", "PX4"],
      timeframe: "Jun 2023 – Oct 2024",
      role: "Software Engineer",
      team: "EpiSci | NIST Challenge",
      stack: ["ROS", "Gaussian Splatting", "Voxblox", "MeshLab", "VOXL-PX4", "Python"],
      problem: [
        "GPS-denied environments required robust 3D mapping and navigation",
        "Standard mapping produced low-quality results in complex indoor environments",
        "Needed real-time 3D object detection overlay on maps",
        "Cost constraints required building capable FPV drone under $2,500"
      ],
      approach: [
        "Implemented post-processing pipelines for high-quality 3D mapping using Gaussian Splatting",
        "Developed ROS-based 3D object detection overlaying bounding boxes on Voxblox mesh maps",
        "Customized VOXL-PX4 firmware for range-sensor-based VIO correction",
        "Built custom FPV drone with optimized components"
      ],
      contributions: [
        "Implemented Gaussian Splatting pipeline for high-quality 3D reconstruction",
        "Developed 3D object detection system overlaying results on mesh maps",
        "Customized VOXL-PX4 firmware for improved VIO in GPS-denied environments",
        "Built custom FPV drone achieving 15+ minute flight time"
      ],
      results: [
        "Achieved high-quality 3D mapping in complex GPS-denied environments",
        "Successfully integrated 3D object detection with mapping pipeline",
        "Built FPV drone with 15+ minute flight time under $2,500 budget",
        "Competed in NIST 5.0 3D Mapping Challenge"
      ],
      media: {
        type: "youtube",
        embed_url: "https://youtu.be/l6NRirrmg5o",
        description: "ddd"
      },
      links: {},
      thumbnail: "projects/ecommerce-platform.png"
    },
    {
      slug: "automated-shot-group-measurement",
      title: "Automated Shot Group Size Measuring System",
      one_liner: "IEEE-published vision-based system for remote ballistic analysis with 91.8% accuracy",
      tags: ["OpenCV", "YOLO", "Image Processing", "IoT", "Raspberry Pi", "LoRa"],
      timeframe: "Dec 2021 – Aug 2022",
      role: "Research Assistant",
      team: "Purdue University",
      stack: ["Python", "OpenCV", "YOLOv3", "Raspberry Pi", "LoRa", "IoT Sensors"],
      problem: [
        "Manual shot group measurement was time-consuming and error-prone",
        "Remote ballistic analysis required automated, contactless measurement",
        "Needed high accuracy for precision shooting analysis",
        "Integration of IoT components for remote data collection required"
      ],
      approach: [
        "Led development of vision-based shot group measurement system",
        "Implemented bullet hole detection using OpenCV-based image warping and alignment",
        "Trained YOLOv3 models optimized for embedded inference",
        "Integrated IoT components including Raspberry Pi, sound sensors, cameras, and LoRa"
      ],
      contributions: [
        "Led complete system development from concept to implementation",
        "Implemented image warping and alignment achieving 91.8% accuracy",
        "Trained and optimized YOLOv3 models for embedded deployment",
        "Integrated multi-modal IoT sensors for remote data collection"
      ],
      results: [
        "Achieved 91.8% accuracy in shot group measurement",
        "Resulted in peer-reviewed publication at IEEE SAS 2022",
        "Enabled remote, contactless ballistic analysis",
        "Integrated complete IoT system for automated data collection"
      ],
      media: {
        type: "youtube",
        embed_url: "https://youtube.com/embed/l6NRirrmg5o",
        description: "ddd"
      },
      links: {},
      thumbnail: "projects/shot_tracker/shot_tracker.jpeg"
    }
  ],
  publications: [
    {
      title: "Feasibility of Measuring Shot Group Using LoRa Technology and YOLO V5",
      authors: "Dongheon Lee, et al.",
      venue: "IEEE Sensors Applications Symposium (SAS)",
      year: "2022",
      doi_url: "https://doi.org/10.1109/SAS54819.2022.9881356",
      pdf_path: "pdf/SAS-2022.pdf"
    },
    {
      title: "A Case Study on Scenario-Based Mobile Application UI Action Test",
      authors: "Dongheon Lee, et al.",
      venue: "Korean Institute of Information Scientists and Engineers (KIICE)",
      year: "2021",
      doi_url: "",
      pdf_path: ""
    }
  ],
  experience: [
    {
      org: "Networked Control Systems Lab, Purdue University",
      title: "Graduate Research Assistant",
      start: "Sep 2025",
      end: "Present",
      location: "West Lafayette, IN, U.S.A.",
      bullets: [
        "Developed MPPI- and MPC-based control frameworks for 4-channel fixed-wing UAV enabling aggressive pylon navigation",
        "Designed cost functions and tuning strategies, performing simulation-to-flight transfer with real-world flight validation",
        "Analyzed controller robustness and failure modes under wind and sensing uncertainty"
      ]
    },
    {
      org: "Applied Intuition",
      title: "Software Engineer",
      start: "Nov 2024",
      end: "Jul 2025",
      location: "Seoul, South Korea",
      bullets: [
        "Migrated EpiSci's 3D mapping stack from ROS 1 to ROS 2 within Applied Intuition's simulation platform",
        "Evaluated LiDAR specification trade-offs on drone autonomy performance with Tier-1 sensor supplier",
        "Delivered simulation training workshops for Korean automotive OEM and airline R&D center"
      ]
    },
    {
      org: "EpiSci (Acquired by Applied Intuition)",
      title: "Software Engineer",
      start: "Oct 2023",
      end: "Nov 2024",
      location: "Seoul, South Korea",
      bullets: [
        "Developed autonomous multi-agent UAV systems enabling efficient data exchange and swarm coordination",
        "Applied computer vision and machine learning techniques including 3D Gaussian Splatting for enhanced visualization",
        "Led sim-to-real deployment from Gazebo to real drones using ROS 2, PX4, and VOXL",
        "Demonstrated UAV applications to NIST, U.S. Army, and DARPA"
      ]
    },
    {
      org: "EpiSci",
      title: "Software Engineering Intern",
      start: "Sep 2022",
      end: "Sep 2023",
      location: "Poway, CA, U.S.A.",
      bullets: [
        "Evaluated visual-inertial odometry and obstacle avoidance algorithms on indoor drones using ROS 1",
        "Developed frontier-based exploration and object detection modules for PX4-based drones",
        "Built ATAK Android plugin for drone control and monitoring",
        "Earned FAA Part 107 certification"
      ]
    },
    {
      org: "Distributed Networks & Computing Lab",
      title: "Research Assistant",
      start: "Mar 2022",
      end: "Jun 2022",
      location: "Daejeon, South Korea",
      bullets: [
        "Studied federated and distributed learning algorithms, improving model accuracy from 70% (individual) to 90% (aggregated)",
        "Built federated learning system using five Raspberry Pi devices with local training and centralized aggregation"
      ]
    },
    {
      org: "Purdue University",
      title: "Research Assistant",
      start: "Jan 2022",
      end: "Feb 2022",
      location: "West Lafayette, IN, U.S.A.",
      bullets: [
        "Led development of vision-based shot group measurement system using bullet hole detection and image matching",
        "Resulted in peer-reviewed publication (IEEE Sensors Applications Symposium)"
      ]
    },
    {
      org: "Data Networks Lab",
      title: "Research Assistant",
      start: "Aug 2021",
      end: "Dec 2021",
      location: "Daejeon, South Korea",
      bullets: [
        "Developed automated testing framework using JavaScript-controlled tapping robot for iOS and Android apps",
        "Conducted execution-time comparisons and contributed to academic publication"
      ]
    }
  ],
  education: [
    {
      school: "Purdue University",
      degree: "M.S. in Electrical and Computer Engineering",
      location: "West Lafayette, IN, U.S.A.",
      start: "Aug 2025",
      end: "Present",
      bullets: [
        "GPA: 3.61 / 4.0",
        "Specializing in automatic control with interests in reinforcement learning, autonomous systems, and distributed robotics",
        "Researching optimization-based control of fixed-wing UAVs"
      ]
    },
    {
      school: "Chungnam National University (CNU)",
      degree: "B.E. in Computer Science and Engineering",
      location: "Daejeon, South Korea",
      start: "Mar 2017",
      end: "Feb 2023",
      bullets: [
        "GPA: 3.88 / 4.0 (3rd out of 102 students)",
        "Full Scholarship: 4 semesters",
        "Partial Scholarship: 3 semesters",
        "Received Sejong City Foundation Scholarship (Jan 2020)"
      ]
    }
  ],
  awards: [
    {
      name: "Student Engineer of the Year",
      org: "College of Engineering, CNU",
      year: "2022",
      note: "Recognized for outstanding academic and research achievements"
    },
    {
      name: "Sponsor's Award",
      org: "2022 Software Talent Competition, IITP Korea",
      year: "2022",
      note: "Awarded by competition sponsor for excellence"
    },
    {
      name: "Encouragement Award",
      org: "KIICE Poster Session",
      year: "2021",
      note: "For poster presentation on mobile application testing"
    },
    {
      name: "Full Scholarship",
      org: "Department of CSE, CNU",
      year: "4 semesters",
      note: "Academic excellence award for 4 semesters"
    },
    {
      name: "Full Scholarship",
      org: "Sejong City Foundation",
      year: "2020",
      note: "Foundation scholarship for academic achievement"
    },
    {
      name: "Partial Scholarship",
      org: "Department of CSE, CNU",
      year: "3 semesters",
      note: "Academic excellence award for 3 semesters"
    }
  ]
};

export default content satisfies SiteContent;
