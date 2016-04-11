import React from 'react';
import styles from './GitHubRepo.css';

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
                <span className={styles.footerItem}>
                    <span className={styles.footerItem}>
                        {props.repo.language}
                        &nbsp; • &nbsp;
                        {props.repo.stars} stars today
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
