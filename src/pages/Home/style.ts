import styled from "styled-components";

import { Colors } from "../../config";

export const Container = styled.div`
  background-color: ${Colors.BACKGROUND_BLACK};
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageBanner = styled.img`
  height: 300px;
`;

export const CardsContainer = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
