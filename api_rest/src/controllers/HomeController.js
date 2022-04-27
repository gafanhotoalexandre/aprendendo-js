import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const newAluno = await Aluno.create({
      name: 'Alexandre',
      lastname: 'Lima',
      email: 'alevmartins@gmail.com',
      age: 20,
      weight: 58,
      height: 1.62,
    });

    res.status(201).json(newAluno);
  }
}

export default new HomeController();
