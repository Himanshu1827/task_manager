import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Carousel from '@/components/Carousel';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  ChevronUp, 
  Briefcase, 
  Home, 
  ShoppingCart, 
  GraduationCap,
  Heart,
  Settings
} from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Mock task categories
  const categoryItems = [
    {
      id: '1',
      content: (
        <div className="bg-card rounded-2xl p-8 shadow-strong hover-lift mx-2 font-sans">
          <Briefcase className="h-16 w-16 text-primary mb-6 mx-auto drop-shadow-lg" />
          <h3 className="text-2xl font-bold mb-4 text-center text-foreground font-sans">Work & Professional</h3>
          <p className="text-muted-foreground text-center mb-5 font-sans">
            Manage projects, deadlines, meetings, and career goals efficiently.
          </p>
          <ul className="text-base text-muted-foreground space-y-2 font-sans">
            <li>• Project management</li>
            <li>• Meeting preparation</li>
            <li>• Goal tracking</li>
            <li>• Team collaboration</li>
          </ul>
        </div>
      ),
    },
    {
      id: '2',
      content: (
        <div className="bg-card rounded-2xl p-8 shadow-strong hover-lift mx-2 font-sans">
          <Home className="h-16 w-16 text-accent mb-6 mx-auto drop-shadow-lg" />
          <h3 className="text-2xl font-bold mb-4 text-center text-foreground font-sans">Personal & Lifestyle</h3>
          <p className="text-muted-foreground text-center mb-5 font-sans">
            Organize your personal life, hobbies, and daily routines seamlessly.
          </p>
          <ul className="text-base text-muted-foreground space-y-2 font-sans">
            <li>• Daily routines</li>
            <li>• Hobby projects</li>
            <li>• Personal goals</li>
            <li>• Home organization</li>
          </ul>
        </div>
      ),
    },
    {
      id: '3',
      content: (
        <div className="bg-card rounded-2xl p-8 shadow-strong hover-lift mx-2 font-sans">
          <ShoppingCart className="h-16 w-16 text-primary mb-6 mx-auto drop-shadow-lg" />
          <h3 className="text-2xl font-bold mb-4 text-center text-foreground font-sans">Shopping & Errands</h3>
          <p className="text-muted-foreground text-center mb-5 font-sans">
            Never forget items or appointments with smart shopping lists and reminders.
          </p>
          <ul className="text-base text-muted-foreground space-y-2 font-sans">
            <li>• Shopping lists</li>
            <li>• Errand planning</li>
            <li>• Appointment tracking</li>
            <li>• Budget management</li>
          </ul>
        </div>
      ),
    },
    {
      id: '4',
      content: (
        <div className="bg-card rounded-2xl p-8 shadow-strong hover-lift mx-2 font-sans">
          <GraduationCap className="h-16 w-16 text-accent mb-6 mx-auto drop-shadow-lg" />
          <h3 className="text-2xl font-bold mb-4 text-center text-foreground font-sans">Education & Learning</h3>
          <p className="text-muted-foreground text-center mb-5 font-sans">
            Track assignments, study schedules, and learning objectives effectively.
          </p>
          <ul className="text-base text-muted-foreground space-y-2 font-sans">
            <li>• Assignment tracking</li>
            <li>• Study schedules</li>
            <li>• Research projects</li>
            <li>• Skill development</li>
          </ul>
        </div>
      ),
    },
    {
      id: '5',
      content: (
        <div className="bg-card rounded-2xl p-8 shadow-strong hover-lift mx-2 font-sans">
          <Heart className="h-16 w-16 text-primary mb-6 mx-auto drop-shadow-lg" />
          <h3 className="text-2xl font-bold mb-4 text-center text-foreground font-sans">Health & Wellness</h3>
          <p className="text-muted-foreground text-center mb-5 font-sans">
            Maintain healthy habits and track wellness goals consistently.
          </p>
          <ul className="text-base text-muted-foreground space-y-2 font-sans">
            <li>• Fitness routines</li>
            <li>• Meal planning</li>
            <li>• Medical appointments</li>
            <li>• Wellness tracking</li>
          </ul>
        </div>
      ),
    },
  ];

  // FAQ data
  const faqData = [
    {
      question: "How does TaskFlow help me stay organized?",
      answer: "TaskFlow uses intelligent categorization, priority-based sorting, and smart reminders to keep your tasks organized. Our AI learns your patterns and suggests optimal scheduling to maximize your productivity."
    },
    {
      question: "Can I collaborate with my team on TaskFlow?",
      answer: "Absolutely! TaskFlow offers robust team collaboration features including shared projects, task assignment, real-time updates, and progress tracking. Teams can work together seamlessly while maintaining individual productivity."
    },
    {
      question: "Is TaskFlow available on mobile devices?",
      answer: "Yes, TaskFlow is fully responsive and optimized for all devices. You can access your tasks anywhere, anytime, with seamless synchronization across all your devices."
    },
    {
      question: "How secure is my data on TaskFlow?",
      answer: "We take security seriously. All data is encrypted in transit and at rest, we follow industry best practices for data protection, and we never share your personal information with third parties."
    },
    {
      question: "Can I integrate TaskFlow with other tools?",
      answer: "TaskFlow integrates with popular tools like Google Calendar, Slack, Trello, and many others. Our API also allows for custom integrations to fit your specific workflow needs."
    },
    {
      question: "What makes TaskFlow different from other to-do apps?",
      answer: "TaskFlow combines intelligent automation with intuitive design. Our AI-powered features learn your habits and preferences, automatically organizing and prioritizing tasks to optimize your productivity without overwhelming you with complexity."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Plan Your Day Efficiently"
        subtitle="Discover powerful features and organized task categories that help you stay on top of everything that matters to you."
        variant="gradient"
        ctaButton={{
          text: "Get Started Today",
          onClick: () => console.log("Get started clicked"),
        }}
      />

      {/* Task Categories Carousel */}
      <section className="py-20 bg-gradient-to-r from-secondary/40 to-primary/10 rounded-b-2xl shadow-strong mx-2 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5 font-sans">
              Organize Every Aspect of Your Life
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
              Whether it's work, personal goals, or daily errands, TaskFlow has specialized categories to help you stay organized.
            </p>
          </div>
          <Carousel
            items={categoryItems}
            autoPlay={true}
            interval={4000}
            itemsPerView={3}
            className="max-w-6xl mx-auto"
          />
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 gradient-subtle rounded-2xl shadow-strong mx-2 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5 font-sans">
              Complete Task Management Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
              Everything you need to transform your productivity in one powerful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-card p-8 rounded-2xl shadow-strong hover-lift font-sans">
              <Settings className="h-14 w-14 text-primary mb-6 drop-shadow-lg" />
              <h3 className="text-2xl font-bold mb-4 text-foreground font-sans">Smart Automation</h3>
              <p className="text-muted-foreground font-sans text-base">
                Let AI handle the boring stuff. Automatic categorization, intelligent scheduling, and predictive reminders keep you focused on what matters.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-strong hover-lift font-sans">
              <Briefcase className="h-14 w-14 text-accent mb-6 drop-shadow-lg" />
              <h3 className="text-2xl font-bold mb-4 text-foreground font-sans">Project Management</h3>
              <p className="text-muted-foreground font-sans text-base">
                Break down complex projects into manageable tasks. Track progress, set milestones, and collaborate with team members effortlessly.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-strong hover-lift font-sans">
              <Heart className="h-14 w-14 text-primary mb-6 drop-shadow-lg" />
              <h3 className="text-2xl font-bold mb-4 text-foreground font-sans">Habit Tracking</h3>
              <p className="text-muted-foreground font-sans text-base">
                Build better habits with consistent tracking and motivational insights. Turn your goals into daily actions with our habit builder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5 font-sans">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground font-sans">
              Get answers to common questions about TaskFlow's features and capabilities.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-card border-2 border-primary/20 rounded-2xl shadow-strong font-sans"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-smooth rounded-2xl font-sans text-lg font-bold text-foreground"
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-6 w-6 text-accent" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-muted-foreground" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 text-muted-foreground text-base font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <Button variant="hero" size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;