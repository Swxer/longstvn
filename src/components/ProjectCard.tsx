import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material'; // <-- Add CardMedia

// Update the interface to include the image source (string URL)
interface ProjectCardProps {
  title: string;
  description: string;
  image: string; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
  const FIXED_IMAGE_HEIGHT = 200; 
  return (
    <Box sx={{ mb: 4, width: '100%' }}> 
      <Card 
        sx={{ 
          // minHeight: 200 + FIXED_IMAGE_HEIGHT, 
          backgroundColor: 'rgba(255, 255, 255, 0.05)', 
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          color: 'white' 
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