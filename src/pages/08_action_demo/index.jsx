import { useState } from 'react'
import './index.css'
import CartDisplay from "./CartDsiplay.jsx";
import AddToCart from "./AddToCart.jsx";

function Index() {
  const [carts, setCarts] = useState([{
    id: 1,
    title: 'Traversy Media Ebook'
  }])

  const addToCart = async (formData, title) => {
    const id = String(formData.get('itemID'))
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
      setCarts(carts => [...carts, {id, title}])
    })
    return {id}
  }

  return (
    <div>
      <CartDisplay cart={carts} />
      <AddToCart
        id='1'
        title='JavaScript: The Definitive Guide'
        addToCart={addToCart}
      />
      <AddToCart
        id='1'
        title='JavaScript: The Definitive Guide'
        addToCart={addToCart}
      />
    </div>
  )
}

export default Index
