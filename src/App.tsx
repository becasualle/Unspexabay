// import React, { useContext } from 'react';
import Search from './components/Search';
import Photos from './components/Photos';
// import { AppContext } from './context';

function App() {
  // const query = 'test';
  // const appContext = React.useContext(AppContext);
  return (
    <main>
      <Search />
      <Photos />
    </main>
  );
}

export default App;
