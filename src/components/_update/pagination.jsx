import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {PageSize as itemsPerPage} from '../../utiles/constants/index'
import {useSelector} from 'react-redux'
// Example items, to simulate fetching from another resources.
 
 

export default ({setCurrentPage})=> {
  
 const [items,setItems]=React.useState([]);
 const Count=useSelector(x=>x.Count);
  // We start with an empty list of items.
   const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
       setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,items]);

  useEffect(()=>{
     var foo = Array(Count).fill().map((v,i)=>i);
    setItems(foo);
  },[Count])
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setCurrentPage(event.selected)
    setItemOffset(newOffset);
  };

  return (
    <div className='d-flex justify-content-end pagination-container'>
       
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previ  ous"
        nextClassName='btn cst-none'
        previousClassName='btn cst-none'
        activeClassName='btn active'
        renderOnZeroPageCount={null}
      
      />
    </div>
  );
}