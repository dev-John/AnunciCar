import React, { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';


import './styles.css';

export default function Alert() {
  const [display, setDisplay] = useState(true);

  function closeAlert() {
    setDisplay(!display);
  }

  return (
    <div>
      {
        display ? (
          <div className="alert">
            <span class="closebtn"><a onClick={closeAlert}>&times;</a> </span>

            <div className="custom-msg">
              <FiAlertCircle size={20} />
              A pesquisa não retornou valores
					  </div>

          </div>
        ) : (
          <div></div>
        )
      }
      
    </div>
  )
}