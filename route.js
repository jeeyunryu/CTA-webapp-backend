import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export function initRoutes(app) {



    app.get('/equipments', async (req, res) => {
        const equipments = await prisma.equipment.findMany()
        res.json(equipments);
    })

    app.post('/equipment', async (req, res) => {
        const equipment = await prisma.equipment.create({
            data: {
                code: req.body.code,
                name: req.body.name,
                installationDate: req.body.installationDate,
                location: req.body.location,
                currentState: req.body.currentState,
                latestInspectionDate: req.body.latestInspectionDate,
                isDefective: req.body.isDefective
            }
        })

        res.json(equipment);
    })

    app.put('/equipment/:id', async (req, res) => {
        await prisma.equipment.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                code: req.body.code,
                name: req.body.name,
                installationDate: req.body.installationDate,
                location: req.body.location
            }
        })
    })

    app.delete('/equipment/:id', async (req, res) => {
        await prisma.equipment.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
    })
}