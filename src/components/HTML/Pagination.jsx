
import { useStore } from "../../hooks/useStand";
import css from '../../app.css';

function Pagination() {
  const page = useStore((state) => state.page);
  const setPage = useStore((state) => state.setPage);
  const setForward = useStore((state) => state.setForward);

  const handleNextPage = () => {
    setForward(true);
    setPage(page + 1);
  }
  
  const handlePrevPage = () => {
    setForward(false);
    setPage(page - 1);
    console.log(page);
  }

  return (
    <>
      <section className={css.Pagination}>
        {page > 0 ? 
          <button onClick={handlePrevPage} className={css.prev}>
            <img src='/pictures/white_L.png' />
          </button> : null       
        }
        {page < 7 ?
          <button onClick={handleNextPage} className={css.next}>
            <img src='/pictures/white_R.png' />
          </button>  : null      
        }
      </section>
    </>
  );
};

export default Pagination;