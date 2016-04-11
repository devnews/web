import React from 'react';
import request from 'superagent';
import requestCache from 'superagent-cache';
import styles from './News.css';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import HackerNewsIcon from '../Icons/HackerNews';
import GitHubIcon from '../Icons/GitHub';
import ProductHuntIcon from '../Icons/ProductHunt';
import HackerNews from '../HackerNews/HackerNews';
import GitHub from '../GitHub/GitHub';

// Cache Ajax requests
requestCache(request, {
    storage: 'local', // localStorage
    defaultExpiration: 3600, // 1 hour
});

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
                <HackerNews
                    className={styles.storiesContainer}
                    request={request}
                />
            </Tab>
            <Tab icon={<GitHubIcon title="GitHub Trending" />}>
                <h1 className={styles.heading}>
                    GitHub Trending
                </h1>
                <GitHub
                    className={styles.storiesContainer}
                    request={request}
                />
            </Tab>
            <Tab icon={<ProductHuntIcon title="Product Hunt" />}>
                Coming soon!
            </Tab>
        </Tabs>
    )
};

export default News;
