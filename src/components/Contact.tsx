"use client";



import { useState, type FormEvent } from "react";

import { MapPin } from "lucide-react";

import { getGoogleMapsLink, siteContact } from "@/lib/site";

import FadeIn from "./FadeIn";

import Button from "./Button";



export default function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    setLoading(true);

    setError("");



    const formData = new FormData(e.currentTarget);

    const payload = {

      name: formData.get("name"),

      restaurant: formData.get("restaurant"),

      email: formData.get("email"),

      phone: formData.get("phone"),

      city: formData.get("city"),

      message: formData.get("message"),

    };



    try {

      const response = await fetch("/api/contact", {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(payload),

      });



      const data = (await response.json()) as { error?: string };



      if (!response.ok) {

        setError(data.error || "Unable to send your request. Please try again.");

        return;

      }



      setSubmitted(true);

    } catch {

      setError("Unable to send your request. Please check your connection and try again.");

    } finally {

      setLoading(false);

    }

  };



  return (

    <section id="contact" className="py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          <FadeIn>

            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">

              Schedule Your Consultation

            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">

              Let&apos;s understand your restaurant, discuss your challenges, and recommend

              practical solutions that improve food safety, strengthen operations, and help you

              maintain FSSAI compliance.

            </p>

            <div className="mt-8 rounded-2xl border border-slate-100 bg-card p-5 shadow-soft-lg">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Office Address
              </h3>
              <a
                href={getGoogleMapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex gap-3 text-sm leading-relaxed text-slate-600 transition-colors hover:text-accent"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span>{siteContact.address}</span>
              </a>
            </div>

          </FadeIn>



          <FadeIn delay={0.2}>

            <form

              onSubmit={handleSubmit}

              className="rounded-2xl border border-slate-100 bg-card p-6 shadow-soft-lg sm:p-8"

            >

              {submitted ? (

                <div className="flex flex-col items-center justify-center py-12 text-center">

                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">

                    <svg

                      className="h-8 w-8"

                      fill="none"

                      viewBox="0 0 24 24"

                      stroke="currentColor"

                      aria-hidden="true"

                    >

                      <path

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        strokeWidth={2}

                        d="M5 13l4 4L19 7"

                      />

                    </svg>

                  </div>

                  <h3 className="text-xl font-bold text-primary">Thank You!</h3>

                  <p className="mt-2 text-slate-600">

                    We&apos;ll be in touch within 24 hours to schedule your consultation.

                  </p>

                </div>

              ) : (

                <>

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">

                        Name

                      </label>

                      <input

                        id="name"

                        name="name"

                        type="text"

                        required

                        disabled={loading}

                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60"

                        placeholder="Your name"

                      />

                    </div>

                    <div>

                      <label

                        htmlFor="restaurant"

                        className="mb-1.5 block text-sm font-medium text-slate-700"

                      >

                        Restaurant Name

                      </label>

                      <input

                        id="restaurant"

                        name="restaurant"

                        type="text"

                        required

                        disabled={loading}

                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60"

                        placeholder="Restaurant name"

                      />

                    </div>

                    <div>

                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">

                        Email

                      </label>

                      <input

                        id="email"

                        name="email"

                        type="email"

                        required

                        disabled={loading}

                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60"

                        placeholder="you@restaurant.com"

                      />

                    </div>

                    <div>

                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">

                        Phone

                      </label>

                      <input

                        id="phone"

                        name="phone"

                        type="tel"

                        required

                        disabled={loading}

                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60"

                        placeholder="+91 XXXXX XXXXX"

                      />

                    </div>

                  </div>

                  <div className="mt-5">

                    <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-slate-700">

                      City

                    </label>

                    <input

                      id="city"

                      name="city"

                      type="text"

                      required

                      disabled={loading}

                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60"

                      placeholder="Your city"

                    />

                  </div>

                  <div className="mt-5">

                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">

                      Message

                    </label>

                    <textarea

                      id="message"

                      name="message"

                      rows={4}

                      disabled={loading}

                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60"

                      placeholder="Tell us about your restaurant and challenges..."

                    />

                  </div>



                  {error ? (

                    <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">

                      {error}

                    </p>

                  ) : null}



                  <label className="mt-5 flex items-start gap-3 text-sm text-slate-600">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      disabled={loading}
                      className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-accent focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                    <span>
                      I agree to the{" "}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="/terms" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
                        Terms of Service
                      </a>
                      .
                    </span>
                  </label>



                  <div className="mt-6 flex justify-center">
                    <Button type="submit" size="lg" disabled={loading}>
                      {loading ? "Sending..." : "Schedule Your Consultation"}
                    </Button>
                  </div>

                </>

              )}

            </form>

          </FadeIn>

        </div>

      </div>

    </section>

  );

}


