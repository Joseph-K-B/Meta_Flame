import { useState } from "react";
import { animated as a, useSpring } from "react-spring";

import css from '../../app.css';
import { useStore } from "../../hooks/useStand";

function Drawer(){
  const page = useStore((state) => state.page);


  
  const setPage = useStore((state) => state.setPage);
  const setForward = useStore((state) => state.setForward);

  const [lActive, setLActive] = useState(false);
  
  const props = useSpring({
    right: lActive ? window.innerWidth - 200 : window.innerWidth - 0.001,
    top: window.innerHeight / 10
  });
  
  const handleToggleLeft = () => {
    setLActive(v => !v);
  }

  const handlePage = () => {
    setPage(page + 1);
    setForward(true);
  }
  
  const handlePrevPage = () => {
    setPage(page - 1);
    console.log(page);
    setForward(false);
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
          <button onClick={handlePage}>
            +++
          </button>
          <button onClick={handlePrevPage}>
            ---
          </button>

        </div>
      </a.section>
    </>
  );
};

export default Drawer;