import styled from 'styled-components';

const ContainerWrap = styled.div`
    max-width: 1420px;
    justify-content: center;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 615px) {
        height: 100%;
    }
`;

const BackgroundVector = styled.img`
`;

export { BackgroundVector, ContainerWrap };
