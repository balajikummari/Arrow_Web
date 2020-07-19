import './heading.css'
import React from 'react';
interface IHeading {
    name: string,
}
function Heading(props: IHeading) {
    return <h2 className="heading">
        {props.name}
    </h2>
}
export default Heading;