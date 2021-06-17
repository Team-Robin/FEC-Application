import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/Theme'


const RatingBar = ({
  name, ratingCount, percent, addFilter,
}) => {
  const { themeMode } = useContext(ThemeContext);
  const lightMode = 'forgroundLight';
  const darkMode = 'forgroundDark';
  return (
    <div className="ratingBar" >
      <button type="button" onClick={() => { addFilter(name); }}>
        { `${name} (${ratingCount})`}
      </button>
      <div className="backgroundBar" />
      <div className={`forgroundBar ${themeMode === 'Light' ? lightMode : darkMode}`} style={{ width: `${percent}` }} />
    </div>
  );
}

RatingBar.propTypes = {
  name: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  percent: PropTypes.string.isRequired,
  addFilter: PropTypes.func.isRequired,
};

export default RatingBar;
