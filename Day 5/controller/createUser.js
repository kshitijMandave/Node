function createUser(req, res) {
  //logic
  req.on("data", (requestData) => {
    const mydata = JSON.parse(requestData);
    console.log(mydata);
  });

  res.end("It is Post Request in new file");
}

module.exports = { createUser };