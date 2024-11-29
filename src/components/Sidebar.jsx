import React, { useEffect, useState } from 'react';

function Sidebar({ onProductClick, language, isFirstRender }) {
  const [categories, setCategories] = useState([]);

  const baseurl = 'https://arkan.up.railway.app/';
  useEffect(() => {
    fetch(`${baseurl}api/categories`,{
      headers: {
        'Content-Type': 'application/json', // set content type if needed
        'Accept-Language': language // custom lang header
      },
   } )
      .then(response => response.json())
      .then(data => {
        if (data ) {
          setCategories(data);
          if (isFirstRender && data.length > 0) {
            onProductClick(
              
              data[0].id,
              data[0].name

            );
            console.log('functiontragerd'); // Initialize with first category's ID if isFirstRender is true
          }
        }
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, [isFirstRender, language]);

  return (
    <aside style={{ width: '200px', backgroundColor: '#f5f5f5', padding: '20px', height: '100vh' }}>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li 
            key={category.id} 
            style={{ cursor: 'pointer', margin: '10px 0',fontWeight:'bold' }}
            onClick={() => onProductClick(category.id)} // Pass category ID
          >
            {category.name || 'Unnamed Category'} {/* Safe access to name */}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
