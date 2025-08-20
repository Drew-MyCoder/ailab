"use client";

// import React from 'react';
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { GetEarlyAccessBtn } from "./get-early-access";
import Image from "next/image";
import HeroImage from "../public/Model Insights.png";
// import { Button } from "@/components/ui/button";

export function HeroSection() {
  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Item variants for text elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Button variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  // Visual element variants
  const visualVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  // Card elements variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1], // Custom spring-like ease
      },
    },
  };

  return (
    <motion.section
      className="w-full mt-10 container mx-auto py-4 md:py-24 lg:py-10 xl:py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container px-7 md:px-6">
        <div className="flex flex-col space-y-4 space-x-2">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            variants={containerVariants}
          >
            <div className="m-3 p-3 grid gap-6 lg:mb-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                Audit AI Systems for Fairness, Transparency and Compliance
              </motion.h1>
              <motion.div
                className="text-2xl text-muted-foreground md:text-2xl"
                variants={itemVariants}
              >
                Audit AI Systems for Fairness, Transparency and Compliance
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Button
                    asChild
                    size="lg"
                    variant="default"
                    className="px-1 py-6 mt-5 text-lg"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="bg-[#FF6984] w-12 h-11 rounded-xl flex items-center justify-center">
                        <ArrowRight />
                      </div>
                      {/* <p className="ml-3 mr-2">Get Started</p> */}
                      <GetEarlyAccessBtn />
                    </div>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            {/*  */}
          </motion.div>
          {/* real image */}
          <Image
            src={HeroImage}
            alt="image"
            width={0} // still needed to avoid layout shift
            height={0}
            style={{ width: "auto", height: "auto ", margin: "auto auto" }}
            sizes="100vw"
          />
          {/* image placeholder */}
          <motion.div
            className=" items-center justify-center hidden"
            variants={visualVariants}
          >
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] lg:m-4 ">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-10"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                variants={cardVariants}
              >
                <motion.div
                  className="w-3/4 h-3/4 bg-card/30 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl flex items-center justify-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <div className="grid grid-cols-2 gap-4 p-6">
                    {/* First block with pulse animation */}
                    <motion.div
                      className="h-24 bg-white/10 rounded-md"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    ></motion.div>

                    {/* Second block with pulse animation and delay */}
                    <motion.div
                      className="h-24 bg-white/10 rounded-md"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 0.5,
                      }}
                    ></motion.div>

                    {/* Third block with pulse animation and delay */}
                    <motion.div
                      className="h-24 bg-white/10 rounded-md"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 1,
                      }}
                    ></motion.div>

                    {/* Fourth block with pulse animation and delay */}
                    <motion.div
                      className="h-24 bg-white/10 rounded-md"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 1.5,
                      }}
                    ></motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
