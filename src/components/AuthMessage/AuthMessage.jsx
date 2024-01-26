import React from 'react';
import styles from '../../styles/AuthMessage.module.css'

const AuthMessage = () => {
  return (
    <div className={styles.containerAuthMessage}>
      <strong className={styles.authMessageStrong}>Debes iniciar sesión para acceder a esta página.</strong>
        <br />
        <br />
      <p>Dirigete al boton de la parte superior de la pagina e inicia sesión</p>
    </div>
  );
};

export default AuthMessage;