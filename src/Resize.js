import React from 'react'
import { Resizable } from "re-resizable";

function Resize({ comp }) {
    const style = {
        border: "solid 1px #ddd",
        background: "#f0f0f0",
        margin: '1rem',
    };
    return (
        <Resizable
            style={style}
            defaultSize= {{ 
                width: '3em', 
                height: '6em'
            }}
            minWidth={300}
            minHeight={400}
            enable={{
                'right': true,
                'left': true,
                'top': true,
                'bottom': true,
                'topRight': true,
                'topLeft': true,
                'bottomLeft': true,
                'bottomRight': true
            }}
            boundsByDirection={false}
            >
            {comp}
        </Resizable>
    )
}

export default Resize
