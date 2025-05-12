import React from 'react';
import { motion } from 'framer-motion';
import dunar1 from '../assets/award2.webp';
import dunar2 from '../assets/dgts1.webp';
import dunar3 from '../assets/donor1.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';

const fadeInUpContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const sections = [
  {
    title: 'VISION',
    content:
      'Menjadikan generasi yang dapat membentuk lingkungan internal maupun eksternal Universitas Multimedia Nusantara yang bebas dari penyalahgunaan narkoba, kompeten, dan mampu bersaing dengan cara yang kreatif dan inovatif.',
  },
  {
    title: 'MISSION',
    content:
      'Mengadakan sosialisasi langsung pada pelajar dan masyarakat tentang bahaya narkoba. Menjadi duta yang kompeten sehingga dapat memberikan contoh yang baik di kalangan mahasiswa dan masyarakat. Memaksimalkan penggunaan media sosial sebagai sarana yang memberikan dampak bagi masyarakat. Menyelenggarakan kegiatan yang dapat membangun hubungan antar organisasi internal dan eksternal kampus.',
  },
];

const swiperSettings = {
  modules: [Autoplay],
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  className: 'w-full rounded-[12px]',
};

const dunar = [dunar1, dunar2, dunar3];

const Dunar: React.FC = () => {
  return (
    <motion.div
      className='flex flex-col justify-center items-center text-center pt-10 px-4 md:px-0'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUpContainer}
    >
      {/* TOP Section */}
      <div className="h-[80vh] max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-center mb-16 w-full">
        <motion.div className='mx-4 md:mx-8' variants={fadeInUp}>
          <Swiper {...swiperSettings}>
            {dunar.map((dunar, index) => (
              <SwiperSlide key={index}>
                <motion.img
                  src={dunar}
                  alt={`DAN ${index + 1}`}
                  className="w-full h-[26vh] md:h-[42vh] object-cover rounded-[12px]"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left px-4"
          variants={fadeInUp}
        >
          <div className='relative inline-block'>
            <div className='absolute left-1/2 -translate-x-1/2 w-32 md:w-40 h-16 bg-blue-400 opacity-40 blur-2xl rounded-full z-0 pointer-events-none' />
            <h2 className='relative z-10 text-[24px] md:text-[34px] font-extrabold pb-8 tracking-wide font-poppins text-indigo-300 -mt-12 lg:mt-0'>
              What is DAN?
            </h2>
          </div>
          <p className='max-w-[22rem] md:max-w-full text-white opacity-95 text-[14px] md:text-[16px] font-bold leading-relaxed'>
            Duta Anti Narkoba (DAN) UMN merupakan LSO (Lembaga Semi Otonom) yang menyuarakan gerakan anti narkoba baik secara
            internal maupun eksternal, sesuai dengan esensi kampus yang menolak segala bentuk penyalahgunaan narkoba. Tagline
            “Stay Sharp, Stay Strong, Stay Clean!” ingin membawakan pesan bahayanya penyalahgunaan narkoba kepada semua kalangan.
          </p>
        </motion.div>
      </div>

      {/* VISION / MISSION */}
      <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 px-4 md:px-0'>
        {sections.map((section) => (
          <motion.div
            key={section.title}
            className='max-w-[500px] mx-auto'
            variants={fadeInUp}
          >
            <div className='relative inline-block'>
              <div className='absolute left-1/2 -translate-x-1/2 w-40 h-16 bg-blue-400 opacity-40 blur-2xl rounded-full z-0 pointer-events-none' />
              <h2 className='relative z-10 text-[32px] md:text-[44px] font-extrabold pb-8 tracking-wide font-poppins text-indigo-300'>
                {section.title}
              </h2>
            </div>
            <p className='text-white opacity-95 text-[16px] md:text-[20px] font-bold leading-relaxed'>
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* TAGLINE */}
      <motion.div
        className='max-w-[500px] mt-20 px-4 md:px-0'
        variants={fadeInUpContainer}
      >
        <motion.div className='relative inline-block mb-4' variants={fadeInUp}>
          <div className='absolute left-1/2 -translate-x-1/2 w-40 h-16 bg-blue-400 opacity-40 blur-2xl rounded-full z-0 pointer-events-none' />
          <h2 className='relative z-10 text-[34px] md:text-[44px] font-extrabold pb-4 tracking-wide font-poppins text-indigo-300'>
            TAGLINE
          </h2>
        </motion.div>
        <motion.p
          className='text-[28px] md:text-[40px] text-white tracking-wide font-bold text-center'
          variants={fadeInUp}
        >
          Stay Sharp, Stay Strong and Stay Clean
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Dunar;
