import { useState, useEffect } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';


const Home = () => {
  const [displayText, setDisplayText] = useState('');

  const skills = [
    'Red Team Operations',
    'Penetration Testing',
    'Malware Development',
    'Active Directory Attacks',
    'Web Application Security',
    'Reverse Engineering'
  ];

  const stats = [
    { label: 'Completed Challenges', value: '300+', icon: 'fas fa-server' },
    { label: 'CVE Discovered', value: '1', icon: 'fas fa-bug' },
    { label: 'Certifications', value: '6+', icon: 'fas fa-certificate' },
    { label: 'Years Experience', value: '3+', icon: 'fas fa-clock' }
  ];

  const certifications = [
    { name: 'OSCP', desc: 'Offensive Security Certified Professional', year: '2023' },
    { name: 'CRTL', desc: 'Certified Red Team Lead', year: '2024' },
    { name: 'CRTE', desc: 'Certified Red Team Expert', year: '2025' },
    { name: 'CRTO', desc: 'Certified Red Team Operator', year: '2023' },
    { name: 'BSCP', desc: 'Burpsuite Certified Practitioner', year: '2024' }
  ];

  useEffect(() => {
    let isCancelled = false;

    const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

    const runTyping = async () => {
        let index = 0;

        while (!isCancelled) {
        const currentSkill = skills[index];

        for (let i = 1; i <= currentSkill.length; i++) {
            if (isCancelled) return;
            setDisplayText(currentSkill.slice(0, i));
            await sleep(150);
        }

        await sleep(2000);

        for (let i = currentSkill.length; i >= 0; i--) {
            if (isCancelled) return;
            setDisplayText(currentSkill.slice(0, i));
            await sleep(100);
        }

        index = (index + 1) % skills.length;
        }
    };

    runTyping();

    return () => { isCancelled = true };
    }, []);

  return (
    <div className="home-container">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="control close"></span>
          <span className="control minimize"></span>
          <span className="control maximize"></span>
        </div>
        <span className="terminal-title">kr4k3n@cybersec:~$ ./initialize_profile</span>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">
              <span className="prompt">root@cybersec:~$</span>
              <span className="command">whoami</span>
            </div>
            
            <h1 className="hero-title">
              <span className="accent-text">[</span>
              Iñaki Tornos Portugal
              <span className="accent-text">]</span>
            </h1>
            
            <div className="typing-container">
              <span className="role-label">Specialized in: </span>
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description">
              Cybersecurity & Red Team Specialist currently working at <strong>Airbus SAU</strong> with expertise in 
              penetration testing, malware development, and advanced threat simulation. 
              Passionate about breaking defenses to build stronger security.
            </p>

            <div className="hero-actions">
              <Link to="/Kr4k3n/contact" className="cta-button primary">
                <i className="fas fa-terminal"></i>
                Establish Connection
              </Link>
              <Link to="/Kr4k3n/blog" className="cta-button secondary">
                <i className="fas fa-code"></i>
                View Projects
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="terminal-window">
              <div className="terminal-content">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="code">class <span className="class-name">CybersecExpert</span>:</span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="code">​​​​ ​ ​ ​ ​def __init__(self):</span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="code">​​​​ ​ ​ ​ ​​​​ ​ ​ ​ self.name = "<span className="string">Iñaki Tornos</span>"</span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="code">​​​​ ​ ​ ​ ​​​​ ​ ​ ​ self.role = "<span className="string">Red Team Lead</span>"</span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="code">​​​​ ​ ​ ​ ​​​​ ​ ​ ​ self.certifications = [</span>
                </div>
                <div className="code-line">
                  <span className="line-number">6</span>
                  <span className="code">​​​​ ​ ​ ​ ​​​​ ​ ​ ​ ​​​​ ​ ​ ​ "<span className="string">OSCP</span>", "<span className="string">CRTL</span>", "<span className="string">CRTE</span>", "<span className="string">BSCP</span>", "<span className="string">CRTO</span>"</span>
                </div>
                <div className="code-line">
                  <span className="line-number">7</span>
                  <span className="code">​​​​ ​ ​ ​ ​​​​ ​ ​ ​ ]</span>
                </div>
                <div className="code-line">
                  <span className="line-number">8</span>
                  <span className="code">​​​​ ​ ​ ​ ​​​​ ​ ​ ​ self.status = "<span className="string success">ONLINE</span>"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <h2 className="section-title">
            <span className="prompt">root@stats:~$</span>
            <span className="command">./query_achievements.sh</span>
          </h2>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="certs-container">
          <h2 className="section-title">
            <span className="prompt">root@certs:~$</span>
            <span className="command">ls -la /credentials/</span>
          </h2>
          
          <div className="certs-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-header">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-year">{cert.year}</div>
                </div>
                <div className="cert-desc">{cert.desc}</div>
                <div className="cert-status">
                  <i className="fas fa-shield-alt"></i>
                  <span>Certified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="experience-preview">
        <div className="experience-container">
          <h2 className="section-title">
            <span className="prompt">root@experience:~$</span>
            <span className="command">cat current_position.txt</span>
          </h2>
          
          <div className="experience-cards">
            <div className="exp-card current">
              <div className="company-header">
                <div className="company-info">
                  <h3>Airbus Secure Land Communications</h3>
                  <p className="position">Cybersecurity Software Developer</p>
                  <p className="duration">March 2025 - Present</p>
                </div>
                <div className="status-badge">
                  <span className="status-dot"></span>
                  Current
                </div>
              </div>
              <ul className="responsibilities">
                <li>Design and implementation of cybersecurity projects</li>
                <li>Collaboration with CyberRange team in R&D programs</li>
                <li>Leadership of training sessions and CTF challenges</li>
              </ul>
            </div>
            
            <div className="exp-card">
              <div className="company-header">
                <div className="company-info">
                  <h3>Mando Conjunto de Ciberdefensa</h3>
                  <p className="position">Offensive Cybersecurity Instructor</p>
                  <p className="duration">July 2024 - Present</p>
                </div>
              </div>
              <ul className="responsibilities">
                <li>Teaching military personnel on penetration testing</li>
                <li>Red Team operations and offensive cybersecurity</li>
                <li>Incident response and malware analysis</li>
              </ul>
            </div>
          </div>

          <div className="cta-section">
            <Link to="/Kr4k3n/about" className="learn-more-btn">
              <i className="fas fa-user-circle"></i>
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Secure Your Digital Assets?</h2>
            <p>Let's collaborate on cybersecurity projects and strengthen your defense mechanisms.</p>
            <Link to="/Kr4k3n/contact" className="contact-cta-btn">
              <i className="fas fa-shield-alt"></i>
              Initialize Secure Connection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;