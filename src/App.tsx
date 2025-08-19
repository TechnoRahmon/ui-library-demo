import { useState } from "react"
import { Button, Typography, Page } from "blink-ui-library"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const handleButtonClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setCount(count + 1)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Page 
      title="Blink UI Library Demo" 
      subtitle="Testing all components from our custom library"
      showHeader={true}
      showFooter={true}
      maxWidth="lg"
      padding="md"
    >
      <div className="demo-container">
        <section className="demo-section">
          <Typography variant="title" color="primary">
            Welcome to the Demo
          </Typography>
          <Typography variant="body" color="secondary">
            This demo showcases the components from our Blink UI Library built with:
          </Typography>
          <Typography variant="subtitle" color="muted">
             TypeScript   React   Styled Components   Rollup   Jest   ESLint   Husky
          </Typography>
        </section>

        <section className="demo-section">
          <Typography variant="subtitle" color="primary">
            Button Variants
          </Typography>
          <div className="button-grid">
            <Button variant="primary" size="md">Primary</Button>
            <Button variant="secondary" size="md">Secondary</Button>
            <Button variant="success" size="md">Success</Button>
            <Button variant="error" size="md">Error</Button>
            <Button variant="warning" size="md">Warning</Button>
            <Button variant="outline" size="md">Outline</Button>
            <Button variant="ghost" size="md">Ghost</Button>
          </div>
        </section>

        <section className="demo-section">
          <Typography variant="title" color="primary">
            Interactive Counter
          </Typography>
          <div className="counter-demo">
            <Typography variant="subtitle" color="secondary">
              Count: {count}
            </Typography>
            <Button 
              variant="primary" 
              size="lg"
              loading={isLoading}
              onClick={handleButtonClick}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Increment Counter"}
            </Button>
          </div>
        </section>

        <section className="demo-section">
          <Typography variant="title" color="primary">
            Full Width Button
          </Typography>
          <Button 
            variant="success" 
            size="lg"
            fullWidth
            onClick={() => alert("Full width button clicked!")}
          >
            Full Width Success Button
          </Button>
        </section>
      </div>
    </Page>
  )
}

export default App
