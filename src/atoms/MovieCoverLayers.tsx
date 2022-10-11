import styled from "styled-components";

interface LayersProps {
  image: string;
}
export const MovieCoverLayer = styled.div<LayersProps>`

  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;

export const DarkLayer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

export const MovieCoverDetails = styled.div`
  position: relative;
  width: 40vw;
  max-height: 84vh;
  top: 30vh;
  left: 80px;
  z-index: 5;
`;
