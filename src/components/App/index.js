import React from 'react';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from '../../../config/theme';
import Back2Top from 'react-back2top';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import UpIcon from 'material-ui/lib/svg-icons/navigation/arrow-upward';
import Header from '../Header';
import News from '../News';
import styles from './index.css';

class App extends React.Component {

    getChildContext () {
        return {
            muiTheme: ThemeManager.getMuiTheme(Theme),
        };
    }

    render () {
        return (
            <div>
                <Header />
                <News />
                <Back2Top
                    visibilityHeight={300}
                    scrollDuration={200}
                >
                    <FloatingActionButton
                        secondary={true}
                        className={styles.back2top}
                    >
                        <UpIcon />
                    </FloatingActionButton>
                </Back2Top>
            </div>
        )
    }

};

App.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

export default App;
