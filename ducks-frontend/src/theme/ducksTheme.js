import {extendTheme} from '@chakra-ui/react';

import colors from './colors.js';
import styles from './styles.js';
import fonts from './fonts.js';

const ducksTheme = extendTheme({
    colors,
    styles,
    fonts
});

export default ducksTheme;