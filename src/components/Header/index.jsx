import Logo from '../../assets/title.svg';
import * as S from './styles';

function Header(props) {
    const { children } = props;

    return(
        <S.TopBar>
            <S.TitleLogo src={Logo} />
            { children }
        </S.TopBar>
    );
}

export default Header;