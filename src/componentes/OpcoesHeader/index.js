
const textoOpocoes = ['CATEGORIAS', 'FAVORITOS','MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {textoOpocoes.map((texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ))}
        </ul>
    )
}

export default OpcoesHeader;