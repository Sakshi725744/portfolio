import styled from 'styled-components'

// Styled Components
const PortfolioContainer = styled.div`
  padding-top: 70px;
`

const HeroSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const ProjectsSection = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`

const ProjectCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  &:hover .project-image img {
    transform: scale(1.05);
  }

  &:hover .project-overlay {
    opacity: 1;
  }
`

const ProjectImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 123, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const ProjectLink = styled.a`
  background: white;
  color: #007bff;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #007bff;
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 150px;
    justify-content: center;
  }
`

const ProjectContent = styled.div`
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const TechTag = styled.span`
  background: #e3f2fd;
  color: #007bff;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
`

const ContactCTA = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`

const CTAButton = styled.a`
  background: white;
  color: #007bff;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      image: "https://via.placeholder.com/400x250/007bff/ffffff?text=E-Commerce+Platform",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      image: "https://via.placeholder.com/400x250/28a745/ffffff?text=Task+Manager",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather conditions and forecasts using OpenWeatherMap API with beautiful data visualizations.",
      technologies: ["React", "Chart.js", "OpenWeatherMap API", "CSS3"],
      image: "https://via.placeholder.com/400x250/ffc107/ffffff?text=Weather+Dashboard",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and content management features.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "JWT"],
      image: "https://via.placeholder.com/400x250/dc3545/ffffff?text=Social+Dashboard",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Recipe Finder App",
      description: "A mobile-first recipe application with search functionality, meal planning, and shopping list generation using Spoonacular API.",
      technologies: ["React", "PWA", "Spoonacular API", "Local Storage"],
      image: "https://via.placeholder.com/400x250/6f42c1/ffffff?text=Recipe+Finder",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and modern CSS, featuring smooth animations and optimized performance.",
      technologies: ["React", "CSS3", "Vite", "React Router"],
      image: "https://via.placeholder.com/400x250/20c997/ffffff?text=Portfolio+Site",
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <PortfolioContainer>
      <HeroSection>
        <Container>
          <h1>My Portfolio</h1>
          <p>Here are some of the projects I've worked on recently. Each project represents a unique challenge and learning experience.</p>
        </Container>
      </HeroSection>

      <ProjectsSection>
        <Container>
          <ProjectsGrid>
            {projects.map(project => (
              <ProjectCard key={project.id}>
                <ProjectImage className="project-image">
                  <img src={project.image} alt={project.title} />
                  <ProjectOverlay className="project-overlay">
                    <ProjectLinks>
                      <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <span>🔗</span> Live Demo
                      </ProjectLink>
                      <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <span>📱</span> GitHub
                      </ProjectLink>
                    </ProjectLinks>
                  </ProjectOverlay>
                </ProjectImage>
                <ProjectContent>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ProjectTechnologies>
                    {project.technologies.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </ProjectTechnologies>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Container>
      </ProjectsSection>

      <ContactCTA>
        <Container>
          <h2>Interested in working together?</h2>
          <p>I'm always open to discussing new opportunities and interesting projects.</p>
          <CTAButton href="mailto:your.email@example.com">Get In Touch</CTAButton>
        </Container>
      </ContactCTA>
    </PortfolioContainer>
  )
}

export default Portfolio
