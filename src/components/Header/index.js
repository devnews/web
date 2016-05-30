import React from 'react';
import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import InfoOutlineIcon from 'material-ui/svg-icons/action/info-outline';
import Logo from '../Logo';
import styles from './index.css';

class Header extends React.Component {

    constructor () {
        super();

        this.state = {
            aboutOpen: false,
        };
    }

    handleClick (event) {
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
                        onClick={this.handleClick.bind(this)}
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
                        <p className={styles.aboutText}>This project was created by the ninjas at <a href="https://ninjality.com/">Ninjality</a> and is <a href="https://github.com/devnews/web">open sourced on GitHub</a>.</p>
                        <p className={styles.aboutText}>You can follow <a href="https://twitter.com/getdevnews">@getdevnews</a> on Twitter for updates, or view our <a href="https://github.com/devnews/web/blob/master/logo.md">logo information</a> for linking back.</p>
                    </div>
                </Popover>
            </div>
        )
    }
};

export default Header;
