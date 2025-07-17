"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function PricingSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const plans = [
    {
      name: "Basic",
      price: "$499",
      description: "For small teams and startups",
    },
    {
      name: "Pro",
      price: "$999",
      description: "For growing organizations",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 container mx-auto"
      ref={sectionRef}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Pricing Plans
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your AI auditing needs
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          {/* Basic and Pro - Side by side on md+ screens */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {plans.slice(0, 2).map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
              >
                <Card
                  className={`flex flex-col h-full ${
                    plan.popular ? "bg-red-400 border-red-500 text-white" : ""
                  }`}
                >
                  <CardHeader className="flex flex-col items-center text-center space-y-6">
                    {plan.popular && (
                      <div className="rounded-full bg-white/20 px-3 py-1 text-sm text-white w-fit">
                        Most Popular
                      </div>
                    )}

                    {/* Pricing on top */}
                    <div className="flex flex-col items-center">
                      <span
                        className={`text-4xl font-bold ${
                          plan.popular ? "text-white" : ""
                        }`}
                      >
                        {plan.price}/mo
                      </span>
                    </div>

                    {/* Plan name with lines on either side */}
                    <div className="flex items-center w-full">
                      <div
                        className={`flex-1 h-1 ${
                          plan.popular ? "bg-white/30" : "bg-border"
                        }`}
                      ></div>
                      <CardTitle
                        className={`px-4 text-xl ${
                          plan.popular ? "text-white" : ""
                        }`}
                      >
                        {plan.name}
                      </CardTitle>
                      <div
                        className={`flex-1 h-1 ${
                          plan.popular ? "bg-white/30" : "bg-border"
                        }`}
                      ></div>
                    </div>

                    {/* Description below */}
                    <CardDescription
                      className={`text-center ${
                        plan.popular ? "text-white/80" : ""
                      } text-3xl`}
                    >
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    {/* Add your features here if needed */}
                  </CardContent>

                  <CardFooter>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-white text-[#FF6984] hover:bg-white/90"
                          : "bg-[#FF6984] hover:bg-[#FF6984]/90 text-white"
                      }`}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Enterprise - Full width below */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="w-full"
          >
            <Card className="flex flex-col">
              <CardHeader className="flex flex-col items-center text-center space-y-6">
                {/* Pricing on top */}
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">{plans[2].price}</span>
                </div>

                {/* Plan name with lines on either side */}
                <div className="flex items-center w-full max-w-md">
                  <div className="flex-1 h-1 bg-border"></div>
                  <CardTitle className="px-4 text-xl">
                    {plans[2].name}
                  </CardTitle>
                  <div className="flex-1 h-1 bg-border"></div>
                </div>

                {/* Description below */}
                <CardDescription className="text-center text-3xl">
                  {plans[2].description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
              </CardContent>

              <CardFooter className="justify-center">
                <Button className="bg-[#FF6984] hover:bg-[#FF6984]/90 text-white px-8">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
