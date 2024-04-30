import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
// import HomeIcon from '@material-ui/icons/Home';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="img1"
      ></img>
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br></br>
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr></hr>

      {playlists?.item?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
      <SidebarOption title= 'Hip hop'></SidebarOption>
        <SidebarOption title = 'Rock'/>
        <SidebarOption title = 'Kedar'/>
    </div>
  );
}

export default Sidebar;
