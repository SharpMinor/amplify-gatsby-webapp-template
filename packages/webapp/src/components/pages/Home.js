import React, { useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import { AuthContext } from '../../api/AuthContext'
import { MuiSignOutButton } from '@project/ui-components'
import { connect} from 'react-redux'

const homeLoaded = () => ({
  type: 'HOME_PAGE_LOADED',
})

const mapStateToProps = state => {
  return { ...state };
};

class Home extends React.Component {

  componentDidMount() {
    this.props.homeLoaded()
  }

  componentDidUpdate() {
    this.props.homeLoaded()
  }

  render() {
    return (
      <AuthContext.Consumer>
        {auth => (
          <div>
            <h1>Home</h1>
            <p>{`Hello ${auth.attributes.email}`}</p>
            <p>
              You are now logged in! <Link to="/app/profile">View profile</Link>
            </p>

            <MuiSignOutButton
              onSignOutClick={() => {
                auth.signOut()
              }}
              color="primary"
              size="medium"
            />
            <p>{`isHomeLoaded: ${this.props.isHomeLoaded}`}</p>
          </div>
        )}
      </AuthContext.Consumer>
    )
  }
}

export default connect(mapStateToProps, { homeLoaded })(Home)
