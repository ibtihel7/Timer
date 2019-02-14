import React from 'react';

import './index.css';





// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA



const Timer=() => { return <div className="timer">

    <h1><p className="Hour">00</p><p className="Minute">:30</p><p className="Second">:00</p></h1>
    <h6><p>Hour</p><p className="minute">Minute</p><p>Second</p></h6>
      
</div>
}
    
export default Timer 


