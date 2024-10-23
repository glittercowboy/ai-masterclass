import React from 'react';
import Card from './components/ui/Card';
import Button from './components/ui/Button';
import { Check, Clock, Star, Music, Zap, Brain, Target, ArrowRight, X, Sparkles, Globe, Heart } from 'lucide-react';

export default function MasterclassLanding() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Prepare to Have Your Mind Blown
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              The AI Sampling Masterclass That Will Reignite Your Creativity Like Never Before
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Master groundbreaking AI techniques that 99% of producers don't even know exist. Create sounds that are impossible to find anywhere else. Make music that's truly, uniquely yours.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Clock className="w-5 h-5" />
              <span className="text-lg">2 Hours of Mind-Expanding Knowledge</span>
            </div>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6">
              Join the Revolution
            </Button>
          </div>
        </div>
      </div>

      {/* Emotional Hook Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              This Isn't Just Another AI Workshop
            </h2>
            <p className="text-xl text-gray-700">
              This is your gateway to creating heartfelt, emotionally-charged music that breaks free from the constraints of traditional sampling. No more endless scrolling through sample packs. No more using the same sounds as everyone else.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Value Proposition */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="space-y-8 text-lg text-gray-700">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Imagine Being Able To...
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-purple-600 mt-1" />
                  <span>Generate the exact sound you're hearing in your head, even if it doesn't exist anywhere else</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-purple-600 mt-1" />
                  <span>Blend African rhythms with Indian classical melodies and Japanese folk harmonies in ways that feel natural and innovative</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-purple-600 mt-1" />
                  <span>Create emotional textures that speak directly to the soul, using AI as your creative partner</span>
                </li>
              </ul>
            </div>
            
            <p className="text-xl">
              This isn't about replacing your creativity with AI. It's about expanding your artistic possibilities beyond what you thought was possible.
            </p>
          </div>
        </div>

        {/* Who It's For */}
        <Card className="max-w-3xl mx-auto p-8 mb-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-600">This Is For You If:</h3>
              <div className="space-y-4">
                {[
                  "You're ready to be at the forefront of music production innovation",
                  "You're tired of using the same samples as everyone else",
                  "You want to create sounds that don't exist anywhere else",
                  "You see AI as a tool for enhancing creativity, not replacing it",
                  "You're excited about pushing boundaries and breaking rules"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-600">This Is Not For:</h3>
              <div className="space-y-4">
                {[
                  "Beginners who haven't mastered the basics",
                  "People looking for 'easy' shortcuts to success",
                  "Those who fear new technology",
                  "Anyone expecting AI to do all the creative work",
                  "Producers who want to sound like everyone else"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* What You'll Learn */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Master the Techniques That Will Set You Apart
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {[
            {
              icon: <Music className="w-6 h-6" />,
              title: "AI-Powered Sound Generation",
              description: "Learn to speak the language of sound. Transform abstract emotions and ideas into precise, unique samples that capture exactly what you're looking for.",
              points: [
                "Master UDIO and Acon Digital Remix",
                "Create genre-defying sonic textures",
                "Generate samples that don't exist anywhere else",
                "Transform emotions into sound"
              ]
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Advanced Cultural Fusion",
              description: "Break down cultural barriers and create unique sonic landscapes by blending diverse musical traditions in ways that feel authentic and fresh.",
              points: [
                "Blend African, Indian, and Japanese elements",
                "Create new genre hybrids",
                "Master cross-cultural rhythms",
                "Design unique ethnic textures"
              ]
            },
            {
              icon: <Brain className="w-6 h-6" />,
              title: "Creative AI Integration",
              description: "Transform AI from a basic tool into a true creative partner. Learn workflows that enhance rather than replace your artistic vision.",
              points: [
                "Develop AI-enhanced workflows",
                "Create emotional connections",
                "Master poetic prompt engineering",
                "Build unique sound palettes"
              ]
            },
            {
              icon: <Target className="w-6 h-6" />,
              title: "Revolutionary Sound Design",
              description: "Push the boundaries of what's possible with cutting-edge techniques that combine AI generation with advanced production tools.",
              points: [
                "Master Melodyne integration",
                "Create impossible sound combinations",
                "Design evolving textures",
                "Build unique sonic signatures"
              ]
            }
          ].map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">
            Join the Future of Music Production
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Walk away with knowledge that only a handful of producers in the world currently possess. Create sounds that have never been heard before. Make music that's truly yours.
          </p>
          <div className="space-y-4">
            <Button size="lg" className="bg-blue-900 text-white hover:bg-blue-800 text-lg px-8 py-6">
              Transform Your Music Production Today
            </Button>
            <p className="text-sm text-gray-600">
              Limited spots available - Once they're gone, they're gone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}