import { techSkills } from '../utils/techStacks';
import { Box, Typography, Grid, Tooltip, Paper } from '@mui/material';
import type React from 'react';

const DARK_PURPLE = '#1a103d'; 

const TechStack: React.FC = () => {
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: '#010127' }}>
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        sx={{
          color: 'white',
          fontFamily: "'Jersey 15', sans-serif",
          mb: 6,
          textShadow: '0 0 10px #69e9ffff, 0 0 20px #69e9ffff, 0 0 30px #3205fcff', 
        }}
      >
        Technology Stack
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {techSkills.map((skill) => (
          <Grid key={skill.id}>
            <Tooltip 
                title={skill.name} // The text that appears on hover
                arrow 
                placement="top"
            >
              <Paper 
                elevation={5} 
                sx={{ 
                  p: 2, 
                  width: 100, 
                  height: 100,
                  textAlign: 'center', 
                  backgroundColor: DARK_PURPLE,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  cursor: 'pointer',

                  '&:hover': {
                      transform: 'scale(1.15)',
                      transition: '0.2s',
                  },
                }}
              >
                <img 
                    src={skill.icon} 
                    alt={`${skill.name} Icon`} 
                    style={{ 
                        width: '80%',
                        height: '80%', 
                        objectFit: 'contain' 
                    }}
                />
              </Paper>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechStack;