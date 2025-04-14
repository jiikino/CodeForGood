import { Box, Typography, Paper, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Home = () => {
  const partnerSchools = [
    "Howard University",
    "Arizona State University",
    "Stanford University",
    "Wharton School of the University of Pennsylvania",
    "Barnard College at Columbia University",
    "Georgetown University",
    "Wesleyan University",
    "Brown University",
    "Morehouse College",
    "Spelman College",
    "Yale University",
    "University of Connecticut",
    "Princeton University",
    "Cornell University",
    "Harvard University Extension School",
    "University of Pennsylvania School of Social Policy & Practice",
    "University of California Merced"
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
        National Education Equity Lab
      </Typography>
      
      {/* Mission Section */}
      <Paper elevation={3} sx={{ p: 4, my: 4, backgroundColor: 'rgba(255, 167, 38, 0.2)' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, color: '#000000' }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ color: '#000000', fontSize: '1.1rem', lineHeight: 1.7 }}>
          The National Education Equity Lab is dedicated to democratizing access to college by enabling high school students 
          in historically underserved communities to take actual college courses from top universities while in high school, 
          bridging educational opportunity gaps that have existed for generations.
        </Typography>
      </Paper>

      {/* Vision Section */}
      <Paper elevation={3} sx={{ p: 4, my: 4, backgroundColor: 'rgba(255, 167, 38, 0.2)' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, color: '#000000' }}>
          Our Vision
        </Typography>
        <Typography variant="body1" sx={{ color: '#000000', fontSize: '1.1rem', lineHeight: 1.7 }}>
          We envision a future where zip code and socioeconomic status no longer predict educational outcomes. 
          By leveraging technology, data analytics, and strategic partnerships with universities and K-12 schools, 
          we aim to create scalable pathways for talented students from all backgrounds to demonstrate college readiness, 
          gain admission to selective universities, and thrive as future leaders.
        </Typography>
      </Paper>
      
      {/* Partner Schools Section */}
      <Paper elevation={3} sx={{ p: 4, my: 4, backgroundColor: 'rgba(141, 110, 99, 0.05)', boxShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <SchoolIcon color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
          <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>Our Prestigious University Partners</Typography>
        </Box>
        
        <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
          We collaborate with some of the nation's most prestigious institutions to bring college-level courses 
          directly to high school students across America. These partnerships are the foundation of our program's success.
        </Typography>
        
        <Grid container spacing={2}>
          {partnerSchools.map((school, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper 
                elevation={1} 
                sx={{ 
                  p: 2, 
                  textAlign: 'center',
                  borderLeft: '4px solid',
                  borderColor: 'primary.main',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white'
                }}
              >
                <Typography variant="subtitle1" color="primary" fontWeight="500">
                  {school}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Home; 