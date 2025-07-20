import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Carousel from '@/components/Carousel';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import featuresImage from '@/assets/features-image.jpg';

const Blog = () => {
  // Mock blog posts
  const blogPosts = [
    {
      id: '1',
      content: (
        <div className="bg-card rounded-2xl overflow-hidden shadow-strong hover-lift mx-2 font-sans">
          <img
            src={heroImage}
            alt="Productivity tips"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center text-base text-muted-foreground mb-4 font-sans">
              <Calendar className="h-5 w-5 mr-2" />
              <span>March 15, 2024</span>
              <User className="h-5 w-5 ml-4 mr-2" />
              <span>Sarah Chen</span>
              <Clock className="h-5 w-5 ml-4 mr-2" />
              <span>5 min read</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-smooth font-sans">
              10 Productivity Hacks That Actually Work
            </h3>
            <p className="text-muted-foreground mb-5 font-sans">
              Discover evidence-based strategies to boost your productivity without burning out. From time-blocking to the Pomodoro Technique...
            </p>
            <Button variant="ghost" size="sm" className="p-0 h-auto font-sans">
              Read More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: '2',
      content: (
        <div className="bg-card rounded-2xl overflow-hidden shadow-strong hover-lift mx-2 font-sans">
          <img
            src={featuresImage}
            alt="Remote work setup"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center text-base text-muted-foreground mb-4 font-sans">
              <Calendar className="h-5 w-5 mr-2" />
              <span>March 10, 2024</span>
              <User className="h-5 w-5 ml-4 mr-2" />
              <span>David Rodriguez</span>
              <Clock className="h-5 w-5 ml-4 mr-2" />
              <span>7 min read</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-smooth font-sans">
              Creating the Perfect Remote Work Setup
            </h3>
            <p className="text-muted-foreground mb-5 font-sans">
              Learn how to design a workspace that maximizes focus and productivity while working from home. Essential tools and tips included...
            </p>
            <Button variant="ghost" size="sm" className="p-0 h-auto font-sans">
              Read More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: '3',
      content: (
        <div className="bg-card rounded-2xl overflow-hidden shadow-strong hover-lift mx-2 font-sans">
          <img
            src={heroImage}
            alt="Goal setting"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center text-base text-muted-foreground mb-4 font-sans">
              <Calendar className="h-5 w-5 mr-2" />
              <span>March 5, 2024</span>
              <User className="h-5 w-5 ml-4 mr-2" />
              <span>Emma Thompson</span>
              <Clock className="h-5 w-5 ml-4 mr-2" />
              <span>6 min read</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-smooth font-sans">
              The Science of Goal Setting: Making Resolutions Stick
            </h3>
            <p className="text-muted-foreground mb-5 font-sans">
              Why do most New Year's resolutions fail by February? Explore the psychology behind effective goal setting and learn proven strategies...
            </p>
            <Button variant="ghost" size="sm" className="p-0 h-auto font-sans">
              Read More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: '4',
      content: (
        <div className="bg-card rounded-2xl overflow-hidden shadow-strong hover-lift mx-2 font-sans">
          <img
            src={featuresImage}
            alt="Team collaboration"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center text-base text-muted-foreground mb-4 font-sans">
              <Calendar className="h-5 w-5 mr-2" />
              <span>February 28, 2024</span>
              <User className="h-5 w-5 ml-4 mr-2" />
              <span>Alex Kumar</span>
              <Clock className="h-5 w-5 ml-4 mr-2" />
              <span>4 min read</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-smooth font-sans">
              Building High-Performance Teams in a Digital World
            </h3>
            <p className="text-muted-foreground mb-5 font-sans">
              Modern teams face unique challenges. Discover how to foster collaboration, maintain culture, and drive results in distributed teams...
            </p>
            <Button variant="ghost" size="sm" className="p-0 h-auto font-sans">
              Read More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: '5',
      content: (
        <div className="bg-card rounded-2xl overflow-hidden shadow-strong hover-lift mx-2 font-sans">
          <img
            src={heroImage}
            alt="Work-life balance"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center text-base text-muted-foreground mb-4 font-sans">
              <Calendar className="h-5 w-5 mr-2" />
              <span>February 20, 2024</span>
              <User className="h-5 w-5 ml-4 mr-2" />
              <span>Sarah Chen</span>
              <Clock className="h-5 w-5 ml-4 mr-2" />
              <span>8 min read</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-smooth font-sans">
              Mastering Work-Life Balance in the Digital Age
            </h3>
            <p className="text-muted-foreground mb-5 font-sans">
              Technology can be a blessing and a curse for work-life balance. Learn practical strategies to set boundaries and protect your personal time...
            </p>
            <Button variant="ghost" size="sm" className="p-0 h-auto font-sans">
              Read More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: '6',
      content: (
        <div className="bg-card rounded-2xl overflow-hidden shadow-strong hover-lift mx-2 font-sans">
          <img
            src={featuresImage}
            alt="Time management"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center text-base text-muted-foreground mb-4 font-sans">
              <Calendar className="h-5 w-5 mr-2" />
              <span>February 15, 2024</span>
              <User className="h-5 w-5 ml-4 mr-2" />
              <span>David Rodriguez</span>
              <Clock className="h-5 w-5 ml-4 mr-2" />
              <span>6 min read</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-smooth font-sans">
              Time Blocking: The Ultimate Guide to Focused Work
            </h3>
            <p className="text-muted-foreground mb-5 font-sans">
              Transform your chaotic schedule into a structured roadmap for success. Master the art of time blocking with our comprehensive guide...
            </p>
            <Button variant="ghost" size="sm" className="p-0 h-auto font-sans">
              Read More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="TaskFlow Blog"
        subtitle="Insights, tips, and strategies to supercharge your productivity and achieve your goals faster."
        variant="gradient"
      />

      {/* Featured Article */}
      <section className="py-20 bg-gradient-to-r from-secondary/40 to-primary/10 rounded-b-2xl shadow-strong mx-2 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl overflow-hidden shadow-strong">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={heroImage}
                  alt="Featured article"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-10">
                <div className="text-base text-primary font-bold mb-3 font-sans">FEATURED ARTICLE</div>
                <h2 className="text-4xl font-extrabold text-foreground mb-6 font-sans">
                  The Future of Productivity: AI-Powered Task Management
                </h2>
                <div className="flex items-center text-base text-muted-foreground mb-5 font-sans">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>March 20, 2024</span>
                  <User className="h-5 w-5 ml-4 mr-2" />
                  <span>Sarah Chen</span>
                  <Clock className="h-5 w-5 ml-4 mr-2" />
                  <span>10 min read</span>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed font-sans text-lg">
                  Artificial intelligence is revolutionizing how we approach productivity. Discover how AI-powered features in TaskFlow are helping users achieve more with less effort, and what the future holds for intelligent task management.
                </p>
                <Button variant="hero" size="lg" className="font-sans">
                  Read Full Article <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Carousel */}
      <section className="py-20 gradient-subtle rounded-2xl shadow-strong mx-2 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5 font-sans">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
              Stay up to date with the latest productivity insights and tips from our team.
            </p>
          </div>
          <Carousel
            items={blogPosts}
            autoPlay={true}
            interval={5000}
            itemsPerView={3}
            className="max-w-6xl mx-auto"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find articles that match your interests and productivity goals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Productivity Tips', count: 24 },
              { name: 'Remote Work', count: 18 },
              { name: 'Team Management', count: 15 },
              { name: 'Goal Setting', count: 12 },
              { name: 'Work-Life Balance', count: 20 },
              { name: 'Technology', count: 16 },
              { name: 'Success Stories', count: 8 },
              { name: 'Feature Updates', count: 22 },
            ].map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center justify-center hover-lift"
              >
                <span className="font-semibold">{category.name}</span>
                <span className="text-sm text-muted-foreground">
                  {category.count} articles
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section in Footer */}
      <section className="py-16 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Never Miss an Update
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest productivity tips, feature announcements, and exclusive content delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Join 10,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;