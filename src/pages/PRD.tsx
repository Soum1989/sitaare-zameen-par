import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, Target, Users, TrendingUp, Brain, Palette, Calculator, BookOpen, 
  Star, Heart, IndianRupee, School, Building, Handshake, Shield, Volume2, 
  Smartphone, Lock, Calendar, CheckCircle, Rocket, Globe, Bot, UserCog
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PRD = () => {
  const navigate = useNavigate();

  const personas = [
    { 
      segment: "Primary User", 
      persona: "The Child (Rohan)", 
      insight: "Uses parent's phone; needs immediate positive feedback to stay engaged.",
      jtbd: "Let me play without fear of 'wrong' buzzers, and help me pick up where I left off.",
      emoji: "🧒"
    },
    { 
      segment: "Secondary User", 
      persona: "The Parent (Guardian)", 
      insight: "Owns the device; worries about 'screen addiction' vs. 'learning.'",
      jtbd: "Let me switch modes so my usage doesn't mess up my child's progress reports.",
      emoji: "👨‍👩‍👧"
    },
    { 
      segment: "B2B Buyer", 
      persona: "School/CSR Head", 
      insight: "Needs aggregate data to justify inclusion funding.",
      jtbd: "Show me that 500 kids improved their focus by 20% this quarter.",
      emoji: "🏢"
    }
  ];

  const games = [
    { title: "Memory Match", icon: Brain, description: "No timers. Focus on visual recall.", color: "text-game-primary" },
    { title: "Color Patterns", icon: Palette, description: "Sequence repetition. Focus on impulse control.", color: "text-game-secondary" },
    { title: "Number Fun", icon: Calculator, description: "Quantity matching. Focus on basic numeracy.", color: "text-game-success" },
    { title: "Word Pictures", icon: BookOpen, description: "Object naming. Focus on vocabulary.", color: "text-game-danger" }
  ];

  const kpis = [
    { category: "Usage", metric: "Avg. Session Time", target: "15–20 Mins", rationale: "Indicates 'Productive Screen Time' vs. Addiction." },
    { category: "Therapy", metric: "Voluntary Retries", target: "> 2 per session", rationale: "Confirms 'Super Buddy' reduces fear of failure." },
    { category: "Business", metric: "Paid Conversion", target: "5–8%", rationale: "Standard benchmark for freemium ed-tech/health apps." },
    { category: "Tech", metric: "Crash Free Users", target: "99%", rationale: "Critical for low-end devices in Tier-2/3 cities." }
  ];

  const roadmap = [
    {
      phase: "Phase 1",
      title: "MVP & Pilot",
      period: "Jan – Mar 2026",
      region: "Delhi/NCR, Bihar, UP (Hindi Belt)",
      features: [
        "Web App (PWA) accessible on low-end smartphones",
        "Super Buddy (Generic) implementation",
        "Parent/Child Profile Switcher",
        "4 Core Games"
      ],
      metric: "Validate 'Emotional Safety' (Voluntary Retries > 2)"
    },
    {
      phase: "Phase 2",
      title: "Data & Institutional Layer",
      period: "Apr – Jun 2026",
      features: [
        "CSR Analytics Dashboard (Aggregate view)",
        "Teacher 'Classroom View' (Monitor multiple profiles)"
      ],
      metric: "B2B Pilot Conversion (20% of pilots moving to paid contracts)"
    },
    {
      phase: "Phase 3",
      title: "Scale & Localization",
      period: "Jul – Dec 2026",
      features: [
        "Native Android App (for offline performance)",
        "Regional Languages: Tamil, Bengali, Marathi, Telugu interfaces",
        "Pan-India rollout based on Phase 1 learnings"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Games
          </Button>
          
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-12 h-12 text-game-primary animate-pulse" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sitaare Zameen Par
              </h1>
              <Star className="w-12 h-12 text-game-primary animate-pulse" />
            </div>
            
            <p className="text-2xl text-muted-foreground font-medium">
              Product Requirements Document
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>Version: 2.1 (Execution Ready)</span>
              <span>•</span>
              <span>Status: MVP / Pre-Development</span>
              <span>•</span>
              <span>Updated: Dec 29, 2025</span>
              <span>•</span>
              <span>Region: North India (Hindi/English)</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Badge variant="secondary" className="text-sm px-4 py-2">Therapeutic Gaming</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Therapy-First Platform</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">B2C + CSR Model</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">PWA</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Vision & Mission */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-primary" />
            1. Product Vision & Mission
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To build a world where neurodiverse children are defined by their <span className="font-semibold text-foreground">potential, not their deficits</span>.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-secondary flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To create a therapeutic, game-based learning platform that builds cognitive skills and emotional confidence through <span className="font-semibold text-foreground">joyful, failure-free play</span>.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Core Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground italic">
                  "Every attempt deserves celebration."
                </p>
                <p className="text-muted-foreground mt-2">Effort {">"} Accuracy</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Problem Statement */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            2. Problem Statement
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive">The Problem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Traditional therapy is <span className="font-semibold">instruction-heavy and anxiety-inducing</span>. Neurodiverse children often share devices with parents, leading to mixed data and lack of focused, safe spaces for learning.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-game-success/10 border-game-success/30">
              <CardHeader>
                <CardTitle className="text-game-success">The Opportunity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A <span className="font-semibold text-foreground">"Therapy-First" gaming platform</span> that turns screen time into structured, anxiety-free skill building, distinct from generic educational apps.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Target Audience & Personas */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            3. Target Audience & Personas
          </h2>
          
          <div className="space-y-6">
            {personas.map((p, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur shadow-gentle">
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    <div className="text-center lg:text-left">
                      <Badge variant="outline" className="mb-2">{p.segment}</Badge>
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <span className="text-3xl">{p.emoji}</span>
                        <h3 className="text-xl font-bold">{p.persona}</h3>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-sm text-muted-foreground mb-2"><span className="font-semibold text-foreground">Key Insight:</span> {p.insight}</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="text-sm font-medium text-primary">Job to be Done:</p>
                      <p className="text-sm text-muted-foreground italic">"{p.jtbd}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Functional Requirements */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Rocket className="w-8 h-8 text-primary" />
            4. Functional Requirements (The MVP)
          </h2>
          
          <div className="space-y-8">
            {/* Super Buddy */}
            <Card className="bg-gradient-to-br from-game-primary/10 to-game-secondary/10 border-game-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Bot className="w-8 h-8 text-game-primary" />
                  4.1 The "Super Buddy" Character
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Instead of a licensed celebrity, the platform uses a proprietary mascot—a friendly, gender-neutral, animated character (e.g., a playful star or warm robot).
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">🎯 Guide</h4>
                    <p className="text-sm text-muted-foreground">Explains games using voice-over (Hindi/English)</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-secondary mb-2">🎉 Cheerleader</h4>
                    <p className="text-sm text-muted-foreground">Appears visually to celebrate wins ("High Five" animation)</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">💚 Companion</h4>
                    <p className="text-sm text-muted-foreground">Offers encouragement during failure ("Let's try again together!")</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Switcher */}
            <Card className="bg-card/80 backdrop-blur shadow-gentle">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <UserCog className="w-6 h-6 text-primary" />
                  4.2a Profile Switcher (Parent vs. Child Mode)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <span className="font-semibold">Rationale:</span> Since children share phones, we must separate data streams.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Lock className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Parent Mode (PIN Protected)</h4>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Access to dashboards & settings</li>
                      <li>• Subscription management</li>
                      <li>• Profile creation</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Smartphone className="w-5 h-5 text-secondary" />
                      <h4 className="font-semibold">Child Mode (Kiosk Mode)</h4>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Simplified UI (Big buttons, no text-heavy menus)</li>
                      <li>• "Resume Play" feature (One-tap start)</li>
                      <li>• Locked navigation (Prevents accidental exit)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Game Suite */}
            <Card className="bg-card/80 backdrop-blur shadow-gentle">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Brain className="w-6 h-6 text-primary" />
                  4.2b Therapeutic Game Suite (North India Launch)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  <span className="font-semibold">Language:</span> Interface in Hindi & English (Hinglish blend allowed)
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {games.map((game, index) => {
                    const IconComponent = game.icon;
                    return (
                      <div key={index} className="text-center p-4 rounded-lg bg-background/50">
                        <IconComponent className={`w-10 h-10 mx-auto ${game.color} mb-3`} />
                        <h4 className="font-semibold mb-1">{game.title}</h4>
                        <p className="text-sm text-muted-foreground">{game.description}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Emotional Safety Engine */}
            <Card className="bg-gradient-to-br from-game-success/10 to-accent/10 border-game-success/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Shield className="w-6 h-6 text-game-success" />
                  4.2c The "Emotional Safety" Engine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">🎚️ Adaptive Difficulty</h4>
                    <p className="text-sm text-muted-foreground">
                      If a child makes 2 consecutive errors, the game automatically simplifies (e.g., reduces grid from 3x3 to 2x2)
                    </p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-secondary mb-2">🔇 No Negative Cues</h4>
                    <p className="text-sm text-muted-foreground">
                      Replace "Wrong Answer Buzzer" with a soft "Whoops" or neutral sound
                    </p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Volume2 className="w-4 h-4 text-accent" />
                      <h4 className="font-semibold">Sensory Controls</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Independent volume sliders for Music (often distracting) and Voice/SFX (instructional)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Business & Revenue Model */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <IndianRupee className="w-8 h-8 text-primary" />
            5. Business & Revenue Model
          </h2>
          
          <div className="space-y-8">
            {/* B2C Subscription */}
            <Card className="bg-card/80 backdrop-blur shadow-gentle">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-primary" />
                  Primary Revenue: B2C Subscription
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-primary/5 p-6 rounded-lg text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">₹499/month</h3>
                    <p className="text-muted-foreground">Starter Plan</p>
                  </div>
                  <div className="bg-secondary/5 p-6 rounded-lg text-center">
                    <h3 className="text-3xl font-bold text-secondary mb-2">₹999/month</h3>
                    <p className="text-muted-foreground">Family Plan</p>
                  </div>
                </div>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Basis:</span> Benchmarked against competitor therapy apps (CogniFit, Otsimo) and local therapy costs (often ₹500–1000 per session).
                  </p>
                  <p className="text-sm font-medium text-primary mt-2">
                    Value Prop: "The cost of one therapy session for a whole month of practice."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* B2B/CSR */}
            <Card className="bg-gradient-to-br from-accent/5 to-secondary/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Handshake className="w-6 h-6 text-accent" />
                  Secondary Revenue: B2B/CSR Bundles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-background/50 p-6 rounded-lg text-center mb-6">
                  <p className="text-muted-foreground mb-2">Unit: "City Bundle"</p>
                  <p className="text-lg font-semibold">40 schools / ~2,000 students</p>
                  <h3 className="text-4xl font-bold text-accent mt-4">₹1 Crore</h3>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Deliverable:</span> Software licenses + Quarterly Impact Reports + Teacher Training Tablets
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Product Roadmap */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-primary" />
            6. Product Roadmap (2026)
          </h2>
          
          <div className="space-y-6">
            {roadmap.map((phase, index) => (
              <Card key={index} className={`bg-card/80 backdrop-blur shadow-gentle ${index === 0 ? 'border-primary/30' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <Badge variant={index === 0 ? "default" : "secondary"}>{phase.phase}</Badge>
                      <CardTitle className="text-xl">{phase.title}</CardTitle>
                    </div>
                    <Badge variant="outline">{phase.period}</Badge>
                  </div>
                  {phase.region && (
                    <p className="text-sm text-muted-foreground mt-2">
                      <Globe className="w-4 h-4 inline mr-1" />
                      Region: {phase.region}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {phase.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-game-success mt-0.5 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {phase.metric && (
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-primary">Key Metric:</h4>
                        <p className="text-sm text-muted-foreground">{phase.metric}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Metrics KPIs */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-primary" />
            7. Success Metrics (KPIs)
          </h2>
          
          <Card className="bg-card/80 backdrop-blur shadow-gentle">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Category</th>
                      <th className="text-left py-3 px-4 font-semibold">Metric</th>
                      <th className="text-left py-3 px-4 font-semibold text-primary">Target</th>
                      <th className="text-left py-3 px-4 font-semibold">Rationale</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {kpis.map((kpi, index) => (
                      <tr key={index} className="hover:bg-muted/50">
                        <td className="py-4 px-4">
                          <Badge variant="outline">{kpi.category}</Badge>
                        </td>
                        <td className="py-4 px-4 font-medium">{kpi.metric}</td>
                        <td className="py-4 px-4 font-bold text-primary">{kpi.target}</td>
                        <td className="py-4 px-4 text-muted-foreground">{kpi.rationale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">8. Immediate Next Step</h2>
          
          <Card className="bg-background/80 backdrop-blur max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <Badge variant="default" className="mx-auto mb-2">Design Sprint (2 Weeks)</Badge>
              <CardTitle>Priority Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                <div>
                  <h4 className="font-semibold">Sketch "Super Buddy"</h4>
                  <p className="text-sm text-muted-foreground">Create 3 variations of the character (Robot vs. Animal vs. Star) and test with 5 kids for preference.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/5 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">2</div>
                <div>
                  <h4 className="font-semibold">Wireframe the "Switch Profile" Flow</h4>
                  <p className="text-sm text-muted-foreground">Design the Parent-to-Child handoff screen to ensure it is seamless but secure.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground">
            Sitaare Zameen Par • Version 2.1 • Building a world where every child shines ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default PRD;
