import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div>
      <Title>HomePage</Title>
    </div>
  );
};

export default Home;

const Title = styled.h1`
  color: red;
  font-size: ${(p) => p.theme.fonts.size.xl2};

  ${(p) => p.theme.breakpoint.md} {
    font-size: ${(p) => p.theme.fonts.size.base};
    color: blue;
  }
`;
