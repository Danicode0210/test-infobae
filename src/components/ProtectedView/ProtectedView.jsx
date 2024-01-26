import React, { useEffect, useState } from 'react';
import { firestore } from '../../Firebase/Firebase';

const ProtectedView = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = firestore.collection('posts'); // Asegúrate de que 'posts' sea el nombre correcto de tu colección en Firestore
        const postsSnapshot = await postsCollection.get();

        const postsData = postsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(postsData);
      } catch (error) {
        console.error('Error al obtener posts', error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Publicaciones Protegidas</h2>
      <ul>
        {posts.map(postData => (
          <li key={postData.id}>
            <div>{postData.title}</div>
            <p>{postData.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProtectedView;