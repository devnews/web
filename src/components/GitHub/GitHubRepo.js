import React from 'react';
import Autolinker from 'autolinker';
import escape from 'html-escape';
import styles from '../NewsList/index.css';

const GitHubRepo = (props) => {

    let getDescription = () => {
        const safeDescription = escape(props.repo.description);
        return {
            __html: Autolinker.link(safeDescription, {
                email: false,
                phone: false,
                twitter: false,
            }),
        };
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>
                <a
                    href={props.repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.repo.user}/{props.repo.name}
                </a>
            </h2>
            <p className={styles.description} dangerouslySetInnerHTML={getDescription()} />
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
