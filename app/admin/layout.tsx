"use client"

import { useFirebase } from '@/context/Firebase'
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { currentUser } = useFirebase()
  const router = useRouter()

  useEffect(() => {
    if (currentUser === null) {
      router.push("/")
    }
  }, [currentUser])

  return <>{children}</>
}
