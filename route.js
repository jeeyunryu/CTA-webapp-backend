import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export function initRoutes(app) {
    app.get('/users', async (req, res) => {
        // const equipments = [
        //     {
        //         id: 1,
        //         code: 'ks1234',
        //         name: '프레스',
        //         installationDate: '20230802',
        //         location: 'A동',
        //         state: '안전',
        //         latestInspectionDate: '20230802',
        //         isDefective: '불필요',
        //     },
        //     {
        //         id:2,
        //         code: 'ks1235',
        //         name: 'albert',
        //     }
        // ];
        // await prisma.equipment.create({
        //     data: {
        //         code: 'PV-CPM-1-2169',
        //         name: 'SR66YH300 YKMU',
        //         installationDate: '2023-08-08T12:00:00Z',
        //         location: 'A동',
        //         currentState: '양호',
        //         latestInspectionDate: '2023-08-08T12:00:00Z',
        //     }
        // })
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
                code: req.params.id
            },
            data: {
                code: req.body.code,
                name: req.body.name,
                installationDate: req.body.installationDate,
                location: req.body.location
            }
        })
    })

    app.delete('equipment/:id', async (req, res) => {
        await prisma.equipment.delete({
            where: {
                code: req.params.id
            }
        })
    })
}