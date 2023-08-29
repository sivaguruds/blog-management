import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize'
import { sequelize } from '../connection'

export class categorie extends Model<InferAttributes<categorie>, InferCreationAttributes<categorie>> {
    declare id?: CreationOptional<string>
    declare title: string
    declare content: string
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
}

categorie.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: DataTypes.UUIDV4,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    },
    { sequelize, tableName: 'categories' },
)

export default categorie
