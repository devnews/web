import React from 'react';
import styles from './News.css';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import HackerNews from '../HackerNews/HackerNews';

const News = (props) => {
    return (
        <Tabs
            className={styles.container}
            contentContainerClassName={styles.content}
        >
            <Tab label="Hacker News">
                <HackerNews />
            </Tab>
            <Tab label="GitHub Trending">
                GitHub trending repositories here...
            </Tab>
            <Tab label="Product Hunt">
                Product Hunt tech here...
            </Tab>
        </Tabs>
    )
};

export default News;
