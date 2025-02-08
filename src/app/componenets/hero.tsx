
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

interface Data {
  image: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
}

const Hero = ({data}: {data: Data}) => {

  
  return (
    <div>
      <section>
  <div className="container px-5 py-8 mx-auto ">
    <div className="flex flex-wrap -m-4 ">
      <div className="p-4 md:w-1/3  ">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md shadow-green-950">
        <Link href={`/blog/${data.slug.current}`}>
          <Image  className="lg:h-48 md:h-36 w-full object-cover object-center" src={urlFor(data.image).url()} alt="blog" width={750} height={700}/>
          <div className="p-6 bg-teal-100">
            <h1 className="text-2xl font-bold text-teal-800 mb-3">{data.title}</h1>
            <p className="text-teal-600 mb-3">{data.description}</p>
            <div className="flex items-center flex-wrap ">
              <button className="text-teal-800 text-lg font-semibold inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              </button>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
export default Hero