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

class Book extends Model {
    
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
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genra: {
        type: DataTypes.INTEGER,
        allowNull: false,
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

export default Book;