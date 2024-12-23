import { Header } from '@/components/header'
import { JobListing } from '@/components/job-listing'

const jobListings = [
  {
    title: "Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$100,000 - $150,000",
    type: "Full-time"
  },
  {
    title: "UX Designer",
    company: "DesignHub",
    location: "New York, NY",
    salary: "$90,000 - $120,000",
    type: "Contract"
  },
  {
    title: "Data Scientist",
    company: "AI Innovations",
    location: "Remote",
    salary: "$120,000 - $180,000",
    type: "Full-time"
  },
  {
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Seattle, WA",
    salary: "$110,000 - $160,000",
    type: "Full-time"
  },
  {
    title: "Product Manager",
    company: "StartupX",
    location: "Austin, TX",
    salary: "$100,000 - $140,000",
    type: "Full-time"
  },
  {
    title: "Mobile App Developer",
    company: "AppWorks",
    location: "Los Angeles, CA",
    salary: "$95,000 - $135,000",
    type: "Contract"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Find Your Dream Job</h1>
        <div className="space-y-6">
          {jobListings.map((job, index) => (
            <JobListing key={index} {...job} />
          ))}
        </div>
      </main>
    </div>
  )
}

