import styled from 'styled-components/native';
import { PLATFORM } from '@constants/platform';
import { Theme } from '@styles/theme';
import { COLORS, FONT_FAMILY, FONT_SIZES } from '@styles/constants';
import Input from '@components/input';

export const SigninStyles = {
  Wrapper: styled(Theme.Screen)`
    padding-top: ${PLATFORM.normalizeY(25)}px;
    padding-bottom: ${PLATFORM.normalizeY(25)}px;
    padding-left: ${PLATFORM.normalize(14)}px;
    padding-right: ${PLATFORM.normalize(14)}px;
  `,
  Title: styled(Theme.Text)`
    font-family: ${FONT_FAMILY.varelaRound};
    font-size: ${FONT_SIZES.biggestTitle}px;
    color: ${COLORS.grey};
    margin-bottom: ${PLATFORM.normalizeY(8)}px;
  `,
  Input: styled(Input)`
    margin-bottom: ${PLATFORM.normalizeY(6)}px;
  `,
};
