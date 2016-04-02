import React from 'react';
import styles from './News.css';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import HackerNewsIcon from '../Icons/HackerNews';
import GitHubIcon from '../Icons/GitHub';
import ProductHuntIcon from '../Icons/ProductHunt';
import HackerNews from '../HackerNews/HackerNews';

const News = (props) => {
    return (
        <Tabs
            className={styles.tabsContainer}
            contentContainerClassName={styles.content}
        >
            <Tab icon={<HackerNewsIcon title="Hacker News" />}>
                <h1 className={styles.heading}>
                    Hacker News
                </h1>
                <HackerNews className={styles.storiesContainer} />
            </Tab>
            <Tab icon={<GitHubIcon title="GitHub Trending" />}>
                GitHub trending repositories here...
            </Tab>
            <Tab icon={<ProductHuntIcon title="Product Hunt" />}>
                Product Hunt tech here...
            </Tab>
        </Tabs>
    )
};

export default News;
