// Searchbar.jsx
import React, { useState } from 'react';
import Loader from './Loader';
import styles from './Searchbar.module.css'

const Searchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    await onSearch(searchQuery); // Utilizează funcția onSearch pentru a trimite căutarea către componenta părinte
    setLoading(false);
  };

  return (
    <header className={styles.searchbar}>
      <input className={styles.input} type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button className={styles.button} onClick={handleSearch}>Search</button>
      {loading && <Loader />}
    </header>
  );
};

export default Searchbar;
