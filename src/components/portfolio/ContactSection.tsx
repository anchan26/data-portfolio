export default function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-subtle pb-32 lg:pb-24">
      <h2 className="text-3xl mb-12 font-heading text-heading font-semibold">Contact</h2>
      
      <p className="mb-12 max-w-xl text-foreground leading-relaxed">
        Open to opportunities in data engineering, analytics infrastructure, and platform engineering.
      </p>
      
      {/* CSS Grid for perfect alignment */}
      <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-y-6 text-sm sm:text-base">
        
        <div className="text-foreground">Email</div>
        <div>
          <a href="mailto:akhilanchan@outlook.com" className="text-heading hover:text-primary transition-colors">
            akhilanchan@outlook.com
          </a>
        </div>

        <div className="text-foreground">Phone</div>
        <div>
          <a href="tel:+447467861517" className="text-heading hover:text-primary transition-colors">
            +44 7467 861517
          </a>
        </div>

        <div className="text-foreground">LinkedIn</div>
        <div>
          <a href="https://linkedin.com/in/akhilanchan" target="_blank" rel="noreferrer" className="text-heading hover:text-primary transition-colors">
            linkedin.com/in/akhilanchan
          </a>
        </div>

      </div>
    </section>
  );
}