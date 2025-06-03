'use client'

import { motion } from "framer-motion";
import { Shield, BarChart, FileCheck, Brain, Scale, Lock, Users, Settings, Activity } from "lucide-react";

const features = [
  { icon: Shield, title: "Bias Detection", description: "Identify and mitigate biases in AI models and datasets with advanced fairness metrics." },
  { icon: Scale, title: "Fairness Metrics", description: "Ensure equitable outcomes across all demographic groups with actionable insights." },
  { icon: FileCheck, title: "Compliance Checks", description: "Validate adherence to GDPR, EU AI Act, CCPA, and other global regulations." },
  { icon: Brain, title: "Explainability Tools", description: "Understand AI decisions with clear, interpretable insights using SHAP, LIME, and more." },
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {/* Header Column */}
      <div className="lg:col-span-1">
            <div className="space-y-4 sm:text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Why Choose Our AI Auditing Platform?
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive solutions for ensuring fair, transparent, and compliant AI systems
              </p>
            </div>
          </div>

           {/* Features Grid - 2 columns on large screens */}
           <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-[0_4px_6px_rgba(0,0,0,0.2)] ${
                index === 0 ? "bg-[#FF6984] text-white -rotate-2 transform" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
               <div className={`rounded-full p-3 ${index === 0 ? "bg-white/20" : "bg-[#FF6984]/10"}`}>
                    <feature.icon className={`h-6 w-6 ${index === 0 ? "text-white" : "text-[#FF6984]"}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${index === 0 ? "text-white" : ""}`}>{feature.title}</h3>
                  <p className={`text-center ${index === 0 ? "text-white/90" : "text-muted-foreground"}`}>
                    {feature.description}
                  </p>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
