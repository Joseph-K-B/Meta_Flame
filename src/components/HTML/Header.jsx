

import css from '../../app.css';

function Header() {

  return(
    <>
      {/* logo */}
      <section className={css.Header}>
        <div>
          <img src='' alt='metagame-logo' />
          <h3>MetaGame</h3>
        </div>
        {/* hamburger  */}
        <div>
          <button>
            <img src='' alt='hamburger'/>
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;