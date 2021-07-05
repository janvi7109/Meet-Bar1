import Header from './../UI/Header/Header';
import shortid from "shortid";
import {useHistory} from "react-router-dom";
import './HomePage.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
const HomePage = () => {
  const history = useHistory();

  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };

    return (
        <div className="home-page">
        <Header />
        <div className="body">
          <div className="left-side">
            <div className="content">
              <h2>Hey Peeps, Welcome to Meet Bar!</h2>
              {/* <p>
                Let's get depressed together :)
              </p> */}
              <div className="action-btn">
                <button className="btn green" onClick={startCall}>
                  <FontAwesomeIcon className="icon-block" icon={faVideo} />
                  New Meeting
                </button>
                <div className="input-block">
                  <div className="input-section">
                    <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                    <input placeholder="Enter a code or link" />
                  </div>
                  <button className="btn no-bg">Join</button>
                </div>
              </div>
            </div>
            <div className="help-text">
              <a href="">Learn more</a>
            </div>
          </div>
          <div className="right-side">
            <div className="content">
              <img src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg" />
            </div>
          </div>
        </div>
      </div>
    )
}

export default HomePage;