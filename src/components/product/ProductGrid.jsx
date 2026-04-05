import React from 'react'
import ProductCard from './ProductCard'

const products = [
  {
    title: 'Morning Dew',
    price: '1,250,000 VNĐ',
    image: '/img/lavender.jpg',
    description: 'Bình gốm trắng thấp, cắm hoa hồng trà màu cam nhạt/pastel.',
  },
  {
    title: 'Wild Gardenia',
    price: '980,000 VNĐ',
    image: '/img/phalaenopsis-orchids.jpg',
    description: 'Bó hoa hướng dương rực rỡ gói bằng dây thừng thắt nơ đơn giản.',
  },
  {
    title: 'Velvet Noir',
    price: '2,450,000 VNĐ',
    image: '/img/background.jpg',
    description: 'Hộp trụ tròn màu đen sang trọng chứa đầy hoa hồng đỏ nhung.',
  },
]

function ProductGrid() {
  return (
    <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </section>
  )
}

export default ProductGrid
