import React from 'react';
import './home.scss';
// import {TimelineMax} from 'gsap';
import {Tween} from 'react-gsap';
/**
 *
 * @param {React.Props} propes
 * @return {JSX.Element}
 */
function AnimatedHaeding(propes) {
  return (<div className="animated-text">
    Animated
    <Tween from={{y: '100px', opacity: '0'}}>
      <div> text</div>
    </Tween>
  </div>);
}


/**
 *
 * @param {React.Props} propes
 * @return {JSX.Element}
 */
function ActionButton(propes) {
  return (
    <Tween from={{y: '20px', opacity: '0.1'}}>
      <button className="action-btn">Action</button>
    </Tween>);
}

/**
 * This Home Page
 */
export default class Home extends React.Component {
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
      <div className="home" id="Home" >
        <div>
          <AnimatedHaeding/>
          <ActionButton> </ActionButton>
          <ActionButton> </ActionButton>
        </div>
      </div>);
  }
}
