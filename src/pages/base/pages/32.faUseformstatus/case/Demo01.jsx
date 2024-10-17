import Input from 'components/Input/index.jsx'
import Button from 'components/Button/index.jsx'
import {formAction} from './actions.js'

export default function Demo01() {
  return (
    <form action={formAction}>
      <Input label='Title' name='title' />
      <Input label='content' name='content' />
      <Button>Submit</Button>
    </form>
  )
}
