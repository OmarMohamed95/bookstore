import User from "../models/user"

class UserResolver {

    /**
     * Get user by ID
     * @param {number} id
     * @returns {Promise<M | null>}
     */
    getUserById = (id: number) => {
        return User.findOne({
            where: {
                id: id
            }
        })
    }

    /**
     * Get users by criteria
     * @param {any} args
     * @param {any} criteria
     * @returns @returns {Promise<M | null>}
     */
    getUsers = (args: any, criteria: any = {}) => {
        return User.findAll({
            where: criteria,
            limit: args.limit
        })
    }
}

export default UserResolver;