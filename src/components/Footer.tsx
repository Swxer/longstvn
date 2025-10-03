import { Box, Typography } from '@mui/material';
import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer"
      sx={{
        backgroundColor: '#120930', 
        color: 'white',
        py: 4, 
        mt: 4, 
        textAlign: 'center', 
        borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
        display: 'block', 
        width: '100%'
      }}
    >
      
      <Box sx={{ mb: 1, '& > *': { mx: 1 } }}> 
        <a href="https://github.com/Swxer" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/steven-nguyen-47a805387/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </Box>

      <Typography 
        variant="body2" 
        sx={{ 
          fontFamily: '"Jersey 15", sans-serif', 
          color: '#c1ffe4', 
        }}
      >
        Designed by Steven Long Nguyen
      </Typography>

    </Box>
  );
};

export default Footer;