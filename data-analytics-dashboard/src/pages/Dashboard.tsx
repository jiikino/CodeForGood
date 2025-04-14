import { Box, Paper, Typography, Grid, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';

const courseData = [
  { name: 'Introduction to Social Work', passRate: 86.67, completionRate: 100, nps: 53.3 },
  { name: 'Raise Your Voice', passRate: 83.74, completionRate: 97.54, nps: 4.9 },
  { name: 'Searching Together', passRate: 82.89, completionRate: 97.37, nps: 32.9 },
  { name: 'Essentials of Personal Finance', passRate: 81.78, completionRate: 90.5, nps: 23.4 },
  { name: 'Data Science & Decision Making', passRate: 80.00, completionRate: 100, nps: -6.7 },
];

const geographicData = [
  { name: 'Poetry in America: The City', states: 29, schools: 194 },
  { name: 'Introductory Sociology', states: 25, schools: 102 },
  { name: 'Introduction to Cloud Computing', states: 23, schools: 104 },
  { name: 'Grit Lab', states: 19, schools: 74 },
  { name: 'Poetry in America: Foundations', states: 19, schools: 78 },
];

const highPerformingCourses = [
  { name: 'College Algebra', passRate: 74.64, nps: 13.4, schools: 50, states: 13 },
  { name: 'Environmental Science: Earthquakes', passRate: 71.34, nps: 23.2, schools: 26, states: 7 },
  { name: 'Essentials of Personal Finance', passRate: 81.78, nps: 23.4, schools: 90, states: 13 },
  { name: 'Introductory Sociology', passRate: 72.17, nps: 27.9, schools: 102, states: 25 },
  { name: 'Live Like a Philosopher', passRate: 64.81, nps: 16.7, schools: 23, states: 9 },
];

const universityData = [
  { name: 'Harvard University', location: 'Cambridge, MA', courses: 15, students: 1200 },
  { name: 'Stanford University', location: 'Stanford, CA', courses: 12, students: 950 },
  { name: 'MIT', location: 'Cambridge, MA', courses: 10, students: 800 },
  { name: 'Yale University', location: 'New Haven, CT', courses: 8, students: 650 },
  { name: 'Columbia University', location: 'New York, NY', courses: 9, students: 700 },
];

const COLORS = ['#FFA726', '#FFB74D', '#FFCC80', '#FFE0B2', '#FFF3E0'];

// Course data - deduplicated from the provided dataset
interface CourseData {
  name: string;
  totalStudents: number;
}

const courseList: CourseData[] = [
  { name: "Introduction to Computers", totalStudents: 200 },
  { name: "Introduction to Leadership Studies", totalStudents: 95 },
  { name: "Essentials of Personal Finance", totalStudents: 1100 },
  { name: "College Algebra", totalStudents: 544 },
  { name: "Data Science / Analytics I", totalStudents: 36 },
  { name: "Introductory Sociology", totalStudents: 585 },
  { name: "Introduction to Psychology", totalStudents: 131 },
  { name: "Introduction to Cloud Computing", totalStudents: 322 },
  { name: "Social Problems", totalStudents: 102 },
  { name: "Introduction to Microeconomics", totalStudents: 148 },
  { name: "Searching Together for the Common Good", totalStudents: 177 },
  { name: "Between Malcolm X and Martin Luther King, Jr.", totalStudents: 63 },
  { name: "International Relations", totalStudents: 92 },
  { name: "Climate Justice", totalStudents: 69 },
  { name: "Map(s) of the Modern World", totalStudents: 166 },
  { name: "Poetry in America: The City from Whitman to Hip Hop", totalStudents: 454 },
  { name: "Principles of Criminal Justice", totalStudents: 195 },
  { name: "Law and Literature", totalStudents: 169 },
  { name: "Introduction to Literature: Fantastic Places", totalStudents: 86 },
  { name: "Grit Lab: The Psychology of Passion & Perseverance", totalStudents: 253 },
  { name: "Western Way of War", totalStudents: 54 },
  { name: "Environmental Science: Earthquakes", totalStudents: 177 },
  { name: "Climate Change and You, The Engineer", totalStudents: 43 },
  { name: "Big Data for Big Policy Problems", totalStudents: 33 },
  { name: "Professional Communication", totalStudents: 65 },
  { name: "The Modern and the Postmodern", totalStudents: 18 },
  { name: "Introduction to Business Management", totalStudents: 125 },
  { name: "Poetry in America: Foundations of American Literature", totalStudents: 169 },
  { name: "Psychology and the Good Life", totalStudents: 53 },
  { name: "Poetry in America, Pilot", totalStudents: 66 },
  { name: "Raise Your Voice: Learn to Write Successfully", totalStudents: 150 },
  { name: "Introduction to Sociology: Memory as Collective", totalStudents: 77 },
  { name: "Environmental Studies and Justice", totalStudents: 54 },
  { name: "Introduction to Environmental Studies", totalStudents: 40 },
  { name: "Live Like a Philosopher: Ethics and Civics", totalStudents: 117 },
  { name: "Introduction to Bioengineering", totalStudents: 25 },
  { name: "The Education of Black Girls", totalStudents: 49 },
  { name: "Introduction to Programming", totalStudents: 35 },
  { name: "Clothing", totalStudents: 49 },
  { name: "Plantary Geology", totalStudents: 6 },
  { name: "Introduction to Social Work", totalStudents: 75 },
  { name: "Data Science & Decision Making: Engineering Applications", totalStudents: 19 },
  { name: "Introduction to Engineering", totalStudents: 12 }
];

// Sort courses by total students (descending)
const sortedCourses = [...courseList].sort((a, b) => b.totalStudents - a.totalStudents);

const Dashboard = () => {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({
    overall: false,
    courses: false,
    universities: false,
    performance: false,
    enrollment: false
  });

  const handleExpandClick = (card: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [card]: !prev[card]
    }));
  };

  // Calculate averages
  const averagePassRate = courseData.reduce((sum, course) => sum + course.passRate, 0) / courseData.length;
  const averageCompletionRate = courseData.reduce((sum, course) => sum + course.completionRate, 0) / courseData.length;
  const averageNPS = courseData.reduce((sum, course) => sum + course.nps, 0) / courseData.length;

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Course Success Analysis
      </Typography>

      {/* Key Metrics Section */}
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 167, 38, 0.15)', mb: 3, boxShadow: '0 2px 4px rgba(0,0,0,0.08)', borderRadius: 2, flex: 1, minWidth: '300px' }}>
          <Typography variant="h6" color="primary" gutterBottom>
            Overall Performance
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography>Total Courses: 43</Typography>
            <Typography>Average Pass Rate: {averagePassRate.toFixed(2)}%</Typography>
            <Typography>Average Completion Rate: {averageCompletionRate.toFixed(2)}%</Typography>
            <Typography>Average NPS: {averageNPS.toFixed(1)}</Typography>
          </Box>
        </Paper>

        <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 167, 38, 0.15)', mb: 3, boxShadow: '0 2px 4px rgba(0,0,0,0.08)', borderRadius: 2, flex: 1, minWidth: '300px' }}>
          <Typography variant="h6" color="primary" gutterBottom>
            Geographic Reach
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography>Total States: 32</Typography>
            <Typography>Total Schools: 477</Typography>
          </Box>
        </Paper>
      </Box>

      {/* Charts Section */}
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 167, 38, 0.15)', mb: 3, boxShadow: '0 2px 4px rgba(0,0,0,0.08)', borderRadius: 2, flex: 2, minWidth: '600px' }}>
          <Typography variant="h6" gutterBottom color="primary">
            Course Performance Metrics
          </Typography>
          <Box sx={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={courseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="passRate" fill="#FFA726" name="Pass Rate (%)" />
                <Bar dataKey="completionRate" fill="#FFB74D" name="Completion Rate (%)" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Paper>

        <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 167, 38, 0.15)', mb: 3, boxShadow: '0 2px 4px rgba(0,0,0,0.08)', borderRadius: 2, flex: 1, minWidth: '300px' }}>
          <Typography variant="h6" gutterBottom color="primary">
            Geographic Distribution
          </Typography>
          <Box sx={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={geographicData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="schools"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {geographicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Box>

      {/* High Performing Courses Section */}
      <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 167, 38, 0.15)', mb: 3, boxShadow: '0 2px 4px rgba(0,0,0,0.08)', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="primary">
            High Performing Courses
          </Typography>
          <IconButton size="small" onClick={() => handleExpandClick('performance')}>
            {expandedCards.performance ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </Box>
        <Collapse in={expandedCards.performance}>
          <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {highPerformingCourses.map((course) => (
              <Paper key={course.name} sx={{ p: 2, flex: 1, minWidth: '200px' }}>
                <Typography variant="subtitle1" color="primary">{course.name}</Typography>
                <Typography variant="body2">Pass Rate: {course.passRate}%</Typography>
                <Typography variant="body2">NPS: {course.nps}</Typography>
                <Typography variant="body2">{course.schools} schools across {course.states} states</Typography>
              </Paper>
            ))}
          </Box>
        </Collapse>
      </Paper>

      {/* Course Enrollment Data */}
      <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 167, 38, 0.15)', mb: 3, boxShadow: '0 2px 4px rgba(0,0,0,0.08)', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="primary">
            Course Enrollment Data
          </Typography>
          <IconButton size="small" onClick={() => handleExpandClick('enrollment')}>
            {expandedCards.enrollment ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </Box>
        <Typography variant="body2" paragraph>
          Comprehensive list of courses offered across all partner institutions, showing total student enrollment.
        </Typography>
        
        <Collapse in={expandedCards.enrollment}>
          <TableContainer component={Paper} sx={{ mb: 2, maxHeight: 600 }}>
            <Table stickyHeader aria-label="course enrollment table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FFE0B2' }}>Course Name</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#FFE0B2' }}>Total Students</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#FFE0B2' }}>Percentage of Program</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedCourses.map((course) => {
                  const totalAllStudents = sortedCourses.reduce((sum, c) => sum + c.totalStudents, 0);
                  const percentage = (course.totalStudents / totalAllStudents * 100).toFixed(1);
                  
                  return (
                    <TableRow
                      key={course.name}
                      sx={{ '&:nth-of-type(odd)': { backgroundColor: 'rgba(255, 167, 38, 0.1)' } }}
                    >
                      <TableCell component="th" scope="row">
                        {course.name}
                      </TableCell>
                      <TableCell align="right">{course.totalStudents}</TableCell>
                      <TableCell align="right">{percentage}%</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Paper sx={{ p: 2, flex: 1, minWidth: '200px' }}>
              <Typography variant="subtitle1" color="primary">Total Courses</Typography>
              <Typography variant="h4">{courseList.length}</Typography>
            </Paper>
            
            <Paper sx={{ p: 2, flex: 1, minWidth: '200px' }}>
              <Typography variant="subtitle1" color="primary">Total Students</Typography>
              <Typography variant="h4">{sortedCourses.reduce((sum, course) => sum + course.totalStudents, 0)}</Typography>
            </Paper>
            
            <Paper sx={{ p: 2, flex: 1, minWidth: '200px' }}>
              <Typography variant="subtitle1" color="primary">Most Popular Course</Typography>
              <Typography variant="h6">{sortedCourses[0].name}</Typography>
              <Typography variant="body2">{sortedCourses[0].totalStudents} students</Typography>
            </Paper>
          </Box>
        </Collapse>
      </Paper>
    </Box>
  );
};

export default Dashboard; 