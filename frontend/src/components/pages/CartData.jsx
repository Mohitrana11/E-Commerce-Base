import Navbar from '../connections/Navbar'
import Cart from '../connections/carts/Cart'

function CartData() {
  return (
    <>
        <Navbar/>
      <div className='pt-[80px] '>
        <Cart/>
      </div>
    </>
  )
}

export default CartData
