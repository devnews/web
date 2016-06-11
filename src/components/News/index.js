import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {HackerNewsIcon, GitHubIcon, ProductHuntIcon} from '../Icons';
import {hackernews, github, producthunt} from '../../data';
import NewsList from '../NewsList';
import styles from './index.css';

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

    componentDidMount () {
        hackernews((data) => {
            this.setState({
                hackernews: {
                    data: data,
                    loaded: true,
                },
            });
        });
    }

    handleActiveTab (tab) {
        switch (tab.props.value) {
            case 'github':
                if (!this.state.github.loaded) {
                    github((data) => {
                        this.setState({
                            github: {
                                data: data,
                                loaded: true,
                            },
                        });
                    });
                }
            break;
            case 'producthunt':
                if (!this.state.producthunt.loaded) {
                    producthunt((data) => {
                        this.setState({
                            producthunt: {
                                data: data,
                                loaded: true,
                            },
                        });
                    });
                }
            break;
        }
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
                        data={this.state.hackernews.data}
                        loaded={this.state.hackernews.loaded}
                        className={styles.storiesContainer}
                    />

                    <a href="https://news.ycombinator.com/news?p=2">
                        Go to Hacker News (page 2)
                    </a>
                </Tab>

                <Tab
                    icon={<GitHubIcon title="GitHub Trending" />}
                    value="github"
                    onActive={this.handleActiveTab.bind(this)}
                >
                    <h1 className={styles.heading}>
                        GitHub Trending
                    </h1>

                    <NewsList
                        source="github"
                        data={this.state.github.data}
                        loaded={this.state.github.loaded}
                        className={styles.storiesContainer}
                    />

                    <a href="https://github.com/trending">
                        Go to GitHub Trending
                    </a>
                </Tab>

                <Tab
                    icon={<ProductHuntIcon title="Product Hunt Tech" />}
                    value="producthunt"
                    onActive={this.handleActiveTab.bind(this)}
                >
                    <h1 className={styles.heading}>
                        Product Hunt Tech
                    </h1>

                    <NewsList
                        source="producthunt"
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
