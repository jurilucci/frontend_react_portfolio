# :rocket: Juri Lucci Portfolio!

A modern, responsive personal portfolio website built with React, consuming content from Sanity CMS, and featuring smooth Framer Motion animations.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Dynamic Content**: Content pulled from Sanity CMS
- **Interactive Sections**: Home, About, Skills, and Contact sections
- **Social Media Integration**: Links to LinkedIn, Facebook, and Instagram profiles

## Technologies Used

- React.js
- SCSS/SASS for styling
- Framer Motion for animations
- React Icons
- Sanity.io client for fetching content

## Setup and Installation

### Prerequisites
- Node.js (v14.0 or later)
- npm or yarn
- A running Sanity CMS instance (see backend README)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/frontend_react_portfolio.git
   cd frontend_react_portfolio
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   REACT_APP_SANITY_PROJECT_ID=your_sanity_project_id
   REACT_APP_SANITY_DATASET=production
   REACT_APP_SANITY_TOKEN=your_sanity_token
   ```

4. Start the development server
   ```
   npm start
   ```
   The app will be available at: http://localhost:3000

## Deployment

The project can be built for production using:
```
npm run build
```

This will create a `build` folder with optimized production files that can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

## Key Components

- **App.js**: Main component that organizes all the sections
- **AppWrap.js**: HOC that wraps each section with navigation and social media components
- **MotionWrap.js**: HOC that applies animations to sections
- **NavigationDots.jsx**: Side navigation component
- **SocialMedia.jsx**: Social media links component
- **Navbar.jsx**: Top navigation bar

## Customization

- Update styling in App.scss and component-specific stylesheets
- Add or remove sections by updating the App.js component
- The content is managed through the Sanity backend

## Connecting to Sanity

The application connects to Sanity via the client.js file, which uses environment variables to establish the connection. Make sure your Sanity backend is properly set up and running.
