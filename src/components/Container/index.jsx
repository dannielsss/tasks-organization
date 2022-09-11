import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  color: white;
  height: 100vh;

  padding-top: 100px;
	margin-bottom: 100px;
`;

export const ContainerTasks = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 750px) {
    width: 90%;
  }
`;
