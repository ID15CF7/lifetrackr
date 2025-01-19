// Purpose: Import all images from public folder
/// <reference types="webpack-env" />

export const importAllImages = (r: __WebpackModuleApi.RequireContext) => {
  const images: { [key: string]: string } = {};
  r.keys().forEach((item: string) => {
    images[item.replace('./', '')] = r(item).default;
  });
  return images;
};

// Adjust the path to correctly point to the public folder
const images = importAllImages(require.context('../public', false, /\.(png)$/));

export default images;