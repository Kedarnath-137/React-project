import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import {Grid, Slider } from '@mui/material';

function Footer() {
  return (
    <div className="footer">
      {/* <h1>I'm the footer</h1> */}
      <div className="footer__left">
        {/* <p>Ablum and song details</p> */}
        <img  className = 'footer__albumLogo' 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_jq6xHfhjd-F9jPNZvxtCJW0GHxkrCdwfg&s' alt=''/>
        <div className='footer_songinfo'>
          <h4>yeah </h4>
          <p>user</p>
        </div>

      </div>
      <div className="footer__center">
        {/* <h1>Player controls </h1> */}
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        {/* <p>Volume controls</p> */}

      <Grid container spacing={2}>
      <Grid item >
       <PlaylistPlayIcon/>
      </Grid>
      <Grid item>
       <VolumeDownIcon/>
       </Grid>
     <Grid item xs>
          <Slider/>
      </Grid>
 
</Grid>
      </div>
    </div>
  );
}

export default Footer;
