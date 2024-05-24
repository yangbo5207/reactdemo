function CartDisplay({cart = []}) {
  return (
    <div>
      {cart.map((item, index) => (
        <div key={item.id}>
          <div>id: {item.id}</div>
          <div>title: {item.title}</div>
        </div>
      ))}
    </div>
  )
}

export default CartDisplay

