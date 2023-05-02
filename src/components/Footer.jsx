import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';

import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
 
export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#cfe8fc', height: '30vh'  }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 4}} >
        <Grid item xs={12} fontSize={25}>
          FULL STACK DEVELOPMENT
        </Grid>
        <Grid item xs={8}>
          Full stack developer is a blog where you will find great tutorials on web
            design and development. Here each tutorial is beautifully described step by step
            with the required source code.
        
        </Grid>
        <Grid item xs={12} direction="row" display={'flex'} justifyContent={'Center'} spacing={5} p={3}>
        
           <Avatar>  <FacebookRoundedIcon fontSize="large" />    </Avatar>
           <Avatar>  <TwitterIcon fontSize="large"/>    </Avatar>
           <Avatar>  <GoogleIcon fontSize="large"/>    </Avatar>
           <Avatar>  <YouTubeIcon fontSize="large"/>    </Avatar>
           <Avatar>  <LinkedInIcon fontSize="large"/>    </Avatar>
        
        </Grid>

        <Grid item justifyContent="center" alignItems="center" spacing={2} sx={{ pt: 2}}>
        
        
                <Divider>
                    <Chip label=" Copyright @2023 By Vaibhav Lanjewar" />
                </Divider>
    
        </Grid>
        
      </Grid>
    </Box>
  );
}




/*
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        // <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        //   Word of the Day
        // </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
*/