import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import file1 from './file1'
import { useEffect } from 'react'

function EditorPage() {
  useEffect(() => {
    var editor = new EditorJS({
      holder: 'editor_container',
      tools: {
        header: Header,
        list: List
      },
      data: file1
    })
  }, [])
  return (
    <div className="wrapper">
      <button>保存</button>
      <div id='editor_container'>   
      </div>
    </div>
  )
}

export default EditorPage
