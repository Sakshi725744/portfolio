# Portfolio Website

A modern, responsive portfolio website built with React and Vite. This is a static website featuring three main pages: Home, About, and Portfolio.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Static Build**: Generates static files for easy deployment
- **React Router**: Client-side routing for smooth navigation

## Pages

1. **Home**: Hero section with introduction and skills preview
2. **About**: Detailed information about skills, experience, and timeline
3. **Portfolio**: Showcase of projects with descriptions and technologies used

## Technologies Used

- React 18
- React Router DOM
- Styled Components
- Vite
- Responsive Grid and Flexbox layouts

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-app-vite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a static build for deployment:

```bash
npm run build
```

This will generate a `dist` folder containing all the static files ready for deployment.

## Deployment

The built files in the `dist` folder can be deployed to any static hosting service:

### Quick Deploy Options:

#### **Netlify (Easiest)**
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder to deploy instantly

#### **Vercel**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository and deploy

#### **GitHub Pages**
1. Run `npm run build`
2. Push the `dist` folder contents to your `gh-pages` branch
3. Enable GitHub Pages in repository settings

#### **Any Web Server**
1. Run `npm run build`
2. Upload the `dist` folder contents to your web root directory

## Customization

### Profile Image
Replace `src/assets/profile.png` with your own profile picture.

### Personal Information
Update the following files with your information:
- `src/pages/Home.jsx` - Name and introduction
- `src/pages/About.jsx` - Skills, experience, and timeline
- `src/pages/Portfolio.jsx` - Projects and contact information

### Styling
- **100% Styled Components**: No CSS files needed!
- Global styles: `GlobalStyle` component in `src/App.jsx`
- Component styles: Styled Components within each component file
- Colors and themes can be customized in the styled component definitions

## Project Structure

```
src/
├── components/
│   └── Navigation.jsx          # Contains styled components
├── pages/
│   ├── Home.jsx               # Contains styled components
│   ├── About.jsx              # Contains styled components
│   └── Portfolio.jsx          # Contains styled components
├── assets/
│   └── profile.png
├── App.jsx                    # Contains GlobalStyle and app styled components
└── main.jsx                   # Entry point
```

**Note**: This project uses **100% Styled Components** - no CSS files needed!

## License

This project is open source and available under the [MIT License](LICENSE).
