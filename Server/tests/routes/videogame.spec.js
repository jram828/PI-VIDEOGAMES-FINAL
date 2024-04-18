/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
};

const videogame2 = {
  "name":"Star Wars", "description":"Guerra de las galaxias", "platforms":"PC, PlayStation 5", "image":"no tiene", "rating":4, "genres":"Action", "launchDate":"desconocida"
}

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ alter: true })
    .then(() => Videogame.create(videogame)));
  // describe('GET /videogames', () => {
  //   it('should get 200', async() =>
  //     await agent.get('/videogames').expect(200)
  //   );
  // });
});


describe('Test de RUTAS:', () => {

  describe("GET /videogames/:id", () => {

    it('Responde con status: 200', async () => {
      await agent.get('/videogames/1521').expect(200);
    });

    it(
      'Responde un objeto con las propiedades: "id", "name", "genres", "newRating", "rating", "description" e "image"'
      , async () => {
        const { body } = await agent.get('/videogames/1521')
        expect(body).haveOwnProperty('id'&&'name'&&'genres'&&'newRating'&&'rating'&&'image'&&'description');
      });
    
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/videogames/1500000").expect(500);
      
    });

  })

  describe("POST /videogames", () => {
    it("La propiedad id debe tener una longitud de 36 caracteres", async () => {
      const response = await agent
        .post("/videogames")
        .send(videogame2)
        .expect(200);

      
      expect(response.body.id.length).equal(36);
    });
    
  });


})
