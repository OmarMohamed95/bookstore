import { 
	Sequelize,
	DataTypes,
	Model,
	Association,
	HasManyGetAssociationsMixin,
	HasManyAddAssociationMixin,
	HasManyHasAssociationMixin,
	HasManyCountAssociationsMixin,
	HasManyCreateAssociationMixin
} from 'sequelize';
import sequelize from '../database/connection'
import Book from './book'

class Author extends Model {
	public id!: number;
	public name!: string;

	// timestamps!
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;

	public getBooks!: HasManyGetAssociationsMixin<Book>;
	public addBook!: HasManyAddAssociationMixin<Book, number>;
	public hasBook!: HasManyHasAssociationMixin<Book, number>;
	public countBook!: HasManyCountAssociationsMixin;
	public createBook!: HasManyCreateAssociationMixin<Book>;
}

Author.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING(255),
		allowNull: false,
	},
}, {
	sequelize,
	modelName: 'author'
});

export interface AuthorAttributes {
  	name ? : string;
}

export interface AuthorInstance {
	id: number;
	createdAt: Date;
	updatedAt: Date;

	name: string;
}

export default Author;