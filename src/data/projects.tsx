import AssaultCube from "../images/project/AssaultCubeTrainer.png";
import LoopMania from "../images/project/loopmania.png";
import InstaCook from "../images/project/recipe.png";
import HamsterHealth from "../images/project/hamsterhealth.png";
import Transcriber from "../images/project/transcriber.png";
import SnakeSSH from "../images/project/snake2.png";
import FactoryReset from "../images/project/FactoryReset.png";

export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Multiplayer CLI Snake Game",
    description:
      "Real-time multiplayer Snake game that runs directly in your terminal via SSH. Built with C#, .NET, and SignalR. All deployed on GCP.",
    image: SnakeSSH,
    url: "https://github.com/Swxer/Multiplayer-CLI-Snake",
  },
  {
    title: "Instacook",
    description:
      "Full-stack recipe sharing platform allowing users to search, share, and manage recipes, complete with a personalised feed and bookmarking features.",
    image: InstaCook,
    url: "https://github.com/Swxer/Instacook",
  },
  {
    title: "Guitar Tab Transcriber",
    description:
      "A tool that processes an audio file, analyses its melody, and converts the musical data into a clean, readable ASCII guitar tablature.",
    image: Transcriber,
    url: "https://github.com/Swxer/guitar-tab-transcriber",
  },
  {
    title: "Factory Reset",
    description:
      "2D Top-down Shooter made with C# and Unity. Features include dynamic enemy AI, variety of weapons and player upgrades.",
    image: FactoryReset,
    url: "https://github.com/Brownie-Dog/factory-reset",
  },
  {
    title: "Hamster Health",
    description:
      "Hackathon project (ranked top 16 of 75 teams) focused on organization, habit tracking, and user motivation.",
    image: HamsterHealth,
    url: "https://github.com/Team-Hamsterdam",
  },
  {
    title: "Loop Mania",
    description:
      "A 2D strategy game featuring cyclical map traversal, automated character movement, and dynamic battle elements.",
    image: LoopMania,
    url: "https://github.com/Swxer/Loop-Mania",
  },
  {
    title: "AssaultCube Trainer",
    description:
      "Runtime memory modification tool for real-time memory manipulation and advanced in-game functionality.",
    image: AssaultCube,
    url: "https://github.com/Swxer/AssaultCube-v1.2.0.2-Trainer",
  },
];
