import type { HttpContext } from '@adonisjs/core/http'
import User from "#models/user";

export default class SessionController {
  async store({ request, auth, response }: HttpContext) {

    /**
     * Step 1: Get credentials from the request body
     */
    const {email, password} = request.only(['email', 'password'])

    /**
     * Step 2: Verify credentials
     */
    const user = await User.verifyCredentials(email, password)

    /**
     * Step 3: Login user
     */
    await auth.use('web').login(user)

    /**
     * Step 4: Send response
     */
    return response.status(200).json({message: 'Logged in successfully'})
  }

  async update({ auth, response }: HttpContext) {
    /**
     * Step 1: Logout user
     */
    await auth.use('web').logout()

    /**
     * Step 2: Send response
     */
    return response.status(200).json({message: 'Logged out successfully'})
  }
}
