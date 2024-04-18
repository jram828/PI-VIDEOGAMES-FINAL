const {User} = require("../../src/db");

const login = async (req, res) => {
  const { email, password } = req.query;
  //console.log('Email Query:', email)
  //console.log("Password Query:", password);
  if (!email || !password || password.length === 0 || email.length === 0) {
    res.status(400).send("Faltan datos");
    //console.log("Faltan datos");
  } else {
    try {
      //console.log("Email:",email);
      const foundUser = await User.findOne({
        where: { email: email }
      });
     // console.log('Usuario find:', foundUser)
      
      try {
        
        if (foundUser.dataValues.password === password) {
          return res.status(200).json({ access: true })
        }
        else {
          return res.status(403).send('Contraseña incorrecta');
        };
      } catch (error) {
        res.status(500).send(error.message);
      }
    } catch (error) {
      res.status(404).send('Usuario no encontrado');
    }
  }
}

module.exports = login;
