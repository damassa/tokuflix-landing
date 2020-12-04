import React from 'react';

const SerieDetailCard = (props) => {
  const { name, year, plot } = props;

  return (
    <div style={{ backgroundColor: 'red', width: '100%', height: 200 }}>
      {name}
      {year}
      {plot}
    </div>
  );
};

export default SerieDetailCard;
