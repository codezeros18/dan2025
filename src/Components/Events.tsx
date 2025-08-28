import React, { useState } from 'react'
import dgts1 from '../assets/dgts1.webp'
import donor2 from '../assets/donor2.webp'
import award3 from '../assets/award3.webp'
import { Link } from 'react-router-dom'

interface Card {
  title: string
  date: string
  image: string
  link: string
}

const cards: Card[] = [
  {
    title: 'ANW',
    date: 'May',
    image: donor2,
    link: '/proker#anw',
  },
  {
    title: 'DGTS',
    date: 'August',
    image: dgts1,
    link: '/proker#dgts',
  },
  {
    title: 'Awarding Night',
    date: 'November',
    image: award3,
    link: '/proker#award',
  },
]

const Events: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {cards.map((card, i) => (
          <Link
            to={card.link}
            key={i}
            onClick={() => setActiveIndex(i)}
            className="relative min-w-full h-[28vh] md:h-[65vh] flex items-center justify-center cursor-pointer overflow-hidden group transition-all duration-300"
          >
            <img
              src={card.image}
              alt={`${card.title} image`}
              className={`absolute w-full h-full object-cover transition-all duration-700 ease-in-out 
                grayscale 
                ${activeIndex === i ? 'grayscale-0' : 'group-hover:grayscale-0'}
              `}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60 z-0" />

            {/* Text */}
            <div className="relative z-10 p-8 md:p-12 text-center flex-grow">
              <h1 className="text-white leading-[46px] md:leading-[32px] font-extrabold text-[32px] md:text-[25px] tracking-normal mb-0 md:mb-2">
                {card.title}
              </h1>
              <p className="text-white opacity-65 text-[18px] md:text-[14px] tracking-tight mb-4">
                {card.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Events
