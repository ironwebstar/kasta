import styled from 'styled-components/native';

import { Theme } from '@styles/theme';
import { COLORS, FONT_FAMILY, FONT_SIZES } from '@styles/constants';

export const InputStyles = {
  Wrapper: styled.View`
    display: flex;
    justify-content: flex-start;
    width: 100%;
  `,
  Label: styled(Theme.Text)`
    text-transform: uppercase;
    margin-bottom: 5px;
  `,
  Input: styled.TextInput`
    font-family: ${FONT_FAMILY.varelaRound};
    font-size: ${FONT_SIZES.normal}px;
    line-height: 20px;
    border-bottom-color: ${COLORS.grey};
    border-bottom-width: 2px;
    padding: 12px;
  `,
};
