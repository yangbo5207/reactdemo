import { useState, useRef } from 'react'
import {useFormStatus} from 'react-dom'
import './index.css'

function Index() {
  const [posts, setPosts] = useState([])
  const ref = useRef()

  async function formAction(formdata) {
    console.log('xxx2')
    const title = formdata.get('title')
    const content = formdata.get('content')

    // 简单校验
    if (!title || !content) {
      return false;
    }

    await new Promise(resolve => setTimeout(resolve, 1000))
    setPosts(posts => [...posts, {title,content}])
  }

  function onSubmit(e) {
    e.preventDefault()
    console.log('xxx1')
  }

  return (
    <div>
      <div>基础的表单提交案例</div>

      <form action={formAction} onSubmit={onSubmit}>
        <div className="form_item">
          <div className="label">Title</div>
          <input name='title' type="text" placeholder='Enter title' />
        </div>

        <Input2 required name='content' />

        <SubmitButton />
      </form>

      <ul className='_04_list'>
      {posts.map((post) => (
        <div key={post.title} className='_04_item'>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </ul>
    </div>
  )
}

export default Index

function Input2({required, name}) {
  const {pending} = useFormStatus()

  return (
    <div className="form_item">
      <div className="label">Name</div>
      <input
        name={name}
        type="text"
        required={required}
        placeholder='Enter you name'
        disabled={pending}
      />
    </div>
  )
}

function SubmitButton() {
  const {pending} = useFormStatus()

  return (
    <div className="form_item">
      <button
        className='primary'
        type='submit'
        disabled={pending}
      >
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  )
}
