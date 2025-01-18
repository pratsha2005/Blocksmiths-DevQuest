import React, { useState } from 'react'
import Card from './card'
function Notifications() {
    const [user, setUser] = useState(true)
    return(
        <>
            {!user ? (
                <Card/>
            ) : (
                <h1>
                    No new notifications
                </h1>
            )}
        </>
    )
}

export default Notifications

