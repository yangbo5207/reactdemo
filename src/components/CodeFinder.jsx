import { SandpackProvider, SandpackLayout, SandpackCodeEditor } from '@codesandbox/sandpack-react'
import githubLight from 'utils/githubLight'

export default function CodeEditor({files, activeFile}) {
  return (
    <SandpackProvider
      template='react'
      options={{
        editorHeight: 'auto',
        activeFile
      }}
      theme={githubLight}
      files={files}
    >
      <SandpackLayout>
        <SandpackCodeEditor />
      </SandpackLayout>
    </SandpackProvider>
  )
}
