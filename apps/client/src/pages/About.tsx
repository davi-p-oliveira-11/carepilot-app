import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>us</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis odio molestias, iste ex saepe ut reprehenderit alias libero, excepturi velit aperiam laudantium maiores nisi minima non eligendi veritatis. Sit, molestias.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio sapiente dignissimos ab autem deserunt consectetur repellendus numquam adipisci maxime, nihil iure, suscipit enim voluptatem, laborum hic velit aliquid blanditiis vel explicabo totam consequatur in.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto perferendis, saepe nemo dolorum enim officia eius consectetur eum repellat nobis! Modi delectus corporis cumque sed?</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>Choose Us</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

      </div>
    </div>
  )
}

export default About