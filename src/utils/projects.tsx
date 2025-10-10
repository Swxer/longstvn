import AssaultCube from '../images/project/AssaultCubeTrainer.png'; 
import LoopMania from '../images/project/loopmania.png';
import InstaCook from '../images/project/recipe.png';
import HamsterHealth from '../images/project/hamsterhealth.png';
import Transcriber from '../images/project/transcriber.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const projects: Project[] = [
    { id: 2, 
      title: 'Loop Mania', 
      description: "A 2D strategy game featuring cyclical map traversal, automated character movement, and dynamic battle elements.", 
      image: LoopMania,
      url: 'https://github.com/Swxer/Loop-Mania'
    },
    { id: 3, 
      title: 'Instacook', 
      description: ' Full-stack recipe sharing platform allowing users to search, share, and manage recipes, complete with a personalised feed and bookmarking features.', 
      image: InstaCook,
      url: 'https://github.com/Swxer/Instacook'
    },
    { id: 4, 
      title: 'Hamster Health', 
      description: 'Hackathon project (ranked top 16 of 75 teams) focused on organization, habit tracking, and user motivation.', 
      image: HamsterHealth,
      url: 'https://github.com/Team-Hamsterdam'
    },
    { id: 5, 
      title: 'Guitar Tab Transcriber', 
      description: 'A tool that processes an audio file, analyses its melody, and converts the musical data into a clean, readable ASCII guitar tablature.', 
      image: Transcriber,
      url:'https://github.com/Swxer/guitar-tab-transcriber'
    },
    { id: 1, 
      title: 'AssaultCube Trainer', 
      description: 'Runtime memory modification tool for real-time memory manipulation and advanced in-game functionality.', 
      image: AssaultCube,
      url: 'https://github.com/Swxer/AssaultCube-v1.2.0.2-Trainer'
    }
];