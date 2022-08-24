// import RecipeList from "../../components/RecipeList";
// import RecipeSearch from "../../components/RecipeSearch";
// import Link from "next/link";
// import { extractRecipe } from "../../utils/helpers";

// TODO: make this 100% type safe
// export async function getStaticProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/recipes?populate=*`);
//   const { data: rawRecipes } = await res.json();

//   const recipes = rawRecipes.map((rawRecipe: any) => {
//     return extractRecipe(rawRecipe);
//   });

//   return {
//     props: {
//       recipes: recipes,
//     },
//     revalidate: 3600,
//   };
// }

// const ArtworkPage = ({ images }: { images: any }) => {
const ArtworkPage = () => {
  return (
    <div className="relative w-full h-full font-robot">
      <div className="m-auto w-full text-center pt-36 pb-20 text-2xl text-gray-400">
        <div className="lg:columns-3 sm:columns-2 xs:columns-1 gap-5">
          <img
            className="w-full mb-5 rounded-md"
            src="./artwork/jeremiah_quill_an_old_wise_man_holding_a_magical_glass_sphere_a_db336f7b-befa-4533-8118-f6ce54442863.png"
          />
          <img
            className="w-full mb-5 rounded-md"
            src="./artwork/jeremiah_quill_epic_multi-level_treehouse_with_tiny_fairies_liv_28bda995-b126-4177-aa30-0dd07530d7f6.png"
          />
          <img
            className="w-full mb-5 rounded-md"
            src="./artwork/jeremiah_quill_epic_multi-level_treehouse_with_tiny_fairies_liv_6447382f-d84a-4659-9f30-c157bad51785.png"
          />
          <img
            className="w-full mb-5 rounded-md"
            src="./artwork/jeremiah_quill_green_rolling_hills_next_to_a_serene_lake_mounta_b6fa6113-bd93-44e2-8721-1532b5362a30.png"
          />
          <img
            className="w-full mb-5 rounded-md"
            src="./artwork/jeremiah_quill_ice_peaked_mountains_reflecting_off_of_a_serene__aca25701-a414-407a-9eaa-e809ba694b45.png"
          />
          <img
            className="w-full mb-5 rounded-md"
            src="./artwork/jeremiah_quill_mushroom_ravioli_food_photography_8k_c8a8fc25-0346-46e9-b623-aac35098335b.png"
          />
          <img
            className="w-full mb-5 rounded-md"
            src="./artwork/jeremiah_quill_psychedelic_tree_of_life_aeee0e52-20bd-4d11-a111-9f8f7f44ad8d 1.png"
          />
        </div>
        {/* Test artwork page */}
      </div>
      {/* <RecipeSearch /> */}
      {/* <RecipeList recipes={recipes} /> */}
    </div>
  );
};

export default ArtworkPage;
