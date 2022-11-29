import styled, { keyframes } from "styled-components";

const loader_animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SLoading = styled.div`
  display: inline-block;
  position: relative;
  width: 1.1rem;
  height: 1.1rem;
  div {
    display: block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    border: 0.2rem solid #fff;
    border-radius: 50%;
    border-color: #fff transparent transparent transparent;
    animation: ${loader_animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
