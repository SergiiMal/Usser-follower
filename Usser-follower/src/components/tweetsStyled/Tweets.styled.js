import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoBackLink = styled(Link)`
  text-decoration: none;
  width: 90px;
  text-align: center;
  border: 2px solid darkgray;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 380px;
`;
