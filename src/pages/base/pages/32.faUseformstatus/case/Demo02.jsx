import Input from 'components/Input/index.jsx'
import {formAction} from './actions.js'
import SubmitButton from './SubmitButton.jsx'

export default function Demo01() {
  return (
    <form action={formAction}>
      <Input label='Title' name='title' />
      <Input label='content' name='content' />
      <SubmitButton>Submit</SubmitButton>
    </form>
  )
}
