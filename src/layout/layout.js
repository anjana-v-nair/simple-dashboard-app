import React, {Fragment} from 'react'
import {
  AppBar, Toolbar, CssBaseline, IconButton, Typography, Drawer,
  Hidden, Divider

}  from '@material-ui/core'

import {Menu} from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class Layout extends React.Component{

  state = {
    mobileOpen : false
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  render(){

    const { classes, children } = this.props
    const { mobileOpen } =this.state

    const drawer = (
    <div>
      <Hidden smDown>
      <div className={classes.toolbar} />
      </Hidden>
      hello
      <Divider />
    </div>
  );

    return(
      <Fragment>
      <CssBaseline />
      <div className={classes.root}>
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={this.handleDrawerToggle}
        className={classes.menuButton}
      >
        <Menu />
      </IconButton>
      <Typography variant="h6" noWrap>
        AltSpace App
      </Typography>
    </Toolbar>
  </AppBar>
  <nav className={classes.drawer} aria-label="mailbox folders">
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Hidden smUp implementation="css">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={this.handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </Hidden>
    <Hidden xsDown implementation="css">
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        open
      >
        {drawer}
      </Drawer>
    </Hidden>
  </nav>
  <main className={classes.content}>
    <div className={classes.toolbar} />
    {children}
  </main>
</div>
</Fragment>
    )
  }
}
export default withStyles(styles)(Layout);
