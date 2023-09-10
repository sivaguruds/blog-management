import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize'
import { sequelize } from '../connection'

export class tag_categorie extends Model<InferAttributes<tag_categorie>, InferCreationAttributes<tag_categorie>> {
    declare id?: CreationOptional<string>
    declare postId: string
    declare categorieId: string
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
}

tag_categorie.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: DataTypes.UUIDV4,
        },
        postId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        categorieId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    },
    { sequelize, timestamps: false, tableName: 'tag_categories' },
)

export default tag_categorie
