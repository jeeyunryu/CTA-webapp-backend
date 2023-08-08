const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // 조회
    // const allUsers = await prisma.user.findMany()
    // console.log(allUsers)

    // 추가
    // await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'alice@prisma.io',
    //         posts: {
    //             create: { title: 'Hello World' },
    //         },
    //         profile: {
    //             create: { bio: 'I like turtles' },
    //         },
    //     },
    // })

    // const allUsers = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //         profile: true,
    //     },
    // })
    // console.dir(allUsers, { depth: null })

    const post = await prisma.post.update({
        where: { id : 1 },
        data: { published: true },
    })
    console.log(post)
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