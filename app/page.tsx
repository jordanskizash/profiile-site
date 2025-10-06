import { ThemeToggle } from "@/components/theme-toggle"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header with Theme Toggle */}
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-4xl font-bold">Jordan Steinberg</h1>
        <ThemeToggle />
      </div>

      {/* Description */}
      <div className="mb-16">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          Technology Enthusiast - Application Modernization and IT Automation Specialist at IBM. I write about Python
          development, web technologies, data processing, and growth systems of leading technology companies.
        </p>
      </div>

      {/* Social Links */}
      <div className="mb-16">
        <div className="flex gap-8 text-blue-400">
          <a
            href="https://medium.com/@jsteinb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            Medium
          </a>
          <a
            href="https://jordansteinberg.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            Substack
          </a>
          <a
            href="https://github.com/jordanskizash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="writing" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="writing">Writing</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="writing" className="mt-6">
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
        </TabsContent>

        <TabsContent value="projects" className="mt-6">
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
