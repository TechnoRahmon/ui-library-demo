//import { Page, Button } from "blink-ui"
import {  Avatar, Badge, Button, Image, Page, Toaster, toast } from "blink-ui";
import { ThemeToggle } from "./components/ThemeToggle";

import "./App.css"

function App() {

  return (
    <>
      <ThemeToggle />
      <Page note="This is a demo page" title="Blink UI Library Demo"  >
        <div className="demo-container">

          {/* Test Avatar component */}
          <div className="flex flex-col items-center space-y-4">
              <Button variant="primary"  isLoading={true}></Button>
              <Button variant="secondary" size="xs">Secondary Button</Button>
              <Button variant="tertiary" onClick={() => toast.success("Tertiary Button Clicked!", {
                dismissible: true
              })}>Tertiary Button - Try Toast</Button>
              <Toaster />
          </div>
          <div className="flex justify-center">
            <Avatar src="https://i.pinimg.com/736x/18/8d/70/188d70031767da3056512c1b5716ba95.jpg" 
            badge={<div className="h-5 w-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>} />
          </div>
          {/* Test Tailwind classes */}
          <div className="mt-8 p-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg text-white">
            <p className="text-lg font-semibold">Tailwind CSS v4 is working! 🎉</p>
          </div>

          {/* Theme-aware demo section */}
          <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Theme Demo</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This section demonstrates how the theme changes affect different elements.
              Use the theme toggle button in the top-right corner to switch between light and dark modes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded border">
                <h3 className="font-semibold text-gray-900 dark:text-white">Card 1</h3>
                <p className="text-gray-600 dark:text-gray-400">Sample content</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded border">
                <h3 className="font-semibold text-gray-900 dark:text-white">Card 2</h3>
                <p className="text-gray-600 dark:text-gray-400">Sample content</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded border">
                <h3 className="font-semibold text-gray-900 dark:text-white">Card 3</h3>
                <p className="text-gray-600 dark:text-gray-400">Sample content</p>
              </div>
            </div>
          </div>

        </div>


        <hr className="border-gray-200 dark:border-gray-700" />

                <div className="flex items-center gap-6 justify-center">
            <div className="text-center">
              <Image
                src="https://picsum.photos/200/200?random=17" 
                alt="Image with src"
                size="lg" 
                shape="rounded"
              />
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">With Image</p>
            </div>
            
            <div className="text-center">
              <Image 
                title="John Doe"
                alt="Fallback with initials"
                size="lg" 
                shape="circle"
              />
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Initials Fallback</p>
            </div>
            
            <div className="text-center">
              <Image 
                alt="Default placeholder"
                size="lg" 
                shape="rounded"
              />
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Icon Placeholder</p>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-700" />

           <div className="flex items-center gap-8">
        <div className="text-center">
          <Image 
            src="https://picsum.photos/200/200?random=15"
            alt="Rounded image"
            size="xl"
            shape="rounded"
            badge={
              <Badge variant="info" shape="pill">
                R
              </Badge>
            }
          />
          <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Rounded</p>
        </div>
        
        <div className="text-center">
          <Image 
            src="https://picsum.photos/200/200?random=16"
            alt="Circular image"
            size="xl"
            shape="circle"
            badge={
              <Badge variant="majesty" shape="pill">
                C
              </Badge>
            }
          />
          <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Circle</p>
        </div>
      </div>
      </Page>
    </>
  )
}

export default App
