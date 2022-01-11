/* 

function Pessoa(props) {

    return (
        <div>
            <img src = {props.foto} alt = {props.name} />
            <h2>Nome: {props.name}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissao: {props.profissao}</p>
        </div>
    )
}

*/

/* Para evitar repetição como 
no caso do "props" podemos transformar
 estas chamadas em variáveis tornando-as
 mais legíveis. */

 function Pessoa({name, foto, idade, profissao}) {

    return (
        <div>
            <img src = {foto} alt = {name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}


export default Pessoa