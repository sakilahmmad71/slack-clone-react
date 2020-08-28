import React from 'react'

import '../styles/Header.css'
import { useStateValue } from '../context/StateProvider'

import { Avatar } from '@material-ui/core'
import { AccessTime, Search, HelpOutline } from '@material-ui/icons'

const Header = () => {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    src={user?.photoURL}
                    alt={user?.displayName}
                />
                <AccessTime />
            </div>

            <div className="header__search">
                <Search />
                <input
                    type="text"
                    name="search"
                    placeholder="Search for anything"
                />
            </div>

            <div className="header__right">
                <HelpOutline />
            </div>
        </div>
    )
}

export default Header
