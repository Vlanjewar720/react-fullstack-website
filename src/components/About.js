// import React from 'react'
import Logo from './abse.png'
// import { Grid } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Footer from "./Footer";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.dark,
}));

const About = () => {
  return (
    <Box sx={{ flexGrow: 1 }}> 
    <Grid container pl={6} spacing={2}>
    <div className='container-fluid p-4 fs-5' style={{marginTop: "70px" }}>
          <section id="about" className="about">
      <div className="container " data-aos="fade-up">

        <div className="section-title text-center mb-3 fw-bold ">
          <h1 className="text-dark p-2 bg-info mt-1 rounded-pill">ABOUT US</h1>
        </div>

        <div className="row content">
          <div className="col-md-6 col-sm-12">
            <p>
            A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. 
            </p>
            <ul className="fs-6">
              <li><i className=""></i> Program a browser like using JavaScript, jQuery, Angular, or React js</li>
          
              <li><i className=""></i> Program a database like using SQL, SQLite, or MongoDB</li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12 pt-4 pt-lg-0">
            <p>
            The front end the parts of a website a user sees and interacts with and the back end (the behind-the-scenes data storage and processing) require different skill sets.
             </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>

      </div>
    </section>
    {/* //!-- End About Us Section -- */}
    {/* //!-- ======= Skills Section ======= -- */}
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex align-items-center pt-3" data-aos="fade-right" data-aos-delay="100">
           
            <img src={Logo} className="img-fluid" alt="gjkj" />
          </div>
          <div className="col-md-6 col-sm-12 pt-4 pt-lg-0 content fs-6 " data-aos="fade-left" data-aos-delay="100">
            <h3>The Popular Stacks</h3>
            <ul>  
              <li><i className="ri-check-double-line"></i> MEAN stack: JavaScript - MongoDB - Express - AngularJS - Node.js</li>
              <li><i className="ri-check-double-line"></i> MERN stack: JavaScript - MongoDB - Express - ReactJS - Node.js</li>
             
            </ul>

          </div>
        </div>

      </div>
    </section>
    {/* //!-- End Skills Section -- */}
    <Grid xs={12}>
         <Item>
           <Footer/> 
         </Item>
    </Grid>

 </div>
       </Grid>
    </Box>
  );
}

export default About
