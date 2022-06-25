import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }: { recipes: any }) => {
  return (
    <ul className="flex flex-col gap-2">
      {recipes.map((recipe: any) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};

export default RecipeList;
