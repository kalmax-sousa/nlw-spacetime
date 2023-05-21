import { cookies } from 'next/headers'
import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'
import { Profile } from '@/components/Profile'

export default function Home() {
  const isAutenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="bg-cover-all relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700/50 blur-full" />

        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes " />

        {isAutenticated ? <Profile /> : <SignIn />}

        <Hero />

        <Copyright />
      </div>

      <div className="bg-cover-all flex flex-col bg-[url(../assets/bg-stars.svg)] p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
