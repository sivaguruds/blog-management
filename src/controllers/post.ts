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
    console.log(req.body)
    try {
        const results = await post.findAll({
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
        console.log('results', results)
        return res.status(201).send({
            results: results,
        })
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}
