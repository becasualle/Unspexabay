import React from 'react';
import Search from './components/Search';
import Photos from './components/Photos';

function App() {
  const query = 'test';
  return (
    <main>
      <Search query={query} />
      <Photos />
    </main>
  );
}

export default App;
