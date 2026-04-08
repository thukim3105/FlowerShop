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
        id: 'lilac-dream',
        title: 'Lilac Dream',
        price: '$45',
        image: '/img/lilac.jpg',
        shortDescription:
            'A soft and romantic arrangement of lilac blossoms with gentle greenery for a calming presence.',
        description: 'A soft lilac bouquet with a gentle, romantic charm.',
        detail: {
            title: 'A delicate whisper of spring in bloom.',
            text: `Lilac Dream captures the softness of early spring with clusters of lilac blossoms arranged in a natural, flowing form. The bouquet feels airy, nostalgic, and quietly elegant—perfect for intimate spaces or thoughtful gifting.`,
        },
        attributes: ['Lilac', 'Soft Greens', 'Wild Texture'],
        careItems,
        reviews: [
            { name: 'Ngọc Lan', text: 'The purple hue is soothing and the scent is wonderfully relaxing.' },
            { name: 'Hoàng Minh', text: 'A truly refined bouquet with a distinctive elegance.' },
        ],
        rating: 4.7,
    },
    {
        id: 'rose-bliss',
        title: 'Rose Bliss',
        price: '$60',
        image: '/img/rose.jpg',
        shortDescription:
            'A timeless bouquet of classic roses arranged for elegance and romance.',
        description: 'A classic red rose bouquet symbolizing love and luxury.',
        detail: {
            title: 'Classic beauty in full bloom.',
            text: `Rose Bliss brings together premium roses in a structured yet natural arrangement. Rich in color and symbolism, this bouquet is perfect for romantic gestures and special celebrations.`,
        },
        attributes: ['Red Roses', 'Green Leaves', 'Ribbon Wrap'],
        careItems,
        reviews: [
            { name: 'Thu Trang', text: 'The roses are fresh and beautiful, exactly what classic romance should feel like.' },
            { name: 'Anh Khoa', text: 'The perfect gift for someone special.' },
        ],
        rating: 4.9,
    },
    {
        id: 'tulip-touch',
        title: 'Tulip Touch',
        price: '$38',
        image: '/img/tulip.jpg',
        shortDescription:
            'A fresh bundle of tulips with clean lines and modern simplicity.',
        description: 'A colorful tulip bouquet with a fresh, modern aesthetic.',
        detail: {
            title: 'Minimalist beauty with vibrant energy.',
            text: `Tulip Touch highlights the natural elegance of tulips with a simple yet striking composition. The clean stems and soft curves create a modern floral statement.`,
        },
        attributes: ['Tulips', 'Seasonal Greens', 'Natural Wrap'],
        careItems,
        reviews: [
            { name: 'Bảo Ngọc', text: 'The tulips are beautiful and the colors are bright and cheerful.' },
            { name: 'Gia Huy', text: 'Simple design but very elegant.' },
        ],
        rating: 4.6,
    },
    {
        id: 'petunia-poise',
        title: 'Petunia Poise',
        price: '$35',
        image: '/img/petunia.jpg',
        shortDescription:
            'A lively arrangement of petunias with soft cascading blooms.',
        description: 'A vibrant petunia bouquet that feels joyful and full of life.',
        detail: {
            title: 'Playful blooms with graceful movement.',
            text: `Petunia Poise brings vibrant color and natural flow into a cheerful bouquet. The cascading petals add movement and life to any space.`,
        },
        attributes: ['Petunia', 'Green Leaves', 'Soft Texture'],
        careItems,
        reviews: [
            { name: 'Thanh Hà', text: 'The flowers are fresh and colorful.' },
            { name: 'Minh Đức', text: 'It brings a cheerful feeling to the room.' },
        ],
        rating: 4.5,
    },
    {
        id: 'aubrieta-soft',
        title: 'Aubrieta Soft',
        price: '$42',
        image: '/img/aubrieta.jpg',
        shortDescription:
            'A soft ground-flower inspired bouquet with gentle purple hues.',
        description: 'A small, delicate aubrieta bouquet with a natural charm.',
        detail: {
            title: 'A quiet bloom close to nature.',
            text: `Aubrieta Soft draws inspiration from wild garden beds with low-growing blooms and subtle textures, creating a calm and grounded arrangement.`,
        },
        attributes: ['Aubrieta', 'Wild Greens', 'Natural Form'],
        careItems,
        reviews: [
            { name: 'Kim Chi', text: 'Very gentle and natural.' },
            { name: 'Tuấn Anh', text: 'A style quite different from ordinary bouquets.' },
        ],
        rating: 4.6,
    },
    {
        id: 'baby-breath-cloud',
        title: 'Baby Breath Cloud',
        price: '$30',
        image: "/img/baby's-breath.jpg",
        shortDescription:
            'A dreamy cloud of baby’s breath for soft and airy elegance.',
        description: 'A soft white baby’s breath bouquet that feels like a cloud.',
        detail: {
            title: 'Light as air, soft as a whisper.',
            text: `This bouquet creates a cloud-like presence with tiny blooms arranged densely for a soft, floating effect.`,
        },
        attributes: ['Baby’s Breath', 'White Tones', 'Airy Texture'],
        careItems,
        reviews: [
            { name: 'Hồng Nhung', text: 'Delicate and very charming.' },
            { name: 'Quốc Bảo', text: 'Perfect for decorating a room.' },
        ],
        rating: 4.8,
    },
    {
        id: 'cosmos-field',
        title: 'Cosmos Field',
        price: '$44',
        image: '/img/cosmos.jpg',
        shortDescription:
            'A wildflower-inspired cosmos bouquet full of movement and charm.',
        description: 'A soft cosmos bouquet, airy and reminiscent of wildflower fields.',
        detail: {
            title: 'Wild, free, and beautifully imperfect.',
            text: `Cosmos Field captures the essence of open meadows with delicate stems and scattered blooms that feel spontaneous and alive.`,
        },
        attributes: ['Cosmos', 'Wild Greens', 'Airy Stems'],
        careItems,
        reviews: [
            { name: 'Diệu Linh', text: 'It feels very natural and poetic.' },
            { name: 'Hải Nam', text: 'Like a miniature flower field.' },
        ],
        rating: 4.7,
    },
    {
        id: 'daffodil-sun',
        title: 'Daffodil Sun',
        price: '$39',
        image: '/img/daffodil.jpg',
        shortDescription:
            'A cheerful bouquet of daffodils bringing warmth and positivity.',
        description: 'A bright yellow daffodil bouquet symbolizing joy.',
        detail: {
            title: 'A burst of sunshine in bloom.',
            text: `Daffodil Sun radiates warmth with its golden tones, perfect for uplifting moods and brightening interiors.`,
        },
        attributes: ['Daffodil', 'Yellow Blooms', 'Fresh Greens'],
        careItems,
        reviews: [
            { name: 'Phúc An', text: 'The yellow is very bright and cheerful.' },
            { name: 'Mai Phương', text: 'It instantly makes you feel happy.' },
        ],
        rating: 4.6,
    },
    {
        id: 'daisy-day',
        title: 'Daisy Day',
        price: '$36',
        image: '/img/daisy.jpg',
        shortDescription:
            'A playful bouquet of daisies for a lighthearted and fresh feel.',
        description: 'A simple yet lively bouquet of white daisies.',
        detail: {
            title: 'Simple joy in every petal.',
            text: `Daisy Day embraces simplicity with bright white petals and sunny centers, creating a cheerful and youthful arrangement.`,
        },
        attributes: ['Daisy', 'White Petals', 'Yellow Center'],
        careItems,
        reviews: [
            { name: 'Thảo Vy', text: 'Very cute and delicate.' },
            { name: 'Trung Hiếu', text: 'Perfect for gifting to friends.' },
        ],
        rating: 4.5,
    },
    {
        id: 'hydrangea-haze',
        title: 'Hydrangea Haze',
        price: '$65',
        image: '/img/hydrangea.jpg',
        shortDescription:
            'A voluminous bouquet of hydrangeas with soft pastel tones.',
        description: 'A lush hydrangea bouquet in soft pastel tones.',
        detail: {
            title: 'Soft clouds of layered petals.',
            text: `Hydrangea Haze creates fullness and softness with clustered blooms that feel plush and luxurious.`,
        },
        attributes: ['Hydrangea', 'Pastel Tones', 'Full Texture'],
        careItems,
        reviews: [
            { name: 'Yến Nhi', text: 'Very fluffy and beautiful.' },
            { name: 'Đức Thịnh', text: 'The flowers are large and very striking.' },
        ],
        rating: 4.8,
    },
    {
        id: 'lavender-mist',
        title: 'Lavender Mist',
        price: '$47',
        image: '/img/lavender.jpg',
        shortDescription:
            'A calming bouquet of lavender stems with a soft, aromatic presence.',
        description: 'A gentle lavender bouquet with a relaxing scent.',
        detail: {
            title: 'A soothing floral escape.',
            text: `Lavender Mist blends calming fragrance with soft purple hues, perfect for relaxing spaces and gentle moods.`,
        },
        attributes: ['Lavender', 'Aromatic Herbs', 'Soft Purple'],
        careItems,
        reviews: [
            { name: 'Thanh Tâm', text: 'The scent is very pleasant.' },
            { name: 'Hữu Phúc', text: 'It looks very chill and relaxing.' },
        ],
        rating: 4.7,
    },
    {
        id: 'orchid-elegance',
        title: 'Orchid Elegance',
        price: '$85',
        image: '/img/phalaenopsis-orchids.jpg',
        shortDescription:
            'A refined arrangement of phalaenopsis orchids with modern elegance.',
        description: 'A luxurious phalaenopsis orchid arrangement for premium spaces.',
        detail: {
            title: 'Grace in every curve.',
            text: `Orchid Elegance showcases the sculptural beauty of orchids, creating a minimalist yet luxurious statement.`,
        },
        attributes: ['Orchid', 'Minimal Stem', 'Luxury Form'],
        careItems,
        reviews: [
            { name: 'Ngọc Anh', text: 'Very elegant and refined.' },
            { name: 'Minh Quân', text: 'Looks beautiful in the living room.' },
        ],
        rating: 4.9,
    },
    {
        id: 'wisteria-fall',
        title: 'Wisteria Fall',
        price: '$58',
        image: '/img/background.jpg',
        shortDescription:
            'A cascading arrangement of wisteria blooms with soft lavender tones and graceful movement.',
        description: 'A soft wisteria bouquet with dreamy lavender tones and graceful draping.',
        detail: {
            title: 'A poetic cascade of elegance.',
            text: `Wisteria Fall captures the flowing beauty of hanging blossoms with delicate clusters that drape naturally. The soft lavender hues and gentle movement create a romantic, almost dreamlike atmosphere—perfect for artistic displays or serene interiors.`,
        },
        attributes: ['Wisteria', 'Cascading Blooms', 'Lavender Tones'],
        careItems,
        reviews: [
            { name: 'Bích Ngọc', text: 'The hanging blooms are so beautiful and poetic.' },
            { name: 'Quang Hải', text: 'It looks very artistic and distinctive.' },
        ],
        rating: 4.8,
    },
]

export function getProductById(id) {
    return products.find((product) => product.id === id)
}

export function getRelatedProducts(id) {
    return products.filter((product) => product.id !== id).slice(0, 3)
}

export default products
