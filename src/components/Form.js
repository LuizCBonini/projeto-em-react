import { useState } from "react"

function Form() {

    function CadastrarUsuario(e) {
        e.preventDefault()
        console.log(`O usuário ${name} foi cadastrado com a senha ${password}`)
    }
    //preventDefault faz o evento parar e então mostra o que esta abaixo.

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type = "text" id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type = "password" id="password" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form