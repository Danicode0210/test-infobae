import React, { useState, useEffect } from 'react';
import styles from '../../styles/UserList.module.css'

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyapi.io/data/v1/user?limit=10', {
          headers: {
            'app-id': '65b291d2dc8f893f07ea4e9e', 
          },
        });
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.error('Error al obtener usuarios', error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map(userData => (
          <li key={userData.id}>
            <div className={styles.userName}>{userData.firstName} {userData.lastName}</div>
            <img className={styles.imageUserName} src={userData.picture} alt={`${userData.firstName} ${userData.lastName}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;