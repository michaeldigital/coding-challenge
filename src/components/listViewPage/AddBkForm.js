import { useDispatch } from "react-redux";
import { addBookmark } from "../../redux/reducers/bookmarkListSlice";
import BookmarkForm from "./BookmarkForm";
import { useRouter } from "next/router";
import { RESULTPAGEPATH } from "../../const/index";

const AddBkForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // if submit success, send data to rudux; and redirect user to submit confirm page.
  const handleSubmitSuccess = (newBookmark) => {
    dispatch(addBookmark(newBookmark));
    router?.push(`${RESULTPAGEPATH}?bkid=${newBookmark.id}`);
  };

  return (
    <div className="w-75 pb-5 m-auto">
      <h1 className="text-center pb-5">Add Bookmarks</h1>
      <BookmarkForm handleSubmitSuccess={handleSubmitSuccess} />
    </div>
  );
};

export default AddBkForm;
