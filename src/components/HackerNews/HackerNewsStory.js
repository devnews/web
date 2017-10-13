import React from 'react';
import PropTypes from 'prop-types';
import styles from '../NewsList/index.css';

const HackerNewsStory = (props) => {

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>
                <a
                    href={props.story.url || 'https://news.ycombinator.com/item?id='+props.story.id}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.story.title}
                </a>
            </h2>
            <footer className={styles.footer}>
                <span className={styles.footerItem}>
                     {props.story.points} points by&nbsp;
                     <a href={'https://news.ycombinator.com/user?id='+props.story.by}>
                         {props.story.by}
                     </a>
                     &nbsp;{props.story.ago}
                </span>
                <span className={styles.footerItem}>
                    <a
                        href={'https://news.ycombinator.com/item?id='+props.story.id}
                        target="_blank"
                    >
                        {props.story.commentCount} {props.story.commentCount === 1 ? 'Comment' : 'Comments'}
                    </a>
                </span>
            </footer>
        </div>
    )

};

HackerNewsStory.propTypes = {
    story: PropTypes.object.isRequired,
};

export default HackerNewsStory;
