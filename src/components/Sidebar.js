import React, { useState, useEffect } from 'react'

import database from '../firebase.config'
import { useStateValue } from '../context/StateProvider'
import SidebarOption from './subcomponents/SidebarOption'
import '../styles/Sidebar.css'

import {
    Edit,
    FiberManualRecord,
    InsertComment,
    Inbox,
    Drafts,
    BookmarkBorder,
    PeopleAlt,
    Apps,
    FileCopy,
    ExpandLess,
    ExpandMore,
    Add,
} from '@material-ui/icons'

const Sidebar = () => {
    const [channels, setChannels] = useState([])
    const [{ user }] = useStateValue()

    useEffect(() => {
        database.collection('rooms').onSnapshot((snapshot) =>
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        )
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h1>React Programmer</h1>
                    <h3>
                        <FiberManualRecord />
                        {user?.displayName}
                    </h3>
                </div>
                <Edit fontSize="large" />
            </div>
            <SidebarOption Icon={InsertComment} title="Threads" />
            <SidebarOption Icon={Inbox} title="Mentions & Reactions" />
            <SidebarOption Icon={Drafts} title="Saved Item" />
            <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOption Icon={PeopleAlt} title="People & User" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File Browser" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channels" />
            <hr />
            <SidebarOption Icon={Add} addChannelOption title="Add Channel" />

            {channels.map((channel) => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}

export default Sidebar
