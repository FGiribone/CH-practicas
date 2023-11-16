function CartWidget(props){

    return (
        <nav>
          <ul className="navbar-menu">
            {props.titulos.map((titulo, index) => (
              <li key={index}>
                <a className="navbar-item" href="#">
                <img src={props.img} alt="Ícono" />
                  {titulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      );
}



export default CartWidget;