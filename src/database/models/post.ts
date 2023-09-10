import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize'
import { sequelize } from '../connection'
import categorie from './categorie'
import post_tag from './post_tag'

export class post extends Model<InferAttributes<post>, InferCreationAttributes<post>> {
    declare id?: CreationOptional<string>
    declare authorId: string
    declare title: string
    declare metaTitle: string
    declare slug: string
    declare content: string
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
}

post.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: DataTypes.UUIDV4,
        },
        authorId: {
            type: DataTypes.UUID,
            references: {
                model: 'user',
                key: 'id',
            },
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        metaTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        slug: {
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
    { sequelize, tableName: 'posts' },
)

// Many-to-Many associations(post to categorie)
post.belongsToMany(categorie, {
    through: post_tag,
    as: 'categories',
    foreignKey: 'postId',
})

// belongsTo associations(categorie to post)
categorie.belongsToMany(post, {
    through: post_tag,
    as: 'posts',
    foreignKey: 'categorieId',
})
export default post
