import React from 'react'

function Demo() {
  return (
   <div>
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
     <div class="flex flex-wrap">
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
      <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
      </div>
     </div>
   </div>
 </section>

 {filterContent.title && (
  <section className="text-gray-600 body-font font-serif  bg-gradient-to-r from-cyan-50 via-fuchsia-50 to-blue-50">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src={filterContent.src}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold  text-[#14406D]">
          {filterContent.title}
        </h1>
        <p className="mb-8 leading-relaxed">{filterContent.con}</p>
        <div className="flex justify-center">
          <Link
            to="/Contactus"
            className="bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 px-3 py-2 focus:outline-none rounded-tr-xl rounded-bl-xl text-base mt-0"
          >
            Connect-Us
          </Link>
        </div>
      </div>
    </div>
  </section>
)}
</div>
  )
}

export default Demo