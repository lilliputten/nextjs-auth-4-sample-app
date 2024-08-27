import { PrismaClient } from '@prisma/client';
import { createSeedClient } from '@snaplet/seed';

const prisma = new PrismaClient()

// @see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

async function main() {
  /*
   * const paul = await prisma.user.upsert({
   *   where: { email: 'dmia@yandex.ru' },
   *   update: {},
   *   create: {
   *     email: 'dmia@yandex.ru',
   *     name: 'Paul',
   *     posts: {
   *       create: {
   *         title: 'Check out Prisma with Next.js',
   *         content: 'https://www.prisma.io/nextjs',
   *         published: true,
   *       },
   *     },
   *   },
   * })
   * const john = await prisma.user.upsert({
   *   where: { email: 'lilliputten@yandex.ru' },
   *   update: {},
   *   create: {
   *     email: 'lilliputten@yandex.ru',
   *     name: 'John',
   *     password: '$2b$10$35gYgdU05qCKIjlzWiFK8ugYU5RtX0FuL23O3kb088kRecBijPZOa',
   *     image: 'https://images.ctfassets.net/e5382hct74si/4BtM41PDNrx4z1ml643tdc/7aa88bdde8b5b7809174ea5b764c80fa/adWRdqQ6_400x400.jpg',
   *     posts: {
   *       create: [
   *         {
   *           title: 'Follow Prisma on Twitter',
   *           content: 'https://twitter.com/prisma',
   *           published: true,
   *         },
   *         {
   *           title: 'Follow Nexus on Twitter',
   *           content: 'https://twitter.com/nexusgql',
   *           published: true,
   *         },
   *       ],
   *     },
   *   },
   * })
   * console.log({ paul, john })
   */

  const seed = await createSeedClient();
  // Truncate all tables in the database
  await seed.$resetDatabase();
  // Seed the database with 10 users
  await seed.user((createMany) => createMany(10, {
    // Create 10 posts for each of those users
    posts: (createMany) => createMany(10),
  }))
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
