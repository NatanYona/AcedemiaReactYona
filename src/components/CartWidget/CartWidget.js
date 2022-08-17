import './CartWidget.scss';
import { Link } from 'react-router-dom';
const CartWidget = () =>{
    
    return(
        <Link to={"/cart"}>
        <a type='buttom'><span class="d-none material-symbols-outlined cartwidget">shopping_cart</span></a>
        </Link>
    )
}
export default CartWidget