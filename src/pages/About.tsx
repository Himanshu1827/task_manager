import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Carousel from '@/components/Carousel';
import { CheckCircle, Target, Heart, Users } from 'lucide-react';
import teamImage from '@/assets/team-image.jpg';

const About = () => {
  // Mock timeline data
  const timelineEvents = [
    {
      year: '2020',
      title: 'The Idea',
      description: 'Founded with a vision to simplify task management for busy professionals.',
    },
    {
      year: '2021',
      title: 'First Launch',
      description: 'Released the initial version of TaskFlow with core features.',
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew to a team of 25+ dedicated professionals across the globe.',
    },
    {
      year: '2023',
      title: 'Major Update',
      description: 'Introduced AI-powered features and team collaboration tools.',
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Serving over 100,000 users worldwide with continued innovation.',
    },
  ];

  // Mock team members
  const teamMembers = [
    {
      id: '1',
      content: (
        <div className="bg-card rounded-2xl overflow-hidden shadow-strong hover-lift mx-2 font-sans">
          <img
            src={teamImage}
            alt="Sarah Chen"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3 text-foreground font-sans">Sarah Chen</h3>
            <p className="text-primary font-semibold mb-3 font-sans">CEO & Founder</p>
            <p className="text-muted-foreground text-base font-sans">
              Former product manager at Google with 10+ years in productivity software.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: '2',
      content: (
        <div className="bg-card rounded-2xl overflow-hidden shadow-strong hover-lift mx-2 font-sans">
          <img
            src={teamImage}
            alt="David Rodriguez"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3 text-foreground font-sans">David Rodriguez</h3>
            <p className="text-primary font-semibold mb-3 font-sans">CTO</p>
            <p className="text-muted-foreground text-base font-sans">
              Senior engineer with expertise in scalable systems and AI integration.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: '3',
      content: (
        <div className="bg-card rounded-2xl overflow-hidden shadow-strong hover-lift mx-2 font-sans">
          <img
            src={teamImage}
            alt="Emma Thompson"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3 text-foreground font-sans">Emma Thompson</h3>
            <p className="text-primary font-semibold mb-3 font-sans">Head of Design</p>
            <p className="text-muted-foreground text-base font-sans">
              Award-winning UX designer passionate about creating intuitive experiences.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: '4',
      content: (
        <div className="bg-card rounded-2xl overflow-hidden shadow-strong hover-lift mx-2 font-sans">
          <img
            src={teamImage}
            alt="Alex Kumar"
            className="w-full h-52 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3 text-foreground font-sans">Alex Kumar</h3>
            <p className="text-primary font-semibold mb-3 font-sans">Product Manager</p>
            <p className="text-muted-foreground text-base font-sans">
              Product strategist focused on user needs and market opportunities.
            </p>
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
        title="About TaskFlow"
        subtitle="We're on a mission to help people achieve more by organizing better. Our team is passionate about creating tools that make productivity effortless and enjoyable."
        variant="gradient"
      />

      {/* Company History */}
      <section className="py-20 bg-gradient-to-r from-secondary/40 to-primary/10 rounded-b-2xl shadow-strong mx-2 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5 font-sans">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
              From a simple idea to a global productivity platform, here's how we've grown.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full"></div>
            
            <div className="space-y-14">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10'}`}>
                    <div className="bg-card p-8 rounded-2xl shadow-strong hover-lift font-sans">
                      <div className="text-2xl font-bold text-primary mb-3 font-sans">{event.year}</div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground font-sans">{event.title}</h3>
                      <p className="text-muted-foreground font-sans">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-5 h-5 bg-primary rounded-full border-4 border-background"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 gradient-subtle rounded-2xl shadow-strong mx-2 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-card p-10 rounded-2xl shadow-strong hover-lift font-sans">
              <Target className="h-14 w-14 text-primary mb-7 drop-shadow-lg" />
              <h2 className="text-2xl font-bold text-foreground mb-5 font-sans">Our Mission</h2>
              <p className="text-muted-foreground font-sans text-lg">
                To empower individuals and teams worldwide to achieve their goals through intuitive, 
                intelligent task management tools that adapt to their unique workflows and help them 
                stay focused on what matters most.
              </p>
            </div>

            <div className="bg-card p-10 rounded-2xl shadow-strong hover-lift font-sans">
              <Heart className="h-14 w-14 text-accent mb-7 drop-shadow-lg" />
              <h2 className="text-2xl font-bold text-foreground mb-5 font-sans">Our Vision</h2>
              <p className="text-muted-foreground font-sans text-lg">
                A world where everyone can effortlessly organize their tasks, collaborate seamlessly 
                with others, and achieve their personal and professional goals without the stress of 
                forgotten deadlines or scattered priorities.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-card p-10 rounded-2xl shadow-strong font-sans">
            <div className="text-center">
              <Users className="h-14 w-14 text-primary mx-auto mb-7 drop-shadow-lg" />
              <h2 className="text-2xl font-bold text-foreground mb-5 font-sans">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                <div>
                  <CheckCircle className="h-10 w-10 text-primary mx-auto mb-5 drop-shadow" />
                  <h3 className="text-lg font-bold mb-3 font-sans">Simplicity</h3>
                  <p className="text-muted-foreground font-sans">
                    We believe the best tools are the ones you don't have to think about.
                  </p>
                </div>
                <div>
                  <CheckCircle className="h-10 w-10 text-primary mx-auto mb-5 drop-shadow" />
                  <h3 className="text-lg font-bold mb-3 font-sans">Innovation</h3>
                  <p className="text-muted-foreground font-sans">
                    Continuously pushing boundaries to create better user experiences.
                  </p>
                </div>
                <div>
                  <CheckCircle className="h-10 w-10 text-primary mx-auto mb-5 drop-shadow" />
                  <h3 className="text-lg font-bold mb-3 font-sans">Community</h3>
                  <p className="text-muted-foreground font-sans">
                    Building tools that bring people together and help teams succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Carousel */}
      <section className="py-20 bg-background font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5 font-sans">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
              The passionate individuals behind TaskFlow who work tirelessly to make your productivity goals a reality.
            </p>
          </div>
          <Carousel
            items={teamMembers}
            autoPlay={true}
            interval={5000}
            itemsPerView={3}
            className="max-w-6xl mx-auto"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;