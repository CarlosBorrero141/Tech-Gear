
import './Details.css'
import ItemDetail from '../../component/ItemDetail/ItemDetail.js'


function Detail({match}) {
    let ID = match.params.id
    return(
        <ItemDetail productId={ID} />
    )
}
export default Detail
