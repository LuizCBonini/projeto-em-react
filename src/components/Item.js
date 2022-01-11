import PropTypes from "prop-types"

function Item({marca, anoLancamento}) {
    return (
        <>
          <li>{marca} - {anoLancamento}</li>
        </>
    )
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  anoLancamento: PropTypes.number,
}

//.isRequired faz com que seja obrigatório passar o valor de "marca"

Item.defaultProps = {
  marca: "Faltou a marca",
  anoLancamento: 0,
}

//Usando o "defaultProps" o "isRequired" não é mais necessário.

export default Item