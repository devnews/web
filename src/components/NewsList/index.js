import React from 'react';
import PropTypes from 'prop-types';
import PlaceholderShimmer from '../PlaceholderShimmer';
import HackerNewsStory from '../HackerNews/HackerNewsStory';
import GitHubRepo from '../GitHub/GitHubRepo';
import ProductHuntItem from '../ProductHunt/ProductHuntItem';

class NewsList extends React.Component {

    shouldComponentUpdate (nextProps) {
      return this.props.loaded !== nextProps.loaded;
    }

    render () {
        if (!this.props.loaded) {
            return (
                <PlaceholderShimmer />
            )
        }

        if (!this.props.data.length) {
            return (
                <div>Oops, we were unable to load the stories :(</div>
            )
        }

        return (
            <div className={this.props.className}>
                {
                    this.props.data.map(item => {
                        if (this.props.source == 'hackernews') {
                            return (
                                <HackerNewsStory
                                    key={item.id}
                                    story={item}
                                />
                            )
                        }
                        if (this.props.source == 'github') {
                            return (
                                <GitHubRepo
                                    key={item.url}
                                    repo={item}
                                />
                            )
                        }
                        if (this.props.source == 'producthunt') {
                            return (
                                <ProductHuntItem
                                    key={item.id}
                                    product={item}
                                />
                            )
                        }
                    })
                }
            </div>
        )
    }

};

NewsList.propsTypes = {
    source: PropTypes.string.isRequired,
    getData: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    loaded: PropTypes.bool.isRequired,
};

export default NewsList;
