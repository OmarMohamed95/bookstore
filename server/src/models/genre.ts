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

class Genre extends Model {
	public getBooks!: HasManyGetAssociationsMixin<Book>;
	public addBook!: HasManyAddAssociationMixin<Book, number>;
	public hasBook!: HasManyHasAssociationMixin<Book, number>;
	public countBook!: HasManyCountAssociationsMixin;
	public createBook!: HasManyCreateAssociationMixin<Book>;
}

Genre.init({
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
	modelName: 'genre'
});

export interface GenreAttributes {
  	name ? : string;
}

export interface GenreInstance {
	id: number;
	createdAt: Date;
	updatedAt: Date;

	name: string;
}

export default Genre;