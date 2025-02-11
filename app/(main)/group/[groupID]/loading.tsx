import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  return (
    <div className='flex m-5 *:flex-1 *:h-full h-[90%] w-full flex-row gap-10'>
      <Skeleton className='h-full border border-gray-300'  borderRadius={15}/>
      <Skeleton className='h-full border border-gray-300'  borderRadius={15}/>
      <Skeleton className='h-full border border-gray-300'  borderRadius={15}/>
    </div>
  );
}