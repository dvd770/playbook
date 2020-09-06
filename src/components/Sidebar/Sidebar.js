// @ts-check

import React, { useContext, Component, useState } from 'react';
import PropTypes from 'prop-types';

// Stopped using it
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'bootstrap/dist/css/bootstrap.min.css';

import  {Nav, NavDropdown} from 'react-bootstrap';


// import chevrondown from './assets/str-chat__icon-chevron-down.svg';
import { ChatDown,   ChannelList, LoadingChannels, ChatContext, Avatar } from 'stream-chat-react';
import './style.css'

import Community from '../Community/Community';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarProfile from '../SidebarProfile/SidebarProfile';

// import { findByLabelText } from '@testing-library/react';

// import Community from '../Community/Community'
// import ChatIcons from '../../CustomChannelList/IconsForChannelList'
// import CostomChannelList from '../../CustomChannelList/CostomChannelList';

/**
 * ChannelList - A preview list of channels, allowing you to select the channel you want to open
 * @example ../../docs/ChannelList.md
 * @type React.FC<import('../../GetStream/types').ChannelListUIComponentProps>
 */
const Sidebar = ({
  error = false,
  loading,
  sidebarImage,
  showSidebar,
  LoadingErrorIndicator = ChatDown,
  LoadingIndicator = LoadingChannels,
  children,
}) => {
  const { client } = useContext(ChatContext);

  const filter = {
    'AVAILABILITY': ['Online Now', 'Near Me'],

    'UP FOR': ['jams', 'collaborations', 'Service'],

    'FILTER BY LANGUAGE': ['English', 'portuguese', 'Spanish',
        'German', 'Dutch', 'Hebrew'],

    'FILTER BY GENERE': ['Dubstep', 'EDM', 'Hip-Hop', 'R&B', 'Hip-Hop', 'R&B',
        'Dubstep', 'IDM'],

    'FILTER BY DAW': ['Ableton', 'Cubase', 'Acid', 'Pro Tools', 'Bitwig'],

    'FILTER BY SERVICE': ['Mixing', 'Mastering', 'Voiceovers',
        'Podcast Editing', 'Pitch Correction'
        , 'Voiceovers', 'Online Music Lessions']
}

  // export default class Sidebar extends Component{
  //   constructor(props){
  //     super(props);


  //     this.state = {

  //     }
  //   }

    // dropmenu = () => {
    //   // eslint-disable-next-line no-unused-expressions
    //   <NavDropdown title="" id="nav-dropdown">
    //         <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
    //         <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
    //   </NavDropdown>
    // }

    // componentDidMount(){
    //   console.log("PROP OF CHANNEL ITEMS", this.props)

    //   const { client } = useContext(ChatContext);

    // }

// render () {
  // Once class
  //   handleSelect(key){
  //   console.log('works')

  //   if (key === 1)
  //       this.setState({ heading: "Log in" })
  //   else
  //       this.setState({ heading: "Sign up" })
  // }




  // if (error) {
  //   return <LoadingErrorIndicator type="Connection Error" />;
  // }
  // if (loading) {
  //   return <LoadingIndicator />;
  // }
  const [selectedTab, setSelectedTab] = useState('yourSession')

  return (
    <div className="str-chat__channel-list-team">
      <div className="str-chat__channel-list-team__main">
          <SidebarHeader />

          <SidebarProfile />

{/*React Bootstrap*/}
    <div className="all-tabs">

          <button className="tabi icon-YourSessionsIcon" onClick={()=>setSelectedTab('yourSession')}>
          Your Session
          </button>

      <button className="tabi"  onClick={()=>setSelectedTab('community')}>Community</button>
      <button className="tabi" onClick={()=>setSelectedTab('newSession')}>New Session</button>
      </div>


      </div>
<div></div>

    { selectedTab === 'community' ?
    <Community />
    : selectedTab === 'yourSession' ? <div style={{color: 'white'}}>Your session</div>: <div style={{color: 'white'}}>New session</div>

    }

    </div>
  );
// }
  }



export default Sidebar;



