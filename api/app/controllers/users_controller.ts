import type {HttpContext} from '@adonisjs/core/http'
import User from "#models/user";
import { createUserValidator } from "#validators/user";

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return User.all();
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    // Validate request
    const payload = await request.validateUsing(createUserValidator);

    // Check if pseudo or email already exists
    const pseudoExists = await User.findBy('pseudo', payload.pseudo);
    if (pseudoExists) {
      return response.status(400).json({ message: 'Pseudo already exists' });
    }

    // Check if email already exists
    const emailExists = await User.findBy('email', payload.email);
    if (emailExists) {
      return response.status(400).json({ message: 'Email already exists' });
    }

    return await User.create(payload)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return User.findByOrFail(params.id)
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {
    return {
      message: `Edit individual User with ID ${params.id}`,
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    return {
      message: `Handle form submission for the edit action with ID ${params.id} with new email: ${request.input('email')}`,
    }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    return {
      message: `Delete User with ID ${params.id}`,
    }
  }
}
