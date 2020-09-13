/**
 * Navigation GUI Parts Component
 */
import React, {forwardRef, useState, useMemo} from 'react'
import {Link} from 'react-router-dom'
import clsx   from 'clsx'

// Components
import {LayoutFlex} from '@layouts'

// Entity
import {typePages} from '@entity/navigation'

// Material-UI
import {makeStyles, useTheme, Theme, createStyles} from '@material-ui/core/styles'
import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
  IconButton,
} from '@material-ui/core'
import MenuIcon         from '@material-ui/icons/Menu'
import ChevronLeftIcon  from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
      fontSize: '1.5rem'
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    icon: {
      minWidth: '45px'
    },
  }),
)


interface Props {
  listItems: typePages
}
const APP_NAME = process.env.REACT_APP_NAME
export const NavBar:React.FC<Props> = ({listItems}) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <LayoutFlex>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography
            variant='h1'
            noWrap
            className={classes.title}
            children={APP_NAME}
          />
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='end'
            onClick={handleOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavDrawer
        open={open}
        onClick={handleClose}
        listItems={listItems}
      />
    </LayoutFlex>
  )
}


interface NaviDrawerProps {
  open:      boolean
  onClick:   React.EffectCallback
  listItems: typePages
}
const NavDrawer:React.FC<NaviDrawerProps> = ({open, onClick, listItems}) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='right'
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <LayoutFlex justify={'flex-start'} minHeight={'56px'}>
        <IconButton onClick={onClick}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </LayoutFlex>
      <Divider />
      <List>
        {listItems.map((p, i) => (
          p.divider ? 
          <Divider component='li' />
          :
          <ListItemLink {...p} onClick={onClick} key={i} />
        ))}
      </List>
    </Drawer>
  )
}


interface ListItemProps {
  icon?:    React.ReactNode
  primary?: String
  to?:      string
  onClick:  React.EffectCallback
}
const ListItemLink:React.FC<ListItemProps> = ({icon, primary, to, onClick}) => {
  const classes = useStyles()
  const CustomLink = useMemo(() =>
    forwardRef(linkProps => (
      <Link to={to || '/'} {...linkProps} />
    )
  ),[to])

  return (
    <div onClick={onClick}>
      <ListItem button component={CustomLink}>
        <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </div>
  )
}