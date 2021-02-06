import React from 'react';

import styles from "./Background.module.css";
import gsap from "gsap";

export default class Background extends React.Component {
  constructor(props){
    super(props);
    this.circleRef = React.createRef();
    this.lastPosition={
      x:null,
      y:null,
    };
  }
  componentDidMount() {
    console.log("Background#componentDidMount");
    const { position } = this.props;
    this.updatePosition(position);
  }
  componentDidUpdate() {
    console.log("Background#componentDidUpdate");
    const { position } = this.props;
    this.updatePosition(position);
  }
  componentWillUnmount() {
    console.log("Background#componentWillUnmount");
  }
  updatePosition(position){
    console.log(position);
    const circle = this.circleRef.current;
    if(
      position.x!=null &&
      position.y!=null
    ){
      if(
        this.lastPosition.x==null ||
        this.lastPosition.y==null
      ){
        gsap.set(circle,{
          x:position.x,
          y:position.y,
        });
      }else{
        gsap.to(circle,{
          x:position.x,
          y:position.y,
          duration:1,
        });
      }
  
    }
    this.lastPosition.x=position.x;
    this.lastPosition.y=position.y;
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
