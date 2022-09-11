import styled from "styled-components";

export const TasksBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 1px 11px 10px #0000003d;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  background: #25273C;
  padding: 10px;
  justify-content: center;
`;

export const FooterItem = styled.div`
  color: #636583;
  font-weight: 500;
  font-size: 15px;
`

export const FooterItemButton = styled(FooterItem)`
  text-decoration: underline;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;