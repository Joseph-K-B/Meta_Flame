import { useState } from "react";
import { animated as a, useSpring } from "react-spring";

import css from '../../app.css';

function Drawer(){

  const [lActive, setLActive] = useState(false);
  const [rActive, setRActive] = useState(false);
  
  const props = useSpring({
    right: lActive ? window.innerWidth - 200 : window.innerWidth - 0.001,
    top: window.innerHeight / 10
  })
  
  const rProps = useSpring({
    left: rActive ? window.innerWidth - 200 : window.innerWidth - 0.001,
    top: window.innerHeight / 10
  })
  
  const handleToggleLeft = () => {
    setLActive(v => !v);
    console.log(lActive, 'left drawer')
  }
  
  const handleToggleRight = () => {
    setRActive(v => !v);
    console.log(rActive, 'right drawer')
  }

  return (
    <>
      <a.section className={css.Drawer} style={props}>
        <div className={css.toggle}>
          <button onClick={handleToggleLeft} className={css.tab}>
          { lActive ? 
              <img  src='/pictures/white_L.png' /> : 
              <img src='/pictures/white_R.png' alt='close'/>  
          }    
          </button>
        </div>
        <div className={css.panel}>
          <button>
            1
          </button>
          <button>
            2
          </button>
          <button>
            3
          </button>
          <button>
            4
          </button>
          <button>
            5
          </button>
          <button>
            6
          </button>
        </div>
      </a.section>
    </>
  );
};

export default Drawer;