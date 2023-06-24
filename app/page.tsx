"use client"
import Navbar from './Navbar'
import SearchFilter from './components/searchFilter'
export default function Home() {
  return (
   <main className="text-red-400">
    {/* @ts-ignore */}
      <Navbar></Navbar>
      <SearchFilter></SearchFilter>
    </main>
  )
}
