import GlobalLayout from '@/components/layout/GlobalLayout'
import MiddleBar from '@/components/layout/MiddleBar'
import RightBar from '@/components/layout/RightBar'
import Stories from '@/components/Stories'
import Thoughts from '@/components/Thoughts'
import Posts from '@/components/Posts'
import SearchedUsers from '@/components/layout/SearchedUsers'



export default function Home() {
  return (
    <GlobalLayout>
      <MiddleBar>
        <Stories/>
        <Thoughts/>
        <Posts/>
      </MiddleBar>

      <RightBar>
        <SearchedUsers/>
      </RightBar>
    </GlobalLayout>
  )
}