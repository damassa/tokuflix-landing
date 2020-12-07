import React from 'react';
import PropTypes from 'prop-types';

export default function SerieDetailCard(props) {
  const { name, year, plot } = props;

  return (
    <div style={{ backgroundColor: 'red', width: '100%', height: 200 }}>
      {name}
      {year}
      {plot}
    </div>
  );
}

SerieDetailCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
};
