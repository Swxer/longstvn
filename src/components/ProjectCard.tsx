import { Box, Card, CardContent, Typography } from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <Box sx={{ mb: 4, width: '100%' }}> 
      <Card 
        sx={{ 
          minHeight: 200, 
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'white' 
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontFamily: '"Jersey 15", sans-serif' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: '#c1ffe4' }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectCard;