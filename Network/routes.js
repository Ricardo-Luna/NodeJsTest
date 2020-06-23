const express = require("express");
const message = require("../Components/Messages/network");

const routes = function (server) {
  server.use("/message", message);
};

module.exports = routes;
