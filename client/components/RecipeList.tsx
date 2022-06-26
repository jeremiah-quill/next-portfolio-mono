import RecipeCard from "./RecipeCard";

type Recipe = {
  id: string;
  name: string;
  ingredients: string;
  instructions: string;
  publishedAt: number;
  photo: string | null;
};

const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <ul className="flex flex-col gap-2">
      {recipes.map((recipe: any) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};

export default RecipeList;
