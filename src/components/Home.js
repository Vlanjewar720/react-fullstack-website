import * as React from "react";
import Imgbar from "./Imgbar";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
// import Container from '@mui/material/Container';

import { styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Footer from "./Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.dark,
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        pl={7}
        sx={{ mt: 8 }}
      >
        <Grid item xs={12}>
          <Card sx={12}>
            <CardMedia
              sx={{
                Width: { xs: 200, sm: 350, md: 600 },
                height: { xs: 100, sm: 400, md: 700 },
              }}
              image="./full-stacks.png"
              imgfluid
              title="software"
            />
          </Card>
        </Grid>
        {/* abouts us  */}
        <Grid xs={12} spacing={2} sx={{ pt: 8 }}>
          <Item>
            <Typography pb={4} gutterBottom variant="h5" component="div">
              ABOUT US
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={10} md={6} spacing={2}>
          <CardMedia
            sx={{ Width: { xs: 200, sm: 350 }, height: { xs: 200, sm: 500 } }}
            image="./full-stack.svg"
            title="software"
          />
        </Grid>
        <Grid xs={12} md={6} justifyContent="center" alignItems="center" pl={5}>
          <Item>
            <p>
              {" "}
              A full-stack developer is one of the high-demand jobs in the
              industry. Companies pay them handsomely since they contribute the
              most to software projects. Thus, whether you are a fresher or an
              experienced developer, you will always be in demand in the
              software industry, with great opportunities waiting for you.
            </p>{" "}
            Full Stack Developers must be extremely versatile, with in-depth
            knowledge of HTML, CSS, and JavaScript. Also, should be familiar
            with server-side languages such as Python, Ruby, or Node.js.
            <p>
              A full stack web developer is a person who can develop both client
              and server software.
            </p>
            <p>
              {" "}
              In addition to mastering HTML and CSS, he/she also knows how to:
              Program a browser like using JavaScript, jQuery, Angular, or Vue.
              Program a server like using PHP, ASP, Python, or Node. Program a
              database like using SQL, SQLite, or MongoDB.
            </p>
          </Item>
          <Button size="small">Read More</Button>
        </Grid>
        {/* photos gallarys */}
        <Grid
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ mt: 4 }}
        >
          <Item>
            <Typography pb={2} gutterBottom variant="h5" component="div">
              PHOTOS GALLARY
            </Typography>
          </Item>
        </Grid>

        <Grid xs={10}>
          <Imgbar />
        </Grid>

        <Grid xs={12}>
          <Item>
            <Footer />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
