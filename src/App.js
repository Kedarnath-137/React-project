// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Login from './Login';
// import { getTokenFromUrl } from './spotify';
// import SpotifyWebApi from 'spotify-web-api-js';
// import Player from './Player';
// import { useDataLayerValue } from './DataLayer';

// const spotify = new SpotifyWebApi();

// function App() {

//   const [token, setToken] = useState(null);
//   const [{user}, dispatch] = useDataLayerValue();
//   // it is same of datalayer.user but we written destructing.

//   useEffect(() => {
//     const hash = getTokenFromUrl();
//     window.location.hash='';
//     const _token = hash.access_token;

//     if(_token){
//       setToken(_token)
      
//       spotify.setAccessToken(_token)

//       spotify.getMe().then((user) => {
//         // console.log(user)
//         dispatch({
//           type:'SET_USER',
//           user:user,

//       })
//         });
        
//     }

//     console.log('I HAVE A TOKEN >> ',_token)

//   }, [dispatch]);

//   console.log(user)

//   return (
//     <div className="app">
//       {
//         token?
//        <Player/>
//         :
//           <Login/>
        
//       }
     
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import { type } from '@testing-library/user-event/dist/type';
// import { type } from '@testing-library/user-event/dist/type';

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      dispatch({
        type:'SET_TOKEN',
        token:_token,
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      }).catch(error => {
        console.error('error fetching user', error)
      })

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type:'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXbtoQiI5w5Evj').then(response =>
      dispatch({
        type:'SET_DISCOVER_WEEKLY',
        discover_weekly:response,
      }) )
    }

    // console.log('I HAVE A TOKEN >> ', _token);

  }, []); // Added dispatch as a dependency for useEffect

  // console.log("user:", user);
  // console.log(`token ${token}`)


  return (
    <div className="app">
      {
        token && user?  // Check if both token and user are defined
          <Player spotify={spotify}/>
        :
          <Login />
      }
    </div>
  );
}

export default App;

