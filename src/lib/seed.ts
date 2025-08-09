import { db } from './db'

async function main() {
  // Create categories
  const categories = await Promise.all([
    db.category.upsert({
      where: { name: 'Smartphones' },
      update: {},
      create: {
        name: 'Smartphones',
        description: 'Últimos smartphones com as melhores tecnologias',
        icon: '📱',
        slug: 'smartphones'
      }
    }),
    db.category.upsert({
      where: { name: 'Notebooks' },
      update: {},
      create: {
        name: 'Notebooks',
        description: 'Notebooks para trabalho e lazer',
        icon: '💻',
        slug: 'notebooks'
      }
    }),
    db.category.upsert({
      where: { name: 'Áudio' },
      update: {},
      create: {
        name: 'Áudio',
        description: 'Fones de ouvido, caixas de som e equipamentos de áudio',
        icon: '🎧',
        slug: 'audio'
      }
    }),
    db.category.upsert({
      where: { name: 'Casa Inteligente' },
      update: {},
      create: {
        name: 'Casa Inteligente',
        description: 'Dispositivos para uma casa mais inteligente',
        icon: '🏠',
        slug: 'casa-inteligente'
      }
    }),
    db.category.upsert({
      where: { name: 'Gaming' },
      update: {},
      create: {
        name: 'Gaming',
        description: 'Produtos para gamers e entusiastas de jogos',
        icon: '🎮',
        slug: 'gaming'
      }
    }),
    db.category.upsert({
      where: { name: 'Fitness' },
      update: {},
      create: {
        name: 'Fitness',
        description: 'Equipamentos e acessórios para sua saúde',
        icon: '💪',
        slug: 'fitness'
      }
    })
  ])

  console.log('✅ Categories created/updated')

  // Create sample products
  const smartphoneCategory = categories.find(c => c.name === 'Smartphones')
  const notebookCategory = categories.find(c => c.name === 'Notebooks')
  const audioCategory = categories.find(c => c.name === 'Áudio')

  if (smartphoneCategory) {
    await db.product.upsert({
      where: { name: 'Smartphone Galaxy Pro Max' },
      update: {},
      create: {
        name: 'Smartphone Galaxy Pro Max',
        description: 'Smartphone premium com câmera profissional e desempenho excepcional',
        price: 'R$ 3.999',
        originalPrice: 'R$ 4.499',
        rating: 4.8,
        imageUrl: '/placeholder-phone.jpg',
        affiliateLink: 'https://afiliado.com/galaxy-pro-max',
        categoryId: smartphoneCategory.id,
        pros: JSON.stringify(['Câmera incrível', 'Bateria duradoura', 'Tela AMOLED', 'Design premium']),
        cons: JSON.stringify(['Preço elevado', 'Pode ser grande para algumas mãos']),
        tags: JSON.stringify(['android', 'samsung', 'smartphone', 'câmera']),
        featured: true,
        published: true
      }
    })
  }

  if (notebookCategory) {
    await db.product.upsert({
      where: { name: 'Notebook UltraBook Pro' },
      update: {},
      create: {
        name: 'Notebook UltraBook Pro',
        description: 'Notebook ultrafino com desempenho de desktop',
        price: 'R$ 5.499',
        originalPrice: 'R$ 6.299',
        rating: 4.6,
        imageUrl: '/placeholder-laptop.jpg',
        affiliateLink: 'https://afiliado.com/ultrabook-pro',
        categoryId: notebookCategory.id,
        pros: JSON.stringify(['Performance excelente', 'Design fino', 'Tela 4K', 'Bateria longa']),
        cons: JSON.stringify(['Bateria poderia ser melhor', 'Caro', 'Peso considerável']),
        tags: JSON.stringify(['notebook', 'ultrabook', 'portátil', 'performance']),
        featured: true,
        published: true
      }
    })
  }

  if (audioCategory) {
    await db.product.upsert({
      where: { name: 'Fones de Ouvido Wireless X' },
      update: {},
      create: {
        name: 'Fones de Ouvido Wireless X',
        description: 'Fones sem fio com cancelamento de ruído ativo',
        price: 'R$ 899',
        originalPrice: 'R$ 1.199',
        rating: 4.7,
        imageUrl: '/placeholder-headphones.jpg',
        affiliateLink: 'https://afiliado.com/fones-x',
        categoryId: audioCategory.id,
        pros: JSON.stringify(['Cancelamento de ruído', 'Qualidade de som', 'Confortável', 'Bateria longa']),
        cons: JSON.stringify(['Preço alto', 'Pode ser apertado para cabeças grandes']),
        tags: JSON.stringify(['fones', 'wireless', 'áudio', 'cancelamento de ruído']),
        featured: true,
        published: true
      }
    })
  }

  console.log('✅ Sample products created')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
    console.log('👋 Database disconnected')
  })