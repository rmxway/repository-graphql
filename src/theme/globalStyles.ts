import { createGlobalStyle } from 'styled-components';

import { base, reset } from '@/src/theme/styles';

export const GlobalStyles = createGlobalStyle`
    ${reset};
    ${base};
`;

export default GlobalStyles;
