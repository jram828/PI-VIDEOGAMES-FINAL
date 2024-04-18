const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const Port = 3001;

conn.sync({ alter: true }).then(() => {
  server.listen(Port, () => {
    console.log("Server en puerto: " + Port); // eslint-disable-line no-console
  });
});
