import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled } from '@mui/system';
import { MenuItem } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Link from '../Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Hidden from '@mui/material/Hidden';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import logo from '../../public/GeoLink.png';
import Image from 'next/image';
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 1,
}));
const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginLeft: 'auto',
}));
const StyledButtonLogo = styled(Button)(({ theme }) => ({
  padding: 0,
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: 'Raleway',
  textTransform: 'none',
  fontWeight: 700,
  color: 'white',
  fontSize: '1rem',
  opacity: 0.7,
  '&:hover': {
    opacity: 1,
  },
}));
const StyledToolbar = styled('div')(({ theme }) => ({
  // ...theme.mixins.toolbar,
  marginBottom: '3em',
  [theme.breakpoints.down('md')]: {
    marginBottom: '2em',
  },
  [theme.breakpoints.down('xs')]: {
    marginBottom: '1.25em',
  },
}));
const StyledImageLogo = styled(Image)(({ theme }) => ({
  height: '6em',
  marginLeft: '10px',
  width: 'auto',
  textTransform: 'none',
  [theme.breakpoints.down('md')]: {
    height: '6em',
  },
  [theme.breakpoints.down('xs')]: {
    height: '4.5em',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  fontFamily: 'Raleway',
  textTransform: 'none',
  fontWeight: 700,
  color: 'white',
  fontSize: '1rem',
  minWidth: 10,
  marginLeft: '25px',
}));
const MenuStyledPaper = styled(Paper)(({ theme }) => ({
  root: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
    zIndex: 1302,
  },
}));

export default function Header(props) {
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const [previousURL, setPreviousURL] = useState('');

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: 'About Us', link: '/about', activeIndex: 3 },
    { name: 'Contact Us', link: '/contact', activeIndex: 4 },
  ];

  function checkPath() {
    [...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case '/estimate':
          if (props.value !== false) {
            props.setValue(false);
          }

          break;
        default:
          break;
      }
    });
  }

  useEffect(() => {
    if (previousURL !== window.location.pathname) {
      setPreviousURL(window.location.pathname);
    }

    if (window.performance) {
      if (performance.navigation.type == 1) {
        checkPath();
      }
    }
  }, [props.value, props.selectedIndex, routes, props]);

  Router.events.on('routeChangeComplete', (url) => {
    checkPath();
  });

  const tabs = (
    <React.Fragment>
      <StyledTabs
        value={props.value}
        onChange={handleChange}
        indicatorColor='primary'
      >
        {routes.map((route, index) => (
          <StyledTab
            key={`${route}${index}`}
            component={Link}
            href={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            onMouseLeave={() => setOpenMenu(false)}
          />
        ))}
      </StyledTabs>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <StyledAppBar position='fixed'>
          <Toolbar disableGutters>
            <StyledButtonLogo
              component={Link}
              href='/'
              disableRipple
              onClick={() => props.setValue(0)}
              style={{ textDecoration: 'none' }}
            >
              <StyledImageLogo alt='company logo' src={logo} />
            </StyledButtonLogo>
            <Hidden mdDown>{tabs}</Hidden>
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll>
      <StyledToolbar />
    </React.Fragment>
  );
}
