import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, DollarSign } from 'lucide-react'

interface JobListingProps {
  title: string
  company: string
  location: string
  salary: string
  type: string
}

export function JobListing({ title, company, location, salary, type }: JobListingProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 mb-4">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <div className="flex items-center text-gray-600 mb-2">
              <Building2 className="w-4 h-4 mr-2" />
              <span>{company}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{location}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>{salary}</span>
            </div>
            <Badge variant="secondary" className="mt-2">{type}</Badge>
          </div>
          <div className="mt-4 md:mt-0">
            <Button>Apply Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

