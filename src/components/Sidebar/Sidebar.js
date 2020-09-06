// @ts-check

import React, { useContext, Component } from 'react';
import PropTypes from 'prop-types';

// Stopped using it
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'bootstrap/dist/css/bootstrap.min.css';

import  {Nav, NavDropdown} from 'react-bootstrap';


// import chevrondown from './assets/str-chat__icon-chevron-down.svg';
import { ChatDown,   ChannelList, LoadingChannels, ChatContext, Avatar } from 'stream-chat-react';
import './style.css'
// import { findByLabelText } from '@testing-library/react';

import Community from '../Community/Community'
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

  // export default class Sidebard extends Component{
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



  return (

    <div className="str-chat__channel-list-team">

      <div className="str-chat__channel-list-team__main">



      <div className="header-buttons">

      <span className="icon-Hamburger-Menu" onClick={()=>console.log('Hamburger-Menu')}></span>

      <span className="icon-Logo"></span>
    <input  className="sidebar-Search-Field" type="text" placeholder="   Search" />
      </div>


      <div className='user-profile-header'>

            <Avatar
              image={client.user.image}
              name={client.user.name || client.user.id}
              size={40}
              shape={"square"}
            />
            <div >
                <div className="user-profile-header-name">
                {client.user.name || client.user.id}
                </div>


                <div className="user-plan-title">
                    <span>Plan:</span>
                </div>
                <div className="user-plan-type">
                  <span>Premium</span>
                </div>
            </div>



            <span className="icon-Arrow" onClick={()=> console.log("arrrrow")}>
            </span>
            <div className="content">
            <span>sfgsdhdthth</span>
            </div>

            <span className="icon-Group-334" ></span>
      </div>



{/*React Bootstrap*/}
    <div className="all-tabs">

          <button className="tabi icon-YourSessionsIcon" >
          Your Session
          </button>

      <button className="tabi" onClick={() => <Community/>}>Community</button>
      <button className="tabi">New Session</button>
      </div>






      <Nav justify variant="tabs" defaultActiveKey="yourSession" onSelect={() =>console.log('Call your eventkey here')}>
        <Nav.Item >
          <Nav.Link eventKey="yourSession">
            <span className="icon-YourSessionsIcon"></span>
            <div>
              <span className="text-below-icon-tab">Your Session</span>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">

          <span className="icon-office-worker-1-1"></span>
          <div>
              <span className="text-below-icon-tab">Community</span>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
          <span className="icon-NewSessionIcon"></span>
          <div>
              <span className="text-below-icon-tab">New Session</span>
            </div>
          </Nav.Link>
        </Nav.Item>
  </Nav>

      </div>


<div>
</div>



    </div>
  );
// }
  }



export default Sidebar;



