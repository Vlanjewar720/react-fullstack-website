import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Footer from "./Footer";


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1), textAlign: 'center', color: theme.palette.text.dark,
  }));

export default function Services() {
  return (
    <>
 <Box sx={{ flexGrow: 1 }}>
 <Grid container spacing={2} pl={10} sx={{ mt: 8 }}>
 <Grid item xs={12} >  
 <Item>
 <Typography variant="h3" sx={{ mb: 2 }}>
    SERVICES
 </Typography>
 </Item>

 </Grid>
 <Grid item xs={12} sx={{ mb: 3 }}>
 <Item>
 <Typography>
 This program will advance your career as a MEAN stack developer. You’ll learn top skills such as MongoDB, Express.js, Angular, and Node.js (“MEAN”), plus GIT, HTML, CSS, and JavaScript to build and deploy interactive applications and services throughout this Full Stack MEAN Developer program.    
 </Typography> 
 </Item>
 </Grid>

  <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 160 }} image="./MERN-Stack.jpg" title="software" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        MERN STACK
        </Typography>
        <Typography variant="body2" color="text.secondary">
            “MERN stack” is the colloquial name given to the full stack JavaScript framework made up of MongoDB, Express. js, React, and Node. js
            earn Front-End Programming Languages. ...
            Learn Using Front End Tools. ...
            Understand the Basics of Website Design. ...
            Learn React. ...
            Learn Back End Components of MERN Stack.
        </Typography>   
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={3}>
  <Card sx={{ maxWidth: 345 }}>
     <CardMedia sx={{ height: 160 }} image="./Mean-stack.jpg" title="software" />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       MEAN STACK
       </Typography>
       <Typography variant="body2" color="text.secondary">
          MEAN is a free and open-source JavaScript software stack for building dynamic web sites and web applications.
          MEAN is named after MongoDB, Express, Angular, and Node, the four key technologies that make up the layers of the stack. MongoDB — document database. Express.js — Node.js.
       </Typography>   
     </CardContent>
     <CardActions>
       <Button size="small">Share</Button>
       <Button size="small">Learn More</Button>
     </CardActions>
   </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={3}>
  <Card sx={{ maxWidth: 345 }}>
     <CardMedia sx={{ height: 160 }} image="./ui-ux-tools.png" title="software" />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       UI-UX DESIGN
       </Typography>
       <Typography variant="body2" color="text.secondary">
       A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical products.
       UX design is different from both UI and graphic design in that it focuses on the logic and structure of the elements you actually see and interact with. UX designers typically deliver wireframes.
       </Typography>   
     </CardContent>
     <CardActions>
       <Button size="small">Share</Button>
       <Button size="small">Learn More</Button>
     </CardActions>
   </Card>

  </Grid>
  
  <Grid item xs={12} sm={6} md={3}>
  <Card sx={{ maxWidth: 345 }}>
     <CardMedia sx={{ height: 160 }} image="./marketing-digital.jpg" title="software" />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       DIGITAL MARKETING
       </Typography>
       <Typography variant="body2" color="text.secondary">
       Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.
       </Typography>   
     </CardContent>
     <CardActions>
       <Button size="small">Share</Button>
       <Button size="small">Learn More</Button>
     </CardActions>
   </Card>
  </Grid>
  <Grid xs={12}>
          <Item>
            <Footer />
          </Item>
        </Grid>
</Grid>
</Box>
   
   

   </>
  );
}