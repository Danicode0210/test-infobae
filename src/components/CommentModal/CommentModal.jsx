import React, { useEffect, useState } from 'react';

const CommentModal = ({ post, onClose }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://dummyapi.io/data/v1/post/${post.id}/comment?limit=5', {
      headers: {
        'app-id': '65b291d2dc8f893f07ea4e9e', 
      },
    })
      .then(response => response.json())
      .then(data => setComments(data.data))
      .catch(error => console.error('Error al obtener los comentarios', error));
  }, [post.id]);

  return (
    <div>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.message}</li>
        ))}
      </ul>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default CommentModal;