import Codepack from 'components/Codepack'
import Page from './index'

import index__ from './index.jsx?raw'
import message__ from './Message.jsx?raw'
import api__ from '../api.js?raw'

export default function Case() {
  return (
    <Codepack
      files={{ 'index': index__, 'message': message__, 'api': api__ }}
      caseRender={<Page />}
    />
  )
}