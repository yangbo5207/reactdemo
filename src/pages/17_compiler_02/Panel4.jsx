import './index.css'

function Panel({selected, appeared}) {
  console.log('panel 4 re-render')
  if (!selected && !appeared) {
    return null
  }
  let style = {
    display: selected ? 'block' : 'none',
  }

  return (
    <div id='_17_wrapper' style={style}>Panel4</div>
  )
}

export default Panel;
