"use client"

import SiteNavbar from "@/components/Navbar"
import Testimonials from "@/components/Testimonials"
import { Button } from "@nextui-org/react"

export default function Home() {
  return (
    <>
      <SiteNavbar />
      {/* <ContentArea /> */}
      <Testimonials />
      <div className="flex flex-wrap gap-4 items-center p-8">
        <Button
          className=""
          color="default"
        >
          Default
        </Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
    </>
  )
}

