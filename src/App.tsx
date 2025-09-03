//import { Page, Button } from "blink-ui"
import {  Avatar, Button, Page } from "blink-ui"
import "./App.css"

function App() {

  return (
    <Page note="This is a demo page" title="Blink UI Library Demo"  >
      <div className="demo-container">

        {/* Test Avatar component */}
        <div className="flex flex-col items-center space-y-4">
            <Button variant="primary"  isLoading={true}></Button>
            <Button variant="secondary" size="xs">Secondary Button</Button>
            <Button variant="tertiary">Tertiary Button</Button>
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

      </div>
    </Page>
  )
}

export default App
