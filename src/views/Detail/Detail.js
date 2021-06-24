import './Details.css'
import ItemDetailContainer from '../../component/ItemDetailContainer/ItemDetailContainer'

function Detail({match}) {
    let ID = match.params.id
    return(
        <ItemDetailContainer Pid={ID} />
    )
}
export default Detail
