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
                    No Patients Found
                </h1>
            )}
        </>
    )
}

export default Notifications

