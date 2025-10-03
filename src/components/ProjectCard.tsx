import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material'; 

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, url }) => {
  const FIXED_IMAGE_HEIGHT = 200; 
  return (
    <Box 
      component="a"
      href={url}
      target="_blank"sx={{ mb: 4, width: '100%' }}
    > 
      <Card 

        sx={{ 
          // minHeight: 200 + FIXED_IMAGE_HEIGHT, 
          backgroundColor: 'rgba(255, 255, 255, 0.05)', 
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          color: 'white', 
          textDecoration: 'none',
          cursor: 'pointer',
          '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease-in-out',
          }
        }}
      >

        <CardMedia
          component="img" 
          height={FIXED_IMAGE_HEIGHT} 
          image={image} 
          alt={`${title} project image`} 
          sx={{ objectFit: 'cover' }}
        />

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