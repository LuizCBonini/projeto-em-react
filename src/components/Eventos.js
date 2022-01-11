import Button from "./Button"

function Eventos() {

    function MeuEvento() {
        console.log(`Ativando primeiro evento!`)
    }

    function SegundoEvento() {
        console.log(`Ativando segundo evento!`)
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={MeuEvento} text="Primeiro Evento!" />
            <br/>
            <Button event={SegundoEvento} text="Segundo Evento!" />
        </div>
    )
}

export default Eventos