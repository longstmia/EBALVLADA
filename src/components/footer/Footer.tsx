import React from 'react';
import { FooterContainer, FooterItem } from './Footer.styles';
import gardenIcon from '../../assets/images/garden.png';
import mapIcon from '../../assets/images/map-marker.png';
import ticketIcon from '../../assets/images/ticket.png';

const Footer: React.FC = () => {
  const footerItems = [
    { icon: gardenIcon, label: 'IQ-Coffee' },
    { icon: mapIcon, label: 'Кофейни' },
    { icon: ticketIcon, label: 'К оплате' },
  ];

  return (
    <FooterContainer>
      {footerItems.map((item, index) => (
        <FooterItem key={index}>
          <img src={item.icon} alt={item.label} />
          <span>{item.label}</span>
        </FooterItem>
      ))}
    </FooterContainer>
  );
};

export default Footer;
