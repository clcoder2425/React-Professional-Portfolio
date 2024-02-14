// This file is the NavTabs component. It is used to create the navigation tabs at the top of the page.

function NavTabs({ currentPage, handlePageChange }) {
  return (

    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a 
          href="#About me" 
          onClick={() => handlePageChange('About me')}
         // Check to see if the currentPage is `About me`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About me' ? 'nav-link active' : 'nav-link'}
        >
          About me
        </a>
      </li>
      <li className="nav-item">
        <a 
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a 
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a id ='nav-button'
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
         Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
