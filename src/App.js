import React, { useState, useEffect } from 'react';
import {
  Chat,
  // Channel,
  // ChannelListMessenger,
  // MessageInput,
  ChannelList,
  // MessageList,
  // Window,
  // Thread
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import { StreamChat } from 'stream-chat';
// import ChatIcons from './CustomChannelList/IconsForChannelList';
import ChatMessageArea from './components/ChatMessageArea/ChatMessageArea';
import ChannelListTeam from './components/ChannelListTeam/ChannelListTeam';

import Community from './components/Community/Community';

import CustomChannelList from './components/CustomChannelList/CustomChannelList';
import Sidebar from './components/Sidebar/Sidebar';




const chatClient = new StreamChat('gx5a64bj4ptz');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic29mdC13aW5kLTkifQ.XeJKpCkb_zEMI8VGFObjTTwGEltL-ay0tmLgmWPw5cg';

chatClient.setUser(
  {
       id: 'soft-wind-9',
       name: 'Soft wind',
       image: 'https://getstream.io/random_png/?id=soft-wind-9&name=Soft+wind'
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'godevs', {
  // add as many custom fields as you'd like
  image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  name: 'Talk about Go',
});


const App = (props) => {

  // const [selectedTab] = useState(props)

  // useEffect(()=>{
  //   selectedTab(props);
  // }, [props, selectedTab])

  const filters = { type: 'messaging', members: { $in: ['wispy-wildflower-1'] } };

  console.log('chat clients', chatClient)

  // console.log("App props", selectedTab)

  return (
    // this.state.isUserLoggedIn === 'user logged' ? {
      // chat window
    // }
    // : else
    // {
          // user not logged in <LogIn />
    // }

    <Chat client={chatClient} theme={'messaging dark'}>
    {// <Sidebar/>
    }


      <ChannelList
          filters={filters}
          List={Sidebar}
          // List={Community}
          // Preview={CustomChannelList}

      />

      <ChatMessageArea />

      {/*
        selectedTab === 'yourSession' ?
      <ChatMessageArea /> : selectedTab === 'community' ? <div style={{color: 'red',   'font-size': 20 }}>Community</div>:  selectedTab === 'newSession' ? <div style={{color: 'red',   'font-size': 20 }}>New Session</div> : null
      */}
    </Chat>
  )
}

export default App;






