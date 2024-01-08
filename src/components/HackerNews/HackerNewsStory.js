import React from "react";
import PropTypes from "prop-types";
import styles from "../NewsList/index.css";

const HackerNewsStory = (props) => {
  return (
    <div className={styles.container} style={{ position: "relative" }}>
      <h2 className={styles.heading}>
        <a
          href={
            props.story.url ||
            "https://news.ycombinator.com/item?id=" + props.story.id
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.story.title}
        </a>
      </h2>
      <footer className={styles.footer}>
        <span className={styles.footerItem}>
          {props.story.points} points by&nbsp;
          <a href={"https://news.ycombinator.com/user?id=" + props.story.by}>
            {props.story.by}
          </a>
          &nbsp;{props.story.ago}
        </span>
        <span className={styles.footerItem}>
          <a
            href={"https://news.ycombinator.com/item?id=" + props.story.id}
            target="_blank"
          >
            {props.story.commentCount}{" "}
            {props.story.commentCount === 1 ? "Comment" : "Comments"}
          </a>
        </span>
      </footer>
      <div
        className={styles.buttons1}
        style={{
          position: "absolute",
          right: 20,
          bottom: "50%",
          display: "flex",
          gap: "2rem",
        }}
      >
        <button
          style={{
            backgroundColor: "skyblue",
            border: "none",
            color: "#f5f5f5",
            padding: "5px 10px 5px 10px",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Copy
        </button>
        <button
          style={{
            backgroundColor: "lightblue",
            border: "none",
            color: "#f5f5f5",
            padding: "5px 10px 5px 10px",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Share
        </button>
      </div>
    </div>
  );
};

HackerNewsStory.propTypes = {
  story: PropTypes.object.isRequired,
};

export default HackerNewsStory;
