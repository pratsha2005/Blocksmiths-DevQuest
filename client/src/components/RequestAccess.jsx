import React, { useState } from 'react'
import SearchBar from './searchBar'
import Card from './card'
function RequestAccess() {
    const [user, setUser] = useState(true)
    return(
        <>
            <SearchBar/>
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

export default RequestAccess

