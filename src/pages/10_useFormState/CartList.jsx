import c from './cart.module.css'

function CartList({cart = []}) {
  return (
    <div>
      {cart.map((item, index) => (
        <div id={c.inner} key={`cart_${index}`}>
          <div>title: {item.title}</div>
          <div>id: {item.id}</div>
          <div>count: {item.count || 0}</div>
        </div>
      ))}
    </div>
  )
}

export default CartList
