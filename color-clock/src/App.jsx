import './Clock.css';

import {format} from 'date-fns';

function App(){
  return (
    <div className="clock-container">
      <p className="clock-time">{format(new Date(), 'MM/dd/yyyy HH:mm')}</p>
    </div>
  );
}

export default App;