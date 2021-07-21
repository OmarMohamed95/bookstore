import User from "../models/user"
import bcrypt from "bcryptjs"
import jwt, { Secret } from "jsonwebtoken"
import AuthService from "../services/authService"

class AuthResolver {

    /**
     * Register resolver
     * @param {any} args
     * @returns {object}
     */
    register = async (args: any) => {
        const user = await User.create({
            username: args.username,
            email: args.email,
            password: await bcrypt.hash(args.password, 12)
        })

        const authService = new AuthService()
        const {token, ttl} = await authService.getToken(user)

        return {
            user,
            token,
            ttl
        }
    }

    /**
     * Login resolver
     * @param {any} args
     * @returns {object}
     */
    login = async (args: any) => {
        const user = await User.findOne({
            where: {
                email: args.email
            }
        })

        if (!user) {
           throw new Error('Invalid credentials')
        }

        const isPasswordMatch = await bcrypt.compare(args.password, user.password)

        if (!isPasswordMatch) {
            throw new Error('Invalid credentials')
        }

        const authService = new AuthService()
        const {token, ttl} = await authService.getToken(user)

        return {
            user,
            token,
            ttl
        }
    }

    /**
     * Get user data by token
     * @param {string} token
     * @returns {null | JwtPayload | string} 
     */
    getUserByToken = (token: string) => {
        return jwt.decode(token);
    }
}

export default AuthResolver;