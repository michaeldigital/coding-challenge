import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { itemsPerPage } from "../../const";
import { updatePageOffset } from "../../redux/reducers/pageOffsetSlice";

const Paginate = () => {
  const dispatch = useDispatch();

  // update redux offset, which will determine the list to be rendered.
  const handlePageClick = (selectObj) => {
    dispatch(updatePageOffset(selectObj.selected));
  };

  const bkList = useSelector((state) => state.bkList?.bkList);

  const pageCount = Math.ceil(bkList.length / itemsPerPage);
  // if there is no bookmark, return null;
  if (!bkList[0]) return null;
  // using bootstrap utilities to define style of pagination.
  // https://getbootstrap.com/docs/5.2/utilities
  return (
    <>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </>
  );
};

export default Paginate;
