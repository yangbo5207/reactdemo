export default function Show(props) {
  const {when, fallback = null, children} = props
  return when ? children : fallback
}