import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import {
  Container,
  Typography,
  Icon,
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  ListItemIcon
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import logo from './logo.svg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column'
  },
  toolbar: {
    backgroundColor: theme.palette.secondary.main,
    color: '#000'
  },
  barTitle: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    display: 'inline-block',
    marginRight: 10,
    width: 36,
    height: 'auto'
  },
  logoText: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  },
  listItemIcon: {
    minWidth: 10,
    marginRight: 10
  },
  main: {
    paddingTop: 20
  }
}))

const DropMenu = withRouter(({ logout, location }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  function handleMenu(event) {
    setAnchorEl(event.currentTarget)
  }
  function handleClose() {
    setAnchorEl(null)
  }
  useEffect(() => {
    if (open) {
      setAnchorEl(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])
  return (
    <div>
      <IconButton
        aria-label="menyvalg"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Icon>more_vert</Icon>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={logout}>
          <ListItemIcon className={classes.listItemIcon}>
            <Icon>account_circle</Icon>
          </ListItemIcon>
          <Typography variant="inherit">Logg ut</Typography>
        </MenuItem>
      </Menu>
    </div>
  )
})

const Layout = ({ children, logout, sidebar }) => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            className={classes.barTitle}
            component={Link}
            to="/"
          >
            <img src={logo} alt="" className={classes.logo} />
            <span className={classes.logoText}>Portalen</span>
          </Typography>
          <DropMenu logout={logout} />
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
  logout: PropTypes.func
}

export default Layout
