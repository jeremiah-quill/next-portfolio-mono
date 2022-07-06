// export const fetcher = async (url: string) => {
//   const res = await fetch(url);
//   const data = await res.json();
//   return { data };
// };

export const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
  });

  return res.json();
};
