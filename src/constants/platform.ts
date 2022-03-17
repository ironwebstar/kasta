import { Platform, Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const scale = width / 148;
const scaleY = height / 320;

function normalize(size: number) {
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(size)) - 2;
  }
}

export const PLATFORM = {
  isIOS: Platform.OS === 'ios',
  width,
  height,
  normalize: (size: number) => {
    return normalize(size * scale);
  },
  normalizeY: (size: number) => {
    return normalize(size * scaleY);
  },
};
