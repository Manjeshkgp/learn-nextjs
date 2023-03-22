import { FC } from 'react'
import type { Metadata } from 'next'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import DocumentaionTab from '@/components/ui/DocumentaionTab'

import "simplebar-react/dist/simplebar.min.css"

export const metadata:Metadata ={
    title:"Similarity API | Documentation",
    description:"API Page for this website"
}

const page: FC = ({}) => {
  return (<>
  <div className="container max-w-7xl mx-auto pb-10 mt-12">
    <div className="flex flex-col items-center gap-6">
    <LargeHeading>Making a Request</LargeHeading>
    <Paragraph>api/v1/similarity</Paragraph>
    <DocumentaionTab/>
    </div>
  </div>
  </>)
}

export default page