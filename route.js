import { PrismaClient } from './prisma/prisma-client/index.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient()
const JWT_SECRET = 'fglkfjkjkdlfjksjfkjdkfjkdsjfkdsjer39934eroer343$#43#$@#$^%^&%^&^$kdjksjfjfjfklj!!#'

export function initRoutes(app) {



    app.get('/equipments', async (req, res) => {
        const equipments = await prisma.equipment.findMany()
        res.json(equipments);
    })

    app.post('/equipment', async (req, res) => {
        
        const authorization = req.headers.authorization
        const accessToken = authorization.split('Bearer')[1].replaceAll('\"', '').replaceAll(' ', '')

        const verified = jwt.verify(accessToken, JWT_SECRET)
        
        console.log(verified.isAdmin)
        if(verified.isAdmin) {
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
        }
        else {
            return res.json({
                error: {
                    exists: true,
                },
            }) 
        }

        
    })

    app.post('/inspection', async (req, res) => {
        const newInspection = await prisma.inspection.create({
            data: {
                code: req.body.code,
                inspectionDateTime: req.body.inspectionDateTime,
                color: req.body.color,
                state: req.body.state
            }
        })
        res.json(newInspection)
    })

    app.get('/inspections', async (req, res) => {
        const inspections = await prisma.inspection.findMany()
        res.json(inspections)
    })


    app.put('/equipment/:id', async (req, res) => {
        const authorization = req.headers.authorization
        const accessToken = authorization.split('Bearer')[1].replaceAll('\"', '').replaceAll(' ', '')
        

        const verified = jwt.verify(accessToken, JWT_SECRET)
        if(verified.isAdmin) {
            const newEquipment = await prisma.equipment.update({
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

            res.json(newEquipment);
        }
    })

    app.delete('/equipment/:id', async (req, res) => {
        const authorization = req.headers.authorization
        const accessToken = authorization.split('Bearer')[1].replaceAll('\"', '').replaceAll(' ', '')

        const verified = jwt.verify(accessToken, JWT_SECRET)
        if (verified.isAdmin) {
            const deleteEquipment = await prisma.equipment.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            })

            res.json(deleteEquipment)
        }
    })

    app.post('/signUp', async (req, res) => {
        // console.log(req.body)
        // console.log(req.params.username)
        try {
            const encryptedPassword = await bcrypt.hash(req.body.password, 10);

            const oldUser = await prisma.user.findUnique({
                where: {
                    username: req.body.username
                }
            })
            if(oldUser) {
                return res.json({
                    error: {
                        exists: true,
                    },
                })
            }
            const newUser = await prisma.user.create({
                data: {
                    username: req.body.username, 
                    password: encryptedPassword,
                }
                
            });
            console.log(newUser)
            res.send({
                token: 'token',
            })
        } catch (error) {
            console.error(error)
            res.send({
                error: {
                    reason: error.toString(),
                },
            })
        }
    })

    app.post('/login', async(req, res) => {
        const {id, username, isAdmin, password} = req.body

        console.log(id)
        
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })
        if(!user) {
            return res.json({ 
                error: {
                    exists: false
                }
            });
        }
    

        if(await bcrypt.compare(password, user.password)) {
            
            const token = jwt.sign({
                id: user.id,
                username,
                isAdmin: user.isAdmin,
            }, JWT_SECRET)

            if(res.status(201)) {
                return res.json({token})
            } else {
                return res.json({error: 'error'})
            }
        }

        res.json({ state: 'error', error: 'Invalid Password'})


    })

    app.post('/userData', (req, res) => {
        const { token } = req.body
        try {
            const user = jwt.verify(token, JWT_SECRET)
            const username = user.username
            prisma.user.findUnique({
                where: {
                    username: username
                }
            })
            .then((data) => {
                res.send({data})
            })
            .catch((error) => {
                res.send({error})
            })

        } catch (error) {

        }
    })


}