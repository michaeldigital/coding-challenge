// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const handler = async (req, res) => {
  // check if url is fetchable. if yes, send 200; if not, send back error automatically.
  const response = await axios.get("https://raw.githubusercontent.com/9spokes/coding-challenge/master/data.json");
  console.log(response.data)
  res.status(200).send("url exists");
};

export default handler;
