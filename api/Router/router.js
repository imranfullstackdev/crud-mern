const express = require("express");
const router = express.Router();
// const user = require("../userschema/userschema.js");
const USER = require("../userschema/userschema.js");

// crud

router.post("/adddata", async (req, res) => {
  try {
    const { name, phone } = req.body;
    console.log(req.body);
    if (!name || !phone) {
      return res.status(400).send({ err: "Please fill all the data" });
    } else {
      const preuser = await USER.findOne({ name });
      if (preuser) {
        res.status(400).send({ err: "user already exist" });
      } else {
        const addUser = new USER({ name, phone });
        await addUser.save();
        res.send({ mess: "user added sucessfully" });
        console.log(addUser);
      }
    }
  } catch (error) {
    console.log(error);
  }
});
// geting all the data
router.get("/getAll", async (req, res) => {
  try {
    const Alldata = await USER.find();
    res.send(Alldata);
  } catch (error) {
    console.log(error);
  }
});

// updating the  data
router.put("/update/:id", async (req, res) => {

  const { id } = req.params;
  console.log(id)
  console.log(req.body)

  try {
    const edituser = await USER.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      upsert: true,
    });
    res.send({ edit: "edited sucessfully" });
  } catch (error) {
    console.log(error);
  }
});
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const dltUser = await USER.findByIdAndDelete(id);
    res.send({ dlt: "user deleted sucessfully" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
