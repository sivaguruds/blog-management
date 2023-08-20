import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize'
import { sequelize } from '../connection'

export class user extends Model<InferAttributes<user>, InferCreationAttributes<user>> {
    declare id?: CreationOptional<string>
    declare firstName: string
    declare lastName: string
    declare mobile: string
    declare email: string
    declare dob: Date
    declare gender: string
    declare password: string
    declare isVerify: boolean
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
}

user.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: DataTypes.UUIDV4,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobile: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isVerify: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    },
    { sequelize, tableName: 'users' },
)

export default user
