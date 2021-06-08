/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

const LoadingPulse = ({ Message }) => (
  <div stlye={{
    margin: 'auto', width: '50%', textAlign: 'center', height: '100%',
  }}
  >
    <div style={{
      position: 'relative', paddingTop: '10%', paddingBottom: '10%', textAlign: 'center',
    }}
    >
      <i className="fas fa-spinner fa-pulse fa-lg" style={{ fontSize: '15rem', color: 'rgba(0,0,0,.6)', marginBottom: '5rem' }} />
      <div style={{ flexBasis: '100%', flexGrow: '0' }}>
        <p style={{ fontSize: '2rem' }}>{Message}</p>
      </div>
    </div>
  </div>
);

LoadingPulse.propTypes = {
  Message: PropTypes.string.isRequired,
};

export default LoadingPulse;
