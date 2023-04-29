import React from 'react';
import Head from 'next/head';
import { styled } from '@mui/system';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import Hidden from '@mui/material/Hidden';

import CallToAction from '../../src/ui/CallToAction';
import { useTheme } from '@emotion/react';

const MissionStatementTypography = styled(Typography)(({ theme }) => ({
  fontStyle: 'italic',
  fontWeight: 300,
  fontSize: '1.5rem',
  maxWidth: '50em',
  lineHeight: 1.4,
}));

const RowContainerGrid = styled(Grid)(({ theme }) => ({
  paddingLeft: '5em',
  paddingRight: '5em',
  // [theme.breakpoints.down('sm')]: {
  //   paddingLeft: '1.5em',
  //   paddingRight: '1.5em',
  // },
  // [theme.breakpoints.down('xs')]: {
  //   paddingLeft: '1em',
  //   paddingRight: '1em',
  // },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  height: '20em',
  width: '20em',
  [theme.breakpoints.down('sm')]: {
    height: '20em',
    width: '20em',
    maxHeight: 300,
    maxWidth: 300,
  },
}));

export default function About(props) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  console.log(theme);
  return (
    <Grid container direction='column'>
      <Head>
        <title key='title'>About Us - History | GeoLink</title>
        <meta
          name='description'
          key='description'
          content='We provide the fastest, most modern, affordable, and aesthetic software design and development services in the Midwest.'
        />
        <meta
          property='og:title'
          content='Bringing West Coast Technology to the Midwest | About Us'
          key='og:title'
        />
        <meta property='og:url' key='og:url' content='arc.com/about' />
        <link rel='canonical' key='canonical' href='arc.com/about' />
      </Head>
      <RowContainerGrid item style={{ marginTop: matchesMD ? '1em' : '2em' }}>
        <Typography align={matchesMD ? 'center' : undefined} variant='h1'>
          About Us
        </Typography>
      </RowContainerGrid>
      <RowContainerGrid
        item
        container
        justifyContent='center'
        style={{ marginTop: '3em' }}
      >
        <MissionStatementTypography variant='h4' align='center'>
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. GeoLink will use that principle
          to provide fast, modern, inexpensive, and aesthetic software to the
          Midwest and beyond.
        </MissionStatementTypography>
      </RowContainerGrid>
      <RowContainerGrid
        item
        container
        style={{ marginTop: '10em', marginBottom: '10em' }}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justifyContent='space-between'
      >
        <Grid item>
          <Grid
            item
            container
            direction='column'
            lg
            style={{ maxWidth: '35em' }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant='h4'
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent='center' lg>
            {/* <img
              src='/assets/logo.svg'
              alt='quill pen sitting on top of book'
              style={{ maxHeight: matchesMD ? 200 : '22em' }}
            /> */}
          </Grid>
        </Grid>
      </RowContainerGrid>
      <RowContainerGrid
        item
        container
        direction='column'
        alignItems='center'
        style={{ marginBottom: '15em' }}
      >
        <Grid item>
          <Typography align='center' variant='h4' gutterBottom>
            CEO
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph align='center'>
            Lela Maisuradze, Founder
          </Typography>
          <Typography variant='body1' paragraph align='center'></Typography>
        </Grid>
        <Grid item maxHeight={'10vh'}>
          <StyledAvatar alt='founder' src='/assets/founder.jpg' />
        </Grid>
        <Grid item container justifyContent={'center'}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant='body1' align='center' paragraph></Typography>
              <Typography variant='body1' align='center' paragraph></Typography>
            </Grid>
          </Hidden>
          {/* <Grid
            item
            container
            direction='column'
            lg
            alignItems={matchesMD ? 'center' : undefined}
            style={{ marginBottom: matchesMD ? '2.5em' : 0 }}
          >
            <Grid item>
              {/* <img
                src='/assets/yearbook.svg'
                alt='yearbook page about founder'
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              /> */}
          {/* </Grid> */}
          {/* <Grid item> */}
          {/* <Typography variant='caption'>
                a page from my Sophomore yearbook
              </Typography> */}
          {/* </Grid> */}
          {/* </Grid>  */}
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: '65em', padding: '1.35em' }}>
              <Typography variant='h6' align='center' paragraph>
                Lela Maisuradze is a founder and director of GeoLink, the
                mediation company for international job placements in the
                digital world. She has been working as an Employment Consultant
                and Expert for several International and local organizations
                since 2009. On the background of close cooperation with state
                vocational schools, training centers and business companies, she
                helped jobseekers with professional development and employment.
                Lela Maisuradze is the author of the Employment/Social and
                Economic Inclusion Program Guidelines and Concepts of the
                various international NGOs and companies.
              </Typography>
              <Typography variant='h6' align='center' paragraph>
                Also, as a Professional Development Expert she was working for
                the Ministry of Education Georgia to develop professional
                orientation programs and, support the professional development
                of the Entrepreneurship Teachers in Georgia. In 1998-2009 she
                was the founder and director of Youth Employment International
                Association and had an opportunity to present several German
                Employment Organizations in Georgia.
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </RowContainerGrid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
