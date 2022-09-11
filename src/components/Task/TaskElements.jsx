import styled from "styled-components";

export const TaskBox = styled.div`
  padding: 20px;
  background: #25273C;
  border-bottom: 2px solid #191c2e8d;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const CheckCompleted = styled.input`
  width: 20px;
  height: 20px
`