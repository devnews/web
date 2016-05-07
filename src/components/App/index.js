import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../../../config/theme';
import Back2Top from 'react-back2top';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import UpIcon from 'material-ui/svg-icons/navigation/arrow-upward';
import Header from '../Header';
import News from '../News';
import styles from './index.css';

class App extends React.Component {

    render () {
        return (
            <MuiThemeProvider muiTheme={Theme}>
                <div>
                    <Header />
                    <News />
                    <Back2Top
                        visibilityHeight={300}
                        scrollDuration={200}
                    >
                        <FloatingActionButton
                            className={styles.back2top}
                        >
                            <UpIcon />
                        </FloatingActionButton>
                    </Back2Top>
                </div>
            </MuiThemeProvider>
        )
    }

};

export default App;
