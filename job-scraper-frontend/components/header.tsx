import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              JobHub
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/jobs" className="text-gray-600 hover:text-gray-900">Find Jobs</Link></li>
              <li><Link href="/companies" className="text-gray-600 hover:text-gray-900">Companies</Link></li>
              <li><Link href="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-2">
            <div>
              <Button variant="outline">Sign In</Button>
              <Button className="ml-2">Profile</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

