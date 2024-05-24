import { useState } from 'react'
import './index.css'

function Index() {
  const [posts, setPosts] = useState([])

  function action(data) {
    const title = data.get('title')
    const content = data.get('content')

    if (title && content) {
      setPosts([...posts, {title, content}])
    }
  }
  function onInput(event) {
    let input = event.target
    console.log(input.validity)
    if (input.validity.valid) {
      console.log('xxxxx', input.validity)
    }
  }


  return (
    <div>
      <div>基础的表单提交案例</div>

      <form action={action}>
        <div className="form_item">
          <div className="label">Title</div>
          <input name='title' type="text" placeholder='Enter title' required />
        </div>
        
        <div className="form_item">
          <div className="label">Name</div>
          <input
            onInput={onInput}
            name='content'
            type="text"
            placeholder='Enter you name'
            required
            pattern={'abc'}
          />
        </div>

        <div className="form_item">
          <button className='primary' type='submit'>Submit</button>
        </div>
      </form>

      <ul className='_07_list'>
        {posts.map((post, index) => (
          <div key={`${post.title}-${index}`} className='_07_item'>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Index
