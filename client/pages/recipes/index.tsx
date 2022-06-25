import RecipeList from "../../components/RecipeList";
import RecipeSearch from "../../components/RecipeSearch";
import Link from "next/link";
import { extractRecipe } from "../../utils/helpers";

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/recipes?populate=*");
  const { data: rawRecipes } = await res.json();

  const recipes = rawRecipes.map((rawRecipe) => {
    return extractRecipe(rawRecipe);
  });

  return {
    props: {
      recipes: recipes,
    },
  };
}

const RecipesPage = ({ recipes }: { recipes: any }) => {
  return (
    <div className="relative w-full h-full">
      <Link href="/">
        <a className="absolute top-5 left-5 bg-white px-2 font-bold rounded">Back</a>
      </Link>
      <div className="m-auto w-full text-center pt-36">Explain this page</div>
      <RecipeSearch />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
