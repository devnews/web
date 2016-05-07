import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    indigo900,
    grey100, grey300, grey400, grey500,
    white, lightBlack, darkBlack,
} from 'material-ui/styles/colors';

const Theme = getMuiTheme({
    palette: {
        primary1Color: grey300,
        primary2Color: grey400,
        primary3Color: lightBlack,
        accent1Color: indigo900,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: darkBlack,
        canvasColor: white,
        borderColor: grey300,
    }
});

export default Theme;
