import { PLATFORM } from '@constants/platform';

export const FONT_FAMILY = {
  varela: 'Varela-Regular',
  varelaRound: 'VarelaRound-Regular',
  arial: 'ArialMT',
  arialBold: 'Arial-BoldMT',
  robotoMedium: 'Roboto-Medium',
  robotoBold: 'Roboto-Bold',
};

export const FONT_SIZES = {
  normal: PLATFORM.normalize(6),
  medium: PLATFORM.normalize(7),
  big: PLATFORM.normalize(8),
  title: PLATFORM.normalize(9),
  bigTitle: PLATFORM.normalize(10),
  bigTitle1: PLATFORM.normalize(11),
  biggestTitle: PLATFORM.normalize(14),
  super: PLATFORM.normalize(20),
};
