import React, { useContext, useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'

import TokenContext from '../../helpers/tokenContext'
import Layout from '../../components/Layout/Layout'
import { load as loadUser } from '../../redux/modules/user'

const Dashboard = loadable(() =>
  import(/* webpackChunkName: "Dashboard" */ '../Dashboard/Dashboard')
)

const NotFound = loadable(() =>
  import(/* webpackChunkName: "NotFound" */ '../NotFound/NotFound')
)

const AppUser = ({ loadUser, authError }) => {
  const { setToken } = useContext(TokenContext)
  const logoutAction = () => {
    setToken(null)
  }
  useEffect(() => {
    loadUser()
  }, [loadUser])
  useEffect(() => {
    if (authError) {
      setToken(null)
    }
  }, [authError, setToken])
  return (
    <Layout logout={logoutAction}>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  )
}

export default connect(
  state => ({
    user: state.user.data,
    authError: state.user.error
  }),
  {
    loadUser
  }
)(AppUser)
