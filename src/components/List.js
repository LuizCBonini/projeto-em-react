import Item from "./Item"

function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li><Item marca = "Fiat" anoLancamento = {1995} /></li>
                <li><Item marca = "Renault" anoLancamento = {1997} /></li>
                <li><Item /></li>
            </ul>
        </>
    )
}

export default List