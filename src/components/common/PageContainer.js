import styled from "styled-components";

const PageContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default PageContainer;

const StyledContainer = styled.div`
  width: 750px;
  max-width: 90%;
  margin: auto;
`;
