import React, { useState, useEffect } from 'react'
import '../styles/Chat.css'
import { useParams } from 'react-router-dom'
import database from '../firebase.config'
import Message from './subcomponents/Message'
import ChatInput from './subcomponents/ChatInput'

import { StarBorderOutlined, InfoOutlined } from '@material-ui/icons'

const Chat = () => {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessage, setRoomMessage] = useState([])

    useEffect(() => {
        if (roomId) {
            database
                .collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) => {
                    setRoomDetails(snapshot.data())
                })
        }

        database
            .collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                setRoomMessage(snapshot.docs.map((doc) => doc.data()))
            })
    }, [roomId])

    console.log(roomMessage)

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {roomMessage.map(({ user, message, timestamp, userImage }) => (
                    <Message
                        message={message}
                        user={user}
                        timestamp={timestamp}
                        userImage={userImage}
                    />
                ))}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat
