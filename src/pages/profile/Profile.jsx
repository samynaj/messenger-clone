import './profile.css'
import Feeds from '../../components/feeds/Feeds'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'


function Profile() {
  return (
    <>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profilrRightTop">
                    <div className="profileCover">
                        <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                        <img src="assets/person/1.jpeg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Sandy love</h4>
                        <span className="profileInfoDesc">Howdy do mate!!</span>
                    </div>
                </div>  
                <div className="profileRightBottom">
                    <Feeds />
                    <Rightbar profile />
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Profile