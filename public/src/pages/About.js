import React from 'react';
import './about.scss';
import {Card} from '../components';
// import {TimelineMax} from 'gsap';
// import {Tween} from 'react-gsap';

/**
 * This Home Page
 */
export default class About extends React.Component {
  /**
   *
   * Mounting callback
   */
  componentDidMount() {
    // const eliments = document.querySelectorAll('.animated-text span');

  }

  /**
   * @return {JSX.Element}
   */
  render() {
    return (
      <div className="about" id="About" >
        <div className="cards">
          <Card
            name="Hillal Kumar Roy"
            roll="15"
            number="7076055679"/>
          <Card
            name="Ankit Das"
            roll="5"
            number="9007922146"/>
          <Card
            name="Pronoy Roy"
            roll="25"
            number="7430062317"/>
        </div>
      </div>);
  }
}
