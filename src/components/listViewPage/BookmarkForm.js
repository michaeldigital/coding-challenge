import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "../common/InputGroup";
import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ReactLoading from "react-loading";

const BookmarkForm = ({ handleSubmitSuccess, bookmark }) => {
  // if use prop to control initial render data of input;
  // that is mainly for editting book mark modal.

  const [name, setName] = useState(bookmark?.name || "");
  const [url, setUrl] = useState(bookmark?.url || "");
  const [nameError, setNameError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [urlVerified, setUrlVerified] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const checkUrlFormat = (url) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(url);
  };

  // set render loader status for submit button when verify if url exists and send data to redux (if url exisits).

  const loader = (
    <div className="px-3 pb-2  ">
      <ReactLoading type="spin" height={14} width={14} />
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    // clear existing error info if there is any.
    setNameError("");
    setUrlError("");

    // set error in case of no input value
    if (name === "" || url === "") {
      if (name === "") {
        setNameError("This field is required.");
      }
      if (url === "") {
        setUrlError("This field is required.");
      }
      return;
    }

    // validate format
    if (!checkUrlFormat(url)) {
      setUrlError("Url format is wrong.");
      return;
    }

    // validate if url exists - if yes, execute success logic; if not, update error;
    // validae if url exists, needs node js code inside api route.

    const checkUrlExists = async () => {
      // async function, set button as loading status first.
      setIsLoading(true);

      try {
        const response = await axios.post("/api/check_url_exists", { url });

        if (response?.status === 200) {
          // clear error if any.
          setUrlError("");
          // set url veririfed true, and run function passed by props.
          setUrlVerified(true);
          // const newBookmark = {
          //   // if there is bookmark in props, then it is edit of exisiting bookmark, no new id is created.
          //   id: bookmark ? bookmark.id : uuidv4(),
          //   name,
          //   url,
          // };
          // handleSubmitSuccess(newBookmark);
        }
      } catch (error) {
        console.log(error);
        setUrlError("Url is not accessible.");
      }
      // remove buttong loading status.
      setIsLoading(false);
    };
    checkUrlExists();
  };

  useEffect(() => {
    if (!urlVerified) return;
    const newBookmark = {
      // create id for each bookmark, and execute function passed by parent component.

      // if there is bookmark in props, then it is edit of exisiting bookmark, no new id is created.
      id: bookmark ? bookmark.id : uuidv4(),
      name,
      url,
    };
    handleSubmitSuccess(newBookmark);
  }, [urlVerified]);

  return (
    <Form onSubmit={handleSubmit} data-testid="bookmark-form">
      <InputGroup
        placeholder="Name"
        onChange={handleNameChange}
        value={name}
        id="add-link-form-name"
        error={nameError}
      />
      <InputGroup
        placeholder="Url"
        onChange={handleUrlChange}
        value={url}
        id="add-link-form-url"
        error={urlError}
      />
      <div className="text-end">
        <Button type="submit">{isLoading ? loader : "Submit"} </Button>
      </div>
    </Form>
  );
};

export default BookmarkForm;
