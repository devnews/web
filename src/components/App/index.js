import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../../../config/theme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import UpIcon from 'material-ui/svg-icons/navigation/arrow-upward';
import Header from '../Header';
import News from '../News';
import Sponsor from '../Sponsor';
import styles from './index.css';

class App extends React.Component {

    render () {
        return (
            <MuiThemeProvider muiTheme={Theme}>
                <div>
                    <Header />
                    <News />
                    <Sponsor />
                </div>
            </MuiThemeProvider>
        )
    }

};

export default App;
