import React from 'react';
import request from 'superagent';
import moment from 'moment';
import CircularProgress from 'material-ui/lib/circular-progress';
import Colors from 'material-ui/lib/styles/colors';
import HackerNewsStory from './HackerNewsStory';

class HackerNews extends React.Component {

    constructor () {
        super();

        this.state = {
            data: [],
            loaded: false,
        };

        this.baseUrl = 'https://hacker-news.firebaseio.com/v0'
    }

    componentDidMount () {
        this.apiRequest = request
            .get(this.baseUrl+'/topstories.json')
            .end((error, response) => {
                let stories = response.body.slice(0, 30); // grab 30 items
                let data = [];

                for (let storyId of stories) {
                    const apiUrl = this.baseUrl+'/item/'+storyId+'.json';

                    request.get(apiUrl).end((error, response) => {
                        data.push({
                            id: response.body.id,
                            title: response.body.title,
                            by: response.body.by,
                            url: response.body.url,
                            points: response.body.score,
                            commentCount: response.body.descendants,
                            ago: moment.unix(response.body.time).fromNow(),
                        });
                        this.setState({
                            data: data,
                            loaded: true,
                        });
                    });
                }
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
                <div>Oops, we were unable to load the stories :(</div>
            )
        }

        return (
            <div className={this.props.className}>
                {
                    this.state.data.map(story => {
                        return (
                            <HackerNewsStory key={story.id} story={story} />
                        )
                    })
                }

                <a href="https://news.ycombinator.com/news?p=2">
                    Go to Hacker News (page 2)
                </a>
            </div>
        )
    }

};

export default HackerNews;
