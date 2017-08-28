import React from 'react';
import ReactDOM from 'react-dom';

const tracks = [
    {
        title: 'Some track'
    },
    {
        title: 'Some other track'
    }
];

ReactDOM.render(
    <div>
        {
            tracks.map((track, key) => {
                return <div className="track" key={key}>{track.title}</div>
            })
        }
    </div>,
    document.getElementById('app')
);

module.hot.accept();