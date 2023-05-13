import './style/index.css';
import { useState } from 'react';
import Dialog from './components/Dialog';
import StarRating from "./components/StarRating";

/*
function log(value) {
  console.log(value);
}
*/

function App() {

  const [open, setOpen] = useState(false);

  function openDialog() {
    setOpen(true);
  }

  return (
  <main>
    <div className='container'>
      <section className='stars-container'>
          <StarRating onChange={''} />
      </section>
    </div>
    <div className="button">
        <button onClick={openDialog} >Open Dialog</button>
    </div>
    <Dialog open={open} onClose={() => setOpen(false)} />
  </main>
  )
}

export default App;
