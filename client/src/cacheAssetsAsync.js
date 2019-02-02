// https://github.com/expo/new-project-template/blob/d6a440b01801fbeb323265e39a155d969ab6827f/utilities/cacheAssetsAsync.js

import { Image } from 'react-native';
import { Asset, Font } from 'expo';

export default function cacheAssetsAsync({ images = [], fonts = [] }) {
  return Promise.all([...cacheImages(images), ...cacheFonts(fonts)]);
}

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}