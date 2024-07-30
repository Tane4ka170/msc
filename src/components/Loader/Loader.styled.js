import { FallingLines } from "react-loader-spinner";
import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderLines = styled(FallingLines)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
