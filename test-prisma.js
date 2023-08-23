import { PrismaClient } from './prisma/prisma-client/index.js'

const prisma = new PrismaClient()

async function create () {
    return await prisma.inspection.create({
        data: {
            code: 'ABCD',
            inspectionDateTime: new Date(),
            color: 'red',
            state: 'danger',
        }
    })
}

create().then((inspection) => {
    console.log('inspection:', inspection)
}).catch ((e) => console.error('Error:', e))