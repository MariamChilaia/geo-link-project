import React from 'react';
import Head from 'next/head';
// import Lottie from 'react-lottie';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Link from '../../src/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonArrow from '../../src/ui/ButtonArrow';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ServiceContainerGrid } from './services';
import CallToAction from '../../src/ui/CallToAction';

import animationData from '../../src/animations/landinganimation/data';

import {
  LazyLoadImage,
  LazyLoadComponent,
} from 'react-lazy-load-image-component';
const StyledLazyLoadImage = styled(LazyLoadImage)(({ theme }) => ({
  marginLeft: '2em',
  [theme.breakpoints.down('xs')]: {
    marginLeft: 0,
  },
}));
const useStyles = styled((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {},
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 5,
    },
  },
  revolutionBackground: {
    backgroundImage: `url("/assets/repeatingBackground.svg")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    position: 'absolute',
    zIndex: -1,
    backgroundImage: `url("/assets/infoBackground.svg")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Head>
        <title key='title'>
          Custom Software, Mobile Apps, and Websites | GeoLink
        </title>
        <meta
          name='description'
          key='description'
          content='Pristine software custom-designed from the ground up with cutting-edge optimizations. '
        />
        <meta
          property='og:title'
          content='Bringing South Causasian Technology to the Western Tech World | GeoLink'
          key='og:title'
        />
        <meta property='og:url' key='og:url' content='arc.com' />
        <link rel='canonical' key='canonical' href='arc.com' />
      </Head>
      <Grid item>
        {' '}
        {/*-----Hero Block-----*/}
        <Grid
          container
          justifyContent='flex-end'
          alignItems='center'
          direction='row'
        >
          <Grid sm item>
            <Typography variant='h1' align='center' mt={10}>
              Bringing South Causasian Technology
              <br />
              to the Western Tech World
            </Typography>
            <Grid container justifyContent='center'>
              <Grid item>
                <Button
                  component={Link}
                  href='/contact'
                  className={classes.learnButtonHero}
                  variant='outlined'
                  onClick={() => props.setValue(2)}
                >
                  Learn More
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Custom Software Block-----*/}
        <ServiceContainerGrid
          container
          direction='row'
          justifyContent={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Quality Assurance</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Check out the application with either a manual or an automated
              tester
            </Typography>
          </Grid>
          <Grid item>
            <StyledLazyLoadImage
              alt='custom software icon'
              src='/assets/customSoftware.svg'
            />
          </Grid>
        </ServiceContainerGrid>
      </Grid>
      <Grid item>
        {' '}
        {/*-----iOS/Android Block-----*/}
        <ServiceContainerGrid
          container
          direction='row'
          justifyContent={matchesSM ? 'center' : 'flex-end'}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <StyledLazyLoadImage
              alt='mobile phone icon'
              src='/assets/mobileIcon.svg'
            />
          </Grid>
        </ServiceContainerGrid>
      </Grid>
      <Grid item>
        {' '}
        {/*-----Websites Block-----*/}
        <ServiceContainerGrid
          container
          direction='row'
          justifyContent={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines,{matchesXS && <br />}built for speed.
            </Typography>
          </Grid>
          <Grid item marginBottom={12}>
            <StyledLazyLoadImage
              alt='website icon'
              src='/assets/websiteIcon.svg'
            />
          </Grid>
        </ServiceContainerGrid>
      </Grid>
    </Grid>
  );
}
