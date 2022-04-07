import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const MainPage = () => {
    return (
        <div>
            <h1 className="text-apple-green">Main Page</h1>
            <Link to="/about">
                <Button>About</Button>
            </Link>
        </div>
    );
};

export default MainPage;
