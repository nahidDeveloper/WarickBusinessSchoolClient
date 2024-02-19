import  '../styles/globalStyles.css'

const Pagination =({itemsPerPage,totalItems,paginate,currentPage})=>{
  //Calculating how many pages there need to be  
  const pageNumbers =[];
    for(let i =1;i<=Math.ceil(totalItems/itemsPerPage);i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
          <ul className='pagination'>
            {pageNumbers.map(number => (
              <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                <a onClick={() => paginate(number)} href='!#' className='page-link' style={{ backgroundColor: currentPage === number ? '#007bff' : '#4b2e83' }}>
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      );
    };
export default Pagination;