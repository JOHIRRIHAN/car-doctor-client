import { Outlet } from "react-router-dom"
import Headers from "../Pages/Headers/Headers"
import Footer from "../Pages/Footer/Footer"

const Main = () => {
  return (
    <div>
        <Headers></Headers>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main