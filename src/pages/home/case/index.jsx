import ButtonCase from './case';
import ButtonCaseRaw from './case.jsx?raw';
import ButtonRaw from 'components/Button/index.jsx?raw'

import Playground3 from 'components/Playground3'

function App() {
  return (
    <Playground3 
      files={{ 'ButtonCase': ButtonCaseRaw, Button: ButtonRaw }} 
      caseRender={<ButtonCase />}
    />
  )
}

export default App;
