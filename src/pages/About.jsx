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
                I'm a passionate full-stack developer with 3+ years of experience creating
                digital solutions that make a difference. I love turning complex problems
                into simple, beautiful, and intuitive designs.
              </AboutIntro>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or enjoying a good cup of coffee while reading about
                the latest trends in web development.
              </p>
            </AboutText>
          </AboutContent>
        </Container>
      </AboutHero>

      <SkillsSection>
        <Container>
          <h2>Skills & Technologies</h2>
          <SkillsCategories>
            <SkillCategory>
              <h3>Frontend</h3>
              <SkillTags>
                <SkillTag>React</SkillTag>
                <SkillTag>JavaScript</SkillTag>
                <SkillTag>TypeScript</SkillTag>
                <SkillTag>HTML5</SkillTag>
                <SkillTag>CSS3</SkillTag>
                <SkillTag>Sass</SkillTag>
                <SkillTag>Tailwind CSS</SkillTag>
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <h3>Backend</h3>
              <SkillTags>
                <SkillTag>Node.js</SkillTag>
                <SkillTag>Express.js</SkillTag>
                <SkillTag>Python</SkillTag>
                <SkillTag>MongoDB</SkillTag>
                <SkillTag>PostgreSQL</SkillTag>
                <SkillTag>REST APIs</SkillTag>
                <SkillTag>GraphQL</SkillTag>
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <h3>Tools & Others</h3>
              <SkillTags>
                <SkillTag>Git</SkillTag>
                <SkillTag>Docker</SkillTag>
                <SkillTag>AWS</SkillTag>
                <SkillTag>Figma</SkillTag>
                <SkillTag>Webpack</SkillTag>
                <SkillTag>Vite</SkillTag>
                <SkillTag>Jest</SkillTag>
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
              <TimelineDate>2022 - Present</TimelineDate>
              <TimelineContent>
                <h3>Senior Frontend Developer</h3>
                <h4>Tech Company Inc.</h4>
                <p>
                  Led the development of responsive web applications using React and TypeScript.
                  Collaborated with design teams to implement pixel-perfect UI components and
                  improved application performance by 40%.
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>2021 - 2022</TimelineDate>
              <TimelineContent>
                <h3>Full Stack Developer</h3>
                <h4>Startup Solutions</h4>
                <p>
                  Developed and maintained full-stack web applications using MERN stack.
                  Built RESTful APIs and integrated third-party services to enhance user experience.
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>2020 - 2021</TimelineDate>
              <TimelineContent>
                <h3>Junior Web Developer</h3>
                <h4>Digital Agency</h4>
                <p>
                  Started my professional journey building websites and web applications.
                  Gained experience in HTML, CSS, JavaScript, and various CMS platforms.
                </p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Container>
      </ExperienceSection>
    </AboutContainer>
  )
}

export default About
