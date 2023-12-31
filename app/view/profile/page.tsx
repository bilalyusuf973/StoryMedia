"use client"
import Navbar from '@/components/layout/Navbar'
import LeftBar from '@/components/layout/LeftBar'
import MiddleBar from '@/components/layout/MiddleBar'
import RightBar from '@/components/layout/RightBar'

import BackBtnHeader from '@/components/BackBtnHeader'
import UserHero from '@/components/user/UserHero'
import UserBio from '@/components/user/UserBio'
import PostFeed from '@/components/PostFeed'

import useCurrentUser from '@/hooks/useCurrentUser'
// import useUser from '@/hooks/useUser'

export default function UserView() {
    const { data, isLoading } = useCurrentUser();
    // const { data: fetchedUser } = useUser(username);

  return (
    <div className='homepapge w-full h-full'>
      <Navbar/>
      <div className="flex">
        <LeftBar/>

        <MiddleBar>
           <div className='h-full w-full flex flex-col'>
              <BackBtnHeader showBackArrow={true} label={`@${data?.currentUser?.username}`}/>
              <UserHero username={data?.currentUser?.username}/>
              <UserBio/>
              <PostFeed/>
           </div>
        </MiddleBar>

        <RightBar>
          <></>
        </RightBar>
      </div>
    </div>
  )
}