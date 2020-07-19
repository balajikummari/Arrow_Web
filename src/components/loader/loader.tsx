import React from "react";
import './loader.scss';
function Loader() {
    return (
        <div className="modal">
        <div className="circle">
            <div className="circle--title">Breath
    <span className="circle--title--words">
                    <span>in</span>
                    <span>out</span>
                </span>
            </div>
            <div className="circle--marker"></div>
            <div className="circle--animation"></div>
        </div>
        </div>
    );
}

export default Loader;