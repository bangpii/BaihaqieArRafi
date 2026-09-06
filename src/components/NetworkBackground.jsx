import { useState } from "react";

const NODES = [
  { cx: 120, cy: 90, r: 14, color: "#915eff" },
  { cx: 320, cy: 60, r: 10, color: "#00cea8" },
  { cx: 520, cy: 120, r: 16, color: "#f272c8" },
  { cx: 760, cy: 70, r: 11, color: "#56ccf2" },
  { cx: 980, cy: 140, r: 15, color: "#915eff" },
  { cx: 1230, cy: 90, r: 12, color: "#bf61ff" },
  { cx: 220, cy: 240, r: 12, color: "#00cea8" },
  { cx: 430, cy: 300, r: 17, color: "#915eff" },
  { cx: 660, cy: 230, r: 10, color: "#f272c8" },
  { cx: 880, cy: 310, r: 14, color: "#56ccf2" },
  { cx: 1100, cy: 260, r: 12, color: "#00cea8" },
  { cx: 1330, cy: 300, r: 15, color: "#915eff" },
  { cx: 120, cy: 430, r: 12, color: "#f272c8" },
  { cx: 360, cy: 500, r: 16, color: "#bf61ff" },
  { cx: 590, cy: 410, r: 11, color: "#00cea8" },
  { cx: 830, cy: 520, r: 15, color: "#915eff" },
  { cx: 1060, cy: 440, r: 12, color: "#f272c8" },
  { cx: 1280, cy: 520, r: 13, color: "#56ccf2" },
  { cx: 250, cy: 640, r: 14, color: "#00cea8" },
  { cx: 480, cy: 620, r: 11, color: "#915eff" },
  { cx: 700, cy: 700, r: 16, color: "#f272c8" },
  { cx: 940, cy: 640, r: 12, color: "#00cea8" },
  { cx: 1160, cy: 720, r: 14, color: "#915eff" },
  { cx: 100, cy: 760, r: 10, color: "#56ccf2" },
  { cx: 620, cy: 190, r: 9, color: "#bf61ff" },
];

const LINKS = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [0, 6],
  [6, 7],
  [1, 7],
  [2, 7],
  [2, 8],
  [8, 9],
  [3, 9],
  [4, 9],
  [4, 10],
  [5, 10],
  [10, 11],
  [9, 11],
  [6, 12],
  [12, 13],
  [7, 13],
  [13, 14],
  [8, 14],
  [14, 15],
  [9, 15],
  [15, 16],
  [10, 16],
  [16, 17],
  [11, 17],
  [12, 18],
  [18, 19],
  [13, 19],
  [19, 20],
  [14, 20],
  [20, 21],
  [15, 21],
  [21, 22],
  [16, 22],
  [22, 23],
  [1, 24],
  [24, 8],
  [24, 14],
];

const NetworkBackground = () => {
  const [hovered, setHovered] = useState(null);

  const isLinked = (a, b) => a === hovered || b === hovered;

  return (
    <svg
      className='network-bg'
      viewBox='0 0 1440 820'
      preserveAspectRatio='xMidYMid slice'
      aria-hidden='true'
    >
      <g className='network-links'>
        {LINKS.map(([a, b], i) => {
          const A = NODES[a];
          const B = NODES[b];
          const active = hovered !== null && isLinked(a, b);
          const dim = hovered !== null && !active;
          return (
            <line
              key={`link-${i}`}
              className={`network-link${active ? " is-active" : ""}${
                dim ? " dim" : ""
              }`}
              x1={A.cx}
              y1={A.cy}
              x2={B.cx}
              y2={B.cy}
            />
          );
        })}
      </g>

      <g className='network-nodes'>
        {NODES.map((n, i) => (
          <g
            key={`node-${i}`}
            className={`network-node${hovered === i ? " is-active" : ""}`}
            style={{ animationDelay: `${(i % 7) * 0.6}s` }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <circle className='network-node-halo' cx={n.cx} cy={n.cy} r={n.r} />
            <circle
              className='network-node-core'
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill={n.color}
            />
            <circle
              className='network-node-glow'
              cx={n.cx}
              cy={n.cy}
              r={n.r + 6}
              style={{ "--node-color": n.color }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
};

export default NetworkBackground;
