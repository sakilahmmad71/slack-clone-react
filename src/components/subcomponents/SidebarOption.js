import React from 'react'
import '../../styles/SidebarOption.css'
import { useHistory } from 'react-router-dom'
import database from '../../firebase.config'

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
    const history = useHistory()

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push(title)
        }
    }

    const addChannel = () => {
        const channelName = prompt('Please Enter a channel name.')

        if (channelName) {
            database.collection('rooms').add({
                name: channelName,
            })
        }
    }

    return (
        <div
            className="sidebarOption"
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (
                <h3 className="sidebarOption__channel">{title}</h3>
            ) : (
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#</span> {title}
                </h3>
            )}
        </div>
    )
}

export default SidebarOption
