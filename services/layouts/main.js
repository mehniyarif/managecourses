import {Sidebar} from '@/components/sidebar'
import {Navbar} from "@/components/navbar";
export default function MainLayout({ children }) {
  return (
      <main className="flex h-screen w-screen">
          <Sidebar></Sidebar>
          <div className="flex flex-col w-full bg-[#fcfcfc] min-h-screen">
              <Navbar></Navbar>
              {children}
          </div>
    </main>
  )
}
