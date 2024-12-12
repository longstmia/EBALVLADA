import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 88px;
  background-color: #000000;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  color: #fff;

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
    font-weight: bold;
  }
`;

const Footer: React.FC = () => {
  const footerItems = [
    { icon: '/src/assets/images/garden.png', label: 'IQ-Coffee' },
    { icon: '/src/assets/images/garden.png', label: 'Кофейни' },
    { icon: '/src/assets/images/garden.png', label: 'К оплате' },
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
