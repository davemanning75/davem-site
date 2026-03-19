export default function NetworkArt() {
  return (
    <svg
      className="network-art"
      viewBox="0 0 480 480"
      fill="none"
      aria-hidden="true"
    >
      {/* Connection lines */}
      <line x1="120" y1="100" x2="260" y2="180" className="net-line" />
      <line x1="260" y1="180" x2="380" y2="120" className="net-line" />
      <line x1="260" y1="180" x2="320" y2="320" className="net-line" />
      <line x1="120" y1="100" x2="80"  y2="260" className="net-line" />
      <line x1="80"  y1="260" x2="200" y2="360" className="net-line" />
      <line x1="200" y1="360" x2="320" y2="320" className="net-line" />
      <line x1="320" y1="320" x2="420" y2="380" className="net-line" />
      <line x1="380" y1="120" x2="440" y2="220" className="net-line" />
      <line x1="440" y1="220" x2="420" y2="380" className="net-line" />
      <line x1="440" y1="220" x2="320" y2="320" className="net-line" />
      <line x1="80"  y1="260" x2="260" y2="180" className="net-line" />
      <line x1="200" y1="360" x2="260" y2="180" className="net-line" />

      {/* Primary nodes */}
      <circle cx="260" cy="180" r="8"  className="net-node net-node-primary" />
      <circle cx="320" cy="320" r="7"  className="net-node net-node-primary" />

      {/* Secondary nodes */}
      <circle cx="120" cy="100" r="5"  className="net-node net-node-secondary" />
      <circle cx="380" cy="120" r="5"  className="net-node net-node-secondary" />
      <circle cx="80"  cy="260" r="5"  className="net-node net-node-secondary" />
      <circle cx="440" cy="220" r="5"  className="net-node net-node-secondary" />

      {/* Tertiary nodes */}
      <circle cx="200" cy="360" r="4"  className="net-node net-node-tertiary" />
      <circle cx="420" cy="380" r="4"  className="net-node net-node-tertiary" />

      {/* Pulse rings on primary nodes */}
      <circle cx="260" cy="180" r="8"  className="net-pulse" />
      <circle cx="320" cy="320" r="7"  className="net-pulse net-pulse-delayed" />
    </svg>
  );
}
