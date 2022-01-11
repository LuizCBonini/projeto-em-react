function Button(props) {
    return <button onClick={props.event}>{props.text}</button>
}

//Quando se tem apenas uma linha de código, não é necessário os parenteses no return.

export default Button