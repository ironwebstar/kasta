import styled from 'styled-components/native';

import { COLORS, FONT_FAMILY, FONT_SIZES } from './constants';

interface ICenteredProp {
  isCentered?: boolean;
}

interface IColorProp {
  color?: string;
}

interface IFontProp {
  fontSize?: keyof typeof FONT_SIZES;
  fontFamily?: keyof typeof FONT_FAMILY;
  lineHeight?: number;
}

export const Theme = {
  Screen: styled.View<IColorProp & ICenteredProp>`
    flex: 1;
    ${({ isCentered }) =>
      isCentered &&
      `
      align-items: center;
    `}
    ${({ color }) => `
      background-color: ${color}`}
  `,

  Text: styled.Text<ICenteredProp & IColorProp & IFontProp>`
    font-size: ${({ fontSize }) => FONT_SIZES[fontSize || 'normal']}px;
    color: ${({ color }) => color || COLORS.primary};
    ${({ isCentered }) => isCentered && 'text-align: center'};
    ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px`};
    font-family: ${({ fontFamily }) =>
      fontFamily ? FONT_FAMILY[fontFamily] : FONT_FAMILY.arial};
  `,
};
