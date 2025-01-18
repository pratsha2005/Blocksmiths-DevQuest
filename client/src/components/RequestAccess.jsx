import React, { useState } from 'react'
import SearchBar from './searchBar'
function RequestAccess() {
    const [user, setUser] = useState('')
    return(
        <>
            <SearchBar/>
            {user ? (
                <div>Access Granted</div>
            ) : (
                <h1>
                    No Patients Found
                </h1>
            )}
        </>
    )
}

export default RequestAccess

