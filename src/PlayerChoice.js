import React from 'react';

function PlayerChoice(props) {
  const { name, imageSrc, onClick } = props;
  const handleClick = () => {
    onClick(name);
  }
  return (
    <div className="RPS">
    <img
      style={{ width: 200, height: 150, border: '2px solid red' }}
      src={imageSrc}
      onClick={handleClick}
      alt=""
    />
    </div>
  );
}

export default PlayerChoice;
