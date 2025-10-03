import { Container, Typography, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';
import { projects } from '../utils/projects'

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

const ProjectSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}> 
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

      <Grid container spacing={4}>
        {projects.map((project: Project) => (
          
          <Grid 
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
              image={project.image}
              url={project.url}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectSection;