import React from 'react';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from '../../../config/theme';
import styles from './index.css';
import Header from '../Header';
import News from '../News';

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
            </div>
        )
    }

};

App.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

export default App;
