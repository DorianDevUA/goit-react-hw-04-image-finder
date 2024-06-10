import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: inline-block;

  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #3f51b5;

  max-width: 380px;
  min-width: 180px;
  margin: 0 auto;
  padding: 8px 16px;

  border: 0;
  border-radius: 2px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
