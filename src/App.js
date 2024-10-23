import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Clock, Star, Music, Zap, Brain, Target, ArrowRight, X, Sparkles, Globe, Heart, Infinity } from 'lucide-react';

const features = [
  {
    icon: <Music className="w-6 h-6" />,
    title: "AI-Powered Sound Creation",
    description: "Transform abstract concepts into precisely crafted sonic elements that capture your exact vision.",
    points: [
      "Master cutting-edge AI tools",
      "Create unprecedented sounds",
      "Design unique sonic textures",
      "Shape emotional soundscapes"
    ]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Cultural Sound Fusion",
    description: "Break down barriers between musical traditions to create authentic, innovative sonic landscapes.",
    points: [
      "Blend diverse musical traditions",
      "Create new sonic hybrids",
      "Design cross-cultural rhythms",
      "Craft unique textures"
    ]
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Revolutionary Workflows",
    description: "Transform AI into an extension of your creative process, enhancing rather than replacing your vision.",
    points: [
      "Pioneer new production methods",
      "Create emotional depth",
      "Master advanced techniques",
      "Build unique sound palettes"
    ]
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Advanced Sound Design",
    description: "Push the boundaries of possibility with cutting-edge techniques that redefine music production.",
    points: [
      "Master professional tools",
      "Create impossible combinations",
      "Design evolving sounds",
      "Build signature sounds"
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
            <div className="flex justify-center mb-6">
              <Infinity className="w-8 h-8" style={{ color: '#E6AC55' }} />
            </div>
            <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-6">
              Experience the Impossible
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A Revolutionary Masterclass in AI-Powered Sound Creation
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              Master groundbreaking techniques that push the boundaries of what's possible in music production. Create sounds that have never existed before.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Clock className="w-5 h-5" style={{ color: '#E6AC55' }} />
              <span className="text-lg">2 Hours of Creative Liberation</span>
            </div>
            <Button 
              size="lg" 
              style={{ 
                backgroundColor: '#E6AC55',
                color: '#0D0C0D'
              }}
              className="hover:opacity-90 text-lg px-8 py-6 font-bold"
            >
              Begin Your Journey
            </Button>
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
              Push beyond traditional sampling constraints. Create emotional, deeply personal music that redefines what's possible.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
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
                  <span>Generate sounds that have never existed in human history</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-6 h-6 mt-1" style={{ color: '#E6AC55' }} />
                  <span>Blend cultural elements in ways that defy traditional boundaries</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-6 h-6 mt-1" style={{ color: '#E6AC55' }} />
                  <span>Create emotional landscapes that speak directly to the soul</span>
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
        }} className="text-center max-w-2xl mx-auto p-12">
          <h2 className="font-poppins text-3xl font-bold mb-6 text-white">
            Create Unlimited Sounds
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join an elite group of producers pushing the boundaries of what's possible in music production. Create sounds that have never existed before.
          </p>
          <div className="space-y-4">
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
            <p className="text-sm text-white">
              Limited spots available for this groundbreaking experience.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}