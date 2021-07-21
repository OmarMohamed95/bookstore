import jwt, { Secret } from "jsonwebtoken"
import { UserAttributes } from "../models/user";

class AuthService {

    private readonly TTL = 1;

    /**
     * Get the token for the logged in user
     * @param {UserAttributes} user
     * @returns {object}
     */
    getToken = async (user: UserAttributes) => {
        const appSecret: Secret = process.env.APP_SECRET || '';

        const token = jwt.sign(
            {
                id: user.id,
                username: user.username,
                email: user.email
            },
            appSecret,
            { expiresIn: `${this.TTL}h` }
        )

        return {
            token,
            ttl: this.TTL
        }
    }
}

export default AuthService;