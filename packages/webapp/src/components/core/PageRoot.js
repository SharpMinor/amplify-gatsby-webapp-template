import React from 'react'

import AppShell from '../api/AppShell'

const PageRoot = ({ element, props }) => {
  if (props.location.pathname.match(/^\/app/)) {
    return <AppShell {...props}>{element}</AppShell>
  }
}


export default PageRoot
