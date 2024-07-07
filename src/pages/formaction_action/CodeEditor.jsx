import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview } from '@codesandbox/sandpack-react'
import { githubLight } from "@codesandbox/sandpack-themes";

export default function CodeEditor({files}) {
  return (
    <SandpackProvider
      template='react'
      options={{
        editorHeight: 'auto'
      }}
      theme={githubLight}
      files={files}
    >
      <SandpackLayout>
        <SandpackCodeEditor editorHeight='auto' />
      </SandpackLayout>
    </SandpackProvider>
  )
}