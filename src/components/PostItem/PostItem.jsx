import React, { useState } from 'react';
import CommentModal from '../CommentModal/CommentModal';
import styles from '../../styles/PostItem.module.css';
import CapitalizeFirst from '../GeneralFunctions/GeneralFunctions';

const PostItem = ({ post }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <img src={post.image} alt={post.text} className={styles.postItemImage} />

      <p><CapitalizeFirst text={post.text} /></p>
      <p>Publicado por: <strong> {post.owner.firstName} {post.owner.lastName}</strong></p>
      <p>Temas Relacionados: {post.tags.join(', ')}</p>
      <p>❤️ {post.likes}</p>
      <div className={styles.containerButton}>
        <button onClick={handleOpenModal} className={styles.commentsButton}>Ver Comentarios</button>
      </div>
      {post.comments && post.comments.length === 0 && <p>No hay comentarios disponibles</p>}
      {isModalOpen && <CommentModal post={post} onClose={handleCloseModal} />}
    </div>
  );
};

export default PostItem;