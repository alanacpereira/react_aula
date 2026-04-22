
const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li><img src={icone} alt="Ícone" /></li>
            ))}
        </ul>
    )
}

export default IconesHeader;