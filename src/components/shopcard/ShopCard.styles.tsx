import styled from 'styled-components';

export const CardUp = styled.div`
  background-color: #000000;
  border-radius: 8px;
  height: 100px;
  max-height: 100%;
  width: 95%;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  background-color: #f9f9f5;
  border: 2px solid black;
  height: 100px;
  max-height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px 20px;
  width: 80%;
  overflow: hidden;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #2f2f2f;
  margin: 0;
`;

export const Address = styled.p`
  font-size: 14px;
  color: #ccc;
  margin: 8px 0 0;
`;

export const DropdownIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 12px;
  height: 12px;
  border: solid #ffffff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
`;
