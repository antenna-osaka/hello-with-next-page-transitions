import React from 'react';

import { PageTransition } from 'next-page-transitions'

import Loader from './Loader'
import Background from "./Background";
import BackgroundContext from "../context/BackgroundContext";

const TIMEOUT = 400

export default class MainLayout extends React.Component{
  constructor(props){
    super(props);

    const updatePosition=(position)=>{
      if(
        !(
          (this.state.position.x==position.x) &&
          (this.state.position.y==position.y)
        )
      ){
        this.setState({
          position,
        })
      }
    }
  
    this.state={
      position:{x:null,y:null},
      updatePosition,
    };

  }
  render(){
    const backgroundContext={
      position:this.state.position,
      updatePosition:this.state.updatePosition,
    };
  

    return (
      <>
        <Background position={this.state.position}/>
        <BackgroundContext.Provider value={backgroundContext}>
          <PageTransition
            timeout={TIMEOUT}
            classNames="page-transition"
            loadingComponent={<Loader />}
            loadingDelay={500}
            loadingTimeout={{
              enter: TIMEOUT,
              exit: 0,
            }}
            loadingClassNames="loading-indicator"
          >
            {this.props.children}
          </PageTransition>
          <style jsx global>{`
            .page-transition-enter {
              opacity: 0;
              transform: translate3d(0, 20px, 0);
            }
            .page-transition-enter-active {
              opacity: 1;
              transform: translate3d(0, 0, 0);
              transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity ${TIMEOUT}ms;
            }
            .loading-indicator-appear,
            .loading-indicator-enter {
              opacity: 0;
            }
            .loading-indicator-appear-active,
            .loading-indicator-enter-active {
              opacity: 1;
              transition: opacity ${TIMEOUT}ms;
            }
          `}</style>
        </BackgroundContext.Provider>
      </>
    );    
  }
}

