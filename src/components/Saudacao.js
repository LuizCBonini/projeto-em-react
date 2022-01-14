function Saudacao({nome}) {

    const gerarSaudacao = (algumNome) => `Olá, ${algumNome}, tudo bem com você?`

    return(
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}
//Assim ele só roda se um nome for declarado.
export default Saudacao