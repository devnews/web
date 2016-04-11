import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';
import Colors from 'material-ui/lib/styles/colors';
import GitHubRepo from './GitHubRepo';

class GitHub extends React.Component {

    constructor () {
        super();

        this.state = {
            data: [],
            loaded: false,
        };

        this.baseUrl = 'https://wrapapi.com/use/sunnysingh/github/trending/0.0.3?wrapAPIKey=vZpCx0QXD65gAcUD4Q7gAL6y0GQB1pgT';
    }

    componentDidMount () {
        this.apiRequest = this.props.request
            .get(this.baseUrl)
            .end((error, response) => {
                let data = [];
                for (let repo of response.body.data.repositories) {
                    data.push({
                        url: 'https://github.com'+repo.url,
                        user: repo.url.split('/')[1],
                        name: repo.url.split('/')[2],
                        description: repo.description ? repo.description.trim() : null,
                        stars: parseInt(repo.stars),
                        language: repo.language ? repo.language.trim() : null,
                    });
                }
                this.setState({
                    data: data,
                    loaded: true,
                });
            });
    }

    componentWillUnmount () {
        this.apiRequest.abort();
    }

    render () {
        if (!this.state.loaded) {
            return (
                <CircularProgress color={Colors.indigo900} />
            )
        }

        if (!this.state.data.length) {
            return (
                <div>Oops, we were unable to load the repositories :(</div>
            )
        }

        return (
            <div className={this.props.className}>
                {
                    this.state.data.map(repo => {
                        return (
                            <GitHubRepo key={repo.url} repo={repo} />
                        )
                    })
                }

                <a href="https://github.com/trending">
                    Go to GitHub Trending
                </a>
            </div>

        )
    }

};

export default GitHub;
