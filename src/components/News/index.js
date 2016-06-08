import React from 'react';
import request from 'superagent';
import requestCache from 'superagent-cache';
import {Tabs, Tab} from 'material-ui/Tabs';
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

class News extends React.Component {

    constructor () {
        super();

        this.state = {
            hackernews: {
                data: [],
                loaded: false,
            },
            github: {
                data: [],
                loaded: false,
            },
            producthunt: {
                data: [],
                loaded: false,
            },
        };
    }

    getData () {
        HackerNewsData
            .config({request})
            .get((data) => {
                this.setState({
                    hackernews: {
                        data: data,
                        loaded: true,
                    },
                });
            });

        GitHubData
            .config({request})
            .get((data) => {
                this.setState({
                    github: {
                        data: data,
                        loaded: true,
                    },
                });
            });

        ProductHuntData
            .config({request})
            .get((data) => {
                this.setState({
                    producthunt: {
                        data: data,
                        loaded: true,
                    },
                });
            });
    }

    render () {
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
                        source="hackernews"
                        getData={this.getData.bind(this)}
                        data={this.state.hackernews.data}
                        loaded={this.state.hackernews.loaded}
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
                        source="github"
                        getData={this.getData.bind(this)}
                        data={this.state.github.data}
                        loaded={this.state.github.loaded}
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
                        source="producthunt"
                        getData={this.getData.bind(this)}
                        data={this.state.producthunt.data}
                        loaded={this.state.producthunt.loaded}
                        className={styles.storiesContainer}
                    />

                    <a href="https://www.producthunt.com/tech">
                        Go to Product Hunt Tech
                    </a>
                </Tab>

            </Tabs>
        )
    }
};

export default News;
