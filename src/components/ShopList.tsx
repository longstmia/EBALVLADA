import React, { useEffect, useState } from 'react';
import api from '../shared/api/api';
import ShopCard from './shopcard/ShopCard';

export const ShopList: React.FC = () => {
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
      {shops.length === 0 ? (
        <p>Магазины не найдены.</p>
      ) : (
        <div>
          {shops.map((shop) => (
            <ShopCard
              key={shop.id}
              name={shop.name}
              address={shop.address}
              pattern={shop.pattern}
            />
          ))}
        </div>
      )}
    </div>
  );
};
