import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import Carousel from '@/components/Carousel';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Star, Calendar, Target, Zap, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import featuresImage from '@/assets/features-image.jpg';

const Index = () => {
  // Mock data for features carousel
  const featureItems = [
    {
      id: '1',
      content: (
        <div className="bg-card rounded-2xl p-8 shadow-strong hover-lift mx-2 font-sans">
          <Calendar className="h-14 w-14 text-primary mb-5 drop-shadow-lg" />
          <h3 className="text-2xl font-bold mb-3 text-foreground font-sans">Smart Scheduling</h3>
          <p className="text-muted-foreground font-sans">Automatically organize your tasks based on priority and deadlines.</p>
        </div>
      ),
    },
    {
      id: '2',
      content: (
        <div className="bg-card rounded-2xl p-8 shadow-strong hover-lift mx-2 font-sans">
          <Target className="h-14 w-14 text-accent mb-5 drop-shadow-lg" />
          <h3 className="text-2xl font-bold mb-3 text-foreground font-sans">Goal Tracking</h3>
          <p className="text-muted-foreground font-sans">Set and monitor your progress towards achieving your objectives.</p>
        </div>
      ),
    },
    {
      id: '3',
      content: (
        <div className="bg-card rounded-2xl p-8 shadow-strong hover-lift mx-2 font-sans">
          <Users className="h-14 w-14 text-primary mb-5 drop-shadow-lg" />
          <h3 className="text-2xl font-bold mb-3 text-foreground font-sans">Team Collaboration</h3>
          <p className="text-muted-foreground font-sans">Share tasks and collaborate with your team seamlessly.</p>
        </div>
      ),
    },
    {
      id: '4',
      content: (
        <div className="bg-card rounded-2xl p-8 shadow-strong hover-lift mx-2 font-sans">
          <Zap className="h-14 w-14 text-accent mb-5 drop-shadow-lg" />
          <h3 className="text-2xl font-bold mb-3 text-foreground font-sans">Quick Actions</h3>
          <p className="text-muted-foreground font-sans">Create and manage tasks with lightning-fast shortcuts.</p>
        </div>
      ),
    },
  ];

  // Mock testimonials
  const testimonialItems = [
    {
      id: '1',
      content: (
        <div className="bg-card rounded-2xl p-8 shadow-strong mx-4 font-sans">
          <div className="flex items-center mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current drop-shadow" />
            ))}
          </div>
          <p className="text-muted-foreground mb-5 italic font-sans">
            "TaskFlow has revolutionized how I manage my daily tasks. The intuitive interface and smart features have boosted my productivity significantly."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
              <span className="text-primary font-bold text-lg">SA</span>
            </div>
            <div>
              <p className="font-bold font-sans">Sarah Anderson</p>
              <p className="text-sm text-muted-foreground font-sans">Product Manager</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: '2',
      content: (
        <div className="bg-card rounded-2xl p-8 shadow-strong mx-4 font-sans">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-muted-foreground mb-4 italic">
            "The team collaboration features are amazing. Our entire project team stays synchronized and nothing falls through the cracks anymore."
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mr-3">
              <span className="text-accent font-semibold">MJ</span>
            </div>
            <div>
              <p className="font-semibold">Michael Johnson</p>
              <p className="text-sm text-muted-foreground">Software Developer</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: '3',
      content: (
        <div className="bg-card rounded-2xl p-8 shadow-strong mx-4 font-sans">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-muted-foreground mb-4 italic">
            "Finally, a to-do app that understands how I work. The smart scheduling feature alone has saved me hours every week."
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
              <span className="text-primary font-semibold">EM</span>
            </div>
            <div>
              <p className="font-semibold">Emily Martinez</p>
              <p className="text-sm text-muted-foreground">Marketing Director</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Search Bar Section */}
      <section className="py-10 bg-gradient-to-r from-secondary/40 to-primary/10 rounded-b-2xl shadow-strong mx-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar />
        </div>
      </section>

      {/* Hero Section */}
      <HeroSection
        title="Organize Your Life, Amplify Your Success"
        subtitle="Transform chaos into clarity with TaskFlow - the intelligent to-do app that adapts to your workflow and helps you achieve more every day."
        variant="gradient"
        ctaButton={{
          text: "Start Organizing Today",
          onClick: () => console.log("CTA clicked"),
        }}
      >
        <ContactForm />
      </HeroSection>

      {/* Features Carousel Section */}
      <section className="py-20 bg-background font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5 font-sans">
              Powerful Features for Maximum Productivity
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
              Discover the tools that will transform how you manage tasks and achieve your goals.
            </p>
          </div>
          <Carousel
            items={featureItems}
            autoPlay={true}
            interval={4000}
            itemsPerView={3}
            className="max-w-6xl mx-auto"
          />
        </div>
      </section>

      {/* Key Selling Points */}
      <section className="py-20 gradient-subtle rounded-2xl shadow-strong mx-2 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 font-sans">
                Effortless Task Management
              </h2>
              <p className="text-xl text-muted-foreground mb-8 font-sans">
                Say goodbye to scattered sticky notes and forgotten deadlines. TaskFlow's intuitive interface makes organizing your tasks as simple as thinking them.
              </p>
              <ul className="space-y-5">
                <li className="flex items-center">
                  <CheckCircle className="h-7 w-7 text-primary mr-4 drop-shadow" />
                  <span className="font-sans text-lg">Drag-and-drop task prioritization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-7 w-7 text-primary mr-4 drop-shadow" />
                  <span className="font-sans text-lg">Smart deadline reminders</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-7 w-7 text-primary mr-4 drop-shadow" />
                  <span className="font-sans text-lg">Cross-platform synchronization</span>
                </li>
              </ul>
              <Button variant="hero" size="lg" className="mt-8 font-sans">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src={featuresImage}
                alt="Task management features"
                className="rounded-2xl shadow-strong hover-lift"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
            <div className="order-2 lg:order-1 relative">
              <img
                src={heroImage}
                alt="Collaborative workspace"
                className="rounded-2xl shadow-strong hover-lift"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 font-sans">
                Seamless Team Collaboration
              </h2>
              <p className="text-xl text-muted-foreground mb-8 font-sans">
                Bridge the gap between individual productivity and team success. Share projects, assign tasks, and track progress together in real-time.
              </p>
              <ul className="space-y-5">
                <li className="flex items-center">
                  <CheckCircle className="h-7 w-7 text-accent mr-4 drop-shadow" />
                  <span className="font-sans text-lg">Real-time collaboration tools</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-7 w-7 text-accent mr-4 drop-shadow" />
                  <span className="font-sans text-lg">Team progress tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-7 w-7 text-accent mr-4 drop-shadow" />
                  <span className="font-sans text-lg">Instant notifications</span>
                </li>
              </ul>
              <Button variant="accent" size="lg" className="mt-8 font-sans">
                Start Collaborating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-20 bg-background font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5 font-sans">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
              Hear from real users who have transformed their productivity with TaskFlow.
            </p>
          </div>
          <Carousel
            items={testimonialItems}
            autoPlay={true}
            interval={5000}
            itemsPerView={2}
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
