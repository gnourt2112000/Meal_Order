import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import { useContext} from 'react'
import CartItem from './CartItem'



const Cart = (props) => {
    
    return (
        <Modal onCloseModal={props.onCloseCart}>
        </Modal>
    )
}

export default Cart