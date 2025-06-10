import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Email Signup - Takes 3 columns on large screens */}
          <div className="space-y-4 lg:col-span-3">
            <h1 className="text-4xl dark:text-white font-bold">Sign Up For Email Updates</h1>
            <div className="flex space-x-2 flex-col gap-5 max-w-md">
              <Input placeholder="Enter your email" type="email" className="max-w-[320px]" />
              <Button type="submit" className="max-w-[220px] bg-[#FF6984] dark:text-white">Subscribe</Button>
            </div>
          </div>
          
          {/* Legal - Takes 1 column on large screens */}
          <div className="space-y-4">
            <h3 className="text-lg text-muted-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="font-bold hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="font-bold hover:text-primary transition-colors">
                  Copyright
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company - Takes 1 column on large screens */}
          <div className="space-y-4">
            <h3 className="text-lg text-muted-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="font-bold hover:text-primary transition-colors">
                  Our Company
                </Link>
              </li>
              <li>
                <Link href="#" className="font-bold hover:text-primary transition-colors">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="#" className="font-bold hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="font-bold hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help - Takes 1 column on large screens */}
          <div className="space-y-4">
            <h3 className="text-lg text-muted-foreground">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="font-bold hover:text-primary transition-colors">
                  Help
                </Link>
              </li>
              <li>
                <Link href="#" className="font-bold hover:text-primary transition-colors">
                  FAQS
                </Link>
              </li>
              <li>
                <Link href="#" className="font-bold hover:text-primary transition-colors">
                  Whats New
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Clean Pigg AI Lab. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}