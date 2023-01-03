export const createResource = (fetchFunction: any) => {
  let data: any;
  const promise = fetchFunction()
    .then((response: any) => (response.json ? response.json() : response))
    .then((parsedResponse: any) => (data = parsedResponse));

  return {
    read() {
      if (!data) {
        throw promise;
      }

      return data;
    },
  };
};

export const getPokemonIdFromUrl = (currentPath: string) => {
  return currentPath.split("/pokemon/")[1];
};

export const preloadImage = (src: string) => {
  return new Promise((resolve) => {
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => resolve(src);
  });
};

export const getMainImageUrl = (name: string) => {
  return `https://img.pokemondb.net/artwork/vector/${name}.png`;
};

export const FETCH_STATUS = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};
