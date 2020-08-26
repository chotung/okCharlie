import React from "react"
import { Button } from '@material-ui/core';


const Logout = (props) => {
    const { submit } = props
    return (
        <form className="logoutForm" onSubmit={submit}>
            <span className="hidden"></span>
            <Button variant="contained" color="primary" type="submit" value="Submit" data-type="logout">
                Logout
            </Button>
        </form>
    )
}

export default Logout