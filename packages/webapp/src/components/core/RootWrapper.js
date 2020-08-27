// React imports
import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../../state/createStore'

// gatsby imports

//Amplify imports

// Core function imports

// API components imports
import AppRoot from './AppRoot'

const RootWrapper = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore()
  return (
    <Provider store={store}>
      <AppRoot>{element}</AppRoot>
    </Provider>
  )
}

export default RootWrapper
