import styled from 'styled-components';

export const FooterContainer = styled.footer`
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

export const FooterItem = styled.div`
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
