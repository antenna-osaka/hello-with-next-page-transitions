import React from 'react'

import BackgroundContext from "../context/BackgroundContext";


export default function BackgroundContextSender(props){
  const { position } = props;
  const { updatePosition } = React.useContext(BackgroundContext);
  React.useEffect(() => {
    updatePosition(position);
  });
  
  return null;
}