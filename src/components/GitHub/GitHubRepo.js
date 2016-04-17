import React from 'react';
import styles from '../NewsList/NewsItem.css';

const GitHubRepo = (props) => {

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>
                <a
                    href={props.repo.url}
                    target="_blank"
                >
                    {props.repo.user}/{props.repo.name}
                </a>
            </h2>
            <p className={styles.description}>{props.repo.description}</p>
            <footer className={styles.footer}>
                {(() => {
                    if (props.repo.language) {
                        return (
                            <span className={styles.footerItem}>
                                <span className={styles.footerItem}>
                                    {props.repo.language}
                                </span>
                            </span>
                        )
                    }
                })()}
                <span className={styles.footerItem}>
                    <span className={styles.footerItem}>
                        {props.repo.stars} Stars
                    </span>
                </span>
            </footer>
        </div>
    )

};

GitHubRepo.propTypes = {
    repo: React.PropTypes.object.isRequired,
};

export default GitHubRepo;
