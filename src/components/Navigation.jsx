import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

// Styled Components
const NavigationContainer = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const NavLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const NavItem = styled.li`
  margin: 0;
`

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    color: #007bff;
    background-color: #f8f9fa;
  }

  &.active {
    color: #007bff;
    background-color: #e3f2fd;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`

function Navigation() {
  const location = useLocation()

  return (
    <NavigationContainer>
      <NavContainer>
        <NavLogo to="/">
          Portfolio
        </NavLogo>
        <NavMenu>
          <NavItem>
            <NavLink
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/portfolio"
              className={location.pathname === '/portfolio' ? 'active' : ''}
            >
              Portfolio
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </NavigationContainer>
  )
}

export default Navigation
