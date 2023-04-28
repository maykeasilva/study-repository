import { useState } from 'react';
import Header from './components/Header';

const App = () => {
  const [user, setUser] = useState('');

  return (
    <>
      <Header user={user} setUser={setUser} />
    </>
  );
};

export default App;