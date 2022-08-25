import Modal from "../common/Modal";
import BookmarkForm from "./BookmarkForm";
import { useSelector, useDispatch } from "react-redux";
import {
  closeModal,
  updateEditBkId,
} from "../../redux/reducers/editBkModalSlice";
import { editBookmark } from "../../redux/reducers/bookmarkListSlice";

const EditBkModal = () => {
  const dispatch = useDispatch();
  const bkForEdit = useSelector((state) => state.editBkModal.bkForEdit);

  const handleModalClose = () => {
    dispatch(closeModal());
  };
  // if success, close modal, and update redux data.
  const handleSubmitSuccess = (newBk) => {
    dispatch(editBookmark(newBk));
    dispatch(closeModal());
  };
  const modalShow = useSelector((state) => state.editBkModal.showModal);

  return (
    <Modal modalHeader="Edit" handleClose={handleModalClose} show={modalShow}>
      <BookmarkForm
        handleSubmitSuccess={handleSubmitSuccess}
        bookmark={bkForEdit}
      />
    </Modal>
  );
};

export default EditBkModal;
