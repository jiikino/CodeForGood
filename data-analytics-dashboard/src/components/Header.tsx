import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        width: '100%',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: '#F5E8D5',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(255, 167, 38, 0.3)'
      }}
    >
      <Toolbar sx={{ 
        minHeight: 64,
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, color: '#000000' }}>
          National Education Equity Lab
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {['OUR PARTNERS', 'CONTACT'].map((item) => (
            <Typography 
              key={item}
              variant="body1" 
              component="a"
              href="#"
              sx={{ 
                color: '#000000', 
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              {item}
            </Typography>
          ))}
          
          <Button 
            variant="contained" 
            color="primary"
            sx={{ 
              backgroundColor: '#000000',
              '&:hover': {
                backgroundColor: '#333333'
              },
              borderRadius: 0,
              padding: '8px 20px'
            }}
          >
            DONATE
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 