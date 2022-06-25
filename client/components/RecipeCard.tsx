import Link from "next/link";

const RecipeCard = ({ recipe }: { recipe: any }) => {
  return (
    <li className="bg-white px-2 py-1">
      <Link href={`/recipes/${recipe.name}`}>
        <a>
          <h1>{recipe.name}</h1>
        </a>
      </Link>
    </li>
  );
};

export default RecipeCard;
