import React from 'react';
import Popover from 'material-ui/lib/popover/popover';
import IconButton from 'material-ui/lib/icon-button';
import InfoOutlineIcon from 'material-ui/lib/svg-icons/action/info-outline';
import Logo from '../Logo/Logo';
import styles from './Header.css';

class Header extends React.Component {

    constructor () {
        super();

        this.state = {
            aboutOpen: false,
        };
    }

    handleTouchTap (event) {
        this.setState({
            aboutOpen: true,
            anchorEl: event.currentTarget,
        });
    }

    handleRequestClose () {
        this.setState({
            aboutOpen: false,
        });
    }

    render () {
        return (
            <div>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.aboutBtnContainer}>
                    <IconButton
                        tooltip="About"
                        onTouchTap={this.handleTouchTap.bind(this)}
                    >
                        <InfoOutlineIcon />
                    </IconButton>
                </div>
                <Popover
                    open={this.state.aboutOpen}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose.bind(this)}
                >
                    <div className={styles.aboutContainer}>
                        <h1 className={styles.aboutHeading}>About</h1>
                        <p className={styles.aboutText}>Devnews aggregates top news stories from Hacker News, trending repositories from GitHub, and top tech from Product Hunt.</p>
                        <p className={styles.aboutText}>This project is created by the ninjas at <a href="https://ninjality.com/">Ninjality</a> and is <a href="https://github.com/devnews/web">open sourced on GitHub</a>.</p>
                    </div>
                </Popover>
            </div>
        )
    }
};

export default Header;
