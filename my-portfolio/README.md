# Abhishek Arvindbhai Borisagar Portfolio Website

A modern, responsive portfolio website with multi-theme support and bilingual capabilities (English/German).

## Features

- **Three Themes**: Light, Dark, and Colored themes
- **Bilingual Support**: English (EN) and German (DE)
- **Responsive Design**: Fully responsive across all devices
- **Persistent Storage**: Saves user preferences in localStorage
- **Smooth Animations**: CSS animations and transitions
- **Interactive Elements**: Hover effects, scroll animations, and more

## File Structure

portfolio-website/
├── home.html # Main HTML file
├── css/ # CSS stylesheets
│ ├── style.css # Main styles
│ ├── themes.css # Theme definitions
│ ├── animations.css # Animation styles
│ └── responsive.css # Responsive styles
├── js/ # JavaScript files
│ ├── main.js # Main functionality
│ ├── theme-language.js # Theme & language management
│ ├── animations.js # Advanced animations
│ └── projects-loader.js # Projects data loader
└── assets/ # Assets
├── images/ # Image files
├── icons/ # Icon files
└── pdf/ # PDF documents


## Setup Instructions

1. **Clone or download** the project files to your local machine.

2. **Add your assets**:
   - Place your logo in `assets/images/logo.png`
   - Place your profile image in `assets/images/profile.jpg`
   - Add project images in `assets/images/projects/`
   - Add your Abhishek Arvindbhai Borisagar PDF in `assets/pdf/Abhishek Arvindbhai Borisagar.pdf`

3. **Customize content**:
   - Update personal information in `home.html`
   - Modify projects data in `js/projects-loader.js`
   - Adjust colors in `css/themes.css`

4. **Test locally**:
   - Open `home.html` in a web browser
   - Test all themes and language switches
   - Verify responsive design

## Usage

### Theme Switching
- Click the theme buttons in the navigation (sun/moon/palette icons)
- Themes: Light (default), Dark, Colored
- Preferences are saved automatically

### Language Switching
- Click EN/DE buttons in the navigation
- Toggle between English and German
- All text content updates automatically

### Navigation
- Smooth scrolling to sections
- Mobile-friendly hamburger menu
- Active state highlighting

### Contact Form
- Basic form validation
- Success message on submission
- Responsive layout

## Customization

### Changing Colors
Edit the CSS variables in `css/themes.css`:

```css
[data-theme="your-theme"] {
    --primary-color: #your-color;
    --text-primary: #your-color;
    /* ... other variables */
}
