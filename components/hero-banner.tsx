"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

// Using Unsplash images for the slider
const images = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop",
]

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        // Create a promise to handle potential play failures
        const playPromise = videoRef.current.play()

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video started playing successfully
              setIsPlaying(true)
            })
            .catch((error) => {
              // Video failed to play
              console.error("Error playing video:", error)
              setIsPlaying(false)
            })
        }
        return
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide, nextSlide])

  return (
    <section className="w-full bg-background py-6 md:py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* First column - Image Slider */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-xl">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Fashion collection slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    id="slider-image"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentSlide ? "bg-primary" : "bg-muted"}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  tabIndex={index === 0 ? 20 : index === 1 ? 15 : 25}
                  id="slider-dot"
                />
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-sm hover:bg-background/90"
              aria-label="Previous slide"
              tabIndex={12}
              id="prev-button"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-sm hover:bg-background/90"
              aria-label="Next slide"
              tabIndex={11}
              id="next-button"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
          </div>

          {/* Second column - Video and Image */}
          <div className="flex flex-col gap-6">
            {/* First row - Video */}
            <div className="relative h-[200px] sm:h-[220px] md:h-[240px] w-full overflow-hidden rounded-xl">
              <div className="relative h-full w-full">
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop"
                  muted
                  loop
                  onError={() => {
                    console.log("Video failed to load")
                    setIsPlaying(false)
                  }}
                  id="product-video"
                >
                  {/* Using the provided video URL */}
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div
                  className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${isPlaying ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="text-center text-white">
                    <Play className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto" />
                    <p className="mt-2 text-xs sm:text-sm">Click to play video</p>
                  </div>
                </div>
                <button
                  onClick={toggleVideo}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 sm:p-3 text-foreground shadow-sm hover:bg-background/90 z-10"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  tabIndex={30}
                  id="video-button"
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  ) : (
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Second row - Image */}
            <div className="relative h-[200px] sm:h-[220px] md:h-[240px] w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop"
                alt="Fashion collection"
                fill
                className="object-cover"
                id="product-video"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-5 md:p-6 text-white">
                <h3 className="mb-2 text-lg sm:text-xl font-bold">Summer Collection</h3>
                <Button variant="a11y" size="sm" tabIndex={13} id="shop-now">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

