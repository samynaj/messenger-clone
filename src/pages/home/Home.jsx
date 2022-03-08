import "./home.css"
import Feeds from '../../components/feeds/Feeds'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

function Home() {
  return (
    <>
        <Topbar />
        <div className="homeContainer">
            <Sidebar />
            <Feeds />
            <Rightbar />
        </div>
    </>
  )
}

export default Home