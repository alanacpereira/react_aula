import styled from 'styled-components';
import logo from '../../imagens/logo.svg';

const LogoContainer = styled.div `
  display: flex;
  font-size: 30px;
}
`
const LogoImg = styled.img `
    margin-right: 5px;
}
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt='logo'></LogoImg>
            <p><strong>SENAI Books</strong></p>
        </LogoContainer>
    )
}

export default Logo;