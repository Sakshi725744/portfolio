import styled from 'styled-components'
import profileImage from '../assets/profile.png'

// Styled Components
const AboutContainer = styled.div`
  padding-top: 70px;
`

const AboutHero = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`

const AboutImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

const AboutProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`

const AboutText = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
  }
`

const AboutIntro = styled.p`
  font-size: 1.2rem !important;
  font-weight: 500;
  color: #555 !important;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const SkillsSection = styled.section`
  padding: 4rem 0;
  background-color: white;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
  }
`

const SkillsCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SkillCategory = styled.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
    text-align: center;
  }
`

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const SkillTag = styled.span`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`

const ExperienceSection = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
  }
`

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #007bff;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`

const TimelineItem = styled.div`
  display: flex;
  margin-bottom: 3rem;
  position: relative;

  &:nth-child(odd) {
    flex-direction: row;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
    margin-left: 40px;
  }
`

const TimelineDate = styled.div`
  flex: 0 0 150px;
  text-align: center;
  font-weight: bold;
  color: #007bff;
  padding: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #007bff;
    border-radius: 50%;
    top: 50%;
    right: -6px;
    transform: translateY(-50%);
  }

  ${TimelineItem}:nth-child(even) &::after {
    left: -6px;
    right: auto;
  }

  @media (max-width: 768px) {
    flex: none;
    text-align: left;
    padding: 0.5rem 0;

    &::after {
      left: -26px !important;
      right: auto !important;
    }
  }
`

const TimelineContent = styled.div`
  flex: 1;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin: 0 2rem;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  h4 {
    font-size: 1.1rem;
    color: #007bff;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    line-height: 1.6;
    color: #666;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`

const EducationSection = styled.section`
  padding: 4rem 0;
  background-color: white;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
  }
`

const EducationGrid = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`

const EducationCard = styled.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  width: 100%;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  h4 {
    font-size: 1.2rem;
    color: #007bff;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  p {
    color: #666;
    font-weight: 500;
  }
`

const PublicationsSection = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
  }
`

const PublicationsList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
`

const PublicationItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 600;
  }

  p {
    color: #007bff;
    font-weight: 500;
    margin: 0;
  }
`

const ContactSection = styled.section`
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

const ContactButton = styled.a`
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

function About() {
  return (
    <AboutContainer>
      <AboutHero>
        <Container>
          <AboutContent>
            <AboutImageContainer>
              <AboutProfileImage src={profileImage} alt="Profile" />
            </AboutImageContainer>
            <AboutText>
              <h1>About Me</h1>
              <AboutIntro>
                Accomplished Software Engineer with more than 3 years of experience architecting and delivering scalable,
                high-impact solutions for customer-centric products. Proven expertise in Java, Python, and Go, with a strong
                command of distributed systems, data engineering, and AWS cloud environments. Passionate about tackling complex
                architectural challenges, driving projects from design to launch, and mentoring teammates. A fast learner
                dedicated to mastering new technologies and contributing to a world-class engineering culture.
              </AboutIntro>
            </AboutText>
          </AboutContent>
        </Container>
      </AboutHero>

      <SkillsSection>
        <Container>
          <h2>Skills & Technologies</h2>
          <SkillsCategories>
            <SkillCategory>
              <h3>Languages</h3>
              <SkillTags>
                <SkillTag>Java</SkillTag>
                <SkillTag>Python</SkillTag>
                <SkillTag>Go</SkillTag>
                <SkillTag>Dart</SkillTag>
                <SkillTag>C++</SkillTag>
                <SkillTag>JavaScript</SkillTag>
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <h3>Backend & Data Technologies</h3>
              <SkillTags>
                <SkillTag>Spring Boot</SkillTag>
                <SkillTag>Apache Flink</SkillTag>
                <SkillTag>FastAPI</SkillTag>
                <SkillTag>Kafka</SkillTag>
                <SkillTag>gRPC</SkillTag>
                <SkillTag>GraphQL</SkillTag>
                <SkillTag>PySpark</SkillTag>
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <h3>Cloud & Databases</h3>
              <SkillTags>
                <SkillTag>AWS</SkillTag>
                <SkillTag>PostgreSQL</SkillTag>
                <SkillTag>InfluxDB</SkillTag>
                <SkillTag>Firebase</SkillTag>
                <SkillTag>Grafana</SkillTag>
                <SkillTag>Splunk</SkillTag>
                <SkillTag>Docker</SkillTag>
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <h3>Frontend & Mobile</h3>
              <SkillTags>
                <SkillTag>React</SkillTag>
                <SkillTag>Flutter</SkillTag>
                <SkillTag>HTML</SkillTag>
                <SkillTag>CSS</SkillTag>
                <SkillTag>Figma</SkillTag>
                <SkillTag>Google Maps API</SkillTag>
              </SkillTags>
            </SkillCategory>
          </SkillsCategories>
        </Container>
      </SkillsSection>

      <ExperienceSection>
        <Container>
          <h2>Experience</h2>
          <Timeline>
            <TimelineItem>
              <TimelineDate>Jan 2024 - Present</TimelineDate>
              <TimelineContent>
                <h3>Software Engineer - 2</h3>
                <h4>Intuit, Bengaluru</h4>
                <p>
                  Architected and delivered a config driven data ingestion pipeline using Apache Flink (Java) to store Kafka events
                  from multiple demand and supply sources into AWS InfluxDB timeseries database. Processing 35M records per day.
                  Led initiative to design Anomaly Validation System for forecast plans, enhancing data accuracy by 32%.
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>Aug 2022 - Jan 2024</TimelineDate>
              <TimelineContent>
                <h3>Software Engineer - 1</h3>
                <h4>Intuit, Bengaluru</h4>
                <p>
                  Developed Self Serve Reporting tool for Virtual Expert Platform(VEP) resulting in 23% quicker and efficient engagements.
                  Designed config driven data pipeline using py-spark, postgreSQL Database and AWS along with Java backend service.
                  Acted as point-of-contact and onboarded 20+ teams to the platform.
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>Jan 2022 - Jul 2022</TimelineDate>
              <TimelineContent>
                <h3>Software Engineering Intern</h3>
                <h4>Providence Global Center, Hyderabad</h4>
                <p>
                  Developed Baracuda App using Flutter designed to help users manage their mental health. The app was optimized
                  for performance and usability, resulting in an 18% increase in efficiency for doctors and 54% increased user
                  engagement within the first month of launch.
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>Feb 2021 - Jul 2021</TimelineDate>
              <TimelineContent>
                <h3>Software Development Intern</h3>
                <h4>Appointy India, Bhopal</h4>
                <p>
                  Engineered a production-critical Webhooks API from the ground up using Go, gRPC, and GraphQL, enabling custom
                  third-party integrations for automated appointment tracking. The feature contributed to a $1.2 million revenue
                  increase within 12 months of launch.
                </p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Container>
      </ExperienceSection>

      <EducationSection>
        <Container>
          <h2>Education</h2>
          <EducationGrid>
            <EducationCard>
              <h3>Bachelor of Information Technology</h3>
              <h4>Vellore Institute of Technology, Vellore</h4>
              <p>GPA: 9.17/10.0 | 2018-2022</p>
            </EducationCard>
          </EducationGrid>
        </Container>
      </EducationSection>

      <PublicationsSection>
        <Container>
          <h2>Publications & Certifications</h2>
          <PublicationsList>
            <PublicationItem>
              <h4>Machine Learning in Supply Chain Management</h4>
              <p>Springer Book Publication, 2021</p>
            </PublicationItem>
            <PublicationItem>
              <h4>Brain MRI segmentation techniques based on CNN and its variants</h4>
              <p>Elsevier Publication, 2021</p>
            </PublicationItem>
            <PublicationItem>
              <h4>Hybridization of AES and RSA Algorithm in File Encryption Using Parallel Computing</h4>
              <p>Springer Book Publication, 2023</p>
            </PublicationItem>
            <PublicationItem>
              <h4>MLH Equinox 2021 Hackathon Official App</h4>
              <p>Published on Google Play Store with 650+ participants</p>
            </PublicationItem>
          </PublicationsList>
        </Container>
      </PublicationsSection>

      <ContactSection id="contact">
        <Container>
          <h2>Interested in working together?</h2>
          <p>I'm always open to discussing new opportunities and interesting projects. Let's connect and explore how we can collaborate!</p>
          <ContactButton href="mailto:sjparikh78@gmail.com">Get In Touch</ContactButton>
        </Container>
      </ContactSection>
    </AboutContainer>
  )
}

export default About
