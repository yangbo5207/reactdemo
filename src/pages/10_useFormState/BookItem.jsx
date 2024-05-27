import {useActionState, useState} from 'react'
import {useFormStatus} from 'react-dom'

async function action(cur, formData, onSubmit) {
  const id = formData.get('id')
  const title = formData.get('title')
  await new Promise((resolve) => {
    setTimeout(() => {
      onSubmit({id, title, count: cur + 1})
      resolve()
    }, 300)
  })
  return cur + 1
}

function BookItem({id, title, onSubmit}) {
  const [count, formAction] = useActionState(
    (cur, formData) => action(cur, formData, onSubmit), 0)

  return (
    <form action={formAction}>
      <h2>book name: {title}</h2>
      <input type="hidden" name='title' value={title} />
      <input type="hidden" name='id' value={id} />
      <div style={{marginBottom: '20px'}}>cart count: {count}</div>
      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const {pending} = useFormStatus()

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'ADD TO CART...' : 'ADD TO CART'}
    </button>
  )
}

export default BookItem;
