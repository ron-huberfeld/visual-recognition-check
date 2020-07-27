import React from 'react';
import './_DetectionBox.scss';

const DetectionBox = ({ locationData }) => (
  <>
    {locationData
      ? locationData.map((item, index) => {
          let left = item.location.left;
          let top = item.location.top;
          let width = item.location.width;
          let height = item.location.height;
          let color = item.object === 'mask' ? 'green' : 'red';
          return (
            <span className="face-mark2" key={index}>
              <div
                className="face-mark3"
                style={{
                  backgroundSize: 'contain',
                  position: 'absolute',
                  borderColor: color,
                  height: `${height}px`,
                  width: `${width}px`,
                  top: `${top}px`,
                  left: `${left}px`,
                }}
              />
            </span>
          );
        })
      : null}
  </>
);

export default DetectionBox;
