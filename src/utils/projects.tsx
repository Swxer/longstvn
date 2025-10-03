import AssaultCube from '../images/project/AssaultCubeTrainer.png'; 
import LoopMania from '../images/project/loopmania.png';
import InstaCook from '../images/project/recipe.png';
import HamsterHealth from '../images/project/hamsterhealth.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
    { id: 1, 
      title: 'AssaultCube Trainer', 
      description: 'Custom external program developed for real-time memory manipulation and advanced in-game functionality.', 
      image: AssaultCube 
    },
    { id: 2, 
      title: 'Loop Mania', 
      description: "A 2D procedural strategy game featuring cyclical map traversal, automated character movement, and dynamic battle elements.", 
      image: LoopMania 
    },
    { id: 3, 
      title: 'Instacook', 
      description: ' Full-stack recipe sharing platform allowing users to search, share, and manage recipes, complete with a personalised feed and bookmarking features.', 
      image: InstaCook 
    },
    { id: 4, 
      title: 'Hamster Health', 
      description: 'Award-winning hackathon project (ranked top 16 of 75 teams) focused on organization, habit tracking, and user motivation.', 
      image: HamsterHealth 
    }
    // { id: 5, 
    //   title: 'Guitar Tab Transcriber', 
    //   description: 'A tool that takes in an audio file with simple melody, and converts it into a readable guitar tableture.', 
    //   image: HamsterHealth 
    // },
];