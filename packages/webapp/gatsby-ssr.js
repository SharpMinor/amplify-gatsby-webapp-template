/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

// API components imports
import RootWrapper from './src/components/core/RootWrapper'
import PageRoot from './src/components/core/PageRoot'

export const wrapRootElement = RootWrapper

export const wrapPageElement = PageRoot
