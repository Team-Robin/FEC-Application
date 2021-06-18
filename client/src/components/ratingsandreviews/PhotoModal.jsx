import React, { useContext } from 'react';
import ThemeContext from '../context/Theme';


const PhotoModal = ({ handleClose, children }) => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <div id="photoModal" onClick={handleClose}>
      <div
        id="modalWindow"
        className={themeMode === 'Light' ? 'modalLight' : 'modalDark'}
        style={{padding: '1em'}}
      >
        <img src={children.attributes[1].value} className="modalPhoto" />
      </div>
    </div>
  )
}

export default PhotoModal;
