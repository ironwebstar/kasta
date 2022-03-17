import styled from 'styled-components/native';
import Button from '@components/button';
import { PLATFORM } from '@constants/platform';
1;
export const Styles = {
  KastaButton: styled(Button)`
    margin-bottom: ${PLATFORM.normalizeY(10)}px;
    border-radius: 8px;
    margin-top: ${PLATFORM.normalizeY(10)}px;
  `,
};
