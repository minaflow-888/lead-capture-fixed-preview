// v2-flow.jsx
// Connected workflow stages and screenshot placeholders.

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

Object.assign(window, { WorkflowSection, EvidenceSection });
