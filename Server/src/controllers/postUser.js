const {User} = require('../../src/db');

const postUser = async (req, res) => {
  const { email, password } = req.body;
  //console.log("Datos postUser: ", { email, password });
  if (!email || !password || password.length === 0 || email.length === 0) {
    res.status(400).send('Faltan datos')
  } else {
    try {
      const newUser = await User.findOrCreate({ where: { email: email, password: password } });
      //console.log("newUser postuser:",newUser)
      return res.status(200).json(newUser);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
 }

module.exports = postUser;
