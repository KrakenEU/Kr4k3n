import { useState } from 'react';
import './Coaching.css';

const Coaching = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    language: 'english',
    goals: '',
    timeframe: '',
    availability: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Traducciones
  const translations = {
    english: {
      // Header
      title: "1:1_CYBERSEC_COACHING",
      subtitle: "Personalized cybersecurity training with industry expert. Level up your skills through hands-on mentorship and real-world scenarios.",
      
      // Language selector
      chooseLanguage: "Choose Your Learning Language",
      englishCoaching: "English Coaching",
      spanishCoaching: "Coaching en Español",
      
      // Services
      servicesTitle: "ls -la /coaching_programs/",
      services: [
        {
          title: "Penetration Testing Fundamentals",
          duration: "8-12 weeks",
          description: "Master the fundamentals of ethical hacking and penetration testing",
          topics: ["Network reconnaissance", "Web app security", "Vulnerability assessment", "Report writing", "Face your first Certification"],
          level: "Beginner to Intermediate"
        },
        {
          title: "Red Team Operations",
          duration: "12-16 weeks",
          description: "Advanced adversary simulation and red team tactics",
          topics: ["C2 frameworks", "AV/EDR evasion", "Active Directory attacks", "Social engineering"],
          level: "Intermediate to Advanced"
        },
        {
          title: "Malware Development",
          duration: "10-14 weeks",
          description: "Learn to develop custom payloads and understand malware mechanics",
          topics: ["Custom implants", "Evasion techniques", "Persistence methods", "Reverse engineering"],
          level: "Advanced"
        },
        {
          title: "OSCP Preparation",
          duration: "6-10 weeks",
          description: "Intensive preparation for the OSCP certification",
          topics: ["HTB machines", "Buffer overflows", "Privilege escalation", "Exam strategy"],
          level: "Intermediate"
        },
        {
          title: "Custom Trainings",
          duration: "6-10 weeks",
          description: "Assesment of current skills and enforcment of strenghts",
          topics: ["Training Paths", "Custom Exercises and CTFs", "Extra Follow-Up Sessions with NO extra cost", "Private Notes Access"],
          level: "All"
        }
      ],
      keyTopics: "Key Topics:",
      selectProgram: "Select Program",
      duration: "Duration:",
      
      // Process
      processTitle: "cat coaching_workflow.md",
      processSteps: [
        {
          title: "Initial Assessment",
          description: "We'll evaluate your current skills, goals, and create a personalized learning path."
        },
        {
          title: "Custom Curriculum",
          description: "Tailored learning modules based on your experience level and career objectives."
        },
        {
          title: "Hands-on Practice",
          description: "Real-world labs, CTF challenges, and practical exercises in controlled environments."
        },
        {
          title: "Continuous Support",
          description: "Regular progress reviews, Q&A sessions, and career guidance throughout your journey."
        }
      ],
      
      // Testimonials
      testimonialsTitle: "grep -i \"success\" testimonials.log",
      testimonials: [
        {
          name: "Ariel M.",
          role: "Security Analyst",
          text: "Iñaki's coaching helped me transition from basic IT to cybersecurity. His hands-on approach and real-world scenarios made all the difference.",
          rating: 5
        },
        {
          name: "Adrian D.",
          role: "Junior Pentester",
          text: "The OSCP preparation sessions were incredible. Passed on my first attempt thanks to the structured approach and constant support.",
          rating: 5
        },
        {
          name: "Sergio G.",
          role: "CTF Competitor",
          text: "The Spanish sessions were perfect for me. Excellent methodology and practical examples that I apply in my daily challenges.",
          rating: 5
        }
      ],
      
      // CTA
      ctaTitle: "Ready to Accelerate Your Cybersecurity Career?",
      ctaDescription: "Join the ranks of successful cybersecurity professionals who've leveled up their skills through personalized 1:1 coaching.",
      startJourney: "Start Your Journey",
      
      // Form
      formTitle: "coaching_request.exe",
      formFields: {
        fullName: "Full Name",
        email: "Email Address",
        experienceLevel: "Current Experience Level",
        coachingLanguage: "Coaching Language",
        timeframe: "Desired Timeframe",
        availability: "Weekly Availability",
        goals: "Learning Goals",
        additionalInfo: "Additional Information"
      },
      placeholders: {
        name: "Enter your full name",
        email: "your.email@domain.com",
        goals: "What are your specific cybersecurity goals? (e.g., get certified, change careers, advance in current role, specific skills to learn)",
        message: "Any additional information, specific interests, or questions about the coaching program..."
      },
      options: {
        experienceLevels: {
          select: "Select your level",
          completeBeginner: "Complete Beginner",
          someIT: "Some IT Background",
          juniorCybersec: "Junior Cybersecurity",
          intermediate: "Intermediate",
          lookingToAdvance: "Looking to Advance"
        },
        languages: {
          english: "English",
          spanish: "Spanish / Español",
          both: "Both Languages"
        },
        timeframes: {
          select: "Select timeframe",
          asap: "Start ASAP",
          oneMonth: "Within 1 Month",
          twoThreeMonths: "2-3 Months",
          flexible: "Flexible"
        },
        availabilities: {
          select: "Select availability",
          twoFour: "2-4 hours/week",
          fourEight: "4-8 hours/week",
          eightTwelve: "8-12 hours/week",
          twelvePlus: "12+ hours/week"
        }
      },
      submitBtn: "Submit Coaching Request",
      submitting: "Submitting Request...",
      successMessage: "✅ Your coaching request has been submitted successfully!",
      errorMessage: "❌ There was an error submitting your request."
    },
    spanish: {
      // Header
      title: "COACHING_1:1_CIBERSEGURIDAD",
      subtitle: "Entrenamiento personalizado en ciberseguridad con experto de la industria. Mejora tus habilidades a través de mentoría práctica y escenarios del mundo real.",
      
      // Language selector
      chooseLanguage: "Elige tu Idioma de Aprendizaje",
      englishCoaching: "Coaching en Inglés",
      spanishCoaching: "Coaching en Español",
      
      // Services
      servicesTitle: "ls -la /programas_coaching/",
      services: [
        {
          title: "Fundamentos de Pentesting",
          duration: "8-12 semanas",
          description: "Domina los fundamentos del hacking ético y pruebas de penetración",
          topics: ["Reconocimiento de red", "Seguridad de aplicaciones web", "Evaluación de vulnerabilidades", "Redacción de informes"],
          level: "Principiante a Intermedio"
        },
        {
          title: "Operaciones Red Team",
          duration: "12-16 semanas",
          description: "Simulación avanzada de adversarios y tácticas de red team",
          topics: ["Frameworks C2", "Evasión de EDR", "Ataques Active Directory", "Ingeniería social"],
          level: "Intermedio a Avanzado"
        },
        {
          title: "Desarrollo de Malware",
          duration: "10-14 semanas",
          description: "Aprende a desarrollar payloads personalizados y entender mecánicas de malware",
          topics: ["Implantes personalizados", "Técnicas de evasión", "Métodos de persistencia", "Ingeniería inversa"],
          level: "Avanzado"
        },
        {
          title: "Preparación OSCP",
          duration: "6-10 semanas",
          description: "Preparación intensiva para la certificación OSCP",
          topics: ["Máquinas HTB", "Buffer overflows", "Escalación de privilegios", "Estrategia de examen"],
          level: "Intermedio"
        },
        {
          title: "Custom Trainings",
          duration: "6-10 weeks",
          description: "Determinar y fortalecer puntos fuertes",
          topics: ["Training Paths", "Ejercicios Personalizados y CTFs", "Sesiones de seguimiento extra SIN coste extra", "Acceso a notas privadas"],
          level: "All"
        }
      ],
      keyTopics: "Temas Clave:",
      selectProgram: "Seleccionar Programa",
      duration: "Duración:",
      
      // Process
      processTitle: "cat flujo_coaching.md",
      processSteps: [
        {
          title: "Evaluación Inicial",
          description: "Evaluaremos tus habilidades actuales, objetivos y crearemos un camino de aprendizaje personalizado."
        },
        {
          title: "Currículum Personalizado",
          description: "Módulos de aprendizaje adaptados basados en tu nivel de experiencia y objetivos profesionales."
        },
        {
          title: "Práctica Hands-on",
          description: "Laboratorios del mundo real, desafíos CTF y ejercicios prácticos en entornos controlados."
        },
        {
          title: "Soporte Continuo",
          description: "Revisiones regulares de progreso, sesiones de Q&A y orientación profesional durante tu camino."
        }
      ],
      
      // Testimonials
      testimonialsTitle: "grep -i \"éxito\" testimonios.log",
      testimonials: [
        {
          name: "Ariel M.",
          role: "Analista de Seguridad",
          text: "El coaching de Iñaki me ayudó a transicionar de IT básico a ciberseguridad. Su enfoque práctico y escenarios del mundo real marcaron toda la diferencia.",
          rating: 5
        },
        {
          name: "Adrian D.",
          role: "Pentester Junior",
          text: "Las sesiones de preparación OSCP fueron increíbles. Aprobé en mi primer intento gracias al enfoque estructurado y apoyo constante.",
          rating: 5
        },
        {
          name: "Sergio G.",
          role: "Ingeniero SOC",
          text: "Las sesiones en español fueron perfectas para mí. Excelente metodología y ejemplos prácticos que aplico en mi trabajo diario.",
          rating: 5
        }
      ],
      
      // CTA
      ctaTitle: "¿Listo para Acelerar tu Carrera en Ciberseguridad?",
      ctaDescription: "Únete a las filas de profesionales exitosos en ciberseguridad que han mejorado sus habilidades a través de coaching personalizado 1:1.",
      startJourney: "Comienza tu Camino",
      
      // Form
      formTitle: "solicitud_coaching.exe",
      formFields: {
        fullName: "Nombre Completo",
        email: "Dirección de Email",
        experienceLevel: "Nivel de Experiencia Actual",
        coachingLanguage: "Idioma del Coaching",
        timeframe: "Tiempo Deseado",
        availability: "Disponibilidad Semanal",
        goals: "Objetivos de Aprendizaje",
        additionalInfo: "Información Adicional"
      },
      placeholders: {
        name: "Ingresa tu nombre completo",
        email: "tu.email@dominio.com",
        goals: "¿Cuáles son tus objetivos específicos en ciberseguridad? (ej. obtener certificación, cambiar de carrera, avanzar en rol actual, habilidades específicas a aprender)",
        message: "Cualquier información adicional, intereses específicos, o preguntas sobre el programa de coaching..."
      },
      options: {
        experienceLevels: {
          select: "Selecciona tu nivel",
          completeBeginner: "Principiante Completo",
          someIT: "Algo de Experiencia en IT",
          juniorCybersec: "Junior en Ciberseguridad",
          intermediate: "Intermedio",
          lookingToAdvance: "Buscando Avanzar"
        },
        languages: {
          english: "Inglés",
          spanish: "Español",
          both: "Ambos Idiomas"
        },
        timeframes: {
          select: "Selecciona tiempo",
          asap: "Comenzar ASAP",
          oneMonth: "Dentro de 1 Mes",
          twoThreeMonths: "2-3 Meses",
          flexible: "Flexible"
        },
        availabilities: {
          select: "Selecciona disponibilidad",
          twoFour: "2-4 horas/semana",
          fourEight: "4-8 horas/semana",
          eightTwelve: "8-12 horas/semana",
          twelvePlus: "12+ horas/semana"
        }
      },
      submitBtn: "Enviar Solicitud de Coaching",
      submitting: "Enviando Solicitud...",
      successMessage: "✅ ¡Tu solicitud de coaching ha sido enviada exitosamente!",
      errorMessage: "❌ Hubo un error al enviar tu solicitud."
    }
  };

  const t = translations[selectedLanguage as keyof typeof translations];

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setFormData(prev => ({
      ...prev,
      language: language
    }));
  };

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
    formDataToSend.append('experience', formData.experience);
    formDataToSend.append('language', formData.language);
    formDataToSend.append('goals', formData.goals);
    formDataToSend.append('timeframe', formData.timeframe);
    formDataToSend.append('availability', formData.availability);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('_subject', 'New 1:1 Coaching Request - CyberSec Portfolio');
    formDataToSend.append('_autoresponse', selectedLanguage === 'spanish' 
      ? "¡Gracias por tu solicitud de coaching! Revisaré tu información y te contactaré dentro de 24 horas para discutir tu plan personalizado de entrenamiento en ciberseguridad."
      : "Thank you for your coaching request! I'll review your information and get back to you within 24 hours to discuss your personalized cybersecurity training plan.");
    formDataToSend.append('_template', 'table');
    

    try {
      const response = await fetch('https://formsubmit.co/ajax/tornosportugal@gmail.com', {
        headers: { "Accept": "application/json" },
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSuccessMessage(t.successMessage);
        setFormData({
          name: '',
          email: '',
          experience: '',
          language: selectedLanguage,
          goals: '',
          timeframe: '',
          availability: '',
          message: ''
        });
      } else {
        setSuccessMessage(t.errorMessage);
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage(t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="coaching-container">
      {/* Header Section */}
      <div className="coaching-header">
        <div className="terminal-prompt">
          <span className="prompt-symbol">root@mentorship:~$</span>
          <span className="prompt-command">./initialize_coaching_protocol</span>
        </div>
        <h1 className="coaching-title">
          <span className="title-accent">[</span> {t.title} <span className="title-accent">]</span>
        </h1>
        <p className="coaching-subtitle">
          {t.subtitle}
        </p>
      </div>

      {/* Language Selection */}
      <div className="language-selector">
        <h3>
          <i className="fas fa-globe"></i> {t.chooseLanguage}
        </h3>
        <div className="language-buttons">
          <button
            className={`lang-btn ${selectedLanguage === 'english' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('english')}
          >
            <i className="fas fa-flag-usa"></i> {t.englishCoaching}
          </button>
          <button
            className={`lang-btn ${selectedLanguage === 'spanish' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('spanish')}
          >
            <i className="fas fa-flag"></i> {t.spanishCoaching}
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <section className="services-section">
        <h2 className="section-title">
          <span className="prompt">root@services:~$</span>
          <span className="command">{t.servicesTitle}</span>
        </h2>
        <div className="services-grid">
          {t.services.map((service: any, index: any) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-icon">
                  <i className={["fas fa-shield-alt", "fas fa-user-ninja", "fas fa-virus", "fas fa-certificate"][index]}></i>
                </div>
                <div className="service-meta">
                  <h3>{service.title}</h3>
                  <span className="service-level">{service.level}</span>
                </div>
              </div>
              <p className="service-description">{service.description}</p>
              <div className="service-details">
                <div className="detail-item">
                  <i className="fas fa-clock"></i>
                  <span>{t.duration} {service.duration}</span>
                </div>
              </div>
              <div className="topics-list">
                <h4>{t.keyTopics}</h4>
                <ul>
                  {service.topics.map((topic: any, idx: any) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </div>
              <div className="service-footer">
                <button
                  className="select-service-btn"
                  onClick={() => setShowForm(true)}
                >
                  <i className="fas fa-rocket"></i> {t.selectProgram}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2 className="section-title">
          <span className="prompt">root@process:~$</span>
          <span className="command">{t.processTitle}</span>
        </h2>
        <div className="process-timeline">
          {t.processSteps.map((step: any, index: any) => (
            <div key={index} className="process-step">
              <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">
          <span className="prompt">root@feedback:~$</span>
          <span className="command">{t.testimonialsTitle}</span>
        </h2>
        <div className="testimonials-grid">
          {t.testimonials.map((testimonial: any, index: any) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaDescription}</p>
          <button
            className="main-cta-btn"
            onClick={() => setShowForm(true)}
          >
            <i className="fas fa-terminal"></i> {t.startJourney}
          </button>
        </div>
      </section>

      {/* Coaching Form Modal */}
      {showForm && (
        <div className="form-overlay" onClick={() => setShowForm(false)}>
          <div className="coaching-form-container" onClick={(e) => e.stopPropagation()}>
            <div className="form-header">
              <div className="window-controls">
                <span className="control close" onClick={() => setShowForm(false)}></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
              </div>
              <span className="window-title">{t.formTitle}</span>
            </div>
            <form
              action="https://formsubmit.co/efe3516b687e7af1e32aae6fbca0b140"
              method="POST"
              className="coaching-form"
              onSubmit={handleSubmit}
            >
              {/* FormSubmit configuration fields */}
              <input type="hidden" name="_subject" value="New 1:1 Coaching Request - CyberSec Portfolio" />
              <input 
                type="hidden" 
                name="_autoresponse" 
                value={selectedLanguage === 'spanish' 
                  ? "¡Gracias por tu solicitud de coaching! Revisaré tu información y te contactaré dentro de 24 horas para discutir tu plan personalizado de entrenamiento en ciberseguridad."
                  : "Thank you for your coaching request! I'll review your information and get back to you within 24 hours to discuss your personalized cybersecurity training plan."
                } 
              />
              <input type="hidden" name="_template" value="table" />

              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="name" className="input-label">
                    <i className="fas fa-user"></i> {t.formFields.fullName} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder={t.placeholders.name}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email" className="input-label">
                    <i className="fas fa-envelope"></i> {t.formFields.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder={t.placeholders.email}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="experience" className="input-label">
                    <i className="fas fa-chart-line"></i> {t.formFields.experienceLevel} *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="form-input form-select"
                    required
                  >
                    <option value="">{t.options.experienceLevels.select}</option>
                    <option value="complete-beginner">{t.options.experienceLevels.completeBeginner}</option>
                    <option value="some-it-background">{t.options.experienceLevels.someIT}</option>
                    <option value="junior-cybersec">{t.options.experienceLevels.juniorCybersec}</option>
                    <option value="intermediate">{t.options.experienceLevels.intermediate}</option>
                    <option value="looking-to-advance">{t.options.experienceLevels.lookingToAdvance}</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="language" className="input-label">
                    <i className="fas fa-language"></i> {t.formFields.coachingLanguage} *
                  </label>
                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="form-input form-select"
                    required
                  >
                    <option value="english">{t.options.languages.english}</option>
                    <option value="spanish">{t.options.languages.spanish}</option>
                    <option value="both">{t.options.languages.both}</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="timeframe" className="input-label">
                    <i className="fas fa-calendar-alt"></i> {t.formFields.timeframe} *
                  </label>
                  <select
                    id="timeframe"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                    className="form-input form-select"
                    required
                  >
                    <option value="">{t.options.timeframes.select}</option>
                    <option value="asap">{t.options.timeframes.asap}</option>
                    <option value="1-month">{t.options.timeframes.oneMonth}</option>
                    <option value="2-3-months">{t.options.timeframes.twoThreeMonths}</option>
                    <option value="flexible">{t.options.timeframes.flexible}</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="availability" className="input-label">
                    <i className="fas fa-clock"></i> {t.formFields.availability} *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="form-input form-select"
                    required
                  >
                    <option value="">{t.options.availabilities.select}</option>
                    <option value="2-4-hours">{t.options.availabilities.twoFour}</option>
                    <option value="4-8-hours">{t.options.availabilities.fourEight}</option>
                    <option value="8-12-hours">{t.options.availabilities.eightTwelve}</option>
                    <option value="12-plus-hours">{t.options.availabilities.twelvePlus}</option>
                  </select>
                </div>
              </div>

              <div className="input-group full-width">
                <label htmlFor="goals" className="input-label">
                  <i className="fas fa-bullseye"></i> {t.formFields.goals} *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder={t.placeholders.goals}
                  required
                ></textarea>
              </div>

              <div className="input-group full-width">
                <label htmlFor="message" className="input-label">
                  <i className="fas fa-comment-dots"></i> {t.formFields.additionalInfo}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder={t.placeholders.message}
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
                      <span>{t.submitting}</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-rocket"></i>
                      <span>{t.submitBtn}</span>
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
      )}
    </div>
  );
};

export default Coaching;