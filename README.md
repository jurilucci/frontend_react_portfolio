# 🚀 Juri Lucci Portfolio!

A modern, responsive personal portfolio website built with React, Sanity CMS, and Framer Motion animations.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Dynamic Content**: Content management through Sanity CMS
- **Interactive Sections**: Home, About, Skills, and Contact sections
- **Social Media Integration**: Links to LinkedIn, Facebook, and Instagram profiles

## Technologies Used

- **Frontend**:
  - React.js
  - SCSS/SASS for styling
  - Framer Motion for animations
  - React Icons
  
- **Backend/CMS**:
  - Sanity.io for content management

## Project Structure

```
frontend_react_portfolio/
├── src/
│   ├── assets/           # Images and other static assets
│   ├── components/       # Reusable UI components
│   │   ├── Navbar/       # Navigation bar component
│   │   ├── NavigationDots.jsx
│   │   └── SocialMedia.jsx
│   ├── constants/        # Constants and image imports
│   ├── container/        # Main section components
│   │   ├── About/        # About section
│   │   ├── Footer/       # Contact/footer section
│   │   ├── Header/       # Hero/header section
│   │   └── Skills/       # Skills section
│   ├── wrapper/          # Higher-order components
│   │   ├── AppWrap.js    # Container wrapper with navigation & social
│   │   └── MotionWrap.js # Animation wrapper
│   ├── App.js            # Main app component
│   ├── App.scss          # Main stylesheet
│   ├── client.js         # Sanity client configuration
│   ├── index.js          # Entry point
│   └── index.css         # CSS variables and reset
```

## Setup and Installation

### Prerequisites
- Node.js (v14.0 or later)
- npm or yarn

### Installing
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

## Deployment

The project can be built for production using:
```
npm run build
```

## Sanity CMS Setup

1. Install Sanity CLI
   ```
   npm install -g @sanity/cli
   ```

2. Initialize a Sanity project (if not already done)
   ```
   sanity init
   ```

3. Start the Sanity studio
   ```
   cd sanity_studio
   sanity start
   ```

## Customization

- Update personal information in the Sanity studio
- Modify styling in App.scss and component-specific stylesheets
- Add or remove sections by updating the App.js component

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- DM Sans font from Google Fonts
- React Icons for social media icons
- Framer Motion for animations
