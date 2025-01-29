import { Poppins } from "next/font/google";

import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

// coding along https://www.youtube.com/watch?v=1MTyCvS05V4&t=1363s
export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <div className="space-y-6 text-center">
        <Avatar>
          <AvatarImage src="/images/logo.png" />
        </Avatar>
        <p className={`text-white text-lg py-5 ${font.className}`}>
          A simple messenger for our kids
        </p>
      </div>
      <LoginButton asChild>
        <Button variant='gradient' size='lg'>Sign In</Button>
      </LoginButton>
    </main>
  );
}
