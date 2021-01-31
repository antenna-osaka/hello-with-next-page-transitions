import React from 'react';

import styles from "./Background.module.css";
import gsap from "gsap";

export default class Background extends React.Component {
  constructor(props){
    super(props);
    this.circleRef = React.createRef();
  }
  componentDidMount() {
    console.log("Background#componentDidMount");
    const { position } = this.props;
    const circle = this.circleRef.current;
    console.log(position);
    gsap.set(circle,{
      x:position.x,
      y:position.y,
    });
  }
  componentDidUpdate() {
    console.log("Background#componentDidUpdate");
    const { position } = this.props;
    const circle = this.circleRef.current;
    console.log(position);
    gsap.to(circle,{
      x:position.x,
      y:position.y,
      duration:1,
    });
  }
  componentWillUnmount() {
    console.log("Background#componentWillUnmount");
  }
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.circle} ref={this.circleRef}>
        </div>
      </div>
    );
  }
}
