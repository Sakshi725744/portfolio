import styled from 'styled-components'
import profileImage from '../assets/profile.png'

// Styled Components
const HomeContainer = styled.div`
  padding-top: 70px; /* Account for fixed navigation */
`

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 0;
`

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`

const HeroText = styled.div``

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Highlight = styled.span`
  color: #ffd700;
`

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #e0e0e0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const HeroDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #f0f0f0;
`

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

const Button = styled.a`
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
`

const PrimaryButton = styled(Button)`
  background-color: #007bff;
  color: white;
  border: 2px solid #007bff;

  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
    transform: translateY(-2px);
  }
`

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background-color: white;
    color: #333;
    transform: translateY(-2px);
  }
`

const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`

const SkillsPreview = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SkillCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <HeroTitle>
              Hello, I'm <Highlight>Your Name</Highlight>
            </HeroTitle>
            <HeroSubtitle>
              Full Stack Developer & UI/UX Designer
            </HeroSubtitle>
            <HeroDescription>
              I create beautiful, responsive web applications with modern technologies.
              Passionate about clean code, user experience, and innovative solutions.
            </HeroDescription>
            <HeroButtons>
              <PrimaryButton href="/portfolio">
                View My Work
              </PrimaryButton>
              <SecondaryButton href="/about">
                About Me
              </SecondaryButton>
            </HeroButtons>
          </HeroText>
          <HeroImageContainer>
            <ProfileImage src={profileImage} alt="Profile" />
          </HeroImageContainer>
        </HeroContent>
      </HeroSection>

      <SkillsPreview>
        <Container>
          <h2>What I Do</h2>
          <SkillsGrid>
            <SkillCard>
              <SkillIcon>🎨</SkillIcon>
              <h3>UI/UX Design</h3>
              <p>Creating intuitive and beautiful user interfaces with focus on user experience.</p>
            </SkillCard>
            <SkillCard>
              <SkillIcon>💻</SkillIcon>
              <h3>Frontend Development</h3>
              <p>Building responsive web applications using React, JavaScript, and modern CSS.</p>
            </SkillCard>
            <SkillCard>
              <SkillIcon>⚙️</SkillIcon>
              <h3>Backend Development</h3>
              <p>Developing robust server-side applications and APIs with Node.js and databases.</p>
            </SkillCard>
          </SkillsGrid>
        </Container>
      </SkillsPreview>
    </HomeContainer>
  )
}

export default Home
