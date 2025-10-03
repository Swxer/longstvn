import { Container, Typography, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

const projects = [
  { id: 1, title: 'Lizard (Placeholder)', description: 'This is a test.' },
  { id: 2, title: 'Project Two', description: 'A brief description of my second project.' },
  { id: 3, title: 'Project Three', description: 'This project highlights my backend skills.' },
  { id: 4, title: 'Project Four', description: 'A full-stack application showcase.' },
];

const ProjectSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}> {/* Use py for padding top/bottom */}
      <Typography 
        variant="h3" 
        component="h2" 
        align="center" 
        sx={{ 
          color: 'white', 
          mb: 6, 
          fontFamily: '"Jersey 15", sans-serif',
          textShadow: '0 0 10px #69e9ffff, 0 0 20px #69e9ffff, 0 0 30px #3205fcff',
        }}
      >
        Projects
      </Typography>

      {/* Grid container to hold all the project cards */}
      <Grid container spacing={4}>
        {/* The mapping function, ready for your real data */}
        {projects.map((project) => (
          
          /* Grid item defines the column width for a single card */
          <Grid 
            item={true}
            key={project.id} 
            size={{
                xs: 12,
                sm: 6,
                md: 6,
            }}   
          >
            <ProjectCard 
              title={project.title} 
              description={project.description} 
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectSection;