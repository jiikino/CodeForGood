# Data Analytics Dashboard

A modern data analytics dashboard built with React, TypeScript, and Material UI. This application provides visualizations and insights for data analysis needs.

## Features

- Interactive dashboard with multiple visualization types
- Data tables for structured information viewing
- Analytics page for in-depth data analysis
- Responsive design with a collapsible sidebar
- Dark/light theme support

## Tech Stack

- React 18
- TypeScript
- Material UI (MUI)
- React Router
- Vite (Build tool)

## Prerequisites

- Node.js (v16 or later)
- npm or yarn

## Getting Started

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd CodeForGood
   ```

2. Install dependencies
   ```
   # In the main folder
   npm install
   
   # Navigate to the dashboard folder
   cd data-analytics-dashboard
   npm install
   ```

### Running the Application

1. Start the development server
   ```
   cd data-analytics-dashboard
   npm run dev
   ```
   or
   ```
   cd data-analytics-dashboard
   npx vite
   ```

2. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
data-analytics-dashboard/
├── src/
│   ├── assets/          # Static assets like images, icons
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## License

[ISC License](LICENSE)
