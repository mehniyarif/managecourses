'use client'

import { useRouter } from 'next/navigation'

export default function CoursePage() {
    const router = useRouter()

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-yellow-500 to-amber-300">
            Students
        </div>
    );
}
