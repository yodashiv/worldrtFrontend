import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const blueTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: blue,
    },
    status: {
        danger: 'orange',
    },
});

export default blueTheme;
