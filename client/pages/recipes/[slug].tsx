import Link from "next/link";
import { extractRecipe, isDev } from "../../utils/helpers";

// TODO: make this 100% type safe
export async function getStaticProps({ params }: { params: any }) {
  const { slug } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/recipes?populate=*`); // add "?pupulate=*" to include the upload property within attributes (so we can access images added to Strapi Media Library)
  const { data: rawRecipes } = await res.json();
  const rawRecipeData = rawRecipes.find((rawRecipe: any) => rawRecipe.attributes.slug === slug);

  const recipe = extractRecipe(rawRecipeData);

  return {
    props: { recipe },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/recipes`);
  const { data } = await res.json();

  const recipePaths = data.map((el: any) => ({
    params: {
      slug: el.attributes.slug,
    },
  }));

  return {
    paths: [...recipePaths],
    fallback: false,
  };
}

const RecipePage = ({ recipe }: { recipe: any }) => {
  return (
    <div className="relative w-full h-full py-20 font-robot">
      <Link href="/recipes">
        <a className="bg-white px-2 font-bold rounded inline-block mb-10 hover:bg-gray-400">
          View all recipes
        </a>
      </Link>
      <div className="bg-white p-10 rounded-md">
        <h1 className="text-4xl mb-3">{recipe.name}</h1>
        <div className="mb-3">Recipe details</div>
        <img
          src={
            recipe.photo
              ? `${isDev() ? process.env.NEXT_PUBLIC_STRAPI_URL : "" + recipe.photo}`
              : "https://via.placeholder.com/150"
          }
          className="mb-5 mx-auto w-1/2"
        />
        {/* <div className="text-center mb-10">social sharing</div> */}
        <div className="mb-10">
          <h2 className="text-2xl mb-2 text-center">Ingredients</h2>
          <div>{recipe.ingredients}</div>
          {/* <ul className="text-center">
            <li>3 lbs. rice</li>
            <li>2 potatoes</li>
            <li>2 cups water</li>
            <li>minced garlic</li>
            <li>salt and pepper</li>
            <li>1/2 teaspoon paprika</li>
          </ul> */}
        </div>
        <div>
          <h2 className="text-2xl mb-2 text-center">Instructions</h2>
          <div> {recipe.instructions}</div>
          {/* <ol className="list-decimal flex flex-col gap-2">
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure id distinctio quaerat
              inventore commodi tempore, obcaecati officiis iste ad soluta quos culp
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, numquam
              exercitationem nostrum minus dicta, dolores in, asperiores ullam deleniti animi totam
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, numquam
              exercitationem nostrum minus dicta, dolores in, asperiores ullam deleniti animi totam
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, numquam
              exercitationem nostrum minus dicta, dolores in, asperiores ullam deleniti animi totam
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, numquam
              exercitationem nostrum minus dicta, dolores in, asperiores ullam deleniti animi totam
            </li>
          </ol> */}
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
