const mainpage = async (req, res) => {
  res.status(200).send("You're in the Post page");
};

const subposts = async (req, res) => {
  res.status(200).send("You're in the subPosts page");
};

const getRequest = async (req, res) => {
  console.log('Get Request');
  res.status(200).write(`${req.post}\n`);
  res.status(200).write(`Get the post with Id ${req.params.id}`);
  res.send();
};
const putRequest = async (req, res) => {
  console.log('Put Request');
  res.send(`Update the post with Id ${req.params.id}`);
};
const deleteRequest = async (req, res) => {
  console.log('Delete Request');
  res.send(`Delete the post with Id ${req.params.id}`);
};

module.exports = { mainpage, subposts, getRequest, putRequest, deleteRequest };
