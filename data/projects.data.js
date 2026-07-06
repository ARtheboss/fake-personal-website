window.PORTFOLIO_PROJECTS = {
  "generatedAt": "2026-07-06T00:00:00.000Z",
  "source": {
    "mode": "static-snapshot",
    "fetchedRepoCount": 23
  },
  "featured": [
    {
      "name": "Annapurna-Labs",
      "displayName": "Annapurna Labs \u2014 ML Accelerator Perf Model",
      "year": "2025",
      "highlight": "ML accelerator performance modeling",
      "headline": "A near-cycle-accurate performance model for a custom ML accelerator chip.",
      "summary": "During my SDE internship at Annapurna Labs, I built a near-cycle-accurate performance model for a custom ML accelerator chip that's now used by 4+ teams, analyzing the microarchitecture and Verdi waveforms to validate it against RTL simulation.",
      "categories": [
        "hardware",
        "systems"
      ],
      "stack": [
        "Python",
        "Computer Architecture",
        "Performance Modeling",
        "Verdi"
      ],
      "metrics": [
        {
          "value": "1000x",
          "label": "Faster than RTL simulators"
        },
        {
          "value": "<5%",
          "label": "Error vs. RTL simulation"
        },
        {
          "value": "4+",
          "label": "Teams using the model"
        }
      ],
      "status": "Featured",
      "note": "Details are necessarily high-level \u2014 this was internal chip architecture work.",
      "image": null,
      "links": {},
      "caseStudy": {
        "problem": "Full RTL simulation is far too slow to explore chip design decisions quickly, but teams still needed performance numbers they could trust.",
        "approach": "I built a near-cycle-accurate performance model, analyzing the microarchitecture and Verdi waveforms to validate its accuracy directly against RTL simulation.",
        "outcome": "A model within <5% error of RTL simulation running about 1000x faster, now used by 4+ teams to explore design decisions."
      }
    },
    {
      "name": "Optiver-FPGA",
      "displayName": "Optiver \u2014 Quoting FPGA System",
      "year": "2025",
      "highlight": "Low-latency trading FPGA",
      "headline": "A feature added to the core FPGA system behind Optiver's live quoting.",
      "summary": "As an FPGA intern at Optiver, I added a feature to the core quoting-side FPGA system deployed across all of the firm's exchanges, writing new VHDL modules and Verilog testbenches, plus the C++ software APIs to drive them.",
      "categories": [
        "hardware",
        "systems"
      ],
      "stack": [
        "VHDL",
        "Verilog",
        "C++",
        "Xilinx Vivado",
        "FPGA"
      ],
      "metrics": [
        {
          "value": "All exchanges",
          "label": "Feature deployed firm-wide"
        },
        {
          "value": "VHDL + Verilog",
          "label": "New modules & testbenches"
        },
        {
          "value": "Vivado",
          "label": "Timing closure & pipelining"
        }
      ],
      "status": "Featured",
      "note": "Implementation details are proprietary trading infrastructure.",
      "image": null,
      "links": {},
      "caseStudy": {
        "problem": "The feature needed to run inside a live, latency-critical quoting FPGA without breaking the aggressive timing the system already depended on.",
        "approach": "I wrote new VHDL modules and Verilog testbenches, added the corresponding C++ software APIs, and used Vivado to hit timing through logic optimization and pipelining.",
        "outcome": "The feature shipped into the core quoting-side system running across all of Optiver's exchanges."
      }
    },
    {
      "name": "Berkeleytime",
      "displayName": "Berkeleytime",
      "year": "2026",
      "highlight": "Course planning platform",
      "headline": "Leading the team behind Berkeley's top open-source course planning platform.",
      "summary": "I lead 30+ students maintaining Berkeleytime, Berkeley's top open-source course planning platform with about 30k users, directing 5+ subteams each semester on reliability, performance, and new features.",
      "categories": [
        "systems",
        "web"
      ],
      "stack": [
        "Team Leadership",
        "Open Source",
        "Full-Stack Web",
        "Product Strategy"
      ],
      "metrics": [
        {
          "value": "30+",
          "label": "Students led"
        },
        {
          "value": "~30k",
          "label": "Platform users"
        },
        {
          "value": "4x / 2x / 30x",
          "label": "Retention / applicants / funding growth"
        }
      ],
      "status": "Featured",
      "note": "",
      "image": {
        "src": "https://berkeleytime.com/favicon.png",
        "alt": "Berkeleytime logo",
        "fit": "contain",
        "caption": "Berkeley's top open-source course planning platform."
      },
      "links": {
        "demo": "https://berkeleytime.com"
      },
      "caseStudy": {
        "problem": "Berkeleytime needed stronger technical direction and organizational structure to keep improving as more students relied on it.",
        "approach": "I lead 30+ students across 5+ subteams each semester, setting priorities around reliability, performance, and new features, and rebuilding the processes behind the club itself.",
        "outcome": "Member retention up 4x, applicants up 2x, and funding up 30x, alongside a platform that now serves about 30k users."
      }
    },
    {
      "name": "Berkeley-SLICE-Lab",
      "displayName": "Berkeley SLICE Lab \u2014 LLMs for Verilog",
      "year": "2026",
      "highlight": "Hardware ML research",
      "headline": "A dataset and paper on using LLMs to generate better Verilog.",
      "summary": "Working with a PhD student at Berkeley's SLICE Lab, I helped build a dataset for fine-tuning and RL post-training LLMs to generate better Verilog. The work was accepted for an oral presentation at MLArchSys.",
      "categories": [
        "hardware"
      ],
      "stack": [
        "Python",
        "LLMs",
        "Reinforcement Learning",
        "Verilog",
        "Dataset Curation"
      ],
      "metrics": [
        {
          "value": "MLArchSys",
          "label": "Oral presentation"
        },
        {
          "value": "LLMs + RL",
          "label": "Post-training pipeline"
        },
        {
          "value": "Verilog",
          "label": "Target hardware description language"
        }
      ],
      "status": "Featured",
      "note": "",
      "image": null,
      "links": {},
      "caseStudy": {
        "problem": "LLMs are decent at general-purpose software code but noticeably worse at generating correct, synthesizable Verilog.",
        "approach": "I worked with a PhD student to build a dataset purpose-built for fine-tuning and RL post-training LLMs specifically on Verilog generation.",
        "outcome": "The work was accepted for an oral presentation at MLArchSys."
      }
    }
  ],
  "research": [
    {
      "name": "Apple-CPU-Design",
      "displayName": "Apple \u2014 CPU Design Tooling",
      "year": "2024",
      "highlight": "CPU physical design tooling",
      "headline": "STA methodology and automation tooling for CPU design at Apple.",
      "summary": "As a CPU Design intern at Apple, I worked on static timing analysis methodology improvements and clock tree robustness checks, building Python and Tcl tooling from the ground up to interface with EDA tools and parse large text files.",
      "categories": [
        "hardware"
      ],
      "stack": [
        "Python",
        "Tcl",
        "Static Timing Analysis",
        "Cadence",
        "Clock Tree Design"
      ],
      "metrics": [
        {
          "value": "1000s",
          "label": "Simulation jobs run via parallelized flows"
        },
        {
          "value": "Python + Tcl",
          "label": "Custom tooling built from scratch"
        }
      ],
      "status": "Internship",
      "note": "",
      "image": null,
      "links": {},
      "caseStudy": {
        "problem": "CPU timing signoff involves thousands of simulation jobs, and the existing scripts for running and parsing them hadn't kept pace.",
        "approach": "I designed Python and Tcl tooling from scratch to interface with the EDA tools, then built parallelized flows to queue, run, parse, and analyze thousands of jobs at once.",
        "outcome": "Faster iteration on STA methodology and clock tree robustness checks, backed by tooling that scaled to the job volume the team actually needed."
      }
    },
    {
      "name": "University-Tapeout-Project",
      "displayName": "University Tapeout Project",
      "year": "2025",
      "highlight": "16nm ASIC design",
      "headline": "An interrupt-based, multi-channel DMA engine taped out on a 16nm process.",
      "summary": "For my university tapeout project, I designed an interrupt-based, multi-channel DMA engine for a DSP chip on a 16nm process, writing 1000+ lines of RTL along with constrained-random integration tests to verify it.",
      "categories": [
        "hardware"
      ],
      "stack": [
        "Verilog",
        "RTL Design",
        "Verification",
        "DMA",
        "ASIC Design"
      ],
      "metrics": [
        {
          "value": "16nm",
          "label": "Target process node"
        },
        {
          "value": "1000+",
          "label": "Lines of RTL"
        },
        {
          "value": "Constrained-random",
          "label": "Integration testing"
        }
      ],
      "status": "Coursework",
      "note": "",
      "image": null,
      "links": {},
      "caseStudy": {
        "problem": "A DSP chip needed a DMA engine that could handle multiple channels and interrupts correctly, with confidence it wouldn't break under real traffic.",
        "approach": "I designed the engine's RTL from scratch and wrote constrained-random integration tests to exercise the interrupt and multi-channel behavior.",
        "outcome": "1000+ lines of verified RTL, taped out as part of a real 16nm chip design."
      }
    },
    {
      "name": "Berkeley-Wireless-Research-Center",
      "displayName": "Berkeley Wireless Research Center",
      "year": "2024",
      "highlight": "Real-time FPGA data streaming",
      "headline": "Real-time sensor data streaming hardware on an FPGA.",
      "summary": "As an undergraduate researcher at the Berkeley Wireless Research Center, I designed sensor data streaming hardware on an Opal Kelly FPGA board, converting multi-channel serial data into a custom USB 2.0-based format, and built a real-time C++ receiver to filter and store incoming 48MHz data.",
      "categories": [
        "hardware"
      ],
      "stack": [
        "Verilog",
        "Xilinx Vivado",
        "FPGA",
        "C++",
        "USB 2.0"
      ],
      "metrics": [
        {
          "value": "48MHz",
          "label": "Real-time data throughput"
        },
        {
          "value": "USB 2.0",
          "label": "Custom streaming format"
        },
        {
          "value": "C++",
          "label": "Real-time receiver"
        }
      ],
      "status": "Research",
      "note": "",
      "image": null,
      "links": {},
      "caseStudy": {
        "problem": "Multi-channel sensor data needed to move off the FPGA in real time without a standard, ready-made streaming format.",
        "approach": "I designed the streaming hardware in Verilog on an Opal Kelly FPGA board, converting the multi-channel serial input into a custom USB 2.0-based format, and wrote a real-time C++ receiver to filter and store the incoming data.",
        "outcome": "A working real-time pipeline handling 48MHz of incoming sensor data end to end."
      }
    },
    {
      "name": "EECS-151-TA",
      "displayName": "EECS 151 Teaching Assistant",
      "year": "2026",
      "highlight": "Digital circuit design course staff",
      "headline": "Running labs and rebuilding the FPGA toolchain for Berkeley's digital design course.",
      "summary": "As a teaching assistant for EECS 151, I run and develop labs for Berkeley's digital circuit design class, led the transition to new FPGA boards with new build flows, and added Linux RTOS support with UART and a shell as an extension to the RISC-V FPGA softcore final project.",
      "categories": [
        "hardware",
        "systems"
      ],
      "stack": [
        "Verilog",
        "FPGA",
        "RISC-V",
        "Teaching"
      ],
      "metrics": [
        {
          "value": "2x",
          "label": "Lab performance after new FPGA boards"
        },
        {
          "value": "Linux RTOS",
          "label": "New softcore extension"
        }
      ],
      "status": "Teaching",
      "note": "",
      "image": null,
      "links": {},
      "caseStudy": {
        "problem": "The class's FPGA boards and build flows were aging, and the RISC-V softcore final project had room for a more ambitious extension.",
        "approach": "I led the transition to new FPGA boards, set up new build flows and modules, and added Linux RTOS support with UART and a shell on top of the RISC-V softcore.",
        "outcome": "Roughly 2x lab performance on the new boards, and a new, more ambitious extension option for the final project."
      }
    },
    {
      "name": "Berkeley-Formula-Racing",
      "displayName": "Berkeley Formula Racing",
      "year": "2023",
      "highlight": "Formula SAE vehicle dynamics",
      "headline": "Simulation and aero work for a 120+ team competition racecar.",
      "summary": "As a Vehicle Dynamics member on Berkeley Formula Racing, I worked at the intersection of cars and CS \u2014 improving the team's simulation tooling and upgrading the aero model that informs mechanical design across the car.",
      "categories": [
        "systems",
        "hardware"
      ],
      "stack": [
        "Python",
        "Simulation",
        "Vehicle Dynamics",
        "Aerodynamics"
      ],
      "metrics": [
        {
          "value": "50%",
          "label": "Faster vehicle dynamics simulations"
        },
        {
          "value": "7",
          "label": "Subteams informed by the aero model"
        },
        {
          "value": "120+",
          "label": "Team Formula SAE competition"
        }
      ],
      "status": "Team",
      "note": "Team codebase isn't public \u2014 it's shared competition infrastructure, not something I can post independently.",
      "image": {
        "src": "assets/projects/formula-sae.jpg",
        "alt": "Berkeley Formula Racing SAE car",
        "fit": "cover",
        "caption": "The Berkeley Formula Racing car I helped design and simulate for."
      },
      "links": {},
      "caseStudy": {
        "problem": "The team's vehicle dynamics simulations were slow enough that they limited how many design iterations we could actually test before competition.",
        "approach": "I profiled and rewrote the slower parts of the simulation pipeline, and rebuilt the aero model so it could feed directly into mechanical design decisions across the car.",
        "outcome": "Simulations ran about 50% faster, and the updated aero model informed design across 7 subteams instead of staying siloed."
      }
    }
  ],
  "projects": [
    {
      "name": "Matrix-Calculator",
      "displayName": "Matrix Calculator",
      "year": "2020",
      "highlight": "From-scratch math tool",
      "headline": "A feature-rich matrix calculator built during a high school linear algebra class.",
      "summary": "A browser-based matrix calculator with 2D/3D visualizations, variable storage, expression parsing, and a wide set of matrix operations like RREF, eigenvectors, and LU factorization.",
      "categories": [
        "tools",
        "web"
      ],
      "stack": [
        "JavaScript",
        "HTML5 Canvas",
        "Linear Algebra"
      ],
      "metrics": [
        {
          "value": "2D/3D",
          "label": "Visualizations"
        },
        {
          "value": "10+",
          "label": "Matrix operations supported"
        },
        {
          "value": "Custom",
          "label": "Expression parser"
        }
      ],
      "status": "Additional",
      "note": "",
      "image": {
        "src": "https://live.staticflickr.com/5225/5639214967_e37009d248_b.jpg",
        "alt": "Matrix visualization",
        "fit": "contain",
        "caption": "2D/3D visualization output from the matrix calculator."
      },
      "links": {
        "demo": "https://matrix.advayratan.com"
      },
      "caseStudy": {
        "problem": "Most online matrix calculators only do one operation at a time and don't show any of the underlying geometry.",
        "approach": "I wrote my own expression parser and variable storage system, then layered matrix operations \u2014 RREF, eigenvectors, LU factorization, and more \u2014 on top with 2D/3D visualizations.",
        "outcome": "A tool I actually used to check my own linear algebra homework, that also visualizes what the operations are doing geometrically."
      }
    },
    {
      "name": "Time-Trial-Racing",
      "displayName": "Time Trial Racing",
      "year": "2019",
      "highlight": "Published browser game",
      "headline": "A 2D top-down racer with an independently built physics engine.",
      "summary": "A 2D top-down single-player racer published on the Chrome Web Store, made in HTML5 canvas with a physics engine I built myself rather than pulling in a library.",
      "categories": [
        "games",
        "web"
      ],
      "stack": [
        "JavaScript",
        "HTML5 Canvas",
        "Game Physics"
      ],
      "metrics": [
        {
          "value": "Chrome Web Store",
          "label": "Published extension"
        },
        {
          "value": "Custom",
          "label": "Physics engine"
        },
        {
          "value": "Real tracks",
          "label": "Rendered from satellite imagery"
        }
      ],
      "status": "Additional",
      "note": "",
      "image": {
        "src": "https://lh3.googleusercontent.com/e0ONEoXMZO3cldgXZdZNKjkWVMFVZfeCUlfV4JYxuHHYdfE9H7nDf_fgudPZKMSngHVGvrgPVq4PpLueszD2v1rx9A=w128-h128-e365",
        "alt": "Time Trial Racing icon",
        "fit": "contain",
        "caption": "Icon for the published Chrome Web Store racing game."
      },
      "links": {
        "demo": "https://chrome.google.com/webstore/detail/time-trial-racing/phfhalhmobjblhoajagaeodhofnopcbm?hl=en"
      },
      "caseStudy": {
        "problem": "I wanted a top-down racer with real tracks and handling that actually felt right, without leaning on an existing game engine.",
        "approach": "I built the rendering and physics directly in HTML5 canvas, and paired it with a separate satellite-imagery pipeline to generate realistic tracks like Spa-Francorchamps.",
        "outcome": "A published, playable racer on the Chrome Web Store with handling and tracks I built entirely from scratch."
      }
    },
    {
      "name": "3D-Renderer",
      "displayName": "3D Renderer",
      "year": "2019",
      "highlight": "From-scratch computer graphics",
      "headline": "A basic 3D file renderer built from scratch for a geometry class.",
      "summary": "A basic 3D file renderer (.STL) I created from scratch for a high school geometry class project, researching 3D-to-2D projections for screens and quaternions for rotations.",
      "categories": [
        "tools"
      ],
      "stack": [
        "JavaScript",
        "Computer Graphics",
        "Quaternions",
        "3D Projection"
      ],
      "metrics": [
        {
          "value": ".STL",
          "label": "File format support"
        },
        {
          "value": "Quaternions",
          "label": "Rotation math"
        },
        {
          "value": "From scratch",
          "label": "No graphics library"
        }
      ],
      "status": "Additional",
      "note": "",
      "image": null,
      "links": {
        "demo": "https://peg.advayratan.com"
      },
      "caseStudy": {
        "problem": "I wanted to actually understand how 3D graphics get onto a 2D screen instead of just using a library that hides the math.",
        "approach": "I researched and implemented 3D-to-2D projection and quaternion-based rotation myself, then built a renderer around it that could load .STL files.",
        "outcome": "A working from-scratch 3D renderer, and a much better handle on the geometry that most graphics libraries hide."
      }
    },
    {
      "name": "Satellite-Image-Generator",
      "displayName": "Satellite Image Generator",
      "year": "2019",
      "highlight": "Data tooling",
      "headline": "A script that pulls high-quality satellite imagery for track generation.",
      "summary": "A script to generate high quality satellite images from Google Maps, used to build realistic tracks like Spa-Francorchamps for Time Trial Racing.",
      "categories": [
        "tools"
      ],
      "stack": [
        "Python",
        "Google Maps",
        "Image Processing"
      ],
      "metrics": [
        {
          "value": "Real tracks",
          "label": "Generated from satellite imagery"
        },
        {
          "value": "Automated",
          "label": "Tiling & stitching"
        }
      ],
      "status": "Additional",
      "note": "",
      "image": {
        "src": "https://www.zerogravity.fi/wp-content/uploads/2019/11/satellite-data-e1572891876593-621x556.jpg",
        "alt": "Satellite imagery",
        "fit": "cover",
        "caption": "Satellite imagery pipeline used to build real-world race tracks."
      },
      "links": {
        "code": "https://github.com/ARtheboss/big-satellite-images"
      },
      "caseStudy": {
        "problem": "Time Trial Racing needed real-world tracks, but there wasn't a simple way to pull high-resolution satellite imagery for arbitrary locations.",
        "approach": "I wrote a script to tile and stitch high-quality satellite images from Google Maps into usable track backgrounds.",
        "outcome": "Realistic, real-world tracks like Spa-Francorchamps became possible in the racing game without hand-drawing anything."
      }
    },
    {
      "name": "Productive-New-Tab",
      "displayName": "Productive New Tab",
      "year": "2020",
      "highlight": "Personal productivity tool",
      "headline": "A modular new-tab extension built primarily for myself.",
      "summary": "A modular new tab page primarily designed for myself, with a todo list, variable backgrounds, variable color themes, a reading list, and notes \u2014 with more tools planned.",
      "categories": [
        "tools",
        "web"
      ],
      "stack": [
        "JavaScript",
        "Chrome Extensions",
        "Local Storage"
      ],
      "metrics": [
        {
          "value": "Modular",
          "label": "Widget-based layout"
        },
        {
          "value": "5+",
          "label": "Built-in tools"
        }
      ],
      "status": "Additional",
      "note": "",
      "image": {
        "src": "https://lh3.googleusercontent.com/Q2ZuQ3aJ8Dm3eBtg9UAKB7w9eACvru0YtBVf0tvDMQuKIS7wvFZDJshBBjHDe_sLFKNuR-Pv_0zll87CX3fzYfE9=w128-h128-e365",
        "alt": "Productive New Tab icon",
        "fit": "contain",
        "caption": "Icon for the Productive New Tab Chrome extension."
      },
      "links": {
        "demo": "https://chrome.google.com/webstore/detail/productivity-new-tab/dnnaopiaolaelpmcefbloemfnlhcdjlm?hl=en&authuser=2"
      },
      "caseStudy": {
        "problem": "I wanted a new-tab page that actually helped me stay organized instead of just showing a search bar.",
        "approach": "I built it as separate modular widgets \u2014 todo list, backgrounds, themes, reading list, notes \u2014 so I could add more tools over time.",
        "outcome": "A new-tab page I use daily, with room to keep adding tools as I need them."
      }
    },
    {
      "name": "House-SAS",
      "displayName": "House SAS",
      "year": "2020",
      "highlight": "School platform",
      "headline": "A full platform for my high school's house system.",
      "summary": "Created a platform for my high school's house system, built with PHP and JavaScript. Includes a full admin page to edit settings.",
      "categories": [
        "web"
      ],
      "stack": [
        "PHP",
        "JavaScript",
        "MySQL"
      ],
      "metrics": [
        {
          "value": "Admin panel",
          "label": "Full settings management"
        }
      ],
      "status": "Additional",
      "note": "",
      "image": {
        "src": "assets/projects/house-sas.png",
        "alt": "House SAS platform screenshot",
        "fit": "cover",
        "caption": "The house system platform used by my high school."
      },
      "links": {
        "demo": "https://house-sas.com"
      },
      "caseStudy": {
        "problem": "My high school's house system had no central place to track points or manage settings.",
        "approach": "I built a PHP/JavaScript platform with a full admin page so staff could edit settings without touching code.",
        "outcome": "A platform the school actually adopted and used to run its house system."
      }
    },
    {
      "name": "Corruption-Simulator",
      "displayName": "Corruption Simulator",
      "year": "2018",
      "highlight": "Educational game",
      "headline": "A choose-your-own-adventure game that teaches players about corruption.",
      "summary": "A 'choose your own adventure' game to teach users about corruption, created as a world history final project in 9th grade.",
      "categories": [
        "games",
        "web"
      ],
      "stack": [
        "JavaScript",
        "HTML/CSS",
        "Interactive Fiction"
      ],
      "metrics": [
        {
          "value": "9th grade",
          "label": "World history final project"
        }
      ],
      "status": "Additional",
      "note": "",
      "image": {
        "src": "assets/projects/corruptionsim.png",
        "alt": "Corruption Simulator screenshot",
        "fit": "cover",
        "caption": "Scene from the choose-your-own-adventure corruption simulator."
      },
      "links": {
        "demo": "https://corruptionsim.advayratan.com"
      },
      "caseStudy": {
        "problem": "A history final project needed to teach the mechanics of corruption in a way that was more engaging than a paper.",
        "approach": "I built an interactive choose-your-own-adventure game where each decision reflects a real consequence of corrupt behavior.",
        "outcome": "A playable teaching tool instead of a static essay, built entirely for a class project."
      }
    },
    {
      "name": "SpaceApps-Quiz-Game",
      "displayName": "SpaceApps Quiz Game",
      "year": "2019",
      "highlight": "NASA hackathon",
      "headline": "A quiz game built at NASA SpaceApps 2019 using real NASA data.",
      "summary": "A quiz game created for the NASA SpaceApps 2019 hackathon. Utilizes NASA data to see how good your geographical and demographic knowledge is.",
      "categories": [
        "games"
      ],
      "stack": [
        "JavaScript",
        "NASA Open Data"
      ],
      "metrics": [
        {
          "value": "NASA SpaceApps 2019",
          "label": "Hackathon project"
        },
        {
          "value": "Real NASA data",
          "label": "Geographic & demographic quiz"
        }
      ],
      "status": "Additional",
      "note": "",
      "image": {
        "src": "assets/projects/spaceapps.png",
        "alt": "SpaceApps Quiz Game screenshot",
        "fit": "cover",
        "caption": "Quiz game built at the NASA SpaceApps 2019 hackathon."
      },
      "links": {
        "demo": "https://spaceapps.advayratan.com/"
      },
      "caseStudy": {
        "problem": "NASA's open datasets are rich but not very approachable for a general audience in a short hackathon window.",
        "approach": "I built a quiz game that turns real NASA geographic and demographic data into questions testing players' knowledge.",
        "outcome": "A finished, playable hackathon project that makes NASA data genuinely engaging."
      }
    },
    {
      "name": "SAS-PES",
      "displayName": "SAS PES",
      "year": "2020",
      "highlight": "Gradebook enhancement",
      "headline": "An enhancement for my school's gradebook, used by hundreds of students.",
      "summary": "The only project here not initiated by me \u2014 an enhancement for my school's gradebook used by hundreds of students. I contributed features including a way to see the impact of future grades and exemptions based on weighting.",
      "categories": [
        "tools",
        "web"
      ],
      "stack": [
        "JavaScript",
        "Chrome Extensions",
        "PowerSchool"
      ],
      "metrics": [
        {
          "value": "Hundreds",
          "label": "Students using the extension"
        },
        {
          "value": "Grade forecasting",
          "label": "Weighted exemption impact"
        }
      ],
      "status": "Additional",
      "note": "",
      "image": {
        "src": "https://lh3.googleusercontent.com/m8Eq6Isft3fbqry31uz9zN4IyQkIWorJl9sGe74uw64hNshd4LoMD-kNtk08XvaFxv_M6dbba8uHXNE99soOx450Wg=w128-h128-e365-rj-sc0x00ffffff",
        "alt": "SAS PES icon",
        "fit": "contain",
        "caption": "Icon for the SAS Powerschool Enhancement extension."
      },
      "links": {
        "demo": "https://chrome.google.com/webstore/detail/sas-powerschool-enhanceme/ehnkngeidilnoabcjjimkomcggndbhnk?hl=en"
      },
      "caseStudy": {
        "problem": "Students had no easy way to see how a future grade or an exemption would actually affect their weighted average.",
        "approach": "I contributed features that project the impact of future grades and exemptions directly in the gradebook interface.",
        "outcome": "An extension used by hundreds of students at my school to plan out their grades ahead of time."
      }
    },
    {
      "name": "Nugit",
      "displayName": "Nugit",
      "year": "2021",
      "highlight": "Software engineering internship",
      "headline": "A paid internship building data pipelines with Apache Airflow.",
      "summary": "Interviewed and obtained a paid internship during summer, and worked on building data pipelines with Apache Airflow that pulled big data from APIs to be aggregated and presented in visual forms.",
      "categories": [
        "systems",
        "tools"
      ],
      "stack": [
        "Python",
        "Apache Airflow",
        "APIs",
        "Data Visualization"
      ],
      "metrics": [
        {
          "value": "Paid internship",
          "label": "Software Engineering Intern"
        }
      ],
      "status": "Additional",
      "note": "",
      "image": {
        "src": "https://www.datocms-assets.com/6862/1534928447-favicon256.png",
        "alt": "Nugit logo",
        "fit": "contain",
        "caption": "Nugit, the company where I interned as a software engineer."
      },
      "links": {
        "demo": "https://nugit.co/"
      },
      "caseStudy": {
        "problem": "Nugit needed to pull large volumes of data from multiple APIs and turn it into something teams could actually visualize.",
        "approach": "I built data pipelines with Apache Airflow that aggregated data from external APIs into presentable, visual formats.",
        "outcome": "Working pipelines that fed real reporting tools, and my first paid software engineering experience."
      }
    },
    {
      "name": "GlobeSisters",
      "displayName": "GlobeSisters",
      "year": "2022",
      "highlight": "Startup internship",
      "headline": "Early app development for a solo-woman traveler homestay startup.",
      "summary": "GlobeSisters is an early-stage startup creating a safe homestay community for solo-woman travelers. I worked on the early version of the Flutter/Dart app with three other developers.",
      "categories": [
        "web",
        "tools"
      ],
      "stack": [
        "Flutter",
        "Dart",
        "Mobile Development"
      ],
      "metrics": [
        {
          "value": "Early-stage startup",
          "label": "Software Engineering Intern"
        },
        {
          "value": "4",
          "label": "Developer team"
        }
      ],
      "status": "Additional",
      "note": "",
      "image": {
        "src": "https://static.wixstatic.com/media/e4ff45_69d8a58f63364de1b9aaf2c7251dcfbd~mv2.png/v1/crop/x_0,y_0,w_586,h_267/fill/w_202,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e4ff45_69d8a58f63364de1b9aaf2c7251dcfbd~mv2.png",
        "alt": "GlobeSisters logo",
        "fit": "contain",
        "caption": "GlobeSisters, a homestay startup for solo-woman travelers."
      },
      "links": {
        "demo": "https://www.globesisters.com"
      },
      "caseStudy": {
        "problem": "GlobeSisters needed an early mobile app to support its homestay community before the product had a dedicated engineering team.",
        "approach": "I worked with three other developers building out the early version of the app in Flutter/Dart.",
        "outcome": "A working early build of the app that the founding team used to keep moving the product forward."
      }
    },
    {
      "name": "Fusician",
      "displayName": "Fusician",
      "year": "2021",
      "highlight": "Social music app",
      "headline": "A social app with a built-in DAW to help amateur musicians collaborate.",
      "summary": "A social-media style app to help amateur musicians. Includes a basic Digital Audio Workstation that is beginner friendly, and ways to share and collaborate on music. Created with Flutter and a Django backend.",
      "categories": [
        "web",
        "tools"
      ],
      "stack": [
        "Flutter",
        "Dart",
        "Django",
        "Audio Processing"
      ],
      "metrics": [
        {
          "value": "Built-in DAW",
          "label": "Beginner-friendly audio workstation"
        },
        {
          "value": "Social + collab",
          "label": "Sharing and collaboration tools"
        }
      ],
      "status": "Additional",
      "note": "",
      "image": null,
      "links": {
        "demo": "https://www.linkedin.com/company/66355579/admin/"
      },
      "caseStudy": {
        "problem": "Amateur musicians often don't have a simple, social way to make music together and share what they're working on.",
        "approach": "I built a Flutter app with a lightweight, beginner-friendly DAW, backed by a Django API, with social sharing and collaboration features layered on top.",
        "outcome": "A working prototype that combined a real audio tool with the social layer that most music apps skip."
      }
    },
    {
      "name": "Ambition-Website",
      "displayName": "Ambition Website",
      "year": "2020",
      "highlight": "E-commerce site",
      "headline": "A WordPress store built for a classmate's clothing brand.",
      "summary": "WordPress e-commerce site created for a classmate's clothing brand.",
      "categories": [
        "web"
      ],
      "stack": [
        "WordPress",
        "PHP",
        "E-commerce"
      ],
      "metrics": [],
      "status": "Additional",
      "note": "",
      "image": {
        "src": "https://i0.wp.com/ambitionclothing.net/wp-content/uploads/2021/02/Ambition-Earth-1.png?resize=300%2C280&ssl=1",
        "alt": "Ambition clothing brand logo",
        "fit": "contain",
        "caption": "Storefront branding for the Ambition clothing e-commerce site."
      },
      "links": {
        "demo": "http://ambitionclothing.net/"
      },
      "caseStudy": {
        "problem": "A classmate needed a real storefront to actually sell a new clothing brand online.",
        "approach": "I built and configured a WordPress e-commerce site with product listings and checkout.",
        "outcome": "A live store the brand could point customers to and start taking orders through."
      }
    },
    {
      "name": "SaZa-Website",
      "displayName": "SaZa Website",
      "year": "2021",
      "highlight": "E-commerce site",
      "headline": "A WordPress store built for a family friend's greeting card business.",
      "summary": "WordPress e-commerce site created for a family friend's greeting and gifting card business.",
      "categories": [
        "web"
      ],
      "stack": [
        "WordPress",
        "PHP",
        "E-commerce"
      ],
      "metrics": [],
      "status": "Additional",
      "note": "",
      "image": {
        "src": "https://i0.wp.com/sazadesigns.com/wp-content/uploads/2020/12/cropped-MediumSquareLogo.png?w=400&ssl=1",
        "alt": "SaZa Designs logo",
        "fit": "contain",
        "caption": "Branding for the SaZa Designs greeting and gifting card store."
      },
      "links": {
        "demo": "http://sazadesigns.com/"
      },
      "caseStudy": {
        "problem": "A family friend's greeting and gifting card business needed an online storefront.",
        "approach": "I built a WordPress e-commerce site tailored to their product catalog and branding.",
        "outcome": "A working store that let the business start selling cards and gifts online."
      }
    }
  ]
};
