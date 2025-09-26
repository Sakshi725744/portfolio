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
  background: ${props => props.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`

const ProjectIcon = styled.div`
  font-size: 4rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
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
    margin-bottom: 0.5rem;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`

const ProjectPeriod = styled.div`
  color: #007bff;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
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



function Projects() {
  const projects = [
    {
      id: 1,
      title: "CALL COP - AI Based Fraud Detection System",
      description: "Developed a Flutter application for real-time detection of fraudulent phone calls using AI, integrating Twilio's API, Large Language Models, and Firebase's API.",
      technologies: ["Flutter", "AI/ML", "Twilio API", "Firebase", "LLM"],
      icon: "🛡️",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      liveUrl: "#",
      githubUrl: "#",
      period: "Jun 2025 - Jul 2025"
    },
    {
      id: 2,
      title: "OPERATOR AGENT - AI Agent for Autonomous Operations",
      description: "Developed an AI Agent at Intuit's internal hackathon using langraph, pydantic ai, fast api to streamline issue detection and action determination, improving efficiency and accuracy.",
      technologies: ["Python", "LangGraph", "Pydantic AI", "FastAPI", "AI/ML"],
      icon: "🤖",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      liveUrl: "#",
      githubUrl: "#",
      period: "Apr 2025 - May 2025"
    },
    {
      id: 3,
      title: "SAHELI - Women Safety App and Device",
      description: "Developed Flutter Application to establish serial communication with disguised bluetooth neck piece that harbors hc-05 module for emergency triggers. Features user-authentication, firebase backend service and google maps API.",
      technologies: ["Flutter", "Bluetooth", "Firebase", "Google Maps API", "Hardware"],
      icon: "🚨",
      gradient: "linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)",
      liveUrl: "#",
      githubUrl: "#",
      period: "Jan 2020 - Mar 2020"
    },
    {
      id: 4,
      title: "FRIZZY - Food Expiry Detection Project",
      description: "Developed a Flutter application that retrieved food data via flask api. This data was processed using a 87% accuracy computer vision model from images captured by raspberry-pi to determine its expiry date.",
      technologies: ["Flutter", "Flask", "Computer Vision", "Raspberry Pi", "Python"],
      icon: "🍎",
      gradient: "linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)",
      liveUrl: "#",
      githubUrl: "#",
      period: "Feb 2021 - Mar 2021"
    },
    {
      id: 5,
      title: "Customer API - gRPC Microservice",
      description: "Developed Golang API using ProtoBuffers and gRPC to allow companies to onboard new customers and manage existing customers. This API supports CRUD operations for customer data which was seamlessly integrated with a React-based web application.",
      technologies: ["Go", "gRPC", "Protocol Buffers", "React", "Microservices"],
      icon: "⚡",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      liveUrl: "#",
      githubUrl: "#",
      period: "Apr 2021 - May 2021"
    },
    {
      id: 6,
      title: "Data Ingestion Pipeline - Intuit",
      description: "Architected and delivered a config driven data ingestion pipeline using Apache Flink (Java) to store Kafka events from multiple demand and supply sources into AWS InfluxDB timeseries database. Processing 35M records per day.",
      technologies: ["Java", "Apache Flink", "Kafka", "AWS", "InfluxDB", "Spring Boot"],
      icon: "📊",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      liveUrl: "#",
      githubUrl: "#",
      period: "2024 - Present"
    }
  ]

  return (
    <PortfolioContainer>
      <HeroSection>
        <Container>
          <h1>My Projects</h1>
          <p>Here are some of the key projects I've worked on, ranging from AI-powered applications to large-scale data engineering solutions. Each project showcases different aspects of my technical expertise and problem-solving abilities.</p>
        </Container>
      </HeroSection>

      <ProjectsSection>
        <Container>
          <ProjectsGrid>
            {projects.map(project => (
              <ProjectCard key={project.id}>
                <ProjectImage className="project-image" gradient={project.gradient}>
                  <ProjectIcon>{project.icon}</ProjectIcon>
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
                  {project.period && <ProjectPeriod>{project.period}</ProjectPeriod>}
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
    </PortfolioContainer>
  )
}

export default Projects
