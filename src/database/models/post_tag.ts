import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize'
import { sequelize } from '../connection'

export class post_tag extends Model<InferAttributes<post_tag>, InferCreationAttributes<post_tag>> {
    declare postId: string
    declare categorieId: string
}

post_tag.init(
    {
        postId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        categorieId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    },
    { sequelize, timestamps: false, tableName: 'post_tags' },
)

export default post_tag
