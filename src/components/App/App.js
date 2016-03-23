import React from 'react';
import styles from './App.css';
import colors from 'material-ui/lib/styles/colors';
import AppBar from 'material-ui/lib/app-bar';

class App extends React.Component {
    render () {
        return (
            <div>
                <AppBar
                    title="devnews"
                    showMenuIconButton={false}
                    style={{backgroundColor: colors.indigo500}}
                />
                <h1 className={styles.heading}>
                    Developer news aggregator.
                </h1>
                <p style={{textAlign: 'center'}}>Still setting things up...</p>
            </div>
        )
    }
};

export default App;
