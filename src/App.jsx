import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { auth, signInWithGoogle, GoogleAuthProvider, signOut } from './Firebase/Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { signInWithPopup } from 'firebase/auth';
import PostList from './components/PostList/PostList';
import UserList from './components/UserList/UserList';
import AuthMessage from './components/AuthMessage/AuthMessage';
import logoInfobae from './assets/logo_infobae_naranja.svg';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  const handleShowUserList = async () => {
    if (!user) {
      try {
        await signInWithGoogle();
        window.location.href = '/users';
      } catch (error) {
        console.error('Error al iniciar sesión con Google', error.message);
      }
    } else {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setUser(auth.currentUser);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error al cerrar sesión', error.message);
    }
  };

  return (
    <Router>
      <div>
        <header>
          <img className='image-infobae' src={logoInfobae} alt="logo-infobae" />
          {user ? (

            <>
              <div className='container-username'>
                <span>{user.displayName}</span>
                <FontAwesomeIcon icon={faUser} />
                </div>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <button onClick={handleShowUserList}>Ver todos los usuarios</button>
          )}
        </header>
        <main>
          <Route path="/users">
            {user ? <UserList /> : <AuthMessage />}
          </Route>
          <Route path="/auth-message" component={AuthMessage} />
          <Route exact path="/">
            <PostList />
          </Route>
        </main>
      </div>
    </Router>
  );
};

export default App;