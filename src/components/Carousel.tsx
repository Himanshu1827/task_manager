import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselItem {
  id: string;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
  itemsPerView?: number;
}

const Carousel = ({
  items,
  autoPlay = false,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className = '',
  itemsPerView = 1,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(items.length / itemsPerView);

  useEffect(() => {
    if (autoPlay && items.length > itemsPerView) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, totalSlides, itemsPerView]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleItems = () => {
    const startIndex = currentIndex * itemsPerView;
    return items.slice(startIndex, startIndex + itemsPerView);
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          {getVisibleItems().map((item, index) => (
            <div
              key={item.id}
              className={`w-full ${itemsPerView > 1 ? `flex-shrink-0 w-1/${itemsPerView}` : ''}`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-medium"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-medium"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && totalSlides > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentIndex
                  ? 'bg-primary'
                  : 'bg-muted hover:bg-muted-foreground'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;