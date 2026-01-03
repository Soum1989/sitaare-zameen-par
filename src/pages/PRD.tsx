import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, Target, Users, TrendingUp, Brain, Palette, Calculator, BookOpen, 
  Star, Heart, IndianRupee, School, Building, Handshake, Shield, Volume2, 
  Smartphone, Lock, Calendar, CheckCircle, Rocket, Globe, Bot, UserCog,
  Eye, AlertTriangle, Lightbulb, Gamepad2, Award, BarChart3, Clock, RefreshCw,
  Tablet, Monitor, GraduationCap, Building2, Briefcase, MessageCircle, Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PRD = () => {
  const navigate = useNavigate();

  const primaryUserNeeds = [
    "Emotional safety",
    "Predictable, repeatable interactions",
    "Low-pressure retries",
    "Positive reinforcement"
  ];

  const secondaryUsers = [
    {
      title: "Parents & Caregivers",
      icon: Heart,
      needs: ["Want therapy continuity at home", "Need reassurance, not diagnosis", "Prefer simple progress signals"]
    },
    {
      title: "Special Educators / Therapists",
      icon: GraduationCap,
      needs: ["Need engagement, not compliance", "Want play to support therapy goals"]
    },
    {
      title: "Institutions",
      icon: Building2,
      needs: ["Schools (inclusive classrooms)", "NGOs", "CSR programs (outcome-driven)"]
    }
  ];

  const jtbdItems = [
    {
      user: "Child",
      emoji: "🧒",
      quote: "When I feel anxious in learning environments, I want activities that feel safe and playful, so I can try without fear and stay engaged."
    },
    {
      user: "Parent",
      emoji: "👨‍👩‍👧",
      quote: "When my child struggles with attention, I want a non-stressful therapy tool that builds confidence, so progress doesn't feel forced."
    },
    {
      user: "Educator / Therapist",
      emoji: "👩‍🏫",
      quote: "When children disengage, I want therapy-aligned play tools that maintain attention without triggering anxiety."
    },
    {
      user: "CSR / Institution",
      emoji: "🏢",
      quote: "When funding inclusive education, I want measurable, non-clinical impact data to justify scale and outcomes."
    }
  ];

  const corePrinciples = [
    { title: "Therapy Before Teaching", icon: Heart, color: "text-game-primary" },
    { title: "No Failure States", icon: Shield, color: "text-game-success" },
    { title: "Emotional Safety First", icon: Star, color: "text-game-secondary" },
    { title: "Progress Through Play", icon: Gamepad2, color: "text-primary" },
    { title: "Measurable Without Medicalization", icon: BarChart3, color: "text-accent" }
  ];

  const games = [
    { title: "Attention Focus", icon: Eye, description: "Builds sustained concentration", color: "text-game-primary" },
    { title: "Memory Recall", icon: Brain, description: "Strengthens working memory", color: "text-game-secondary" },
    { title: "Motor Coordination", icon: Gamepad2, description: "Develops fine motor skills", color: "text-game-success" },
    { title: "Calm Repetition", icon: RefreshCw, description: "Creates soothing loops", color: "text-accent" }
  ];

  const roadmap = [
    {
      phase: "Phase 1",
      title: "MVP Validation & Early Pilots",
      period: "Jan 2026 – Mar 2026",
      goals: ["Validate emotional engagement", "Confirm therapy-first value"],
      scope: ["4 games", "Parent-led home pilots", "Inclusive classroom pilots"],
      color: "from-game-primary/20 to-game-primary/5"
    },
    {
      phase: "Phase 2",
      title: "Measurement & Institutional Readiness",
      period: "Apr 2026 – Jun 2026",
      goals: ["Measurability", "CSR readiness"],
      scope: ["Analytics dashboards", "Therapy hour tracking", "CSR reporting layer"],
      color: "from-game-secondary/20 to-game-secondary/5"
    },
    {
      phase: "Phase 3",
      title: "Scale via Partnerships",
      period: "Jul 2026 – Dec 2026",
      goals: ["Reach 150+ schools", "CSR district pilots"],
      scope: ["NGO partnerships", "Rollout playbooks"],
      color: "from-game-success/20 to-game-success/5"
    }
  ];

  const phaseMetrics = [
    { phase: "Phase 1", metrics: ["Avg session time", "Voluntary retries", "Game completion"] },
    { phase: "Phase 2", metrics: ["Engagement trends", "Skill improvement indicators", "Therapy hours delivered"] },
    { phase: "Phase 3", metrics: ["Institutions onboarded", "Active learners", "Revenue from bundles"] }
  ];

  const postLaunchKPIs = {
    product: [
      { metric: "Avg session time", target: "15–20 min" },
      { metric: "Completion rate", target: "85%+" },
      { metric: "7-day retention", target: "60%+" },
      { metric: "NPS", target: "50+" }
    ],
    therapy: [
      { metric: "Attention span improvement", target: "Measurable" },
      { metric: "Memory consistency", target: "Tracked" },
      { metric: "Motor responsiveness", target: "Monitored" }
    ],
    business: [
      { metric: "Paid conversion", target: "10–15%" },
      { metric: "School pilots", target: "10–15" },
      { metric: "CSR pilots", target: "3–5" }
    ]
  };

  const risks = [
    { risk: "Low adoption", mitigation: "Emotional safety-led onboarding" },
    { risk: "Over-medicalization", mitigation: "Non-clinical language" },
    { risk: "Measurement skepticism", mitigation: "Transparent metrics" },
    { risk: "Scale complexity", mitigation: "Standardized rollout" }
  ];

  const successCriteria = [
    { icon: Heart, text: "Children willingly return to play" },
    { icon: Star, text: "Parents feel relief, not pressure" },
    { icon: TrendingUp, text: "Schools see engagement improve" },
    { icon: BarChart3, text: "CSR partners see measurable impact" }
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
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Therapy-first, game-based digital intervention platform
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Tablet className="w-4 h-4" />
                <span>Tablet (Primary)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>Mobile (Secondary)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                <span>Web Dashboard</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Badge variant="secondary" className="text-sm px-4 py-2">🎮 Therapy-First Gaming</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">🧠 Cognitive Development</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">💚 Emotional Safety</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">📊 Measurable Impact</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        
        {/* 1. Product Vision */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-primary" />
            1. Product Vision
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Vision Statement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create <span className="font-semibold text-foreground">emotionally safe, play-based therapeutic experiences</span> that help neurodiverse children build attention, memory, and motor coordination—<span className="text-primary font-semibold">before academic learning begins</span>.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-game-primary/10 to-game-secondary/10 border-game-primary/30">
              <CardHeader>
                <CardTitle className="text-game-primary flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Core Belief
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xl font-medium text-foreground italic">
                  "Children do not disengage because they cannot learn."
                </p>
                <p className="text-xl font-semibold text-game-primary">
                  "They disengage because learning often feels unsafe."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 2. Problem Statement */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-primary" />
            2. Problem Statement
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Primary Problem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Neurodiverse children (autism, ADHD, learning differences) struggle in <span className="font-semibold text-foreground">instruction-heavy, correction-driven environments</span> that increase anxiety and reduce attention.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur shadow-gentle">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Observed Consequences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">•</span>
                    <span className="text-muted-foreground">Short attention spans due to cognitive overload</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">•</span>
                    <span className="text-muted-foreground">Fear of making mistakes → avoidance behaviors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">•</span>
                    <span className="text-muted-foreground">Low therapy adherence at home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">•</span>
                    <span className="text-muted-foreground">Poor engagement in classrooms and therapy centers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-secondary/5 border-secondary/20">
            <CardHeader>
              <CardTitle className="text-secondary flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Evidence Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-background/50 p-4 rounded-lg text-center">
                  <GraduationCap className="w-8 h-8 mx-auto text-secondary mb-2" />
                  <p className="text-sm text-muted-foreground">Interviews with special educators (10+ years experience)</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg text-center">
                  <Building2 className="w-8 h-8 mx-auto text-secondary mb-2" />
                  <p className="text-sm text-muted-foreground">Clinical insights from AIIMS-backed psychiatric practice</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg text-center">
                  <MessageCircle className="w-8 h-8 mx-auto text-secondary mb-2" />
                  <p className="text-sm text-muted-foreground">First-person feedback from neurodiverse students</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg text-center">
                  <Globe className="w-8 h-8 mx-auto text-secondary mb-2" />
                  <p className="text-sm text-muted-foreground">WHO and Indian pediatric therapy research</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 3. Target Users & Personas */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            3. Target Users & Personas
          </h2>
          
          {/* Primary User */}
          <Card className="bg-gradient-to-br from-game-primary/10 to-game-secondary/10 border-game-primary/30 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <span className="text-4xl">🧒</span>
                Primary User: Neurodiverse Children (6–14 years)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Conditions Supported:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Autism Spectrum (mild–moderate)</Badge>
                    <Badge variant="outline">ADHD</Badge>
                    <Badge variant="outline">Learning Differences</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Core Needs:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {primaryUserNeeds.map((need, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-game-success" />
                        {need}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Secondary Users */}
          <div className="grid md:grid-cols-3 gap-6">
            {secondaryUsers.map((user, index) => {
              const IconComponent = user.icon;
              return (
                <Card key={index} className="bg-card/80 backdrop-blur shadow-gentle">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                      {user.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {user.needs.map((need, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {need}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* 4. Jobs To Be Done */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            4. Jobs To Be Done (JTBD)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {jtbdItems.map((item, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur shadow-gentle hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{item.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.user}</h3>
                      <p className="text-muted-foreground italic text-sm leading-relaxed">
                        "{item.quote}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. Solution Overview */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-primary" />
            5. Solution Overview
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-game-success/10 border-game-success/30">
              <CardHeader>
                <CardTitle className="text-game-success flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  What Sitaare Zameen Par IS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A <span className="font-semibold text-foreground">therapy-first gaming platform</span> using play, repetition, and rewards to strengthen foundational cognitive skills.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  What It Is NOT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-destructive">✗</span>
                    Not an academic learning app
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-destructive">✗</span>
                    Not a diagnostic tool
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-destructive">✗</span>
                    Not a clinical replacement
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 6. Core Product Principles */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Star className="w-8 h-8 text-primary" />
            6. Core Product Principles
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card key={index} className="bg-card/80 backdrop-blur shadow-gentle text-center p-6">
                  <IconComponent className={`w-10 h-10 mx-auto ${principle.color} mb-3`} />
                  <p className="font-semibold text-sm text-foreground">{principle.title}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* 7. MVP Feature Set */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Rocket className="w-8 h-8 text-primary" />
            7. MVP Feature Set (MoSCoW Framework)
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Must-Have */}
            <Card className="bg-gradient-to-br from-game-success/10 to-game-success/5 border-game-success/30">
              <CardHeader>
                <CardTitle className="text-game-success flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Must-Have (MVP)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Four Therapeutic Games */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4" />
                    1. Four Therapeutic Games
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {games.map((game, i) => {
                      const IconComponent = game.icon;
                      return (
                        <div key={i} className="bg-background/50 p-3 rounded-lg text-center">
                          <IconComponent className={`w-6 h-6 mx-auto ${game.color} mb-2`} />
                          <p className="text-sm font-medium">{game.title}</p>
                          <p className="text-xs text-muted-foreground">{game.description}</p>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    Requirement: Games must be short, repeatable, and pressure-free.
                  </p>
                </div>

                {/* Adaptive Progression */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    2. Adaptive Progression
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Difficulty adjusts based on engagement, not accuracy</li>
                    <li>• No visible "levels failed"</li>
                  </ul>
                </div>

                {/* Reward System */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    3. Reward Feedback System
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Visual encouragement</li>
                    <li>• Friendly character-based praise</li>
                  </ul>
                </div>

                {/* Performance Tracking */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    4. Basic Performance Tracking
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Session duration</li>
                    <li>• Completion</li>
                    <li>• Retry frequency</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Nice-to-Have */}
            <Card className="bg-secondary/5 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-secondary flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Nice-to-Have (Post-MVP)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Globe className="w-5 h-5 text-secondary" />
                    Multilingual UI
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Smartphone className="w-5 h-5 text-secondary" />
                    Offline play
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <BarChart3 className="w-5 h-5 text-secondary" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <UserCog className="w-5 h-5 text-secondary" />
                    Custom therapy plans
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 8. User Experience Requirements */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Smartphone className="w-8 h-8 text-primary" />
            8. User Experience Requirements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-game-primary/10 border-game-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🧒</span>
                  Child UX
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-game-success" />
                    Large touch targets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-game-success" />
                    Minimal text
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-game-success" />
                    Predictable flow
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-game-success" />
                    Gentle audio cues
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-game-secondary/10 border-game-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">👨‍👩‍👧</span>
                  Parent UX
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-game-success" />
                    Simple dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-game-success" />
                    Non-clinical language
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-game-success" />
                    Weekly summaries
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🏢</span>
                  Institution UX
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-game-success" />
                    Aggregate analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-game-success" />
                    CSR-friendly reports
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-game-success" />
                    Downloadable summaries
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 9. Product Roadmap */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-primary" />
            9. Product Roadmap
          </h2>
          
          <div className="space-y-6">
            {roadmap.map((phase, index) => (
              <Card key={index} className={`bg-gradient-to-r ${phase.color} border-primary/20`}>
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div>
                      <Badge className="mb-2">{phase.phase}</Badge>
                      <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                        <Clock className="w-4 h-4" />
                        {phase.period}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Goals</h4>
                      <ul className="space-y-1">
                        {phase.goals.map((goal, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <Target className="w-3 h-3 text-primary" />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-foreground mb-2">Scope</h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.scope.map((item, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{item}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 10. Key Metrics by Phase */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-primary" />
            10. Key Metrics by Phase
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {phaseMetrics.map((phase, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur shadow-gentle">
                <CardHeader>
                  <CardTitle className="text-lg">{phase.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.metrics.map((metric, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 11. Post-Launch KPIs */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-primary" />
            11. Post-Launch KPIs (First 3 Months)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-game-primary/10 border-game-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5" />
                  Product KPIs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {postLaunchKPIs.product.map((kpi, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{kpi.metric}</span>
                      <Badge variant="outline">{kpi.target}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-game-success/10 border-game-success/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Therapy Indicators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {postLaunchKPIs.therapy.map((kpi, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{kpi.metric}</span>
                      <Badge variant="outline">{kpi.target}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/10 border-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IndianRupee className="w-5 h-5" />
                  Business KPIs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {postLaunchKPIs.business.map((kpi, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{kpi.metric}</span>
                      <Badge variant="outline">{kpi.target}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 12. Business Model */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <IndianRupee className="w-8 h-8 text-primary" />
            12. Business Model
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/80 backdrop-blur shadow-gentle text-center p-6">
              <Heart className="w-12 h-12 mx-auto text-game-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">B2C</h3>
              <p className="text-muted-foreground">Family subscriptions</p>
            </Card>
            <Card className="bg-card/80 backdrop-blur shadow-gentle text-center p-6">
              <School className="w-12 h-12 mx-auto text-game-secondary mb-4" />
              <h3 className="font-bold text-lg mb-2">B2B</h3>
              <p className="text-muted-foreground">School licensing</p>
            </Card>
            <Card className="bg-card/80 backdrop-blur shadow-gentle text-center p-6">
              <Building className="w-12 h-12 mx-auto text-game-success mb-4" />
              <h3 className="font-bold text-lg mb-2">B2G / CSR</h3>
              <p className="text-muted-foreground">District & city bundles</p>
            </Card>
          </div>
        </section>

        {/* 13. Risks & Mitigations */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            13. Risks & Mitigations
          </h2>
          
          <Card className="bg-card/80 backdrop-blur shadow-gentle overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Risk</th>
                    <th className="text-left p-4 font-semibold text-foreground">Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  {risks.map((item, index) => (
                    <tr key={index} className="border-t border-border/50">
                      <td className="p-4 text-destructive font-medium">{item.risk}</td>
                      <td className="p-4 text-muted-foreground">{item.mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </section>

        {/* 14. Success Definition */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            14. Success Definition
          </h2>
          
          <Card className="bg-gradient-to-br from-game-success/10 to-accent/10 border-game-success/30">
            <CardHeader>
              <CardTitle className="text-center text-xl">
                Sitaare Zameen Par is successful when:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {successCriteria.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="text-center p-4">
                      <IconComponent className="w-10 h-10 mx-auto text-game-success mb-3" />
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 15. Long-Term Vision */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Globe className="w-8 h-8 text-primary" />
            15. Long-Term Vision
          </h2>
          
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <Star className="w-16 h-16 mx-auto text-game-primary mb-6" />
              <p className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed max-w-4xl mx-auto">
                To become <span className="text-primary font-bold">India's leading therapy-first digital play platform</span>, embedded across homes, schools, NGOs, and public education systems.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <section className="text-center py-12 border-t border-border/50">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-8 h-8 text-game-primary" />
            <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sitaare Zameen Par
            </p>
            <Star className="w-8 h-8 text-game-primary" />
          </div>
          <p className="text-muted-foreground italic">
            "Every child is a star. Let them shine."
          </p>
        </section>
      </div>
    </div>
  );
};

export default PRD;
