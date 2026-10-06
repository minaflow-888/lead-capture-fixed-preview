// v2-flow.jsx
// Connected workflow stages, workflow evidence and project resources.

const { Icon: FlowIcon, Shell: FlowShell, SectionHead: FlowSectionHead } = window;

function StagePanel({ stage, index, copy }) {
  return (
    <div className="workflow-stage">
      <div className="workflow-stage__rail" aria-hidden="true">
        <span className={`workflow-stage__number${stage.hot ? ' is-hot' : ''}`}>{index + 1}</span>
        {index < copy.workflow.stages.length - 1 && <span className="workflow-stage__line"></span>}
      </div>

      <article className={`workflow-stage__card panel-dark${stage.hot ? ' is-hot' : ''}`}>
        <div className="workflow-stage__heading">
          <span className="mono-tag">{stage.tag}</span>
          <h3>{stage.title}</h3>
          {stage.hot && <span className="workflow-stage__badge">{copy.workflow.differentiator}</span>}
          <FlowIcon name={stage.icon} size={20} color="var(--brand-400)" />
        </div>
        <ol className="workflow-stage__steps">
          {stage.steps.map((step, stepIndex) => (
            <li key={step}>
              <span>{index + 1}.{stepIndex + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>

        {stage.hot && (
          <div className="validation-branches">
            <div className="validation-branch validation-branch--success">
              <strong><FlowIcon name="check" size={14} /> {copy.workflow.validTitle}</strong>
              <p>{copy.workflow.validText}</p>
            </div>
            <div className="validation-branch validation-branch--warning">
              <strong><FlowIcon name="x-circle" size={14} /> {copy.workflow.invalidTitle}</strong>
              <p>{copy.workflow.invalidText}</p>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

function WorkflowSection() {
  const { copy } = window.useApp();
  return (
    <FlowShell tone="navy" pad="lg" id="workflow">
      <window.Glow x="88%" y="16%" size={600} opacity={0.12} />
      <FlowSectionHead eyebrow={copy.workflow.eyebrow} title={copy.workflow.title} lede={copy.workflow.lede} />
      <div className="workflow-list reveal-up">
        {copy.workflow.stages.map((stage, index) => (
          <StagePanel key={stage.tag} stage={stage} index={index} copy={copy} />
        ))}
      </div>
    </FlowShell>
  );
}

function EvidenceSection() {
  const { copy } = window.useApp();
  const [tab, setTab] = React.useState(copy.evidence.tabs[0].id);
  const [zoom, setZoom] = React.useState(false);
  const closeRef = React.useRef(null);
  const triggerRef = React.useRef(null);

  const openZoom = () => setZoom(true);
  const closeZoom = React.useCallback(() => {
    setZoom(false);
    window.setTimeout(() => triggerRef.current && triggerRef.current.focus({ preventScroll: true }), 0);
  }, []);

  React.useEffect(() => {
    if (!copy.evidence.tabs.some((item) => item.id === tab)) setTab(copy.evidence.tabs[0].id);
  }, [copy, tab]);

  React.useEffect(() => {
    if (!zoom) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') closeZoom();
    };
    window.addEventListener('keydown', onKey);
    window.setTimeout(() => closeRef.current && closeRef.current.focus(), 0);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom, closeZoom]);

  const selected = copy.evidence.tabs.find((item) => item.id === tab) || copy.evidence.tabs[0];

  return (
    <FlowShell tone="ink" grid pad="lg" id="evidence">
      <FlowSectionHead eyebrow={copy.evidence.eyebrow} title={copy.evidence.title} lede={copy.evidence.lede} />
      <div className="evidence-window panel-dark reveal-up">
        <div className="evidence-window__toolbar">
          <span className="window-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span className="evidence-window__label">{copy.evidence.browserLabel}</span>
          <div className="evidence-tabs" role="tablist" aria-label={copy.evidence.eyebrow}>
            {copy.evidence.tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                className={`evi-tab${tab === item.id ? ' on' : ''}`}
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <button
          ref={triggerRef}
          type="button"
          className="evidence-placeholder-button"
          onClick={openZoom}
          aria-label={`${copy.evidence.viewLarger}: ${selected.label}`}
        >
          <span className="placeholder-screenshot">
            <FlowIcon name="image" size={42} />
            <strong>{copy.evidence.screenshotPending}</strong>
            <span>{selected.detail}</span>
            <em><FlowIcon name="maximize-2" size={14} /> {copy.evidence.viewLarger}</em>
          </span>
        </button>
      </div>
      <p className="evidence-note reveal-up">{copy.evidence.note}</p>

      {zoom && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.label} onMouseDown={(event) => event.target === event.currentTarget && closeZoom()}>
          <div className="lightbox__content">
            <button ref={closeRef} type="button" className="lightbox__close" aria-label={copy.evidence.close} onClick={closeZoom}>
              <FlowIcon name="x" size={18} />
            </button>
            <div className="placeholder-screenshot placeholder-screenshot--large">
              <FlowIcon name="image" size={58} />
              <strong>{copy.evidence.screenshotPending}</strong>
              <span>{selected.detail}</span>
            </div>
          </div>
        </div>
      )}
    </FlowShell>
  );
}

function ResourcesSection() {
  const { lang } = window.useApp();
  const isSv = lang === 'sv';

  const copy = isSv
    ? {
        eyebrow: 'Projektmaterial',
        title: 'Plan, demo och dokumentation',
        lede: 'Här finns planeringsskissen, en videodemonstration av arbetsflödet och den fullständiga projektdokumentationen.',
        sketchTitle: 'Planeringsskiss',
        sketchText: 'Samma Lead Capture-logik som i den implementerade Make.com-lösningen, visualiserad steg för steg.',
        sketchAlt: 'Planeringsskiss för Lead Capture Automation på svenska',
        demoTitle: 'Se arbetsflödet i praktiken',
        demoText: 'Videon visar det fungerande Lead Capture-flödet och hur de anslutna stegen beter sig tillsammans.',
        loomLink: 'Öppna videon i Loom',
        docsTitle: 'Projektdokumentation',
        docsText: 'Dokumentationen beskriver logik, testning, begränsningar och planerade förbättringar. Båda språkversionerna finns tillgängliga.',
        enDoc: 'Documentation — EN',
        svDoc: 'Dokumentation — SV',
      }
    : {
        eyebrow: 'Project resources',
        title: 'Plan, demo and documentation',
        lede: 'Explore the planning sketch, a video walkthrough of the workflow and the full project documentation.',
        sketchTitle: 'Workflow planning sketch',
        sketchText: 'The same Lead Capture logic used in the implemented Make.com solution, mapped step by step.',
        sketchAlt: 'Lead Capture Automation workflow planning sketch in English',
        demoTitle: 'Watch the workflow in action',
        demoText: 'The video shows the working Lead Capture flow and how the connected stages behave together.',
        loomLink: 'Open video in Loom',
        docsTitle: 'Project documentation',
        docsText: 'The documentation covers the logic, testing, limitations and planned improvements. Both language versions are available.',
        enDoc: 'Documentation — EN',
        svDoc: 'Dokumentation — SV',
      };

  const sketchSrc = isSv
    ? 'assets/docs/lead-capture-workflow-sketch-sv.png'
    : 'assets/docs/lead-capture-workflow-sketch-en.png';

  const cardStyle = {
    borderRadius: '22px',
    overflow: 'hidden',
    border: '1px solid rgba(148, 163, 184, 0.16)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const bodyStyle = {
    padding: '22px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const mediaStyle = {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
    flexShrink: 0,
  };

  const linkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    minHeight: '46px',
    padding: '0 18px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 700,
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#ffffff',
    background: 'rgba(255,255,255,0.06)',
  };

  return (
    <FlowShell tone="navy" grid pad="lg" id="resources">
      <window.Glow x="12%" y="20%" size={560} opacity={0.10} />
      <FlowSectionHead eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede} />

      <div
        className="reveal-up"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
          gap: '24px',
          alignItems: 'stretch',
        }}
      >
        <article className="panel-dark" style={cardStyle}>
          <div style={{ ...mediaStyle, background: '#f7f3ea' }}>
            <img
              src={sketchSrc}
              alt={copy.sketchAlt}
              loading="lazy"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'contain',
                background: '#f7f3ea',
              }}
            />
          </div>
          <div style={bodyStyle}>
            <h3 style={{ margin: '0 0 8px' }}>{copy.sketchTitle}</h3>
            <p style={{ margin: 0, opacity: 0.82 }}>{copy.sketchText}</p>
          </div>
        </article>

        <article className="panel-dark" style={cardStyle}>
          <div
            style={{
              ...mediaStyle,
              background: 'linear-gradient(135deg, #07111f 0%, #111827 55%, #172554 100%)',
            }}
          >
            <a
              href="https://www.loom.com/share/b3e7c53e29404906b5fa4b0644e320a5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.demoTitle}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '24px',
                color: '#ffffff',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(37, 99, 235, 0.95)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  boxShadow: '0 12px 36px rgba(0,0,0,0.28)',
                }}
              >
                <FlowIcon name="play" size={30} />
              </span>
              <strong style={{ fontSize: '1.05rem' }}>{copy.demoTitle}</strong>
              <span style={{ opacity: 0.72 }}>Lead Capture Automation · Loom</span>
            </a>
          </div>
          <div style={bodyStyle}>
            <h3 style={{ margin: '0 0 8px' }}>{copy.demoTitle}</h3>
            <p style={{ margin: '0 0 16px', opacity: 0.82 }}>{copy.demoText}</p>
            <a
              href="https://www.loom.com/share/b3e7c53e29404906b5fa4b0644e320a5"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...linkStyle, marginTop: 'auto' }}
            >
              <FlowIcon name="external-link" size={16} /> {copy.loomLink}
            </a>
          </div>
        </article>
      </div>

      <article className="panel-dark reveal-up" style={{ ...cardStyle, marginTop: '24px', height: 'auto' }}>
        <div style={{ ...bodyStyle, display: 'grid', gap: '16px' }}>
          <div>
            <h3 style={{ margin: '0 0 8px' }}>{copy.docsTitle}</h3>
            <p style={{ margin: 0, opacity: 0.82 }}>{copy.docsText}</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a
              href="assets/docs/Lead_Capture_Automation_Documentation_EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <FlowIcon name="file-text" size={16} /> {copy.enDoc}
            </a>

            <a
              href="assets/docs/Lead_Capture_Automation_Documentation_SV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <FlowIcon name="file-text" size={16} /> {copy.svDoc}
            </a>
          </div>
        </div>
      </article>
    </FlowShell>
  );
}

Object.assign(window, { WorkflowSection, EvidenceSection, ResourcesSection });
