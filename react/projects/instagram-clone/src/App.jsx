import { useState, useEffect } from 'react';
import { auth } from './firebase';
import './App.css';

const App = () => {
  const [user, setUser] = useState('');

  const handleLogin = () => {
    let email = document.querySelector('#email-login').value;
    let password = document.querySelector('#password-login').value;

    auth.signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        setUser(authUser.user.displayName);
        console.log('Logado com sucesso!');
      })
      .catch((error) => console.log(error.message));
  };

  const handleCreateAccount = () => {
    let email = document.querySelector('#email-register').value;
    let username = document.querySelector('#username-register').value;
    let password = document.querySelector('#password-register').value;

    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        });
        console.log('Conta criada com sucesso!');
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      {
        (user) 
          ? <span>Olá, <b>{user}</b>!</span>
          : <span>Nenhum usuário logado!</span>
      }

      <h1>Logar</h1>
      <input id='email-login' type='email' placeholder='username' />
      <input id='password-login' type='password' placeholder='senha' />
      <button onClick={handleLogin}>Logar</button>

      <h1>Criar Conta</h1>
      <input id='email-register' type='email' placeholder='email' />
      <input id='username-register' type='text' placeholder='username' />
      <input id='password-register' type='password' placeholder='senha' />
      <button onClick={handleCreateAccount}>Register</button>
    </>
  );
};

export default App;