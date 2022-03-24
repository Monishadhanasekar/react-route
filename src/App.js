import React from 'react';
import './style.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function RouterComponent() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PROPEL INDUSTRIES
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br></br>
      <BrowserRouter>
        <button>
          {' '}
          <Link to="/"> Dashboard </Link>
        </button>{' '}
        &nbsp;&nbsp; &nbsp;
        <button>
          <Link to="/AdminLogin"> Admin Login </Link> &nbsp;
        </button>{' '}
        &nbsp;&nbsp; &nbsp;
        <button>
          <Link to="/aboutus"> About Us </Link> &nbsp;
        </button>{' '}
        &nbsp;&nbsp; &nbsp;
        <button>
          <Link to="/contactus"> Contact Us </Link> &nbsp;
        </button>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/AdminLogin" element={<AdminLogin />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2> LEADERSHIP </h2>
      <p style={{ color: 'crimson' }}>
        Mr. V. Senthilkumar<br></br>Managing Director Of Propel Industries
      </p>
      <p>
        V. Senthilkumar has more than 30 years experience in the engineering
        industry. He is a visionary with a passion for design. He strives to
        consistently improve work management systems, quality and safety
        standards, and places great emphasis on team building. He spearheads
        many unique initiatives which are creating a benchmark in the industry.
      </p>
    </div>
  );
}

function AdminLogin() {
  return (
    <div>
      <br></br>
      <h2 style={{ color: 'red' }}>Fill the details</h2>
      <TextField
        helperText="Please enter your email"
        id="demo-helper-text-aligned"
        label="Email"
      />
      <br></br>
      <br></br>
      <TextField
        helperText="Please enter the password"
        id="demo-helper-text-aligned"
        label="Password"
      />{' '}
      <br></br>
      <Button variant="text">Submit</Button>
    </div>
  );
}

function AboutUs() {
  return (
    <>
      <h3 style={{ color: 'red' }}> AboutUs </h3>
      <p>
        Crushing and screening processes are integral to the mining and
        construction industries. In both the sectors, the need for fast and
        efficient crushing and screening operations is vital and it makes a sea
        difference in terms of quality and productivity. This is the prime
        reason, customers nationwide bank on PROPEL INDUSTRIES for innovative,
        technologically-sound and cost-effective solutions.Propel Industries
        provides innovative, technologically-sound and cost-effective solutions
        to the crushing and screening industry.
      </p>
    </>
  );
}

function ContactUs() {
  return (
    <>
      <h3 style={{ color: 'red' }}> ContactUs </h3>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Location :</b> <br></br>
            SF.No: 38/1-B, Kangayampalayam, Trichy Road, Sulur. Coimbatore– 641
            401. Tamil Nadu. India
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <b>Email :</b> <br></br>marketing@propelind.com<br></br>
            <b>Phone : </b> <br></br> +91 99940 60001 | +91 99940 60002
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
