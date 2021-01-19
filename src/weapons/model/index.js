const db = require("../db/index");

class Model {
  constructor(name) {
    this.name;
  }

  async run(query) {
    try {
      const response = await db.query(query);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Model;
