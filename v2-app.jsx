// v2-app.jsx
// App assembly, shared state provider, icon hydration and reveal-on-scroll.

function runLucideV2() {
  if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
}

function PageContent() {
  const { lang, theme } = window.useApp();

  React.useEffect(() => {
    runLucideV2();
    const timers = [100, 350, 900].map((delay) => window.setTimeout(runLucideV2, delay));
    return () => timers.forEach(window.clearTimeout);
  }, [lang, theme]);

  React.useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll('.reveal-up'));

    if (reduced || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.remove('is-hidden'));
      return undefined;
    }

    elements.forEach((el) => el.classList.add('is-hidden'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('is-hidden');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  return (
    <div className="app-shell">
      <window.NavBar />
      <main>
        <window.Hero />
        <window.Snapshot />
        <window.ProblemSection />
        <window.SystemMap />
        <window.WorkflowSection />
        <window.EvidenceSection />
        <window.QualitySection />
        <window.CapabilitiesSection />
        <window.StackSection />
        <window.StatesSection />
        <window.LimitationsSection />
        <window.PlannedV2Section />
        <window.LearnedSection />
        <window.RelatedSection />
        <window.FinalCTA />
      </main>
      <window.Footer />
    </div>
  );
}

function App() {
  return (
    <window.AppProvider>
      <PageContent />
    </window.AppProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
