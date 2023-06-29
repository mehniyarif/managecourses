import {Sidebar} from '@/components/sidebar'
import {Navbar} from "@/components/navbar";
export default function MainLayout({ children }) {
  return (
      <main className="flex h-full w-full pl-[270px]">
          <Sidebar></Sidebar>
          <div className="flex pt-[60px] flex-col w-[calc(100%-270px)] ml-auto bg-[#fcfcfc] min-h-screen">
              <Navbar></Navbar>
              {children}
          </div>
    </main>
  )
}
