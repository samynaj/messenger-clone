import Ad from "../ad/Ad"
import Online from "../online/Online"
import "./rightbar.css"

function Rightbar({profile}) {

  const HomeRightBar = () => {
    return (
      <>
         <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Palmer Jones</b> and <b>3 other friends</b> have their birthday today.
          </span>
        </div>
        <Ad />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <Online />
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoItemKey">City:</span>
            <span className="rightbarInfoItemValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoItemKey">Home Town:</span>
            <span className="rightbarInfoItemValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoItemKey">Relationship:</span>
            <span className="rightbarInfoItemValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Linda Cole</span>
          </div>
        </div>
        <Ad />
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {
         profile? <ProfileRightBar /> : <HomeRightBar />
       }
      </div>
    </div>
  )
}

export default Rightbar