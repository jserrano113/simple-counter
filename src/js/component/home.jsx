import React from "react";
import TimerFour from "./TimerFour.jsx";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faClock } from '@fortawesome/free-solid-svg-icons'

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
      <main>
        <div>
          <TimerFour />
        </div>
      </main>
    </>
  );
};

export default Home;
