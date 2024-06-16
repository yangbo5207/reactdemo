import './loading.css'

export default function Loading() {
  return (
    <div className='w-10 h-10 ml-4 border rounded-full overflow-hidden relative'>
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
    </div>
  )
}
