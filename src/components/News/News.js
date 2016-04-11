import React from 'react';
import styles from './News.css';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import HackerNewsIcon from '../Icons/HackerNews';
import GitHubIcon from '../Icons/GitHub';
import ProductHuntIcon from '../Icons/ProductHunt';
import HackerNews from '../HackerNews/HackerNews';
import GitHub from '../GitHub/GitHub';

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
                <h1 className={styles.heading}>
                    GitHub Trending
                </h1>
                <GitHub className={styles.storiesContainer} />
            </Tab>
            <Tab icon={<ProductHuntIcon title="Product Hunt" />}>
                Product Hunt tech here...
            </Tab>
        </Tabs>
    )
};

export default News;
