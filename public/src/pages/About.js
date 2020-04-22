import React from 'react';
import './about.scss';
// import {TimelineMax} from 'gsap';
import {Tween} from 'react-gsap';
/**
 *
 * @param {React.Props} propes
 * @return {JSX.Element}
 */
function UserDetail(propes) {
  return (<div className="animated-text">
    <Tween from={{y: '100px', opacity: '0'}}>
      <div>vv</div>
    </Tween>
  </div>);
}


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
        <div>
          <UserDetail/>
          <UserDetail/>
        </div>
      </div>);
  }
}
