import { Box, Paper, Typography, Accordion, AccordionSummary, AccordionDetails, Divider, Chip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

// State expansion recommendations data
interface StateRecommendation {
  currentState: string;
  description?: string;
  expandStates: { name: string; note?: string; link?: string }[];
  recommendedCourses: { name: string; successRate?: number }[];
}

const stateRecommendations: StateRecommendation[] = [
  {
    currentState: "Arizona",
    expandStates: [
      { name: "Utah", note: "Strong in finance + tech (Salt Lake City)" }
    ],
    recommendedCourses: [
      { name: "College Algebra", successRate: 80 },
      { name: "Introduction to Computer Science", successRate: 85 }
    ]
  },
  {
    currentState: "California",
    expandStates: [
      { name: "Oregon", link: "https://www.pps.net/jefferson" }
    ],
    recommendedCourses: [
      { name: "Introduction to Cloud Computing", successRate: 63 },
      { name: "Introduction to Computers", successRate: 93 }
    ]
  },
  {
    currentState: "Colorado",
    description: "Strong due to the colleges there. If you're studying sociology or the psychology of grit, these states may not have flashy hubs — but they are the lab.",
    expandStates: [
      { name: "Montana", note: "University of Montana, MSU" },
      { name: "Nebraska", note: "University of Nebraska" },
      { name: "South Dakota" },
      { name: "Wyoming", note: "University of Wyoming" }
    ],
    recommendedCourses: [
      { name: "Introduction to Sociology", successRate: 78 },
      { name: "Grit Lab: The Psychology of Passion and Perseverance", successRate: 82 }
    ]
  },
  {
    currentState: "Connecticut / New Jersey / New York",
    expandStates: [
      { name: "Delaware" },
      { name: "New Hampshire" },
      { name: "Vermont" },
      { name: "Maine" }
    ],
    recommendedCourses: [
      { name: "Introduction to Personal Finance", successRate: 85 },
      { name: "Introduction to Microeconomics", successRate: 77 }
    ]
  },
  {
    currentState: "Florida",
    expandStates: [
      { name: "Alabama" }
    ],
    recommendedCourses: [
      { name: "Essentials of Personal Finance", successRate: 82 },
      { name: "Principles of Criminal Justice", successRate: 75 }
    ]
  },
  {
    currentState: "Georgia",
    expandStates: [
      { name: "Kentucky" },
      { name: "West Virginia" },
      { name: "North Carolina" }
    ],
    recommendedCourses: [
      { name: "Introduction to Cloud Computing", successRate: 68 },
      { name: "Poetry in America", successRate: 74 }
    ]
  },
  {
    currentState: "Illinois",
    expandStates: [
      { name: "Missouri" },
      { name: "Arkansas", note: "Optional, also listed under LA/TX" }
    ],
    recommendedCourses: [
      { name: "Data Science & Decision Making", successRate: 72 },
      { name: "Introduction to Social Work", successRate: 80 }
    ]
  },
  {
    currentState: "Iowa",
    expandStates: [
      { name: "North Dakota" },
      { name: "South Dakota" }
    ],
    recommendedCourses: [
      { name: "Searching Together", successRate: 77 },
      { name: "Raise Your Voice", successRate: 79 }
    ]
  },
  {
    currentState: "Kansas",
    expandStates: [
      { name: "Oklahoma" }
    ],
    recommendedCourses: [
      { name: "Environmental Science: Earthquakes", successRate: 71 },
      { name: "Live Like a Philosopher", successRate: 65 }
    ]
  },
  {
    currentState: "Louisiana",
    expandStates: [
      { name: "Arkansas", note: "Flex group" }
    ],
    recommendedCourses: [
      { name: "College Algebra", successRate: 75 },
      { name: "Essentials of Personal Finance", successRate: 82 }
    ]
  },
  {
    currentState: "Texas",
    expandStates: [
      { name: "Oklahoma" },
      { name: "Arkansas" }
    ],
    recommendedCourses: [
      { name: "Introduction to Cloud Computing", successRate: 77 },
      { name: "Introduction to Computers", successRate: 85 }
    ]
  }
];

const Analytics = () => {
  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h4" gutterBottom color="primary" sx={{ fontSize: '2.2rem', fontWeight: 700 }}>
        Program Expansion Analytics
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
        This analytical dashboard implements our <Link to="/datatable" style={{ color: '#8D6E63', textDecoration: 'underline' }}>Solution Strategy</Link> by identifying potential partner schools based on data-driven matching and regional success patterns. The recommendations below are derived from our analysis of current program performance data.
      </Typography>

      {/* State Expansion Recommendations */}
      <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 167, 38, 0.15)', boxShadow: '0 2px 4px rgba(0,0,0,0.08)', borderRadius: 2 }}>
        <Typography variant="h6" color="primary" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
          State Expansion Recommendations
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
          Below are states that excel in our program, along with neighboring states that would benefit from similar courses based on regional success patterns. Recommendations are data-driven with course success rates shown where available.
        </Typography>
        
        <Box sx={{ mt: 2 }}>
          {stateRecommendations.map((recommendation) => (
            <Accordion key={recommendation.currentState} sx={{ mb: 1, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ fontSize: '1.2rem' }}>
                  {recommendation.currentState}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {recommendation.description && (
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem' }}>
                    {recommendation.description}
                  </Typography>
                )}
                
                <Typography variant="subtitle2" sx={{ mb: 1, fontSize: '1.1rem', fontWeight: 600 }}>
                  Recommended Expansion States:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {recommendation.expandStates.map((state) => (
                    <Chip 
                      key={state.name} 
                      label={state.name} 
                      color="primary" 
                      variant="outlined" 
                      title={state.note}
                      sx={{ mb: 1, fontSize: '1rem', height: 'auto', py: 0.5 }}
                    />
                  ))}
                </Box>
                
                <Divider sx={{ my: 1 }} />
                
                <Typography variant="subtitle2" sx={{ mb: 1, mt: 2, fontSize: '1.1rem', fontWeight: 600 }}>
                  Recommended Courses Based on 80%+ Testing:
                </Typography>
                <Box>
                  {recommendation.recommendedCourses.map((course) => (
                    <Box key={course.name} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1" sx={{ fontSize: '1.05rem' }}>{course.name}</Typography>
                      {course.successRate && (
                        <Chip 
                          size="medium"
                          label={`${course.successRate}% Success`} 
                          color={course.successRate >= 80 ? "success" : course.successRate >= 70 ? "warning" : "error"}
                          variant="outlined"
                          sx={{ fontSize: '0.95rem', height: 'auto', py: 0.5 }}
                        />
                      )}
                    </Box>
                  ))}
                </Box>
                
                <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic', fontSize: '1.05rem' }}>
                  Analysis: Courses recommended based on regional success patterns and academic infrastructure.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Analytics; 