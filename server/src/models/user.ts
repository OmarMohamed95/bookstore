import { 
	DataTypes,
	Model
} from 'sequelize';
import sequelize from '../database/connection'

class User extends Model<UserAttributes> {
	public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	username: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING(255),
		allowNull: false,
	},
}, {
	sequelize,
	modelName: 'user'
});

export interface UserAttributes {
    id ? : number;
  	username ? : string;
  	email ? : string;
  	password ? : string;
}

export interface UserInstance {
	id: number;
	createdAt: Date;
	updatedAt: Date;

	username: string;
	email: string;
	password: string;
}

export default User;