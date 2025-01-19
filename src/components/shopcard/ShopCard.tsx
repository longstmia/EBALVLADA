import React from 'react';
import { Card, Title, Address, DropdownIcon, CardUp } from './ShopCard.styles';

interface ShopCardProps {
  name: string;
  address: string;
  pattern: string;
}

export default function ShopCard({ name, address, pattern }: ShopCardProps) {
  return (
    <CardUp>
      <Card style={{ backgroundImage: `url(${pattern})` }}>
        <Title>{name}</Title>
        <Address>{address}</Address>
        <DropdownIcon />
      </Card>
    </CardUp>
  );
}
