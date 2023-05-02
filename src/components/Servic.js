import React from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Services = () => {
  return (
    <div>
        <div className='container-fluid p-1 fs-5 'style={{marginTop: "70px" }}>

{/* // <!-- ======= Services Section ======= --> */}
<section id="services" class="services section-bg ">
  <div class="container" data-aos="fade-up">

    <div class="section-title text-center p-3 my-3">
      <h1 className="text-dark p-2 bg-info mt-1 rounded-pill">SERVICES</h1>
      <p>This program will advance your career as a MEAN stack developer. You’ll learn top skills such as MongoDB, Express.js, Angular, and Node.js (“MEAN”), plus GIT, HTML, CSS, and JavaScript to build and deploy interactive applications and services throughout this Full Stack MEAN Developer program.</p>
    </div>

    <div class="row justify-content-start " style={{backgroundColor:'pink'}}>
      <div class="col-xl-3 col-md-6 col-sm-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
        <div class="icon-box">
          <div class="icon"><i class="bx bxl-dribbble"></i></div>
          <h4 className="text-warning p-2 bg-success mt-1 rounded-pill">MEAN STACK</h4>
          <p>MEAN is a free and open-source JavaScript software stack for building dynamic web sites and web applications.
         </p><p> The MEAN stack is a JavaScript-based framework for developing web applications. MEAN is named after MongoDB, Express, Angular, and Node, the four key technologies that make up the layers of the stack. MongoDB — document database. Express.js — Node.js web framework.
          </p>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 col-sm-12 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
        <div class="icon-box">
          <div class="icon"><i class="bx bx-file"></i></div>
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
        </div>
      </div>

      <div class="col-xl-3 col-md-6 col-sm-12 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
        <div class="icon-box">
          <div class="icon"><i class="bx bx-tachometer"></i></div>
          <h4 className="text-warning p-2 bg-success mt-1 rounded-pill">UI/UX DESIGH</h4>
          <p>A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical products.
            </p><p> UX design is different from both UI and graphic design in that it focuses on the logic and structure of the elements you actually see and interact with. UX designers typically deliver wireframes, prototypes, site maps, flows, and other UX artifacts to the UI team.
          </p>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 col-sm-12 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
        <div class="icon-box">
          <div class="icon"><i class="bx bx-layer"></i></div>
          <h4 className="text-warning p-2 bg-success mt-1 rounded-pill">DIGITAL MARKETING</h4>
          <p>Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.</p>
        </div>
      </div>

    </div>

  </div>
</section>
{/* <!-- End Services Section --> */}
       
      
 </div>
    </div>
  )
}

export default Services
