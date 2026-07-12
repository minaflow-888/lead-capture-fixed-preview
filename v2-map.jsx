// v2-map.jsx
// Business problem and connected system map.

const { Icon: MapIcon, Shell: MapShell, SectionHead: MapSectionHead } = window;

function ProblemSection() {
  const { copy } = window.useApp();
  return (
    <MapShell tone="light" pad="lg" id="problem">
      <div className="problem-layout">
        <div>
          <MapSectionHead dark={false} eyebrow={copy.problem.eyebrow} title={copy.problem.title} />
          <div className="problem-copy reveal-up">
            {copy.problem.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="problem-list reveal-up">
          {copy.problem.cards.map((card, index) => (
            <article key={card.title} className="problem-item">
              <span className="problem-item__icon"><MapIcon name={card.icon} size={20} /></span>
              <div>
                <div className="problem-item__heading">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{card.title}</h3>
                </div>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MapShell>
  );
}

const MAP_LAYOUT = {
  input: { x: 20, y: 250, w: 205, anchor: [225, 312] },
  capture: { x: 190, y: 42, w: 250, anchor: [315, 155] },
  parse: { x: 660, y: 42, w: 250, anchor: [785, 155] },
  validate: { x: 865, y: 245, w: 215, anchor: [865, 330] },
  log: { x: 640, y: 485, w: 250, anchor: [765, 485] },
  reply: { x: 190, y: 485, w: 250, anchor: [315, 485] },
};
const MAP_W = 1100;
const MAP_H = 640;
const HUB_X = 550;
const HUB_Y = 318;

function MapChips({ chips }) {
  return <div className="map-chips">{chips.map((chip) => <span key={chip}>{chip}</span>)}</div>;
}

function SystemMap() {
  const { copy } = window.useApp();
  const [active, setActive] = React.useState(null);
  const [hovered, setHovered] = React.useState(null);
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    const node = mapRef.current;
    if (!node || !('IntersectionObserver' in window)) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let timers = [];
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (!reduced) {
        timers = copy.map.groups.map((group, index) => window.setTimeout(() => setActive(group.id), 350 + index * 520));
        timers.push(window.setTimeout(() => setActive(null), 350 + copy.map.groups.length * 520 + 700));
      }
    }, { threshold: 0.25 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      timers.forEach(window.clearTimeout);
    };
  }, [copy.map.groups]);

  const lit = hovered || active;

  return (
    <MapShell tone="ink" grid pad="lg" id="system-map">
      <window.Glow x="50%" y="48%" size={820} opacity={0.14} />
      <MapSectionHead center eyebrow={copy.map.eyebrow} title={copy.map.title} lede={copy.map.lede} />

      <div ref={mapRef} className="system-map system-map--desktop reveal-up">
        <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="system-map__svg" aria-hidden="true">
          {copy.map.groups.map((group) => {
            const pos = MAP_LAYOUT[group.id];
            return <line key={group.id} className={`map-spoke${lit === group.id ? ' is-lit' : ''}`} x1={HUB_X} y1={HUB_Y} x2={pos.anchor[0]} y2={pos.anchor[1]} />;
          })}
          <path className="map-flow-path" d="M 125 250 C 135 158, 190 112, 255 92" />
          <path className="map-flow-path" d="M 440 92 C 520 58, 580 58, 660 92" />
          <path className="map-flow-path" d="M 910 92 C 980 130, 1000 175, 972 245" />
          <path className="map-flow-path" d="M 970 440 C 950 485, 905 510, 890 520" />
          <path className="map-flow-path" d="M 640 548 C 540 585, 420 585, 315 548" />
          <path className="map-invalid-path" d="M 867 300 C 820 266, 815 220, 852 174" />
          <text x="720" y="238" className="map-invalid-label">{copy.map.invalidLabel}</text>
        </svg>

        <div className="system-map__hub">
          <MapIcon name="mail" size={27} color="var(--brand-300)" />
          <strong>{copy.map.hubTitle}</strong>
          <small>{copy.map.hubMeta}</small>
        </div>

        {copy.map.groups.map((group, index) => {
          const pos = MAP_LAYOUT[group.id];
          return (
            <article
              key={group.id}
              className={`map-node${lit === group.id ? ' is-active' : ''}`}
              style={{ left: `${(pos.x / MAP_W) * 100}%`, top: `${(pos.y / MAP_H) * 100}%`, width: `${(pos.w / MAP_W) * 100}%` }}
              onMouseEnter={() => setHovered(group.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="map-node__heading">
                <MapIcon name={group.icon} size={16} />
                <span>{group.label}</span>
                <small>{String(index + 1).padStart(2, '0')}</small>
              </div>
              <MapChips chips={group.chips} />
            </article>
          );
        })}
      </div>

      <div className="system-map system-map--mobile reveal-up">
        {copy.map.groups.map((group, index) => (
          <React.Fragment key={group.id}>
            {index > 0 && <div className="mobile-flow-rail" aria-hidden="true"><span></span></div>}
            <article className={`map-node map-node--mobile${group.id === 'validate' ? ' map-node--validation' : ''}`}>
              <div className="map-node__heading">
                <MapIcon name={group.icon} size={16} />
                <span>{group.label}</span>
                <small>{String(index + 1).padStart(2, '0')}</small>
              </div>
              <MapChips chips={group.chips} />
              {group.id === 'validate' && <p className="map-node__warning">{copy.map.invalidLabel}</p>}
            </article>
          </React.Fragment>
        ))}
      </div>
    </MapShell>
  );
}

Object.assign(window, { ProblemSection, SystemMap });
