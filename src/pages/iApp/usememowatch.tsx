import React, { useState, useMemo } from 'react';

interface Item {
  id: number;
  name: string;
}

const ItemList: React.FC<{ items: Item[] }> = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Memoizing the filtered items
  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]); // Recalculate only when items or searchTerm changes

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items..."
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
