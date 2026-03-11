import { useActiveSection } from '../../hooks/useActiveSection';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Sidebar() {
  const sectionIds = navItems.map(item => item.id);
  const activeSection = useActiveSection(sectionIds);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="hidden lg:flex fixed inset-y-0 left-0 w-60 border-r border-subtle bg-background flex-col p-8 z-50">
        <div className="text-xl font-heading text-heading mb-12">AA</div>
        <div className="flex flex-col gap-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left transition-colors duration-200 ${
                activeSection === item.id ? 'text-primary' : 'text-foreground hover:text-heading'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 border-t border-subtle bg-background/90 backdrop-blur-md p-4 z-50 flex justify-around">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`text-xs sm:text-sm transition-colors duration-200 ${
              activeSection === item.id ? 'text-primary' : 'text-foreground hover:text-heading'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}