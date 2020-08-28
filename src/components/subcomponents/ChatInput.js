import React, { useState } from 'react'
import '../../styles/ChatInput.css'
import { useStateValue } from '../../context/StateProvider'
import database from '../../firebase.config'
import firebase from 'firebase'

const ChatInput = ({ channelName, channelId }) => {
    const [input, setInput] = useState('')
    const [{ user }] = useStateValue()

    const sendMessage = (e) => {
        e.preventDefault()
        if (input) {
            if (channelId) {
                database
                    .collection('rooms')
                    .doc(channelId)
                    .collection('messages')
                    .add({
                        message: input,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        user: user.displayName,
                        userImage: user.photoURL,
                    })
            }
        }
        setInput('')
    }

    return (
        <div className="chatInput">
            <form>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message to #${channelName}`}
                />
                <button type="submit" onClick={sendMessage}>
                    Send
                </button>
            </form>
        </div>
    )
}

export default ChatInput
