import React, { useState, useEffect } from 'react';
import PostItem from '../PostItem/PostItem';
import TagList from '../TagList/TagList';
import styles from '../../styles/PostList.module.css'

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    // Realiza la petición a la API para obtener los posts
    fetch('https://dummyapi.io/data/v1/post?limit=10', {
      headers: {
        'app-id': '65b291d2dc8f893f07ea4e9e',  // Reemplaza 'tu-app-id' con tu API key
      },
    })
      .then(response => response.json())
      .then(data => setPosts(data.data))
      .catch(error => console.error('Error al obtener los posts', error));
  }, []);

  const handleTagSelected = (tag) => {
    // Actualiza el tag seleccionado y filtra los posts
    setSelectedTag(tag);
  };

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

    return (
        <div className={styles.postListContainer}>
          <TagList posts={posts} onTagSelected={handleTagSelected} className={styles.tagListContainer} />
          {filteredPosts.map(post => (
            <div key={post.id} className={styles.postItem}>
              <PostItem post={post} />
            </div>
          ))}
        </div>
      );
};

export default PostList;