import React from 'react'


const BackgroundContext = React.createContext({
  position: { x: 0, y: 0 },
  updatePosition: () => { },

});
export default BackgroundContext;