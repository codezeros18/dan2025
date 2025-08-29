import React from 'react'
import img1 from '../assets/donor2.webp'
import logo from '../assets/logo6.webp'

const AboutUsDAN: React.FC = () => {
  return (
    <>
      <section className="relative py-16 px-6 md:px-12 lg:px-20 bg-white">
        {/* Background decorative logos */}
<img
  src={logo}
  alt="Logo bg"
  className="absolute top-10 left-5 w-20 opacity-20 rotate-12"
/>
<img
  src={logo}
  alt="Logo bg"
  className="absolute top-1/2 right-20 w-24 opacity-15 -rotate-45"
/>
<img
  src={logo}
  alt="Logo bg"
  className="absolute bottom-20 left-1/4 w-16 opacity-10 rotate-90"
/>
<img
  src={logo}
  alt="Logo bg"
  className="absolute bottom-10 right-10 w-28 opacity-10 -rotate-30"
/>

{/* tambahan baru */}
<img
  src={logo}
  alt="Logo bg"
  className="absolute top-16 right-8 w-20 opacity-15 rotate-6"
/>
<img
  src={logo}
  alt="Logo bg"
  className="absolute top-1/3 left-10 w-24 opacity-10 -rotate-12"
/>


        <div className="max-w-6xl mx-auto w-full my-12 md:my-20">
          {/* Title 1 */}
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center
                         bg-gradient-to-r from-[#0a1a4f]/80 via-[#1a2e7a]/80 to-[#27459b]/80
                         bg-clip-text text-transparent">
            WHAT IS DAN 2025?
          </h2>

          {/* Grid section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-20">
            {/* Left image */}
            <div className="col-span-1 md:col-span-6 flex justify-center">
              <img
                src={img1}
                alt="DUNAR UMN"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Right text */}
            <div className="col-span-1 md:col-span-6 flex flex-col items-center md:items-start">
              <p className="leading-relaxed mb-8
                            bg-gradient-to-r from-[#0a1a4f]/60 via-[#1a2e7a]/60 to-[#27459b]/60
                            bg-clip-text text-transparent">
                Duta Anti Narkoba (DAN) UMN merupakan LSO (Lembaga Semi Otonom) yang menyuarakan gerakan anti narkoba baik secara
                internal maupun eksternal, sesuai dengan esensi kampus yang menolak segala bentuk penyalahgunaan narkoba. Tagline
                “Stay Sharp, Stay Strong, Stay Clean!” ingin membawakan pesan bahayanya penyalahgunaan narkoba kepada semua kalangan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsDAN
