import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '../../src/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/system';

const RowContainerGrid = styled(Grid)(({ theme }) => ({
  paddingLeft: '5em',
  paddingRight: '5em',
}));

export default function Contact(props) {
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container direction='column'>
      <RowContainerGrid item style={{ marginTop: matchesMD ? '1em' : '80px' }}>
        <Typography align={matchesMD ? 'center' : undefined} variant='h1'>
          Contact Us
        </Typography>
        <Grid item xs={8}>
          <Typography mt={1} fontSize={'23px'}>
            We appreciate your decision to join the GeoLink team, that links you
            to the very positive and productive future! Just send us this very
            short{' '}
            <Link
              target='_blank'
              underline='true'
              fontWeight='bold'
              href='https://forms.gle/RaxzxAFsyEKxeBkK8'
            >
              Google Form
            </Link>
          </Typography>
          <Typography mt={3} fontSize={'23px'}>
            email: jobs.geolink@gmail.com
          </Typography>
          <Typography mt={1} fontSize={'23px'}>
            tel: +995599901082
          </Typography>
        </Grid>
      </RowContainerGrid>
    </Grid>
  );
}
