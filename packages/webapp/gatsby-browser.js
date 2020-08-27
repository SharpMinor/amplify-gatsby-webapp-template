/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Import custom styles
import './src/styles/global.css'

//Amplify imports
import Amplify, { Hub } from '@aws-amplify/core'

// Core function imports
import { authConfiguredEventListener } from './src/core/AmplifyAuthListeners'

// Service warpper (customer-app-service) imports
import { ConfigKeys, AmplifyConfig } from '@project/customer-app-service'

// API components imports
import RootWrapper from './src/components/core/RootWrapper'
import PageRoot from './src/components/core/PageRoot'

// To enable service worker, uncomment the code block below
/*
const serviceWorker = new ServiceWorker()
let registeredServiceWorker
const registerServiceWorker = function() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async function() {
      registeredServiceWorker = await serviceWorker.register(
        '../api-proxy-sw.js',
        '../api/'
      )

      console.log(
        '[Service Worker] - Service Worker Registered : ',
        registeredServiceWorker
      )
    })
  }
}

registerServiceWorker()

*/

// Limit the global config to Cognito specific only
// API configuration parameters are intentionally omitted here
let awsAuthConfig = {
  aws_project_region: process.env.AWS_PROJECT_REGION,
  aws_cognito_identity_pool_id: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.USER_POOLS_WEB_CLIENT_ID,
}

//Amplify.configure(awsConfig)

// init API configuration parameters and store them in a singleton as key-value pairs
// where key identifies a specific API, and the value is an object with all
// required params for API specific config

const ccOffersApiConfig = {
  aws_appsync_graphqlEndpoint:
    process.env.CREDIT_CARD_OFFERS_API_GRAPHQLENDPOINT,
  aws_appsync_region: process.env.CREDIT_CARD_OFFERS_API_APPSYNC_REGION,
  aws_appsync_authenticationType:
    process.env.CREDIT_CARD_OFFERS_API_APPSYNC_AUTHENTICATION_TYPE,
  aws_appsync_apiKey: process.env.CREDIT_CARD_OFFERS_API_APIKEY,
}

const custBookmarkApiConfig = {
  aws_appsync_graphqlEndpoint:
    process.env.CUSTOMER_BOOKMARKS_API_GRAPHQLENDPOINT,
  aws_appsync_region: process.env.CUSTOMER_BOOKMARKS_API_APPSYNC_REGION,
  aws_appsync_authenticationType:
    process.env.CUSTOMER_BOOKMARKS_API_APPSYNC_AUTHENTICATION_TYPE,
}

// Not very neat, but adding auth config to Api config object as well
AmplifyConfig.addConfig(ConfigKeys.AUTH, awsAuthConfig)
// Add these config value-objects to the singleton for later use
AmplifyConfig.addConfig(ConfigKeys.CREDIT_CARD_OFFERS_API, ccOffersApiConfig)
//console.log('CREDIT_CARD_OFFERS_API :', ccOffersApiConfig)
AmplifyConfig.addConfig(
  ConfigKeys.CUSTOMER_BOOKMARKS_API,
  custBookmarkApiConfig
)

export const onClientEntry = () => {
  Hub.listen('auth', authConfiguredEventListener)
  let cfg = Amplify.configure(awsAuthConfig)
  console.log('Amplify: ', cfg)
}

export const wrapRootElement = RootWrapper

export const wrapPageElement = PageRoot
