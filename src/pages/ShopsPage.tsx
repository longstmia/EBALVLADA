import React, { useEffect, useState } from 'react';
import api from '../shared/api/api';

const ShopsPage: React.FC = () => {
  const [shops, setShops] = useState<
    { id: number; name: string; address: string; pattern: string }[]
  >([]);

  useEffect(() => {
    api
      .get('/shops')
      .then((response) => {
        setShops(response.data);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }, []);

  return (
    <div>
      <div>
        {shops.map((shop) => (
          <div key={shop.id}>
            <h2>{shop.name}</h2>
            <p>{shop.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopsPage;
