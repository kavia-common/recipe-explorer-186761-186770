export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  timeMinutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  ingredients: string[];
  steps: string[];
};
