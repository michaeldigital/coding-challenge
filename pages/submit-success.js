import PageContainer from "../src/components/common/PageContainer";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { HOMEPAGEPATH } from "../src/const";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const SubmitConfirm = () => {
  const router = useRouter();
  const { bkid } = router?.query || {};
  const bkList = useSelector((state) => state.bkList.bkList);

  // if user visit result page without bkid, then redirect back to home page.
  if (!bkid) {
    router.push(HOMEPAGEPATH);
    return;
  }

  // if there is bkid, then using bkid filter full list to get the bookmark just created.

  const newBk = bkList.filter((bk) => bk.id === bkid)[0];
  // user go back to list page if cilck "view full list" button.
  const handleClick = () => {
    router.push(HOMEPAGEPATH);
  };

  return (
    <PageContainer>
      <main className="py-5">
        <h1>Thanks!</h1>
        <div> You have successfully created the bookmark as below.</div>
        <div className="w-100 py-5">
          <Table striped bordered hover size="sm" responsive="sm">
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{newBk.name}</td>
                <td>{newBk.url}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Button variant="outline-primary" onClick={handleClick}>
          View full list
        </Button>
      </main>
    </PageContainer>
  );
};

export default SubmitConfirm;
