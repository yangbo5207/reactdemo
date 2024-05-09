import { useState } from 'react'
import './index.css'

function Index() {
  const [posts, setPosts] = useState([])
  function formAction(formdata) {
    const data = {
      title: formdata.get('title'),
      content: formdata.get('content')
    }
    if (data.title && data.content) {
      setPosts([...posts, data])
    }
  }
  return (
    <div>
      <div>基础的表单提交案例</div>

      <form action={formAction}>
        <div className="form_item">
          <div className="label">Title</div>
          <input name='title' type="text" placeholder='请输入' />
        </div>
        
        <div className="form_item">
          <div className="label">Name</div>
          <input name='content' type="text" placeholder='Enter title' />
        </div>

        <div className="form_item">
          <button className='primary' type='submit'>Submit</button>
        </div>
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