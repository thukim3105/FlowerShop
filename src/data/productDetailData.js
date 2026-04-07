const careItems = [
    {
        id: 'hydration',
        title: 'Hydration',
        description: 'Refresh water every other day and trim stems at a slight angle to keep the bouquet vibrant.',
    },
    {
        id: 'light',
        title: 'Indirect Light',
        description: 'Place the bouquet near soft, indirect light to preserve color and slow petal fade.',
    },
    {
        id: 'temperature',
        title: 'Temperatures',
        description: 'Keep blooms cool and away from direct heat sources for longer-lasting petals.',
    },
]

const products = [
    {
        id: 'morning-dew',
        title: 'Morning Dew',
        price: '1,250,000 VND',
        image: '/img/lavender.jpg',
        shortDescription:
            'A luminous bouquet of orchard roses, white ranunculus, and sweet pea paired with soft snapdragons for a fresh morning bloom.',
        description: 'Bình gốm trắng thấp, cắm hoa hồng trà màu cam nhạt/pastel.',
        detail: {
            title: 'An artisanal arrangement, grown with intention.',
            text: `The Morning Dew bouquet brings together the sweetest floral notes with a gentle palette designed to feel both intimate and luminous. Each stem is selected for texture and scent, then arranged to create a composition that feels organic, layered, and effortlessly elegant. The result is a bouquet that lands beautifully in any setting, from a quiet breakfast table to a celebratory gift.`,
        },
        attributes: ['Orchard Roses', 'White Ranunculus', 'Sweet Pea & Snapdragon'],
        careItems,
        reviews: [
            {
                name: 'Mai Anh',
                text: 'The bouquet arrived beautifully arranged and lasted longer than expected. The scent was soft and elegant.',
            },
            {
                name: 'Quang Huy',
                text: 'Loved the thoughtful combination of flowers and the packaging. It felt luxurious and natural.',
            },
        ],
        rating: 4.8,
    },
    {
        id: 'wild-gardenia',
        title: 'Wild Gardenia',
        price: '980,000 VND',
        image: '/img/phalaenopsis-orchids.jpg',
        shortDescription:
            'A bright and airy arrangement of gardenia, ranunculus, and seasonal blooms wrapped in natural textures.',
        description: 'Bó hoa hướng dương rực rỡ gói bằng dây thừng thắt nơ đơn giản.',
        detail: {
            title: 'A fresh composition with effortless charm.',
            text: `Wild Gardenia brings a playful contrast of crisp white petals and green foliage. Each stem is selected for its poise and clarity, resulting in a bouquet that feels light, fragrant, and modern. Ideal for gifting or brightening a quiet corner.`,
        },
        attributes: ['Gardenia', 'Ranunculus', 'Lemon Leaf'],
        careItems,
        reviews: [
            {
                name: 'Phương Ly',
                text: 'The flowers were so fresh and beautifully presented. The scent made our home feel welcoming.',
            },
            {
                name: 'Minh Tú',
                text: 'Perfect gift for a special occasion—delicate, soft, and memorable.',
            },
        ],
        rating: 4.6,
    },
    {
        id: 'velvet-noir',
        title: 'Velvet Noir',
        price: '2,450,000 VND',
        image: '/img/background.jpg',
        shortDescription:
            'A dramatic bouquet built around velvet roses, anemones, and dark foliage for an elegant statement.',
        description: 'Hộp trụ tròn màu đen sang trọng chứa đầy hoa hồng đỏ nhung.',
        detail: {
            title: 'A moody bouquet with rich, dramatic depth.',
            text: `Velvet Noir blends deep blooms and lush greenery to create an atmosphere of glamour and intimacy. This arrangement is designed to make an impression with bold contrast and rich texture, ideal for evening events or refined gifting.`,
        },
        attributes: ['Velvet Roses', 'Anemones', 'Eucalyptus'],
        careItems,
        reviews: [
            {
                name: 'Linh Chi',
                text: 'Velvet Noir felt luxurious and bold. It made the room feel sophisticated and warm.',
            },
            {
                name: 'Anh Dũng',
                text: 'A statement bouquet with beautiful structure and lasting freshness.',
            },
        ],
        rating: 4.9,
    },
]

export function getProductById(id) {
    return products.find((product) => product.id === id)
}

export function getRelatedProducts(id) {
    return products.filter((product) => product.id !== id).slice(0, 3)
}

export default products
