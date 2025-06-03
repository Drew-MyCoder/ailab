import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"


export function CTASection() {


  return (
    <section className="w-full py-16 md:py-24 bg-[#FF6984]/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-2xl dark:text-white text-black font-medium tracking-tighter md:text-4xl/tight lg:text-5xl">
            Let&apos;s make it official -- sign up to 
            <br></br>
            take control of your system&apos;s transparency
          </h2>
          <p className="text-[#FF6984] md:text-4xl/relaxed text-2xl">
            Join leading organizations in building fair,
            <br></br>
            transparent, and compliant AI systems. 
          </p>
          <div className="mt-6">
            <Button size="lg" variant="default" className="px-1 py-6 mt-5 text-lg">
                  <div className="flex flex-row items-center justify-center">
                    <div className="bg-[#FF6984] w-12 h-11 rounded-xl flex items-center justify-center">
                    <ArrowRight />
                    </div>
                    <p className="ml-3 mr-2">Get Started</p>
                  </div>
                </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

