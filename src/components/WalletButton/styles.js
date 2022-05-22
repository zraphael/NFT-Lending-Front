import styled from 'styled-components';

const ConnectButton = styled.button`
    width: 12rem;
    height: 3rem;
    background: #00B884;
    border-radius: 8px;
    font-weight: normal;
    font-size: 22px;
    color: #FFFFFF;
    background-image: linear-gradient(1deg, #008A63, #00A174 77%);
    border-color: #00B884;
    box-shadow: 0px 2px 4px rgba(46, 229, 157, 0.4);
    transition: 0.7s;
    white-space: nowrap;
    cursor: pointer;

    :hover {
        transition: 0.7s;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        border-color: #00976C;
    }

    @media (max-width: 1034px) {
        width: 100%;
    }
`;

export default ConnectButton;