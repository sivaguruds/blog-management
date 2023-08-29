/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { Categorie } from '../types/interfaces'
import categorie from '../database/models/categorie'

// Get all categories
export const list = async (req: Request, res: Response) => {
    try {
        const categories: Categorie[] = await categorie.findAll()
        return res.status(200).send({
            results: categories,
        })
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}

// Create a new category
export const create = async (req: Request, res: Response) => {
    try {
        const categories: Categorie = {
            title: req.body.title,
            content: req.body.content,
        }
        await categorie.create(categories)
        return res.status(201).send({
            message: 'Categorie added successfully!',
            results: categories,
        })
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}

// Update a category
export const update = async (req: Request, res: Response) => {
    const id = req.params.id
    console.log('update category', id)
    try {
        const categories: Categorie = {
            title: req.body.title,
            content: req.body.content,
        }
        const results = await categorie.update(categories, {
            where: { id: id },
        })
        return res.status(201).send({
            message: 'Categorie updated successfully!',
            results: categories,
        })
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}

// Delete a category
export const takeOut = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const results = await categorie.destroy({
            where: { id: id },
        })
        return res.status(201).send({
            message: 'Categorie deleted successfully!',
        })
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}
