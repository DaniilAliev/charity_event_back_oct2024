import { Outlet } from "react-router-dom"
import Nav from "../../widgets/Nav/Nav"

const LayoutDefault = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  )
}

export default LayoutDefault
