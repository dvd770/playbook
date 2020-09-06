// @ts-nocheck
import React, { useContext } from 'react';
// @ts-ignore

import './style.css'
import { ChatDown,   ChannelList, LoadingChannels, ChatContext, Avatar } from 'stream-chat-react';


const SidebarHeader = () => {

  const { client } = useContext(ChatContext);


    return (
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

      );
}





export default SidebarHeader;
