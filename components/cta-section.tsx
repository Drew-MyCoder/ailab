"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GetEarlyAccessBtn } from "./get-early-access";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 dark:bg-black/70 container mx-auto">
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.h2
            className="text-2xl dark:text-white text-black font-medium tracking-tighter md:text-4xl/tight lg:text-5xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Let&apos;s make it official -- sign up to
            <br></br>
            take control of your system&apos;s transparency
          </motion.h2>

          <motion.p
            className="text-[#FF6984] md:text-4xl/relaxed text-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Join leading organizations in building fair,
            <br></br>
            transparent, and compliant AI systems.
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                variant="default"
                className="px-1 py-6 mt-5 text-lg"
              >
                <div className="flex flex-row items-center justify-center">
                  <motion.div
                    className="bg-[#FF6984] w-12 h-11 rounded-xl flex items-center justify-center"
                    whileHover={{
                      x: 5,
                      backgroundColor: "#FF4A6B",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <motion.div
                      animate={{
                        x: [0, 3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight />
                    </motion.div>
                  </motion.div>
                  <GetEarlyAccessBtn />
                </div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
