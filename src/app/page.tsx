import Image from 'next/image'
import { Inter } from 'next/font/google'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading size="lg" className='three-d text-black dark:text-light-gold'>
            Easily Determine <br /> text similarity.
          </LargeHeading>
          <Paragraph className="max-w-xl lg:text-left">
            With the text similarity API, you can easily determine the similarity between two pieces
            of text with a free{" "}
            <Link href="/login" className='underline underline-offset-2 text-black dark:text-light-gold'>
              API Key
            </Link>
          </Paragraph>
          <div className="relative w-full lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
            priority
            className='img-shadow max-w-xl'
            style={{objectFit:"contain"}}
            quality={100}
            fill
            src="/typewriter.png"
            alt="typewriter"/>
          </div>
        </div>
      </div>
    </div>
  )
}
