'use client'

import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import BlackWhiteBlobs from "@/components/home-animation"
import { SocialLinks } from "@/components/social-links"
import LiquidNav from "@/components/liquid-nav"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  const [activeTab, setActiveTab] = useState('writing')
  return (
    <div className="relative min-h-screen px-6 py-12 md:py-20 animate-crystallize">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Column - Content */}
        <div className="space-y-12">
          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Jordan Steinberg
          </h1>

          {/* Bio/Description */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m on the GTM team at {" "}
              <a href="https://www.dash0.com/" className="text-orange-500 underline hover:text-orange-600">Dash0</a>,
              helping build the leading AI and OpenTelemetry-native observability platform. My writing and projects usually have to do with technology, data visualization, or web development. Formerly at IBM. Based in Chicago.
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Right Column - Animation */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-2xl">
            <BlackWhiteBlobs />
          </div>
        </div>
        </div>

        {/* Navigation Section */}
        <div className="mt-20">
          <div className="flex justify-center mb-8">
            <LiquidNav
              items={[
                { id: 'writing', label: 'Writing' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ]}
              activeItem={activeTab}
              onItemClick={setActiveTab}
            />
          </div>

          {/* Writing Content */}
          {activeTab === 'writing' && (
          <div className="mt-6">
          <div className="space-y-6">
            {/* Newsletter Articles */}
            <div>
              <a
                href="https://jordansteinberg.substack.com/p/wiz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Wiz
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Exploring the growth systems behind Wiz&apos;s rapid expansion.</p>
            </div>

            <div>
              <a
                href="https://jordansteinberg.substack.com/p/stripe-how-the-internets-favorite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Stripe: How the Internet&apos;s Favorite Payment Platform Grew
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Deep dive into Stripe&apos;s growth strategy and systems.</p>
            </div>

            {/* Recent Articles */}
            <article>
              <a
                href="https://medium.com/@jsteinb/nextjs-using-stripe-to-build-a-credit-system-for-your-saas-app-3562e1608c25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                NextJS: Using Stripe to build a credit system for your SaaS App
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                If you&apos;re building a Web App, chances are you&apos;ve already thought about how you&apos;re going to monetize it.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Medium • Nov 21, 2024</p>
            </article>

            <article>
              <a
                href="https://medium.com/@jsteinb/batch-processing-vs-event-streaming-d1ce079dbfc4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Batch Processing vs Event Streaming
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                As data becomes increasingly important to modern business, organizations are tasked with finding the most
                efficient and effective way to process it.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Medium • Mar 12, 2024</p>
            </article>

            {/* Python & Development Articles */}
            <article>
              <a
                href="https://medium.com/faun/python-create-a-program-to-read-text-from-images-350725054b2a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Python: Create a Program to Read Text from Images
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-1">An awesome way to copy text from images with one line of python code.</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">FAUN.dev • Dec 12, 2021</p>
            </article>

            <article>
              <a
                href="https://medium.com/@jsteinb/python-adding-features-to-your-stock-market-dashboard-with-plotly-4208d8bc3bd5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Python: Adding Features To Your Stock Market Dashboard With Plotly
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Adding advanced features to your stock market data visualization with interactive charts and real-time
                updates.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Medium • Nov 30, 2021</p>
            </article>

            <article>
              <a
                href="https://medium.com/@jsteinb/python-build-a-program-to-retrieve-and-graph-live-stock-market-data-311d9ca1b7d3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Python: Build a Program to Retrieve and Graph Live Stock Market Data
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Utilizing the new yahoo finance API to write a program that will retrieve live stock market data and
                display it.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Medium • Nov 25, 2021</p>
            </article>

            <article>
              <a
                href="https://medium.com/@jsteinb/web-development-embed-visualization-of-satellites-in-orbit-with-1-line-of-code-5a34ed36daf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Web Development: Embed Visualization of Satellites in Orbit with 1 line of code
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                How to embed a visualization of all satellites in orbit into your HTML page with just one line of code.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Medium • Dec 6, 2021</p>
            </article>
          </div>
          </div>
          )}

          {/* Projects Content */}
          {activeTab === 'projects' && (
          <div className="mt-6">
            <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <a
                  href="https://citrusreach.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-lg"
                >
                  Citrus Reach
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                  A platform to help sales people improve their outreach with video
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-32 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Preview Coming Soon</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <a
                  href="https://github.com/jordanskizash/Live-Market-Data-PLot-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-lg"
                >
                  Live Market Data Plot
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                  Get live market data and visualize it using Python and Plotly
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-32 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Preview Coming Soon</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <a
                  href="https://github.com/jordanskizash/Simple-Profile-Project-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-lg"
                >
                  Simple Profile Project
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                  A nice-looking, functional profile website for web developers
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-32 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Preview Coming Soon</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <a
                  href="https://github.com/jordanskizash/nextdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-lg"
                >
                  Next.js Dashboard
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                  Dashboard from the Next.js learning course from Vercel
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-32 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Preview Coming Soon</span>
              </div>
            </div>
            </div>
          </div>
          )}

          {/* Contact Content */}
          {activeTab === 'contact' && (
          <div className="mt-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-400">Have a question or want to work together? Send me a message.</p>
            </div>
            <ContactForm />
          </div>
          )}
        </div>
      </div>
    </div>
  )
}
