import React, {useEffect, useState} from 'react'
import CardItem from '../CardItem/CardItem.js'
import './ItemList.css'


function ItemList() {

    const [productos, setproductos] = useState([])

    useEffect(() => {
        const prom = new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve([
                    {
                        "id": 1,
                        "productName": "DRAGONBORN K630",
                        "description": "Pequeño, pero temible. El Dragonborn es un teclado mecánico 60%, compacto y súper transportable, con prestaciones óptimas para el juego competitivo de alto nivel: switches Redragon Brown, tecla Fn, bloqueo de tecla de Windows, cable desmontable y la mejor calidad de construcción. Más la debida iluminación RGB, por supuesto.",
                        "precio": "$200",
                        "imagen": "https://redragonla.com/wp-content/uploads/2021/04/K630RGB-PNGHQ-4-1-512x512.png"
                      },
                      {
                        "id": 2,
                        "productName": "DRAGONBORN K630",
                        "description": "Pequeño, pero temible. El Dragonborn es un teclado mecánico 60%, compacto y súper transportable, con prestaciones óptimas para el juego competitivo de alto nivel: switches Redragon Brown, tecla Fn, bloqueo de tecla de Windows, cable desmontable y la mejor calidad de construcción. Más la debida iluminación RGB, por supuesto.",
                        "precio": "$200",
                        "imagen": "https://redragonla.com/wp-content/uploads/2021/04/K630RGB-PNGHQ-4-1-512x512.png"
                      },
                      {
                        "id": 3,
                        "productName": "DRAGONBORN K630",
                        "description": "Pequeño, pero temible. El Dragonborn es un teclado mecánico 60%, compacto y súper transportable, con prestaciones óptimas para el juego competitivo de alto nivel: switches Redragon Brown, tecla Fn, bloqueo de tecla de Windows, cable desmontable y la mejor calidad de construcción. Más la debida iluminación RGB, por supuesto.",
                        "precio": "$200",
                        "imagen": "https://redragonla.com/wp-content/uploads/2021/04/K630RGB-PNGHQ-4-1-512x512.png"
                      }
                ])
            }, 2000)
           
            })
            prom.then((resultado)=>{
                setproductos(resultado);
        })
    },[]) 



    return (
        <div className='List'>
            
            {productos.map(prod => 
            <h5>{prod.productName}</h5>
            )}
            
            
        </div>
    )
}

export default ItemList
