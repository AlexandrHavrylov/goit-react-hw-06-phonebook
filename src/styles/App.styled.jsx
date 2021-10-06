import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.main};
`;

export const Title = styled.h1`
  font-size: 36px;
`;

export const Section = styled.div`
  padding: 24px;
`;
