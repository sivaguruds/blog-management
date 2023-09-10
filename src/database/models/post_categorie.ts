import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize'
import { sequelize } from '../connection'

export class post_categorie extends Model<InferAttributes<post_categorie>, InferCreationAttributes<post_categorie>> {
    declare postId: string
    declare categorieId: string
}

post_categorie.init(
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
    { sequelize, timestamps: false, tableName: 'post_categories' },
)

export default post_categorie
