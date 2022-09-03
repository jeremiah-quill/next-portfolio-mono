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

export const extractArt = (rawArtData: any) => {
  const formattedArt = {
    id: rawArtData.id,
    job_id: rawArtData.attributes.job_id,
    slug: rawArtData.attributes.slug,
    smallImg: rawArtData.attributes.image.data.attributes.formats.thumbnail.url,
    bigImg: rawArtData.attributes.image.data.attributes.formats.medium.url,
  };

  return formattedArt;
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

export const isDev = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return true;
  } else {
    return false;
  }
};

export const showTime = (millis: number) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
  return seconds == 60 ? minutes + 1 + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export const showPercentage = (progress: number, duration: number) => {
  return ((progress / duration) * 100).toFixed();
};
