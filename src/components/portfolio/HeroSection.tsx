export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-20">
      <div className="flex gap-4 text-primary mb-6 text-xl">
        <span>■</span>
        <span>●</span>
        <span>▲</span>
      </div>
      <h1 className="text-5xl md:text-7xl mb-4">Akhil Anchan</h1> {/*  */}
      <h2 className="text-3xl md:text-5xl text-foreground mb-8">Data Engineer</h2> {/*  */}
      <p className="max-w-2xl text-lg leading-relaxed">
        I design scalable ETL pipelines on AWS and Snowflake, centralize massive data streams, and build predictive models to turn raw compliance and operational data into real-time, actionable insights. {/* [cite: 6, 7] */}
      </p>
    </section>
  );
}