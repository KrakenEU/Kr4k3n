import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('company', formData.company);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('_subject', 'New Contact from CyberSec Portfolio');
    formDataToSend.append('_autoresponse', "Thank you for your message! I'll get back to you within 24 hours.");
    formDataToSend.append('_template', 'table');

    try {
      const response = await fetch('https://formsubmit.co/ajax/efe3516b687e7af1e32aae6fbca0b140', {
        method: 'POST',
        headers: { "Accept": "application/json" },
        body: formDataToSend
      });

      if (response.ok) {
        setSuccessMessage('✅ Your message has been sent!');
        setFormData({ name: '', email: '', subject: '', message: '', company: '' });
      } else {
        setSuccessMessage('❌ There was an error sending your message.');
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage('❌ There was an error sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="contact-container">
      <div className="contact-header">
        <div className="terminal-prompt">
          <span className="prompt-symbol">root@cybersec:~$</span>
          <span className="prompt-command">./contact --init</span>
        </div>
        <h1 className="contact-title">
          <span className="title-accent">[</span>
          ESTABLISH_CONNECTION
          <span className="title-accent">]</span>
        </h1>
        <p className="contact-subtitle">
          Ready to collaborate on cybersecurity projects? Let's establish a secure connection.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="card-header">
              <i className="fas fa-terminal"></i>
              <h3>System Information</h3>
            </div>
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Status:</span>
                <span className="info-value status-online">ONLINE</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Global Network</span>
              </div>
              <div className="info-item">
                <span className="info-label">Specialization:</span>
                <span className="info-value">Red Team Operations</span>
              </div>
              <div className="info-item">
                <span className="info-label">Response Time:</span>
                <span className="info-value">&lt; 24hrs</span>
              </div>
            </div>
          </div>

          <div className="contact-methods">
            <h3>Alternative Channels</h3>
            <div className="method-item">
              <i className="fab fa-github"></i>
              <span>
                <a href='https://github.com/KrakenEU'>GitHub</a>
              </span>
            </div>
            <div className="method-item">
              <i className="fab fa-linkedin"></i>
              <span>
                <a href="https://es.linkedin.com/in/i%C3%B1aki-tornos-572580177/en">LinkedIn</a>
              </span>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="form-header">
            <div className="window-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <span className="window-title">secure_message.exe</span>
          </div>

          <form 
            action="https://formsubmit.co/ajax/efe3516b687e7af1e32aae6fbca0b140" 
            method="POST"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {/* FormSubmit configuration fields */}
            <input type="hidden" name="_subject" value="New Contact from CyberSec Portfolio" />
            <input type="hidden" name="_autoresponse" value="Thank you for your message! I'll get back to you within 24 hours." />
            <input type="hidden" name="_template" value="table" />
            
            <div className="form-grid">
              <div className="input-group">
                <label htmlFor="name" className="input-label">
                  <i className="fas fa-user"></i>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  <i className="fas fa-envelope"></i>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="company" className="input-label">
                  <i className="fas fa-building"></i>
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your company or organization"
                />
              </div>

              <div className="input-group">
                <label htmlFor="subject" className="input-label">
                  <i className="fas fa-tag"></i>
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Penetration Testing">Penetration Testing</option>
                  <option value="Red Team Assessment">Red Team Assessment</option>
                  <option value="Security Consulting">Security Consulting</option>
                  <option value="Collaboration">Collaboration Opportunity</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="input-group full-width">
              <label htmlFor="message" className="input-label">
                <i className="fas fa-comment-dots"></i>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input form-textarea"
                placeholder="Describe your project, requirements, or how we can collaborate..."
                required
              ></textarea>
            </div>

            <div className="form-footer">
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>

            {successMessage && (
              <p className="success-message" style={{ marginTop: '1rem', textAlign: 'center' }}>
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="contact-footer">
        <div className="footer-grid">
          <div className="footer-item">
            <i className="fas fa-clock"></i>
            <div>
              <h4>Response Time</h4>
              <p>Usually within 24 hours</p>
            </div>
          </div>
          <div className="footer-item">
            <i className="fas fa-globe"></i>
            <div>
              <h4>Global Availability</h4>
              <p>Remote collaboration worldwide</p>
            </div>
          </div>
          <div className="footer-item">
            <i className="fas fa-handshake"></i>
            <div>
              <h4>Professional Ethics</h4>
              <p>Confidential & secure discussions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;