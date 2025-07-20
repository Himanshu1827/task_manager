import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  ctaButton?: {
    text: string;
    onClick: () => void;
  };
  variant?: 'default' | 'gradient' | 'image';
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  children,
  ctaButton,
  variant = 'default',
}: HeroSectionProps) => {
  const getBackgroundClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'hero-gradient';
      case 'image':
        return 'bg-cover bg-center bg-no-repeat';
      default:
        return 'gradient-subtle';
    }
  };

  const getTextClasses = () => {
    return variant === 'gradient' ? 'text-white' : 'text-foreground';
  };

  return (
    <section
      className={`relative min-h-[500px] flex items-center justify-center ${getBackgroundClasses()}`}
      style={
        variant === 'image' && backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : {}
      }
    >
      {variant === 'image' && (
        <div className="absolute inset-0 bg-black/40" />
      )}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${getTextClasses()}`}>
          {title}
        </h1>
        <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
          variant === 'gradient' ? 'text-white/90' : 'text-muted-foreground'
        }`}>
          {subtitle}
        </p>
        
        {ctaButton && (
          <Button
            variant={variant === 'gradient' ? 'glass' : 'hero'}
            size="lg"
            onClick={ctaButton.onClick}
            className="mb-8"
          >
            {ctaButton.text}
          </Button>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default HeroSection;