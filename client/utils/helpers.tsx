// TODO: how to type context
export const extractRecipe = (rawRecipeData: any) => {
  const formattedRecipe = {
    id: rawRecipeData.id,
    name: rawRecipeData.attributes.name,
    ingredients: rawRecipeData.attributes.ingredients,
    instructions: rawRecipeData.attributes.instructions,
    publishedAt: rawRecipeData.attributes.publishedAt,
    photo: rawRecipeData.attributes.photo.data?.attributes.url || null,
  };

  return formattedRecipe;
};

// * this gets the refresh token
// export async function getServerSideProps() {
//   const client_id = "55847e80caec422d9960cfca61b7618d";
//   const client_secret = "5a2d12e22dd842cfa02465559277bda8";
//   const res = await fetch(
//     "https://accounts.spotify.com/api/token?grant_type=authorization_code&code=AQCwVccdHWZJG7CsYh-nLJ6DUw4bwBMQBXqlQZ493urgGMaZqdewOYX6bv9NFtDtRb3b4FP3dEUFfLi2XhDIYuhSbQ6Y1-IxE_I7UNpEO5T32lhIQNAI0nzzub-KxQ4uXnpnuMJ27ehJddOC3_ipwIwy8hNG9Cv0tItJAIDYX4yJiq8aymSkIhhANoNAEntMOh6YMxOI&redirect_uri=http://localhost:8000",
//     {
//       method: "POST",
//       headers: {
//         Authorization: "Basic " + new Buffer(client_id + ":" + client_secret).toString("base64"),
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     }
//   );

//   console.log(res);
//   const data = await res.json();

//   console.log(data);
// }
