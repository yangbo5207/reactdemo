import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

// 如何支持 JSX
// https://codesandbox.io/p/sandbox/monaco-editor-react-with-jsx-highlighting-and-commenting-6o4u4?file=%2Fsrc%2Findex.js%3A41%2C10-41%2C22

export default function Monaco(props) {
  const language = 'javascript';

  return (
    <div className='border pt-4 rounded-md overflow-hidden'>
      <Editor
        path={language}
        defaultLanguage={language}
        defaultValue={props.file}
        height='484px'
        options={{
          lineHeight: 1.8,
          minimap: {enabled: false},
          readOnly: true,
          scrollbar: {
            horizontal: 'hidden',
            vertical: 'hidden',
            alwaysConsumeMouseWheel: false
          },
          scrollBeyondLastLine: false,
          renderLineHighlight: 'none'
        }}
        theme='github'
      />
    </div>
  )
}
