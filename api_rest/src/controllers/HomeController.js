class HomeController {
  index(req, res) {
    res.status(200).json({
      message: 'Tudo ok!',
    });
  }
}

export default new HomeController();
