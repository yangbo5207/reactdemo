import ButtonCase from './case';
import ButtonCaseRaw from './case.jsx?raw';
import ButtonRaw from 'components/Button/index.jsx?raw'

import Codepack from 'components/Codepack'

function App() {
  return (
    <Codepack
      files={{ 'ButtonCase': ButtonCaseRaw, Button: ButtonRaw }}
      caseRender={<ButtonCase />}
    />
  )
}

export default App;
