const express = require("express");
const router = express.Router();
const response = require("../../Network/response");
const controller = require("./controller");
router.get("/", function (req, res) {
  controller.getMessages()
  .then((messageList)=>{
      response.success(req,res,messageList,200)
  })
  .catch(e=>{
      response.error(req,res,'Unexpected error',500,e)
  })
});

router.post("/", function (req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then(() => {
      response.success(req, res, "creado correctamente", 201);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        "Información inválida",
        400,
        "seu madruga su aplicacion chingo a su madre"
      );
    });
  // res.send("Mensaje añadido correctamente");
});

router.delete("/", function (req, res) {
  console.log(req.query);
  console.log(req.body);

  res.status(201).send([
    { error: "", body: "creado correctamente" },
    { error: "", body: "La tarea falló con éxito" },
  ]);
});

module.exports = router;
