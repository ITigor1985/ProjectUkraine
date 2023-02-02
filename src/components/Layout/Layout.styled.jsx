import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
  padding-bottom: 60px;
  width: 1200px;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  liststyletype: none;
  & > :not(:last-child) {
    margin-right: 20px;
  }
`;
