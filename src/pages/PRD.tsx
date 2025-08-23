import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Users, TrendingUp, Brain, Palette, Calculator, BookOpen, Star, Heart, IndianRupee, School, Building, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PRD = () => {
  const navigate = useNavigate();

  const metrics = [
    { label: "CWSN enrolled in schools (India, 2023-24)", value: "2.11 million", source: "UDISE" },
    { label: "CBSE private/inclusive-ready schools", value: "24k-29k", source: "Secondary sources" },
    { label: "India CSR pool (2023-24)", value: "₹34,909 crore", source: "Economic Times" },
    { label: "CSR historical (FY15-FY24)", value: ">₹2.2 lakh crore", source: "Factly data" }
  ];

  const games = [
    { title: "Memory Match", icon: Brain, description: "Builds recall and focus abilities", color: "text-game-primary" },
    { title: "Color Patterns", icon: Palette, description: "Improves pattern recognition", color: "text-game-secondary" },
    { title: "Number Fun", icon: Calculator, description: "Basic numeracy in playful ways", color: "text-game-success" },
    { title: "Word Pictures", icon: BookOpen, description: "Visual-word memory building", color: "text-game-danger" }
  ];

  const pricing = [
    { tier: "Starter", capacity: "≤50 students", price: "₹50,000", features: "Basic game suite" },
    { tier: "Growth", capacity: "≤200 students", price: "₹1,60,000", features: "Full suite + tracking" },
    { tier: "Campus", capacity: "Unlimited", price: "₹4,50,000", features: "Complete package + analytics" }
  ];

  const csrBundles = [
    { package: "District Bundle", scope: "10 schools (~500 seats)", price: "₹25 lakh", impact: "Community-level impact" },
    { package: "City Bundle", scope: "40 schools (~2,000 seats)", price: "₹1 crore", impact: "Urban transformation" },
    { package: "State Bundle", scope: "120 schools (~6,000 seats)", price: "₹3 crore", impact: "Regional scale impact" }
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
            
            <div className="flex items-center justify-center gap-2 text-lg">
              <span className="text-2xl">👨‍🏫</span>
              <p className="text-primary font-semibold">हर बच्चा अनोखा है - Every child is unique</p>
              <span className="text-2xl">⭐</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Badge variant="secondary" className="text-sm px-4 py-2">Therapeutic Gaming</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Inclusive Education</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">CSR Partnership</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Web-based Platform</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Product Overview */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-primary" />
            Product Overview
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-card/80 backdrop-blur shadow-gentle">
              <CardHeader>
                <CardTitle className="text-primary">Mission Statement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Provide a safe, joyful, and interactive learning space that develops sensory and cognitive 
                  skills at a self-paced rhythm, fostering inclusive education and therapeutic gaming experiences.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Heart className="w-5 h-5" />
                  <span>Celebrating small wins - Chhoti chhoti jeeton ka bada jashn</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur shadow-gentle">
              <CardHeader>
                <CardTitle className="text-primary">Target Audience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/5">
                    <div className="text-3xl mb-2">🧒</div>
                    <p className="font-medium">Children with Down Syndrome</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/5">
                    <div className="text-3xl mb-2">👴</div>
                    <p className="font-medium">Alzheimer's Patients</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/5">
                    <div className="text-3xl mb-2">👨‍🏫</div>
                    <p className="font-medium">Special Educators</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/20">
                    <div className="text-3xl mb-2">👨‍👩‍👧</div>
                    <p className="font-medium">Caregivers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Features - Games */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Brain className="w-8 h-8 text-primary" />
            Interactive Games (MVP)
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => {
              const IconComponent = game.icon;
              return (
                <Card key={index} className="bg-card/80 backdrop-blur shadow-gentle hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <IconComponent className={`w-12 h-12 mx-auto ${game.color}`} />
                    <h3 className="text-xl font-bold">{game.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{game.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Market Opportunity */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-primary" />
            Market Opportunity
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur shadow-gentle">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">{metric.value}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{metric.label}</p>
                  <Badge variant="outline" className="mt-3 text-xs">{metric.source}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Revenue Model */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <IndianRupee className="w-8 h-8 text-primary" />
            Revenue & Pricing Model
          </h2>
          
          <div className="space-y-8">
            {/* School Subscriptions */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <School className="w-6 h-6 text-secondary" />
                Private Schools - Inclusion Model
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {pricing.map((tier, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur shadow-gentle hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-primary text-2xl">{tier.tier}</CardTitle>
                      <p className="text-muted-foreground">{tier.capacity}</p>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <div className="text-3xl font-bold text-foreground">{tier.price}</div>
                      <p className="text-sm text-muted-foreground">{tier.features}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CSR Bundles */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Handshake className="w-6 h-6 text-accent" />
                CSR Partnership Bundles
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {csrBundles.map((bundle, index) => (
                  <Card key={index} className="bg-gradient-to-br from-accent/5 to-secondary/5 border-accent/20 shadow-gentle hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-accent text-xl">{bundle.package}</CardTitle>
                      <p className="text-muted-foreground text-sm">{bundle.scope}</p>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <div className="text-2xl font-bold text-foreground">{bundle.price}</div>
                      <Badge variant="secondary" className="text-xs">{bundle.impact}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Star className="w-8 h-8 text-primary" />
            Success Metrics & KPIs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Engagement</h3>
                <p className="text-sm text-muted-foreground">15-20 min average session time</p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/5 border-secondary/20">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Success Rate</h3>
                <p className="text-sm text-muted-foreground">85%+ game completion</p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Satisfaction</h3>
                <p className="text-sm text-muted-foreground">4.5/5.0+ caregiver ratings</p>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/10 border-muted/20">
              <CardContent className="p-6 text-center">
                <Building className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Partnerships</h3>
                <p className="text-sm text-muted-foreground">150+ schools in Year 1</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Revenue Projections */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">12-Month Revenue Projections</h2>
          
          <Card className="bg-card/80 backdrop-blur shadow-gentle">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Scenario</th>
                      <th className="text-right py-3 px-4 font-semibold">Schools Revenue</th>
                      <th className="text-right py-3 px-4 font-semibold">CSR Revenue</th>
                      <th className="text-right py-3 px-4 font-semibold">Individual Revenue</th>
                      <th className="text-right py-3 px-4 font-semibold text-primary">Total Revenue</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/50">
                      <td className="py-4 px-4 font-medium">Conservative</td>
                      <td className="py-4 px-4 text-right">₹0.75 cr</td>
                      <td className="py-4 px-4 text-right">₹0.75 cr</td>
                      <td className="py-4 px-4 text-right">₹0.36 cr</td>
                      <td className="py-4 px-4 text-right font-bold text-primary">₹1.86 crore</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="py-4 px-4 font-medium">Base Case</td>
                      <td className="py-4 px-4 text-right">₹3.30 cr</td>
                      <td className="py-4 px-4 text-right">₹2.00 cr</td>
                      <td className="py-4 px-4 text-right">₹0.89 cr</td>
                      <td className="py-4 px-4 text-right font-bold text-primary">₹6.19 crore</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="py-4 px-4 font-medium">Stretch</td>
                      <td className="py-4 px-4 text-right">₹7.80 cr</td>
                      <td className="py-4 px-4 text-right">₹3.50 cr</td>
                      <td className="py-4 px-4 text-right">₹1.79 cr</td>
                      <td className="py-4 px-4 text-right font-bold text-primary">₹13.09 crore</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CSR Value Proposition */}
        <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6">CSR Value Proposition</h2>
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              "Do more than donate—fund tangible progress."
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With Sitaare Zameen Par, your CSR investment empowers inclusive classrooms through joyful, therapeutic gaming.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="text-left space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Quarterly impact dashboards with measurable outcomes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Year-end progress reports mapping investment to learners reached</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Therapeutic play hours delivered with documented improvements</span>
                </div>
              </div>
              <div className="text-left space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>CSR disclosure-ready metrics for compliance and reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Co-branding opportunities showcasing commitment to inclusion</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Measurable social impact for stakeholder presentations</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-card/50 rounded-lg">
              <p className="text-lg font-medium text-primary italic">
                "Your CSR partnership doesn't just fund software—it funds smiles, confidence, and the belief that every child can learn and grow. Together, we're not just teaching games; we're teaching the world that every star deserves to shine."
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center py-8 border-t border-border">
          <p className="text-muted-foreground mb-4">Document Version: 1.0 | Last Updated: August 2025</p>
          <p className="text-lg font-medium text-primary">
            हर बच्चा अनोखा है - Every child is unique, and every child deserves the chance to shine like the stars they truly are.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PRD;