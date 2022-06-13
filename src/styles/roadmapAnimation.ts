import { keyframes } from 'styled-components';
import { theme } from './theme';

export const roadmapAnimation = keyframes`
from {
    width: 5rem;
    height: 5rem;
    opacity: 0;
}
to {
  filter: blur(150px);
  width: 6rem;
  height: 6rem;
  opacity:0.8;
}
`;
export const roadmapMobileAnimation = keyframes`
from {
  width: 2rem;
  height: 2rem;
}
to {
filter: blur(100px);
width: 2.5rem;
height: 2.5rem;
`;
