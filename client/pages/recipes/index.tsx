import RecipeList from "../../components/RecipeList";
import RecipeSearch from "../../components/RecipeSearch";
import Link from "next/link";
import { extractRecipe } from "../../utils/helpers";

// TODO: make this 100% type safe
export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/recipes?populate=*");
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
        I've created this recipe "blog" to test Jamstack functionality. I'm able to manage these
        entries through a Strapi headless CMS setup. Feel free to comment on and rate any recipes
        you see here!
      </div>
      <RecipeSearch />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
