import { Container, Header, WalletButton, NFTCard } from '../../components/index';

function NFTPage() {
    return(
        <Container>
            <Header>
                <WalletButton />
            </Header>
            <NFTCard />
        </Container>
    )
};

export default NFTPage;