import React, { Component } from 'react'
import {
    Chat, Channel, ChannelListMessenger,
    MessageInput, ChannelList, MessageList,
    Window, Thread
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import ChannelHeader from '../ChannelHeader/ChannelHeader'


const ChatMessageArea = () => {
  return (
      <Channel >
          <Window>
              <ChannelHeader
              title={"Shon's channel"}
              online={23}
              live={true}

              />
              <MessageList/>
              <MessageInput />
              <Thread />
          </Window>
      </Channel>
  )
}

export default ChatMessageArea
