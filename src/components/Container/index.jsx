import PropTypes from 'prop-types';
import * as S from './styles';

function Container(props) {
  const { children } = props;

  return (
    <S.ContainerWrap>
        { children }
    </S.ContainerWrap>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
