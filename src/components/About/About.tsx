import { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const experiences = [
    {
      company: "Airbus Secure Land Communications, S.A.U",
      position: "Cybersecurity Software Developer",
      duration: "March 2025 - Present",
      location: "Madrid, Spain",
      responsibilities: [
        "Design and implementation of cybersecurity projects at local level",
        "Development of innovative architectures to demonstrate recent vulnerabilities",
        "Collaboration with CyberRange team in R&D programs for cybersecurity technologies",
        "Software integration in Linux and Windows OS",
        "Leadership of training sessions and CTF challenges"
      ],
      current: true
    },
    {
      company: "Mando Conjunto de Ciberdefensa",
      position: "Offensive Cybersecurity Instructor",
      duration: "July 2024 - Present",
      location: "Madrid, Spain",
      responsibilities: [
        "Teaching military personnel on Basic Pentesting",
        "Web/API Pentesting instruction",
        "Red Team operations training",
        "Offensive Cybersecurity methodologies",
        "Incident Response appliance training",
        "Malware analysis and reverse engineering"
      ],
      current: true
    },
    {
      company: "Audea / El Corte Inglés",
      position: "Red Team Consultant",
      duration: "August 2024 - March 2025",
      location: "Madrid, Spain",
      responsibilities: [
        "Penetration testing and cyber attack simulations",
        "Vulnerability Assessment and exploitation",
        "Malware Analysis and Reverse Engineering",
        "Social Engineering campaigns",
        "Comprehensive reporting and recommendations"
      ]
    },
    {
      company: "AzertiumIT / CocaCola Europacific Partners",
      position: "Cybersecurity Analyst",
      duration: "April 2024 - August 2024",
      location: "Remote",
      responsibilities: [
        "Part of CCEP Cybersecurity AppSec Team",
        "Penetration Testing – Security Assessments",
        "100% English – International Project",
        "Web/API, iOS/Android, Desktop Apps pentesting",
        "Innovation Coding Projects using Python and advanced Git usage"
      ]
    },
    {
      company: "NTT Data",
      position: "Penetration Tester",
      duration: "September 2023 - April 2024",
      location: "Madrid, Spain",
      responsibilities: [
        "Vulnerability Assessments expertise",
        "Web Penetration Testing focus",
        "API Testing specialization",
        "Inditex Development Verification testing",
        "Mobile penetration testing"
      ]
    },
    {
      company: "SENER",
      position: "Cybersecurity Expert",
      duration: "June 2022 - September 2023",
      location: "Madrid, Spain",
      responsibilities: [
        "Python/bash/C scripting and penetration testing",
        "Cybersecurity analysis and assessment",
        "Cybersecurity framework development in railway environments"
      ]
    }
  ];

  const certifications = [
    {
      name: "OSCP",
      fullName: "Offensive Security Certified Professional",
      year: "2023",
      description: "Advanced exploitation techniques, custom exploit development, Active Directory attacks, comprehensive reporting"
    },
    {
      name: "CRTL",
      fullName: "Certified Red Team Lead",
      year: "2024",
      description: "Active Directory, C2 Infrastructure, EDR Evasion, WINAPI for Malware Development, WDAC and ASR"
    },
    {
      name: "CRTE",
      fullName: "Certified Red Team Expert",
      year: "2025",
      description: "Advanced AD tradecraft, modern defense evasion, Kerberos attacks, C2 framework integration"
    },
    {
      name: "CRTO",
      fullName: "Certified Red Team Operator",
      year: "2023",
      description: "Active Directory, initial access techniques, C2 operations, lateral movement, persistence mechanisms"
    },
    {
      name: "BSCP",
      fullName: "Burpsuite Certified Practitioner",
      year: "2024",
      description: "Web application security testing, manual and automated testing, custom scripting with Burp Suite"
    },
    {
      name: "Cambridge C1",
      fullName: "Cambridge Advanced Exam",
      year: "2018",
      description: "High proficiency in English language for international cybersecurity projects"
    }
  ];

  const skills = {
    "Programming Languages": ["C++", "C", "Python", "Rust", "Bash", "React"],
    "Cybersecurity Specialties": [
      "Red Team Operations",
      "Penetration Testing",
      "Malware Development",
      "Malware Analysis & Reverse Engineering",
      "Active Directory Exploitation",
      "Web/API Security Testing"
    ],
    "Tools & Platforms": [
      "Burpsuite Pro",
      "Cobalt Strike & Havoc C2",
      "Project Discovery Tools",
      "Frida & Android Studio",
      "DefectDojo & Jira",
      "HTB (160+ machines)"
    ],
    "Advanced Techniques": [
      "BOF Development",
      "EDR Evasion",
      "Custom Beacon Object Files",
      "Vulnerability Research",
      "CTF Competitions",
      "Social Engineering"
    ]
  };

  const achievements = [
    {
      title: "12th Place in Fifth National Cyber League Final",
      description: "Spanish National CyberLeague focused on CTF realistic challenges including forensics and hardware hacking",
      date: "November 2023",
      icon: "fas fa-trophy"
    },
    {
      title: "CVE Discovery",
      description: "Discovered and reported a Common Vulnerabilities and Exposures (CVE)",
      date: "2024",
      icon: "fas fa-bug"
    },
    {
      title: "Cybersecurity Course at EUDE Business School",
      description: "Taught cybersecurity concepts and practices to business school students",
      date: "December 2023",
      icon: "fas fa-graduation-cap"
    },
    {
      title: "CTF Team Founder",
      description: "Founded and lead a competitive CTF team participating in international competitions",
      date: "Ongoing",
      icon: "fas fa-users"
    }
  ];

  return (
    <div className="about-container">
      {/* Header Section */}
      <div className="about-header">
        <div className="terminal-prompt">
          <span className="prompt-symbol">root@profile:~$</span>
          <span className="prompt-command">cat /home/inaki/about.txt</span>
        </div>
        <h1 className="about-title">
          <span className="title-accent">[</span>
          CYBERSEC_PROFILE
          <span className="title-accent">]</span>
        </h1>
        <p className="about-subtitle">
          Passionate Cybersecurity Engineer & Red Team Specialist with expertise in 
          breaking defenses to build stronger security systems.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <i className="fas fa-user"></i>
          Overview
        </button>
        <button 
          className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          <i className="fas fa-briefcase"></i>
          Experience
        </button>
        <button 
          className={`tab-button ${activeTab === 'certifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('certifications')}
        >
          <i className="fas fa-certificate"></i>
          Certifications
        </button>
        <button 
          className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          <i className="fas fa-code"></i>
          Skills
        </button>
        <button 
          className={`tab-button ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          <i className="fas fa-award"></i>
          Achievements
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="overview-content">
            <div className="overview-grid">
              <div className="bio-section">
                <h2>
                  <i className="fas fa-terminal"></i>
                  Personal Summary
                </h2>
                <p>
                  I am a passionate Cybersecurity Engineer and Red Teamer with high proficiency in English (C1), 
                  holding certifications in OSCP, BSCP, CRTL, and CRTO with 1 CVE discovery. I have a deep interest 
                  in malware, the unknown, and complex vulnerabilities that are challenging to exploit.
                </p>
                <p>
                  I specialize in red teaming, adversary emulation, penetration testing, and threat research. 
                  I am dedicated to staying at the forefront of cybersecurity trends to provide cutting-edge solutions. 
                  I thrive on breaking defenses to build stronger security and continuously evolving my skill set 
                  to stay ahead of emerging threats.
                </p>
              </div>

              <div className="quick-facts">
                <h2>
                  <i className="fas fa-info-circle"></i>
                  Quick Facts
                </h2>
                <div className="fact-grid">
                  <div className="fact-item">
                    <span className="fact-label">Location:</span>
                    <span className="fact-value">Madrid, Spain</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">Current Role:</span>
                    <span className="fact-value">Cybersecurity Software Developer</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">Company:</span>
                    <span className="fact-value">Airbus SAU</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">Education:</span>
                    <span className="fact-value">Cybersecurity Management Degree</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">GPA:</span>
                    <span className="fact-value">3.5/4.0 (8.1/10)</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">Languages:</span>
                    <span className="fact-value">Spanish (Native), English (C1)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h2>
                <i className="fas fa-graduation-cap"></i>
                Education
              </h2>
              <div className="education-card">
                <div className="education-header">
                  <h3>Universidad Francisco de Vitoria</h3>
                  <span className="education-duration">September 2020 – May 2024</span>
                </div>
                <p className="education-degree">Cybersecurity Management Degree</p>
                <div className="education-details">
                  <div className="detail-item">
                    <i className="fas fa-star"></i>
                    <span>GPA: 3.5/4.0 with average grade of 8.1/10</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-award"></i>
                    <span>Honors in Programming II & Operating Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="experience-content">
            <h2 className="section-title">
              <i className="fas fa-briefcase"></i>
              Professional Experience
            </h2>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className={`timeline-item ${exp.current ? 'current' : ''}`}>
                  <div className="timeline-marker">
                    {exp.current && <div className="pulse-dot"></div>}
                  </div>
                  <div className="timeline-content">
                    <div className="job-header">
                      <div className="job-info">
                        <h3>{exp.company}</h3>
                        <h4>{exp.position}</h4>
                        <div className="job-meta">
                          <span className="duration">
                            <i className="fas fa-calendar"></i>
                            {exp.duration}
                          </span>
                          <span className="location">
                            <i className="fas fa-map-marker-alt"></i>
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      {exp.current && (
                        <div className="current-badge">
                          <span className="status-dot"></span>
                          Current
                        </div>
                      )}
                    </div>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="certifications-content">
            <h2 className="section-title">
              <i className="fas fa-certificate"></i>
              Professional Certifications
            </h2>
            <div className="certs-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-detailed-card">
                  <div className="cert-header">
                    <div className="cert-badge">
                      <div className="cert-name">{cert.name}</div>
                      <div className="cert-year">{cert.year}</div>
                    </div>
                    <i className="fas fa-shield-alt cert-icon"></i>
                  </div>
                  <h3 className="cert-full-name">{cert.fullName}</h3>
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-status">
                    <i className="fas fa-check-circle"></i>
                    <span>Certified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="skills-content">
            <h2 className="section-title">
              <i className="fas fa-code"></i>
              Technical Skills & Expertise
            </h2>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h3 className="category-title">{category}</h3>
                  <div className="skills-list">
                    {skillList.map((skill, idx) => (
                      <div key={idx} className="skill-tag">
                        <i className="fas fa-terminal"></i>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="platforms-section">
              <h3>
                <i className="fas fa-laptop-code"></i>
                Specialized Platforms & Labs
              </h3>
              <div className="platforms-grid">
                <div className="platform-card">
                  <i className="fas fa-cube"></i>
                  <a href='https://app.hackthebox.com/profile/765207'><h4>Hack The Box</h4></a>
                  <p>160+ Machines Completed</p>
                  <div className="labs-completed">
                    <span>Pro Labs: Offshore, Rasta, Zephyr, Dante</span>
                  </div>
                </div>
                <div className="platform-card">
                  <i className="fas fa-flask"></i>
                  <h4>Vulnlab</h4>
                  <p>Advanced Challenge Labs</p>
                  <div className="labs-completed">
                    <span>Red Team Labs: Ifrit, Wutai, Shinra</span>
                  </div>
                </div>
                <div className="platform-card">
                  <i className="fas fa-github"></i>
                  <a href="https://github.com/KrakenEU"><h4>Active Projects</h4></a>
                  <p>Research & Development</p>
                  <div className="labs-completed">
                    <span>PenKraken - Custom pentesting tool</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="achievements-content">
            <h2 className="section-title">
              <i className="fas fa-award"></i>
              Achievements & Recognition
            </h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    <i className={achievement.icon}></i>
                  </div>
                  <div className="achievement-content">
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                    <div className="achievement-date">
                      <i className="fas fa-calendar"></i>
                      {achievement.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="projects-section">
              <h3>
                <i className="fas fa-project-diagram"></i>
                Notable Projects & Contributions
              </h3>
              <div className="projects-grid">
                <div className="project-card">
                  <h4>
                    <i className="fas fa-blog"></i>
                    <Link to="/Kr4k3n/blog">Cybersecurity Blog</Link>
                  </h4>
                  Technical blog sharing research, methodologies, and cybersecurity insights
                  <div className="project-tags">
                    <span>Research</span>
                    <span>Education</span>
                    <span>Community</span>
                  </div>
                </div>
                <div className="project-card">
                  <h4>
                    <i className="fas fa-tools"></i>
                    <a href='https://github.com/KrakenEU/PenKraken'>PenKraken Tool</a>
                  </h4>
                  <p>Custom penetration testing automation tool developed from scratch in Python</p>
                  <div className="project-tags">
                    <span>Python</span>
                    <span>Automation</span>
                    <span>Pentesting</span>
                  </div>
                </div>
                <div className="project-card">
                  <h4>
                    <i className="fas fa-users"></i>
                    <a href='https://ctftime.org/team/224097'>CTF Team Leadership</a>
                  </h4>
                  <p>Founded and lead competitive CTF team participating in national and international events</p>
                  <div className="project-tags">
                    <span>Leadership</span>
                    <span>Competition</span>
                    <span>Teamwork</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="about-cta">
        <div className="cta-content">
          <h2>Ready to Collaborate?</h2>
          <p>Let's discuss cybersecurity projects and strengthen your digital infrastructure.</p>
          <Link to="/Kr4k3n/contact" className="contact-btn">
            <i className="fas fa-envelope"></i>
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;