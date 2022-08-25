import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { removeBookmark } from "../../redux/reducers/bookmarkListSlice";
import { itemsPerPage } from "../../const";
import { openModal, setBkForEdit } from "../../redux/reducers/editBkModalSlice";
import styled from "styled-components";

const BkList = () => {
  const dispatch = useDispatch();
  const bkList = useSelector((state) => state.bkList?.bkList);
  // per total list and pageoffset (set by paginate), render list.
  const pageOffset = useSelector((state) => state.pageOffset?.pageOffset);
  const firstRenderIndex = pageOffset * itemsPerPage;
  const lastRenderIndex = pageOffset * itemsPerPage + itemsPerPage;
  const renderList = bkList.slice(firstRenderIndex, lastRenderIndex);

  // click remove button, delete bookmark from redux.

  const handleBkDelete = (id) => {
    dispatch(removeBookmark());
  };
  // click edit button, update edit bookmark data in redux.
  const handleBkEdit = (bk) => {
    dispatch(setBkForEdit(bk));
    dispatch(openModal());
  };

  const renderActions = (bk) => {
    return (
      <>
        <Button
          className="me-3"
          variant="light"
          size="sm"
          onClick={() => handleBkDelete(bk.id)}
        >
          remove
        </Button>
        <Button variant="light" size="sm" onClick={() => handleBkEdit(bk)}>
          edit
        </Button>
      </>
    );
  };
  const tableBody = renderList.map((bk) => (
    <tr key={bk.id}>
      <td className="overflow-auto">{bk.name}</td>
      <td className="overflow-auto">{bk.url}</td>
      <td className="d-flex justify-content-center">{renderActions(bk)}</td>
    </tr>
  ));

  const noDataInfo = (
    <h5 className="my-5 py-5 opacity-75 text-center">
      No bookmark has been created
    </h5>
  );

  // if there is no existing bookmark, table does not show.
  if (!bkList[0]) return noDataInfo;

  return (
    <StyledTableContainer>
      <Table striped bordered hover size="sm" responsive="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Url</th>
            <th>Actions</th>
          </tr>
        </thead>
        {bkList[0] && <tbody>{tableBody}</tbody>}
      </Table>
    </StyledTableContainer>
  );
};

export default BkList;

const StyledTableContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding-bottom: 3rem;
  table {
    table-layout: fixed;
  }
`;
