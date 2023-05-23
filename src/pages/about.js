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

export const RowContainerGrid = styled(Grid)(({ theme }) => ({
  paddingLeft: '5em',
  paddingRight: '5em',
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
          content='Bringing South Causasian Technology to the Western Tech World | About Us'
          key='og:title'
        />
        <meta property='og:url' key='og:url' content='arc.com/about' />
        <link rel='canonical' key='canonical' href='arc.com/about' />
      </Head>
      <RowContainerGrid item style={{ marginTop: matchesMD ? '1em' : '80px' }}>
        <Typography align={matchesMD ? 'left' : undefined} variant='h1'>
          About Us
        </Typography>
      </RowContainerGrid>
      <RowContainerGrid
        item
        container
        justifyContent='left'
        style={{ marginTop: '3em' }}
      >
        <MissionStatementTypography variant='h4' align='left'>
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. GeoLink will use that principle
          to provide best staff for the fast, modern, inexpensive, and aesthetic
          software services.
        </MissionStatementTypography>
      </RowContainerGrid>
      <RowContainerGrid
        item
        container
        style={{ marginTop: '3em', marginBottom: '3em' }}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justifyContent='space-between'
      >
        <Grid item maxHeight={'5vh'}></Grid>
      </RowContainerGrid>
      <RowContainerGrid
        item
        container
        direction='column'
        alignItems='left'
        style={{ marginBottom: '5em' }}
      >
        <Grid item>
          <Typography align='left' variant='h4' gutterBottom>
            CEO
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph align='left'>
            Lela Maisuradze, Founder
          </Typography>
          <Typography variant='body1' paragraph align='left'></Typography>
        </Grid>
        <Grid item container justifyContent={'left'}>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: '85em' }}>
              <Typography variant='h6' align='left' paragraph>
                Lela Maisuradze is a founder and director of GeoLink, the
                mediation company for international job placements in the
                digital world. She has been working as an Employment Consultant
                and Expert for several International and local organizations
                since 2009. On the background of close cooperation with state
                vocational schools, training centres and business companies, she
                helped jobseekers with professional development and employment.
                Lela Maisuradze is the author of the Employment/Social and
                Economic Inclusion Program Guidelines and Concepts of the
                various international NGOs and companies. Also, as a
                Professional Development Expert she was working for the Ministry
                of Education Georgia to develop professional orientation
                programs and support the professional development of the
                Entrepreneurship Teachers in Georgia. In 1998-2009 she was the
                founder and director of Youth Employment International
                Association and had an opportunity to present several German
                Employment organizations in Georgia
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </RowContainerGrid>
      <RowContainerGrid
        item
        container
        direction='column'
        alignItems='left'
        style={{ marginBottom: '3em' }}
      >
        <Grid item>
          <Typography align='left' variant='h4' gutterBottom>
            History
          </Typography>
        </Grid>

        <Grid item container justifyContent={'left'}>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: '85em' }}>
              <Typography variant='h6' align='left' paragraph>
                GeoLink is the child company of GIJ (Gesellschaft fur
                International Jugendarbeit), the employment organization with 25
                years of history, related to the cooperation with German
                organizations. The whole GeoLink team consists of professionals,
                who have long and successful experience in the fields of
                employment, personal development, HR, and TECH. GeoLink has high
                standards of organizational culture, and all staff attended a
                soft skills training. It ensures positive and successful
                cooperation with western partners and colleagues. We believe
                that emotional intelligence also matters!
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
