const list = [];

function addMessage(message) {
  list.push(message);
}

function getMessages() {
  return list;
}

module.exports = {
  //Post
  add: addMessage,
  //Get
  list: getMessages,
};
