import { keyframes } from 'styled-components';

export const observerAnimation = keyframes`
from {
    transform: translate3d(0, 10%, 0);
    opacity: 0;
}
to {
    transform: translate3d(0);
    opacity: 1;
}
`;
