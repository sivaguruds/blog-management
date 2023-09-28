/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { Post } from '../types/interfaces'
import post from '../database/models/post'
import user from '../database/models/user'
import post_tag from '../database/models/post_tag'
import categorie from '../database/models/categorie'

const joinCreate = async (postId: string, categorieId: string) => {
    const postCategorie = await post_tag.create({ postId: postId, categorieId: categorieId })
    console.log('postCategorie', postCategorie)
    return postCategorie
}

const getPagination = (page: any, size: any) => {
    const limit = size ? +size : 3
    const offset = page ? page * limit : 0

    return { limit, offset }
}

const getPagingData = (data: any, page: any, limit: any) => {
    const { count: totalItems, rows: posts } = data
    const currentPage = page ? +page : 0
    const totalPages = Math.ceil(totalItems / limit)

    return { totalItems, posts, totalPages, currentPage }
}

export const create = async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const item: Post = {
            authorId: req.body.authorId,
            title: req.body.title,
            metaTitle: req.body.metaTitle,
            slug: req.body.slug,
            content: req.body.content,
        }
        const results: any = await post.create(item)
        if (results) {
            const postCategorie = req.body.categories.map((item: string) => ({
                postId: results.id,
                categorieId: item,
            }))
            console.log(postCategorie)
            await post_tag.bulkCreate(postCategorie)
        }
        console.log(results)
        return res.status(201).send({
            message: 'post added successfully!',
            results: results,
        })
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}

export const list = async (req: Request, res: Response) => {
    const { page, size } = req.query
    try {
        const { limit, offset } = getPagination(page, size)
        const results = await post.findAndCountAll({
            limit,
            offset,
            include: [
                {
                    model: user,
                    as: 'users',
                    attributes: ['firstName', 'lastName', 'email', 'mobile', 'gender', 'dob', 'isVerify'],
                },
                {
                    model: categorie,
                    as: 'categories',
                    attributes: ['title'],
                },
            ],
        })
        if (results) {
            const response = getPagingData(results, page, limit)
            if (response) {
                return res.status(201).send({
                    results: response,
                })
            }
        }
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}

export const update = async (req: Request, res: Response) => {
    const id = req.params.id
    console.log('update category', id)
    try {
        const item: Post = {
            authorId: req.body.authorId,
            title: req.body.title,
            metaTitle: req.body.metaTitle,
            slug: req.body.slug,
            content: req.body.content,
        }

        const postItem: any = await post.findByPk(id)
        console.log('update item', postItem)

        // Remove all current associations
        const categories = await postItem.getCategories()
        console.log('remove', categories)
        postItem.removeCategories(categories)

        const postCategorie = req.body.categories.map((item: string) => ({
            postId: id,
            categorieId: item,
        }))
        console.log(postCategorie)
        await post_tag.bulkCreate(postCategorie)
        const results = await post.update(item, {
            where: { id: id },
        })
        if (results) {
            return res.status(201).send({
                message: 'post updated successfully!',
            })
        }
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while updateing the post.',
        })
    }
}

export const takeOut = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const postItem: any = await post.findByPk(id)
        console.log('update item', postItem)

        // Remove all current associations
        const categories = await postItem.getCategories()
        console.log('remove', categories)
        postItem.removeCategories(categories)

        const deleteItem = await post.destroy({
            where: { id: id },
        })
        if (deleteItem) {
            return res.status(201).send({
                message: 'post deleted successfully!',
            })
        }
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while deleteing the post.',
        })
    }
}
