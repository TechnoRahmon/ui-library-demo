//import { Page, Button } from "blink-ui"
import { Button, Page  } from "blink-ui"
import "blink-ui/config/theme.css";
import './index.css'

function App() {

  return (
    <Page title="Blink UI Library Demo">
      <div className="demo-container">

        {/* Test Avatar component */}
        <div className="flex flex-col items-center space-y-4">
            <Button variant="primary" size="lg">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="tertiary">Tertiary Button</Button>
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
