
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Footer from "./Footer";

// import CardMedia from '@mui/material/CardMedia';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Contact() {
  return (
    <Box sx={{ flexGrow: 1 }}> 
       <Grid container pl={6} spacing={2}>
         <div className='container-fluid p-4 fs-5'style={{marginTop: "70px" }}>
         
           <div className="container col-sm-12 my-3 p-3 ftco-animate text-center">
             <h1 className="text-dark p-2 bg-info rounded-pill">Contact Us</h1>
    
   </div>
		<section className="ftco-section contact-section text-center">
			<div className="container text-center">
				<div className="row d-flex align-items-stretch no-gutters">
         <div className="col-md-6 col-sm-12 p-3 p-md-4 rounded" style={{backgroundColor:'teal'}}>
						<form action="#">
              <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder="Your Name"/>
              </div>
              <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder="Your Email"/>
              </div>
              <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder="Subject"/>
              </div>
              <div className="form-group mb-3">
                <textarea name="" id="" cols="30" rows="4" className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="form-group mb-4">
                <input type="submit" value="Send Message" className="btn btn-danger py-2 px-5"/>
              </div>
            </form>
					</div>
            <div className="col-md-6 col-sm-12 rounded">
              <div id="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14888.510714786651!2d79.05320545!3d21.1074753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1681821893572!5m2!1sen!2sin" width="300" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            </div>
          </div>
			</div>
		</section>
   </div>
   </Grid>
   <Grid xs={12}>
          <Item>
            <Footer />
          </Item>
        </Grid>
   </Box>
  )
}


