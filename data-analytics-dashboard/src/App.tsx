import { useState } from 'react'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import DataTable from './pages/DataTable'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // Black
      light: '#333333', // Light black
    },
    secondary: {
      main: '#000000', // Black
    },
    background: {
      default: '#FFF3E0', // Light orange background
      paper: '#FFECB3', // Slightly darker light orange for paper elements
    },
    text: {
      primary: '#000000', // Black
      secondary: '#000000', // Black
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
  },
})

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          display: 'flex', 
          minHeight: '100vh',
          background: '#FFF3E0', // Light orange background
          backgroundAttachment: 'fixed'
        }}>
          <Header />
          <Sidebar open={sidebarOpen} onToggle={toggleSidebar} />
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1, 
              p: 3, 
              pt: 10,
              width: { sm: `calc(100% - ${sidebarOpen ? 240 : 0}px)` },
              ml: { sm: sidebarOpen ? `240px` : 0 },
              transition: theme => theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/data-table" element={<DataTable />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
