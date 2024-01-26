import React from 'react';
import styles from '../../styles/TagList.module.css'
import CapitalizeFirst from '../GeneralFunctions/GeneralFunctions';

const TagList = ({ posts, onTagSelected }) => {
  const allTags = posts.reduce((tags, post) => {
    post.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
    return tags;
  }, []);

  const handleTagClick = (tag) => {
    onTagSelected(tag);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {allTags.map(tag => (
          <li key={tag} onClick={() => handleTagClick(tag)}><CapitalizeFirst text={tag}/></li>

        ))}
      </ul>
    </div>
  );
};

export default TagList;