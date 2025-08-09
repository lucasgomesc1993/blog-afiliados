import { db } from './db'

export async function getPublishedPosts(limit = 3) {
  try {
    const posts = await db.post.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: {
        author: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    return posts
  } catch (error) {
    console.error('Error fetching published posts:', error)
    return []
  }
}

export async function getAllPosts() {
  try {
    const posts = await db.post.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    return posts
  } catch (error) {
    console.error('Error fetching all posts:', error)
    return []
  }
}