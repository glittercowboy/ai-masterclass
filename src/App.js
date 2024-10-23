import React from 'react';
import Card from './components/ui/Card';
import Button from './components/ui/Button';
import myPhoto from './assets/photo.webp';
import teacherPhoto from './assets/taches.webp';
import logo from './assets/logo.png'
import { FaInstagram, FaYoutube, FaSpotify, FaBandcamp, FaUsers } from 'react-icons/fa';
import { Check, Clock, Music, Zap, Brain, Target, ArrowRight, Sparkles, Globe, Heart, Infinity } from 'lucide-react';

const features = [
  {
    icon: <Music className="w-6 h-6" />,
    title: "AI-Powered Sound Creation",
    description: "Generate unique sounds from scratch using advanced AI tools. Push your creativity beyond traditional sampling and create custom sonic elements.",
    points: [
      "Master groundbreaking AI tools",
      "Create sounds no one else has heard",
      "Design unique sonic textures",
      "Shape emotional soundscapes"
    ]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Cultural Sound Fusion",
    description: "Blend unique feels of different cultural eras throughout history and musical traditions from across the globe to craft innovative and hybrid soundscapes.",
    points: [
      "Combine global influences seamlessly",
      "Create fresh, genre-bending music",
      "Design culturally diverse rhythms",
      "Craft sounds with deep authenticity"
    ]
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Revolutionary Workflows",
    description: "Incorporate AI into your creative process to enhance your artistic voice. Use advanced tools to enhance—not replace—your vision.",
    points: [
      "Integrate AI into your workflow",
      "Create emotional depth with ease",
      "Apply advanced production techniques",
      "Refine your unique sound"
    ]
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Advanced Sound Design",
    description: "Redefine what’s possible in music production by mastering cutting-edge techniques that will push your sound into new dimensions.",
    points: [
      "Unlock professional sound design techniques",
      "Blend genres that were once incompatible",
      "Design evolving soundscapes",
      "Build your signature sound"
    ]
  }
];

export default function MasterclassLanding() {
  return (
    <div style={{ backgroundColor: '#0D0C0D' }} className="min-h-screen text-white">
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #171617 0%, #0D0C0D 50%, #171617 100%)'
      }}>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
          <img 
              src={myPhoto} 
              alt="Custom Photo" 
              style={{ width: '100%', height: 'auto', marginBottom: '20px' }} 
            />
            <div className="flex justify-center mb-6">
              <Infinity className="w-8 h-8" style={{ color: '#E6AC55' }} />
            </div>
            <p className="text-xl md:text-2xl mb-2">
              TÂCHES PRESENTS:
            </p>
            <h1 className="font-poppins text-4xl md:text-6xl font-bold mt-0 mb-6">
              A.I. SAMPLING MASTERCLASS
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A Revolutionary Masterclass in AI-Assisted Music Production
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              Master the <b><u>most</u></b> cutting-edge AI music production techniques that very, very few people on Earth even know exist. Redefine your creative boundaries.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Clock className="w-5 h-5" style={{ color: '#E6AC55' }} />
              <span className="text-lg">Thursday 7th November | 11AM - 1PM EST </span>
            </div>
            <a href="https://www.tachesteaches.courses/offers/Diu98a77" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                style={{ 
                  backgroundColor: '#E6AC55',
                  color: '#0D0C0D'
                }}
                className="hover:opacity-90 text-lg px-8 py-6 font-bold"
              >
                Sign Up Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    

      {/* Vision Section */}
      <div style={{ backgroundColor: '#171617' }} className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold">
              Pioneer the Future of Sound
            </h2>
            <p className="text-xl text-gray-300">
              Move beyond conventional sampling methods. Use AI to generate sonic landscapes that blend cultural, emotional, and musical traditions. Create your own sound.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16
      ">
        {/* Possibilities Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="space-y-8 text-lg text-white">
            <Card style={{ 
              background: 'linear-gradient(135deg, #171617 0%, #1A1919 100%)',
              borderColor: 'rgba(230,172,85,0.2)'
            }} className="p-8">
              <h3 className="font-poppins text-2xl font-bold mb-4 text-white">
                Unlock Your Creative Potential
              </h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 mt-1" style={{ color: '#E6AC55' }} />
                  <span>Generate sounds that have never existed in human history.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-6 h-6 mt-1" style={{ color: '#E6AC55' }} />
                  <span>Blend diverse cultural and musical influences to craft entirely original compositions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-6 h-6 mt-1" style={{ color: '#E6AC55' }} />
                  <span>Create emotive soundscapes that connect deeply with your audience.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Who It's For */}
        <Card style={{ 
          background: 'linear-gradient(135deg, #171617 0%, #1A1919 100%)',
          borderColor: 'rgba(230,172,85,0.2)'
        }} className="max-w-3xl mx-auto p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-poppins text-2xl font-bold mb-6" style={{ color: '#E6AC55' }}>
                For Visionary Producers
              </h3>
              <div className="space-y-4">
                {[
                  "Ready to pioneer the future of music",
                  "Seeking to create truly original sounds",
                  "Excited to push creative boundaries",
                  "Eager to harness revolutionary technology",
                  "Driven to stand out from the crowd"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#E6AC55' }} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-poppins text-2xl font-bold mb-6" style={{ color: '#E6AC55' }}>
                Prerequisites
              </h3>
              <div className="space-y-4">
                {[
                  "Advanced production experience",
                  "Mastery of basic music theory",
                  "Familiarity with DAWs",
                  "Creative ambition",
                  "Openness to innovation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#E6AC55' }} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Features */}
        <h2 className="font-poppins text-3xl font-bold text-center mb-12">
          Master Revolutionary Techniques
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              style={{ 
                background: 'linear-gradient(135deg, #171617 0%, #1A1919 100%)',
                borderColor: 'rgba(230,172,85,0.2)'
              }}
              className="p-6 hover:shadow-[0_0_15px_rgba(230,172,85,0.15)] transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div style={{ color: '#E6AC55' }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold mb-2 text-white">{feature.title}</h4>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" style={{ color: '#E6AC55' }} />
                      <span className="text-sm text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <Card style={{ 
          background: 'linear-gradient(135deg, #171617 0%, #1A1919 100%)',
          borderColor: 'rgba(230,172,85,0.2)'
        }} className="text-center max-w-2xl mx-auto p-16">
          <h2 className="font-poppins text-3xl font-bold mb-6 text-white">
            Create Unlimited Sounds
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join an elite group of producers pushing the boundaries of what's possible in music production. Create sounds that have never existed before.
          </p>
          <div className="space-y-4">
            <a href="https://www.tachesteaches.courses/offers/Diu98a77" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                style={{ 
                  backgroundColor: '#E6AC55',
                  color: '#0D0C0D'
                }}
                className="hover:opacity-90 text-lg px-8 py-6 font-bold"
              >
                Transform Your Music Production
              </Button>
            </a>
            <p className="text-sm text-white">
              Limited spots available for this groundbreaking experience.
            </p>
          </div>
        </Card> 
        {/* Teacher Bio Section */}
<div className="container mx-auto px-4 py-16 text-center">
  <div className="max-w-3xl mx-auto">
    <img src={teacherPhoto} alt="TÂCHES" className="mx-auto mb-8 rounded-full w-56 h-56 object-cover" />
    <h2 className="font-poppins text-3xl font-bold mb-4">Meet Your Instructor</h2>
    <p className="text-lg text-gray-300 mb-8">
      TÂCHES is an internationally renowned independent house music producer with over 70 million streams and a career that has taken him across the world, playing major festivals and clubs. Having released music on leading labels like Anjunadeep and Get Physical, and now running his own label, Glitter Cowboy, TÂCHES is known for his innovative production techniques and artistic mastery. His approach blends cutting-edge technology with a deeply emotional and artistic touch, making him a sought-after mentor for producers looking to break creative boundaries and build a sustainable, independent music career.
    </p>
  </div>
</div>

      </div>
      {/* Social Media Icons Section */}
<div className="bg-black py-8 text-center">
  <div className="container mx-auto">
    <div className="flex justify-center gap-6 mb-4">
    <a href="https://open.spotify.com/artist/0xD1RASjJGXnTh5NxdrKxF?si=la9CxFKPQDurOdvys2wCgA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaSpotify className="w-8 h-8" />
      </a>
      <a href="https://www.instagram.com/officialtaches/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaInstagram className="w-8 h-8" />
      </a>
      <a href="https://www.youtube.com/tachesteaches" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaYoutube className="w-8 h-8" />
      </a>
      <a href="https://taches.bandcamp.com/music" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaBandcamp className="w-8 h-8" />
      </a>
      <a href="https://www.skool.com/music" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
  <FaUsers className="w-8 h-8" />
</a>
    </div>
    <p className="text-white text-sm">
      Follow TÂCHES on social media for more content
    </p>
  </div>
</div>
    </div>
  );
}





{/* Skool Community Link */}

