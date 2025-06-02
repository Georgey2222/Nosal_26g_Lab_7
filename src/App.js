import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header/Header.js';
import books from './books.json'
import './styles/global.css';
import Card from './components/Card/Card.js';
function App() {
  useEffect(() => {
    function updatesize() {
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;
      const gorizontal_size = width / 167;
      const vertical_size = 100;
      const size = Math.min(gorizontal_size, vertical_size);
      document.documentElement.style.setProperty('--size', `${size}px`);
    }

    updatesize();
    window.addEventListener('resize', updatesize);

    return () => {
      window.removeEventListener('resize', updatesize);
    };
  }, []);
  const [selectedCategory, setSelectedCategory] = useState('All');
    const filteredBooks =
    selectedCategory === 'All'
      ? books
      : books.filter(book => book.category === selectedCategory);

  const categories = ['All', ...new Set(books.map(book => book.category))];
  return (
    <>
      <Header />
      <main>
        <section>
          <div className='goods-header'>
             <h1>Goods</h1>
             <select onChange={e => setSelectedCategory(e.target.value)}>
               {categories.map(cat => (
                 <option key={cat} value={cat}>
                  {cat}
                 </option>
               ))}
             </select>
          </div>
          <div id="main">
            {filteredBooks.map((book, index) => (
              <Card key={index} product={book} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;