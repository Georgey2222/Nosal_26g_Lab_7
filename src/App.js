import React from 'react';
import { useState } from 'react';
import Header from './components/Header/Header.js';
import books from './books.json'
import './styles/global.css';
import Card from './components/Card/Card.js';
function App() {
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