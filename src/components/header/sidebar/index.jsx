import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import './style.scss';

const SidebarButton = ({handleShow, show}) => {
    const style = show ? "open" : null;
    return (
        <>
            <Button
                variant="outline-apple-milk text-apple-red"
                onClick={handleShow}
            >
                <div className="hamburger">
                    <div className="menu">
                        <div className={`hambergerIcon ${style}`}>
                        </div>
                    </div>
                </div>
            </Button>
        </>
    );
};

export default SidebarButton;