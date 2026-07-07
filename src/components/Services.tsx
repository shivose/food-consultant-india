"use client";

import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  Users,
  Star,
  RefreshCw,
  Settings,
} from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const services = [
  {
    icon: Settings,
    title: "Restaurant Operations Consultancy",
    description:
      "Expert guidance on kitchen workflows, service standards, and day-to-day restaurant management.",
  },
  {
    icon: Shield,
    title: "Food Safety Compliance",
    description: "Identify risks before they become costly problems.",
  },
  {
    icon: FileText,
    title: "Standard Operating Procedures (SOPs)",
    description: "Clear, practical SOPs that your team can actually follow.",
  },
  {
    icon: Users,
    title: "Staff Training",
    description:
      "Train your kitchen and service teams on food safety, hygiene, and operational best practices.",
  },
  {
    icon: Star,
    title: "Guest Experience",
    description:
      "Evaluate every touchpoint of the customer journey to improve consistency and increase positive reviews.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Compliance Support",
    description:
      "Regular audits, coaching, and follow-ups to help maintain standards throughout the year.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive solutions to keep your restaurant operating at the highest standards."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-card p-7 shadow-card transition-shadow duration-300 hover:shadow-soft-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-primary">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {service.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
