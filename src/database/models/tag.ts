import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize'
import { sequelize } from '../connection'

export class tag extends Model<InferAttributes<tag>, InferCreationAttributes<tag>> {
    declare id?: CreationOptional<string>
    declare title: string
    declare content: string
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
}

tag.init(
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
    { sequelize, tableName: 'tags' },
)

export default tag
