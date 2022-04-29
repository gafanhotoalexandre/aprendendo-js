import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.status(201).json(newUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(404).json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(404).json(null);// não tá caindo aqui
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({
          errors: ['Recurso não encontrado.'],
        });
      }

      const updatedUser = await user.update(req.body);
      return res.json(updatedUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({
          errors: ['Recurso não encontrado.'],
        });
      }

      user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserController();
