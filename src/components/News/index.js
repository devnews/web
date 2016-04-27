import React from 'react';
import request from 'superagent';
import requestCache from 'superagent-cache';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import HackerNewsIcon from '../Icons/HackerNews';
import GitHubIcon from '../Icons/GitHub';
import ProductHuntIcon from '../Icons/ProductHunt';
import NewsList from '../NewsList';
import HackerNewsData from '../../data/HackerNewsData';
import GitHubData from '../../data/GitHubData';
import ProductHuntData from '../../data/ProductHuntData';
import styles from './index.css';

// Cache Ajax requests
requestCache(request, {
    storage: 'local', // localStorage
    defaultExpiration: 3600, // 1 hour
});

// Pass SuperAgent instance
HackerNewsData.config({request: request});
GitHubData.config({request: request});
ProductHuntData.config({request: request});

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

                <NewsList
                    source="HackerNews"
                    getItems={HackerNewsData.getItems}
                    className={styles.storiesContainer}
                />

                <a href="https://news.ycombinator.com/news?p=2">
                    Go to Hacker News (page 2)
                </a>
            </Tab>

            <Tab icon={<GitHubIcon title="GitHub Trending" />}>
                <h1 className={styles.heading}>
                    GitHub Trending
                </h1>

                <NewsList
                    source="GitHub"
                    getItems={GitHubData.getItems}
                    className={styles.storiesContainer}
                />

                <a href="https://github.com/trending">
                    Go to GitHub Trending
                </a>
            </Tab>

            <Tab icon={<ProductHuntIcon title="Product Hunt Tech" />}>
                <h1 className={styles.heading}>
                    Product Hunt Tech
                </h1>

                <NewsList
                    source="ProductHunt"
                    getItems={ProductHuntData.getItems}
                    className={styles.storiesContainer}
                />

                <a href="https://www.producthunt.com/tech">
                    Go to Product Hunt Tech
                </a>
            </Tab>

        </Tabs>
    )
};

export default News;
