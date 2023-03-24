import { Icons } from '@/components/Icons'
import UserAuthForm from '@/components/UserAuthForm'
import { buttonVariants } from '@/components/ui/Button'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import Link from 'next/link'
import { FC } from 'react'


const page: FC = ({}) => {
  return <div className='inset-0 absolute mx-auto container flex flex-col h-screen items-center justify-center'>
    <div className="mx-auto flex flex-col w-full justify-center space-y-6 max-w-lg">
        <div className="flex flex-col items-center gap-6 text-center">
            <Link className={buttonVariants({
                variant:"ghost",
                className:"w-fit"
            })} href="/">
                <Icons.ChevronLeft className='mr-2 h-4 w-4'/>
                Back to Home
            </Link>
            <LargeHeading>Welcome Back!</LargeHeading>
            <Paragraph>Please Sign In using your google account.</Paragraph>
            <UserAuthForm/>
        </div>
    </div>
  </div>
}

export default page