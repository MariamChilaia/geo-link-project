import React from 'react';
import Head from 'next/head';
import Link from '../../src/Link';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

import ButtonArrow from '../../src/ui/ButtonArrow';
export const ServiceContainerGrid = styled(Grid)(({ theme }) => ({
  marginTop: '7em',
  [theme.breakpoints.down('sm')]: {
    padding: 25,
  },
  [theme.breakpoints.down('xs')]: {
    padding: 5,
  },
}));
const useStyles = styled(({ theme }) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {},
  learnButton: {},
}));
const LearnButton = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: '0.7rem',
  height: 35,
  padding: 5,
  [theme.breakpoints.down('sm')]: {
    marginBottom: '2em',
  },
}));

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction='column'>
      <Head>
        <title key='title'>
          Top Custom Software Development Services | GeoLink
        </title>
        <meta
          name='description'
          key='description'
          content='Cutting-edge software, mobile app, and website development services with sleek custom designs - get a free online estimate instantly!'
        />
        <meta
          property='og:title'
          content='Bringing South Causasian Technology to the Western Tech World | Services'
          key='og:title'
        />
        <meta property='og:url' key='og:url' content='arc.com/services' />
        <link rel='canonical' key='canonical' href='arc.com/services' />
      </Head>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '1em' : '80px',
        }}
      >
        <Typography
          align={matchesSM ? 'center' : undefined}
          variant='h1'
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {' '}
        {/*-----iOS/Android Block-----*/}
        <ServiceContainerGrid
          container
          direction='row'
          justifyContent={matchesSM ? 'center' : 'flex-end'}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
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
            <img
              className={classes.icon}
              alt='mobile phone icon'
              src='/assets/mobileIcon.svg'
              width='250em'
            />
          </Grid>
        </ServiceContainerGrid>
      </Grid>
      <Grid item>
        {' '}
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
            <img
              className={classes.icon}
              alt='custom software icon'
              src='/assets/customSoftware.svg'
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
          justifyContent={matchesSM ? 'center' : 'flex-end'}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              alt='website icon'
              src='/assets/websiteIcon.svg'
              width='250em'
            />
          </Grid>
        </ServiceContainerGrid>
      </Grid>
    </Grid>
  );
}
