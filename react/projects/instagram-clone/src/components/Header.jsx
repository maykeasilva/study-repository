import { useState } from 'react';
import { auth } from '../firebase';
import Modal from './Modal';
import './Header.css';

const Header = ({ user, setUser }) => {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);

  const handleLogin = () => {
    let email = document.querySelector('#email-login').value;
    let password = document.querySelector('#password-login').value;

    auth.signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        setUser(authUser.user.displayName);
        setOpenModalLogin(false);
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
        setOpenModalRegister(false);
        console.log('Conta criada com sucesso!');
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <div className='header'>
        <div className='center'>
          <div className='header__logo'>
            <h1>LOGO</h1>
          </div>

          <div className='header__user'>
            { (user)
                ? (
                  <>
                    <span>Olá, <b>{user}</b>!</span>
                    <button>Postar</button>
                  </>
                )
                : (
                  <>
                    <button onClick={() => setOpenModalLogin(true)}>Logar</button>
                    <button onClick={() => setOpenModalRegister(true)}>Criar uma conta!</button>
                  </>
                )
            }
          </div>

          <Modal isOpen={openModalLogin} setCloseModal={() => setOpenModalLogin(false)}>
            <div className='modal__login'>
              <h1>...</h1>
              <input id='email-login' type='email' placeholder='Email' />
              <input id='password-login' type='password' placeholder='Senha' />
              <button onClick={handleLogin}>Logar</button>
            </div>
          </Modal>

          <Modal isOpen={openModalRegister} setCloseModal={() => setOpenModalRegister(false)}>
            <div className='modal__register'>
              <h1>...</h1>
              <input id='email-register' type='email' placeholder='Email' />
              <input id='username-register' type='text' placeholder='Username' />
              <input id='password-register' type='password' placeholder='Senha' />
              <button onClick={handleCreateAccount}>Criar contar</button>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Header;