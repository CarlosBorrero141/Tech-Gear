import React from 'react'

class NavBar extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Tienda</a>
                    </li>
                    <li>
                        <a href="">Envio y Pagos</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;