import { useState } from 'react'
import CartList from "./CartList.jsx";
import BookItem from "./BookItem.jsx";

import './index.css'

function Index() {
  const [carts, setCarts] = useState([])

  function addToCart(item) {
    const targetItem = carts.find((cart) => cart.id === item.id)
    if (targetItem) {
      targetItem.count += 1
      setCarts([...carts])
      return
    }
    setCarts(carts => [...carts, item])
  }

  return (
    <div>
      <BookItem
        id='001'
        title='JavaScript Core advance'
        onSubmit={addToCart}
      />
      <BookItem
        id='002'
        title='React19 all solution'
        onSubmit={addToCart}
      />
      <CartList cart={carts} />
    </div>
  )
}

export default Index
