import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const test = await prisma.equipment.create({
      data: {
          code: 'A101',
          name: '프레서',
          installationDate: '2023-08-09T10:15:30Z',
          location: 'A동',
          currentState: '안전',
          latestInspectionDate: '2023-08-09T10:15:30Z',
          isDefective: false
      }
  })
    console.log(test)
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })