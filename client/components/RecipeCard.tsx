import Link from "next/link";

type Recipe = {
  id: string;
  name: string;
  ingredients: string;
  instructions: string;
  publishedAt: number;
  slug: string;
  photo: string | null;
};

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <li className="bg-white px-2 py-1 text-2xl hover:bg-gray-400 transition-all">
      <Link href={`/recipes/${recipe.slug}`}>
        <a>
          <h1>{recipe.name}</h1>
        </a>
      </Link>
    </li>
  );
};

export default RecipeCard;
