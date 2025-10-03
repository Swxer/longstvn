import { Box, Typography } from '@mui/material';
import React from 'react';

// ⭐️ IMPORT THE ICONS 
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
      }}
    >
      
      {/* Container for Social Icons */}
      <Box sx={{ mb: 1, '& > *': { mx: 1 } }}> 
        
        {/* 1. GITHUB ICON (Styled to be light/white) */}
        <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer">
          <GitHubIcon 
            sx={{ 
              fontSize: 32, // Adjust size here (e.g., 32px)
              color: '#FFFFFF', // ⭐️ Light/White color for the dark background
              '&:hover': { color: '#87fbf9' } // Hover effect using your blue theme color
            }} 
          />
        </a>

        {/* 2. LINKEDIN ICON (Styled with a theme color) */}
        <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon 
            sx={{ 
              fontSize: 32, // Keep size consistent
              color: '#d46eb4', // Theme color (e.g., your neon pink/purple)
              '&:hover': { color: '#FFFFFF' } // Reverse hover effect
            }} 
          />
        </a>
      </Box>

      {/* Your Name */}
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