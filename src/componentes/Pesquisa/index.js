import Input from '../Input';
import styled from "styled-components";
import { useState } from 'react';
import { livro } from './dadosPesquisa';

const PesquisaContainer = styled.section`
background-image: linear-gradient(90deg, #002F52 35%, #326589);
color: #fff;
text-align: center;
padding: 85px 0;
height: 270px;
width: 100%;
`

const Titulo = styled.h2`
color: #fff;
font-size: 36px;
text-align: center;
width: 100%;
`

const Subtitulo = styled.h3`
font-size: 16px;
font-weight: 500;
margin-bottom: 40px;
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState('');
    return (
        <PesquisaContainer>
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante!</h3>
            <Input placeholder="Escreva sua próxima leitura" 
                   onBlur={evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = livro.filter()
                   }} />
        </PesquisaContainer>
    )
}

// estado de componentes são variaveis desses componentes
// que fazem parte da página

export default Pesquisa;