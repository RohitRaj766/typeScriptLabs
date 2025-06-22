export interface Project {
  name: string;
  description: string;
  image: string;
}

export const projectCollections: Record<string, Project> = {
  Counter: {
    name: "Counter App",
    description: "A simple click counter built with TypeScript.",
    image: "https://via.placeholder.com/150"
  },
  Counter2: {
    name: "Counter App 2",
    description: "Another version with additional features.",
    image: "https://via.placeholder.com/150"
  },
  Counter3: {
    name: "Counter App 3",
    description: "Yet another variation of the counter app.",
    image: "https://via.placeholder.com/150"
  },
  Counter4: {
    name: "Counter App 4",
    description: "Now with animations and more styling.",
    image: "https://via.placeholder.com/150"
  },
  Counter5: {
    name: "Counter App 5",
    description: "Includes dark mode support.",
    image: "https://via.placeholder.com/150"
  },
  Counter6: {
    name: "Counter App 6",
    description: "Connected to a backend for persistent storage.",
    image: "https://via.placeholder.com/150"
  }
};
