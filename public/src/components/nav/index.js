import React from 'react';
import './nav.scss';

/**
 * A class for Navigation into this site
 * @member {React.Props} props
 */
export default class Nav extends React.Component {
  /**
   *
   * @param {React.Props} props
   */
  constructor(props) {
    super(props);
    this.props = props;
  }

  /**
   * Adds two numbers together.
   * @return {JSX.Element} The sum of the two numbers.
   *
   */
  render() {
    return (
      <nav>
        <div className="logo">
          Skill
          <span>x</span>
        </div>
        <div className="">
          <ul>
            { this.props.children }
          </ul>

        </div>
      </nav>
    );
  }
}
/**
 *
 * @param {React.Props} props
 * @return {JSX.Element}
 */
function ListItem(props) {
  return (
    <li><a href={props.to} className={props.className}> {props.children} </a></li>
  );
}
export {ListItem, Nav};
