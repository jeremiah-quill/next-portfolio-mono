// TODO: how to type context
export const extractRecipe = (rawRecipeData: any) => {
  const formattedRecipe = {
    id: rawRecipeData.id,
    name: rawRecipeData.attributes.name,
    ingredients: rawRecipeData.attributes.ingredients,
    instructions: rawRecipeData.attributes.instructions,
    publishedAt: rawRecipeData.attributes.publishedAt,
    slug: rawRecipeData.attributes.slug,
    photo: rawRecipeData.attributes.photo.data?.attributes.url || null,
  };

  return formattedRecipe;
};

export const extractProject = (rawProjectData: any) => {
  const formattedProject = {
    id: rawProjectData.id,
    title: rawProjectData.attributes.title,
    subtitle: rawProjectData.attributes.subtitle,
    summary: rawProjectData.attributes.summary,
    liveUrl: rawProjectData.attributes.liveUrl,
    codeUrl: rawProjectData.attributes.codeUrl,
    stack: rawProjectData.attributes.stack,
    figures: rawProjectData.attributes.figures.map((figure: any) => ({
      id: figure.id,
      caption: figure.caption,
      imgUrl: figure.imgUrl.data.attributes.url,
    })),
    notable_features: rawProjectData.attributes.notable_features,
    featuredImgBig: rawProjectData.attributes.featuredImgBig.data[0].attributes.url,
    slug: rawProjectData.attributes.slug,
    featureSpotlight: rawProjectData.attributes.featureSpotlight,
  };

  return formattedProject;
};

export const getCol = (num: number) => {
  switch (num) {
    case 1:
      return "md:col-span-1";
    case 2:
      return "md:col-span-2";
    case 3:
      return "md:col-span-3";
    case 4:
      return "md:col-span-4";
    case 5:
      return "md:col-span-5";
    case 6:
      return "md:col-span-6";
    default:
      return;
  }
};

export const getRow = (num: number) => {
  switch (num) {
    case 1:
      return "md:row-span-1";
    case 2:
      return "md:row-span-2";
    case 3:
      return "md:row-span-3";
    case 4:
      return "md:row-span-4";
    case 5:
      return "md:row-span-5";
    case 6:
      return "md:row-span-6";
    default:
      return;
  }
};

// export const isDev = () => if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//   return ""
// } else {
//   // production code
// };

export const isDev = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return true;
  } else {
    return false;
  }
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
