import './online.css'

function Online() {
  return (
    <li className="onlineFriend">
        <div className="onlineProfileImgContainer">
            <img src="assets/person/3.jpeg" alt="" className="onlineProfileImg" />
            <span className="onlineOnline"></span>
        </div>
        <span className="onlineUsername">Linda Cole</span>
    </li>
  )
}

export default Online