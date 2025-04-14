import { Box, Typography, Paper, Divider } from '@mui/material';
import { Check as CheckIcon, School as SchoolIcon, Analytics as AnalyticsIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const DataTable = () => {
  // Data for the pie chart
  const schoolCoverageData = [
    { name: 'Schools Covered', value: 64 },
    { name: 'Schools to Discover', value: 36 },
  ];
  
  // Colors for the pie chart
  const COLORS = ['#FFA726', '#FFE0B2']; // Orange and Light Orange

  return (
    <Box sx={{ p: 3 }}>
      <Paper 
        elevation={2} 
        sx={{ 
          p: 5, 
          textAlign: 'center',
          backgroundColor: 'rgba(141, 110, 99, 0.05)', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)', 
          borderRadius: 2,
          mb: 4 
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          color="primary" 
          sx={{ 
            fontWeight: 800,
            letterSpacing: '0.5px',
            mb: 2
          }}
        >
          OUR PITCH
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', fontWeight: 600 }}>
          Expanding Educational Equity Through Data-Driven Partnerships
        </Typography>
      </Paper>
      
      {/* Vision Statement */}
      <Paper 
        sx={{ 
          p: 4, 
          backgroundColor: 'rgba(255, 167, 38, 0.2)', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.12)', 
          borderRadius: 2,
          mb: 4,
          color: '#000000'
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>Summary</Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
              "We are aiming to identify and engage schools that are not yet part of the program but show strong potential for inclusion. Our goal is to help expand the program's reach by connecting with schools that, based on their geographical location and demographic makeup, reflect similar positive progress and outcomes seen in current participating schools."
            </Typography>
          </Box>
          <Box sx={{ flex: 1, minHeight: 300 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, textAlign: 'center' }}>
              U.S. School Coverage
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={schoolCoverageData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {schoolCoverageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Paper>
      
      {/* Target Audience Section */}
      <Paper 
        sx={{ 
          p: 4, 
          backgroundColor: 'rgba(141, 110, 99, 0.05)', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)', 
          borderRadius: 2,
          mb: 4
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <SchoolIcon color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
          <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>Target Audience</Typography>
        </Box>
        
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 3 }}>
          We are strategically identifying and engaging schools that are not yet part of the program but show 
          <strong> exceptional potential for inclusion</strong>. Our data-driven approach targets institutions that, 
          based on their geographical location and demographic makeup, mirror the success patterns we've observed 
          in our current partner schools.
        </Typography>
        
        <Box sx={{ pl: 2, borderLeft: '4px solid', borderColor: 'primary.main', mt: 3, mb: 4 }}>
          <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
            We specifically focus on:
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <CheckIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
              Title I schools currently not enrolled in the program
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
              Schools with similar profiles to our highest-performing partners
            </Typography>
          </Box>
        </Box>
      </Paper>
      
      {/* Solution Strategy Section */}
      <Paper 
        sx={{ 
          p: 4, 
          backgroundColor: 'rgba(141, 110, 99, 0.05)', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)', 
          borderRadius: 2,
          mb: 4
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <AnalyticsIcon color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
          <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>Our Solution Strategy</Typography>
        </Box>
        
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 3 }}>
          To effectively support our school partners and expand this program, we've analyzed extensive data to identify 
          which schools may benefit most from our offerings. By examining course performance trends—particularly those 
          with high pass rates—we can recommend optimal course selections tailored to each school's unique context.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
              <TrendingUpIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Data-Driven Matching
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', pl: 4 }}>
              We leverage student success data to match specific courses with schools based on 
              their unique challenges, demographics, and proven strengths.
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
              <TrendingUpIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Regional Success Patterns
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', pl: 4 }}>
              Our analytics identify which courses perform best in specific regions, allowing 
              us to recommend proven successful models to new partner schools.
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
              <TrendingUpIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Targeted Expansion
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', pl: 4 }}>
              We prioritize schools where our data indicates students will benefit most, 
              maximizing program impact and student outcomes.
              See our <Link to="/analytics" style={{ color: '#8D6E63', textDecoration: 'underline' }}>Program Expansion Analytics</Link> for detailed state-by-state recommendations.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default DataTable; 