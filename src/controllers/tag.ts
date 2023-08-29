/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { Tag } from '../types/interfaces'
import tag from '../database/models/tag'

// Get all tags
export const list = async (req: Request, res: Response) => {
    try {
        const tags: Tag[] = await tag.findAll()
        return res.status(200).send({
            results: tags,
        })
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}

// Create a new tag
export const create = async (req: Request, res: Response) => {
    try {
        const tags: Tag = {
            title: req.body.title,
            content: req.body.content,
        }
        await tag.create(tags)
        return res.status(201).send({
            message: 'Tag added successfully!',
            results: tags,
        })
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}

// Update a tag
export const update = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const tags: Tag = {
            title: req.body.title,
            content: req.body.content,
        }
        const results = await tag.update(tags, {
            where: { id: id },
        })
        return res.status(201).send({
            message: 'Tag updated successfully!',
            results: tags,
        })
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}

// Delete a tag
export const takeOut = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const results = await tag.destroy({
            where: { id: id },
        })
        return res.status(201).send({
            message: 'Tag deleted successfully!',
        })
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}
