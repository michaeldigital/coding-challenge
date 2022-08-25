// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const handler = async (req, res) => {
  // check if url is fetchable. if yes, send 200; if not, send back error automatically.
  await axios.get(req.body.url);
  res.status(200).send("url exists");
};

export default handler;
