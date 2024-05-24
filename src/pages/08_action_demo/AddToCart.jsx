function AddToCart({id, title, addToCart}) {
  const formAction = async (formData) => {
    try {
      await addToCart(formData, title);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form action={formAction}>
      <h2>{title}</h2>
      <input type="hidden" name='id' value={id} />
      <input type="hidden" name='title' value={title} />
      <button type="submit">
        Add To Cart
      </button>
    </form>
  )
}

export default AddToCart;
