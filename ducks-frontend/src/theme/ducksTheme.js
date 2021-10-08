import {extendTheme} from '@chakra-ui/react';

import colors from './colors.js';
import styles from './styles.js';
import fonts from './fonts.js';

import Link from './components/link';

const ducksTheme = extendTheme({
    colors,
    styles,
    fonts,
    components : {
        Link
    }
});

export default ducksTheme;