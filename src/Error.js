import { Link } from "@mui/material";
import React from "react";

const Error = () => {
    return(
        <>
        <h1> 404 Error pagr</h1>
        <p> This page is not Found</p>
        <Link to="/"><button>Go back home</button></Link>
        </>
    )
}
export default Error;