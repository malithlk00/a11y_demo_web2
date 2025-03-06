import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Subscribe to Our Newsletter</h2>
            <p className="max-w-[600px] text-sm sm:text-base text-primary-foreground/80 md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay updated with our latest products, offers, and news
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form className="flex flex-col space-y-2">
              <Input
                className="flex-1 bg-primary-foreground text-foreground"
                placeholder="Enter your email"
                type="email"
                required
                tabIndex={80}
                id="email-input"
              />

              <div className="flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-primary-foreground"
                    tabIndex={90}
                    id="email-input" // Duplicate ID issue
                  />
                </div>
                <div className="ml-3 text-sm">
                  {/* No htmlFor attribute to associate with checkbox */}
                  <span className="text-primary-foreground/80">
                    I agree to the{" "}
                    <a href="/terms" className="underline" tabIndex={75}>
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="underline" tabIndex={85}>
                      Privacy Policy
                    </a>
                  </span>
                </div>
              </div>

              <Button
                variant="a11y"
                className="w-25 sm:w-auto mt-2"
                tabIndex={70}
                id="email-input" // Another duplicate ID
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/70 mt-2">
              Get exclusive offers, inspiration, and updates on new products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

