import './index.css'

function Panel({selected, appeared}) {
  // 这里是会执行的
  // console.log('panel 1 re-render')
  if (!selected && !appeared) {
    return null
  }
  let style = {
    display: selected ? (() => {
      console.log('panel 1 re-render block')
      return 'block'
    })() : 'none',
  }
  return (
    <div id='_17_wrapper' style={style}>Panel1</div>
  )
}

export default Panel;
