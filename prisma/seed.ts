import {prisma} from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: 'a0aad9a1-2ef1-4887-b881-331c530a9809',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados por código!',
            maximumAttendees: 120
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})