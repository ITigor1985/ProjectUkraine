import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

export const ListLink = styled.ul`
  display: flex;
  list-style-type: none;
  & > :not(:last-child) {
    margin-right: 20px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DidescriptionWrapper = styled.div`
  width: 650px;
`;

export const ProductTitle = styled.h2`
  margin-bottom: 15px;
`;
