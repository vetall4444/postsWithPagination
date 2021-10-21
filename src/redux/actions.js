const photosLoaded = (items) => {
  return {
    type: "PHOTOS_LOADED",
    payload: items,
  };
};
