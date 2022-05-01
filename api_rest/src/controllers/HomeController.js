class HomeController {
  async index(req, res) {
    res.status(201).json('Home');
  }
}

export default new HomeController();
