'use client'

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function BenefitsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true});

  const benefits = [
    { 
        title: "Ensure ethical AI practices", 
        text: "Reduce risks of biased outcomes and ensure your AI systems make fair decisions for all users.",
        number: "01",
     },
    { 
        title: "Comply with global regulations", 
        text: "Stay ahead of regulatory requirements and avoid costly penalties with proactive compliance.",
        number: "02",
     },
    { 
        title: "Build trust with stakeholders", 
        text: "Demonstrate your commitment to responsible AI through transparent systems and processes.",
        number: "03",
    },
    { 
        title: "Improve model performance", 
        text: "Enhance reliability and accuracy with actionable insights that optimize your AI systems.",
        number: "04",
    },
    { 
        title: "Streamline team collaboration", 
        text: "Enable efficient workflows with role-based access and shared dashboards for your entire team.",
        number: "05",
    },
  ];

  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40" ref={sectionRef}>
      <div className="container px-4 md:px-6">

        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-6">
                <div className="space-y-4 text-start">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Benefits of AI Auditing</h2>
            </div>
            <div className="dark:bg-white bg-black p-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="mb-6 last:mb-0"
              >
                <div className="flex items-start space-x-4 mb-3">
                <div className="bg-[#00BFFF]/10 p-1 dark:bg-white mt-1 flex-shrink-0">
                      <div className="h-5 w-5 dark:text-black text-white flex items-center justify-center text-sm font-medium">
                        {benefit.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold dark:text-black text-white">{benefit.title}</h3>
                    </div>
                  </div>

                  {/* Full-width line */}
                  <div className="w-full h-[2px] bg-gray-300 dark:bg-gray-400 mb-3"></div>
                
              </motion.div>
            ))}
            
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
