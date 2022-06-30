import RecipeList from "../../components/RecipeList";
import RecipeSearch from "../../components/RecipeSearch";
import Link from "next/link";
import { extractRecipe } from "../../utils/helpers";

// TODO: make this 100% type safe
export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/recipes?populate=*`);
  const { data: rawRecipes } = await res.json();

  const recipes = rawRecipes.map((rawRecipe: any) => {
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
    <div className="relative w-full h-full font-robot">
      <div className="m-auto w-full text-center pt-36 pb-20 text-2xl text-gray-400">
        I've created this recipe feed to play around with the Strapi backend and some simple
        Jamstack functionality. I'm able to manage these entries through a Strapi headless CMS
        setup. Comments and rating system under construction.
      </div>
      <RecipeSearch />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
