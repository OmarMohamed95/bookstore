import { 
    Sequelize,
    DataTypes,
    Model,
    Association,
    HasOneGetAssociationMixin,
    HasOneCreateAssociationMixin,
} from 'sequelize';
import sequelize from '../database/connection'
import Author from './author';
import Genre from './genre'
import User from './user';

class Book extends Model {
    public id!: number;
	public name!: string;
	public user!: User;
	public authorId!: Author;
	public price!: number;
	public genreId!: Genre;

	// timestamps!
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;

    public getGenre!: HasOneGetAssociationMixin<Genre>;
	public createGenre!: HasOneCreateAssociationMixin<Genre>;
}

Book.init({
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
    user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genreId: {
        type: DataTypes.INTEGER,
        references: {
          model: Genre,
          key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'book'
});

export interface BookAttributes {
    name ? : string;
    user_id ? : number;
    author_id ? : number;
    pages_count ? : number;
    price ? : number;
    genra ? : number;

}

export interface BookInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    name: string;
    user_id: number;
    author_id: number;
    pages_count: number;
    price: number;
    genra: number;

}

// Genre association
Genre.hasMany(Book);
Book.belongsTo(Genre);

// Author association
Author.hasMany(Book);
Book.belongsTo(Author);

export default Book;