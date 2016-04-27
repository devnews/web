import React from 'react';
import styles from '../NewsList/index.css';

const ProductHuntItem = (props) => {

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>
                <a
                    href={props.product.url}
                    target="_blank"
                >
                    {props.product.name}
                </a>
            </h2>
            <p className={styles.description}>{props.product.tagline}</p>
            <footer className={styles.footer}>
                <span className={styles.footerItem}>
                    <span className={styles.footerItem}>
                        {props.product.votesCount} {props.product.votesCount === 1 ? 'Vote' : 'Votes'}
                    </span>
                </span>
                <span className={styles.footerItem}>
                    <span className={styles.footerItem}>
                        <a href={props.product.discussionUrl} target="_blank">
                            {props.product.commentsCount} {props.product.commentsCount === 1 ? 'Comment' : 'Comments'}
                        </a>
                    </span>
                </span>
            </footer>
        </div>
    )

};

ProductHuntItem.propTypes = {
    product: React.PropTypes.object.isRequired,
};

export default ProductHuntItem;
