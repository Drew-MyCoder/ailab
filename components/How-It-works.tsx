"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Upload Data",
    description: "Securely upload your dataset or AI model to the platform.",
  },
  {
    number: "02",
    title: "Run Audit",
    description: "Our platform analyzes your system for biases, fairness, compliance, and performance.",
  },
  {
    number: "03",
    title: "Get Insights",
    description: "Receive a detailed report with actionable recommendations and visualizations.",
  },
  {
    number: "04",
    title: "Collaborate & Improve",
    description: "Share findings with your team, implement changes, and track progress in real-time.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 dark:bg-white bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight dark:text-gray-900 text-white">How It Works</h2>
            <p className="max-w-[900px] dark:text-gray-600 text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A simple, effective process to audit your AI systems
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl mt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Number Circle */}
                <div className="dark:bg-white bg-black flex items-center justify-center relative z-10 mb-10">
                  <span className="text-7xl italic font-medium dark:text-black text-white">{step.number}</span>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold dark:text-gray-900 text-white mt-4">{step.title}</h3>
                <p className="dark:text-gray-600 text-white">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Separate connecting line that runs below all numbers */}
          <div className="hidden md:block relative mt-[-155px] mx-16 pb-3">
            <div className="flex items-center justify-between">
              {/* First segment */}
              <div className="w-3 h-3 rounded-full dark:bg-black bg-white mx-1"></div>
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full dark:bg-black bg-white mx-1"></div>

              {/* Second segment */}
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full dark:bg-black bg-white mx-1"></div>

              {/* Third segment */}
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full dark:bg-black bg-white mx-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
