import { motion } from 'framer-motion';
import { Shield, Award, Microscope, Users, Heart, Leaf, Target, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'Every product undergoes rigorous quality testing to meet international pharmaceutical standards.',
  },
  {
    icon: Heart,
    title: 'Animal Welfare',
    description: 'We are committed to improving animal health and ensuring ethical treatment of all livestock.',
  },
  {
    icon: Microscope,
    title: 'Innovation',
    description: 'Continuous research and development drives our quest for better veterinary solutions.',
  },
  {
    icon: Users,
    title: 'Farmer Partnership',
    description: 'We work closely with farmers to understand their needs and provide tailored solutions.',
  },
];

const milestones = [
  { year: '2015', event: 'Company Founded' },
  { year: '2017', event: 'First Product Launch' },
  { year: '2019', event: 'Expanded to 5 States' },
  { year: '2021', event: 'ISO Certification' },
  { year: '2023', event: '50+ Products Range' },
];

export default function About() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              About Us
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 mb-6">
              Pioneering Animal Health Excellence
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Growin Pharma is a leading veterinary pharmaceutical company dedicated
              to developing innovative solutions that enhance livestock health and
              support sustainable farming practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="font-heading font-bold text-4xl text-foreground mt-3 mb-6">
                Building Trust Through Quality
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded with a vision to transform veterinary healthcare, Growin Pharma
                  has grown from a small startup to a trusted name in animal pharmaceuticals.
                </p>
                <p>
                  Our journey began with a simple belief: that every farmer deserves access
                  to high-quality, affordable veterinary products. Today, we serve thousands
                  of farmers across the country with our comprehensive range of solutions.
                </p>
                <p>
                  With a team of experienced veterinary professionals and pharmaceutical
                  experts, we continue to innovate and develop products that make a real
                  difference in animal health outcomes.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-center gap-6"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center relative z-10">
                      <span className="font-heading font-bold text-primary">{milestone.year}</span>
                    </div>
                    <div className="bg-card p-4 rounded-xl border border-border/50 shadow-soft flex-1">
                      <p className="font-heading font-semibold text-foreground">{milestone.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-background shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                  alt="Vegina Suresh Kumar"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold font-heading">Vegina Suresh Kumar</h3>
                  <p className="text-primary-foreground opacity-90">Owner & Founder, Growin Pharma</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                Meet Our Founder
              </span>
              <h2 className="font-heading font-bold text-4xl text-foreground mt-3 mb-6">
                Visionary Leadership & 25+ Years of Expertise
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <span className="text-foreground font-semibold">Vegina Suresh Kumar</span>, the owner of <span className="text-primary font-bold">GROWIN PHARMA</span>,
                  brings over <span className="text-foreground font-bold italic">25 years of profound experience</span> in the pharmaceutical industry.
                  His deep understanding of pharmaceutical manufacturing and veterinary medicine has been the driving force behind the company's success.
                </p>
                <p>
                  Throughout his career, he has been dedicated to bridging the gap between advanced pharmaceutical research and practical field applications.
                  His vision is to empower farmers by providing high-quality, scientifically-backed veterinary products that ensure animal health and agricultural prosperity.
                </p>
                <p>
                  Under his guidance, Growin Pharma has implemented state-of-the-art quality control systems and foster a culture of constant innovation,
                  making the company a trusted partner for veterinary professionals and farmers alike across the nation.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex-1 h-[1px] bg-border" />
                  <Award className="text-primary w-6 h-6 shrink-0" />
                  <div className="flex-1 h-[1px] bg-border" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border/50 shadow-card"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide farmers with high-quality, affordable veterinary pharmaceutical
                products that improve animal health, enhance productivity, and contribute
                to sustainable agricultural practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 shadow-card"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become the most trusted veterinary pharmaceutical partner for farmers
                across India, known for innovation, quality, and unwavering commitment
                to animal welfare.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Our Values
            </span>
            <h2 className="font-heading font-bold text-4xl text-foreground mt-3">
              What Drives Us Forward
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border/50 shadow-card hover:shadow-hover hover:border-primary/20 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background text-foreground border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Products' },
              { value: '10K+', label: 'Happy Farmers' },
              { value: '15+', label: 'States Covered' },
              { value: '25+', label: 'Years Leadership' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-5xl md:text-6xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
