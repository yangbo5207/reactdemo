import { useState } from 'react'
import Input from 'components/Input'
import './index.css'

function Index() {
  const [posts, setPosts] = useState([])

  function action(data) {
    const title = data.get('title')
    const content = data.get('content')
    setPosts([...posts, {title, content}])
  }

  return (
    <div className='border p-4 rounded-xl'>
      <form action={action}>
        <Input label='Name' name='title' placeholder='Enter Title' required pattern='[0-9]{6}' />
        <Input label='Content' name='content' placeholder='please input your content' required />

        <div className='flex justify-end'>
          <button type='submit'>Submit</button>
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
