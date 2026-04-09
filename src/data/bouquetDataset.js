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

const bouquetDataset = [
    {
        id: 'amelia-cui-bouquet',
        title: 'Amelia Cui Bouquet',
        price: '$55',
        image: '/img/bouquets/amelia-cui-3h5kKCsa9us-unsplash.jpg',
        shortDescription: 'A soft pastel bouquet with delicate flowers and elegant paper wrapping.',
        description: 'An airy, romantic arrangement with pale pinks, cream blooms, and gentle greenery.',
        detail: {
            title: 'Soft elegance in every petal.',
            text: 'Amelia Cui Bouquet combines subtle tones and luxurious textures for a refined, memorable floral gift.',
        },
        attributes: ['Pastel Blooms', 'Soft Greenery', 'Luxury Wrap'],
        careItems,
        reviews: [
            { name: 'Thu Hà', text: 'Beautifully curated and fresh, the bouquet lasted a long time.' },
            { name: 'Minh Tú', text: 'I loved the gentle palette and the fine details in the wrapping.' },
        ],
        rating: 4.8,
    },
    {
        id: 'arjun-lama-bouquet',
        title: 'Arjun Lama Bouquet',
        price: '$42',
        image: '/img/bouquets/arjun-lama-39UfaHtPxnY-unsplash.jpg',
        shortDescription: 'Clean, modern stems tied with a pink ribbon for timeless appeal.',
        description: 'A minimalist collection of fresh blooms arranged with a crisp, elegant composition.',
        detail: {
            title: 'Modern freshness with classic charm.',
            text: 'Arjun Lama Bouquet highlights simple lines and refined color contrast for a contemporary floral statement.',
        },
        attributes: ['Ribbon Tie', 'Minimal Design', 'Fresh Stems'],
        careItems,
        reviews: [
            { name: 'Hà Giang', text: 'The design felt very sleek and premium. Great for a special occasion.' },
            { name: 'Quốc Bảo', text: 'Perfect for a clean, modern room setup.' },
        ],
        rating: 4.7,
    },
    {
        id: 'evelien-van-den-brink-bouquet',
        title: 'Evelien Bouquet',
        price: '$60',
        image: '/img/bouquets/evelien-van-den-brink-n6skdHYd_q0-unsplash.jpg',
        shortDescription: 'A textured bouquet of dried and fresh flowers in warm autumn tones.',
        description: 'A bold, artful bouquet featuring dried accents and seasonal blooms for dramatic depth.',
        detail: {
            title: 'Textured luxury with autumn warmth.',
            text: 'Evelien Bouquet brings together unusual forms and rich color contrasts for a standout floral composition.',
        },
        attributes: ['Dried Flowers', 'Textured Accents', 'Seasonal Color'],
        careItems,
        reviews: [
            { name: 'Ngọc Anh', text: 'The texture and color palette are stunning. It feels very artistic.' },
            { name: 'Linh Phạm', text: 'A unique, memorable bouquet that stands out in any room.' },
        ],
        rating: 4.9,
    },
    {
        id: 'kaja-reichardt-bouquet',
        title: 'Kaja Reichardt Bouquet',
        price: '$50',
        image: '/img/bouquets/kaja-reichardt-S3__pWlOEs8-unsplash.jpg',
        shortDescription: 'A romantic rose bouquet wrapped in soft pink paper and tied with elegant ribbon.',
        description: 'A lush arrangement of roses and seasonal accents with a polished, feminine finish.',
        detail: {
            title: 'Romantic blooms with graceful styling.',
            text: 'Kaja Reichardt Bouquet offers timeless romance through soft petals, delicate color, and premium wrapping.',
        },
        attributes: ['Rose Focus', 'Pink Wrap', 'Delicate Ribbon'],
        careItems,
        reviews: [
            { name: 'Mai Hương', text: 'Such a lovely bouquet — very feminine and elegant.' },
            { name: 'Hoàng Dũng', text: 'The roses were fresh and the presentation was beautiful.' },
        ],
        rating: 4.8,
    },
    {
        id: 'natalie-kinnear-bouquet',
        title: 'Natalie Kinnear Bouquet',
        price: '$48',
        image: '/img/bouquets/natalie-kinnear-MYIod48sQCw-unsplash.jpg',
        shortDescription: 'A bright cream and pink bouquet with fresh green buds for a soft romantic touch.',
        description: 'A gentle, elegant bouquet that combines creamy petals and soft blush accents with airy foliage.',
        detail: {
            title: 'Soft romance with luminous white blooms.',
            text: 'Natalie Kinnear Bouquet feels tender and luxurious, perfect for thoughtful gifting or serene decor.',
        },
        attributes: ['Cream Roses', 'Pink Accents', 'Airy Greenery'],
        careItems,
        reviews: [
            { name: 'Trâm Anh', text: 'The mix of flowers was very elegant and looked fresh for days.' },
            { name: 'Đức Anh', text: 'Soft colors and great volume, exactly what I wanted.' },
        ],
        rating: 4.7,
    },
    {
        id: 'robin-baral-bouquet',
        title: 'Robin Baral Bouquet',
        price: '$52',
        image: '/img/bouquets/robin-baral-O0YVKmrTPCM-unsplash.jpg',
        shortDescription: 'A refined mix of white and pale yellow blooms with lush greenery.',
        description: 'A bright yet elegant bouquet that feels fresh, polished, and naturally luxurious.',
        detail: {
            title: 'Classic charm with subtle contrast.',
            text: 'Robin Baral Bouquet balances clean white blooms with gentle yellow highlights and soft foliage texture.',
        },
        attributes: ['White Blooms', 'Yellow Highlights', 'Elegant Greens'],
        careItems,
        reviews: [
            { name: 'Lan Anh', text: 'The bouquet had a classy, high-end look and felt very premium.' },
            { name: 'Quang Huy', text: 'It was fresh and fragrant, perfect for a nice gift.' },
        ],
        rating: 4.6,
    },
    {
        id: 'uljana-borodina-bouquet',
        title: 'Uljana Borodina Bouquet',
        price: '$40',
        image: '/img/bouquets/uljana-borodina-NFj6pEUdmpY-unsplash.jpg',
        shortDescription: 'A bright, joyful stem bouquet of pink tulips in a clear glass vase.',
        description: 'A fresh tulip arrangement with vibrant color and simple, elegant styling.',
        detail: {
            title: 'Bright tulips with fresh, uplifting energy.',
            text: 'Uljana Borodina Bouquet brings cheerful pink florals and crisp stems together for a lively display.',
        },
        attributes: ['Pink Tulips', 'Glass Vase', 'Fresh Stems'],
        careItems,
        reviews: [
            { name: 'Bảo Anh', text: 'Loved the tulips — they were bright and lasted beautifully.' },
            { name: 'Phương Nhi', text: 'A very happy bouquet, great for springtime decor.' },
        ],
        rating: 4.7,
    },
]

export default bouquetDataset
