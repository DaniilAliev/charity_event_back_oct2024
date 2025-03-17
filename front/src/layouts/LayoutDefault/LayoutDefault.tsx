import { Outlet } from "react-router-dom"
import Nav from "../../widgets/Nav/Nav"


const LayoutDefault = () => {
  return (
    <>
      <Nav />

      <Outlet />
    </>
  )
}

export default LayoutDefault
