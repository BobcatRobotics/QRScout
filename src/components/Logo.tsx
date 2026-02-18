
const defaultStyle = {
  fill: '#8e191c',
  fillOpacity: 1,
};
const strokeStyle = {
  stroke: '#000000',
  strokeWidth: 0,
};

const strokeStyle1 = {
  stroke: '#000000',
  strokeWidth: 0.264493,
  strokeDasharray: 'none',
};


const strokeStyle2 = {
  stroke: '#000000',
  strokeWidth: 1.8718,
  strokeDasharray: 'none',
  strokeOpacity: 1,
  paintOrder: 'markers stroke fill',
};

const style2 = {
  ...defaultStyle,
  ...strokeStyle2,
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontSize: '52px',
  fontFamily: 'Apple SD Gothic Neo',
  fill: '#ffcc02',
  fillOpacity: 1,
};

const style3 = {
  ...defaultStyle,
  ...strokeStyle2,
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontSize: '18px',
  fontFamily: 'Apple SD Gothic Neo',
  fill: '#ffcc02',
  fillOpacity: 1,
};

const style1 = {
  ...defaultStyle,
  display: 'inline',
  fill: '#8e191c',
  fillOpacity: 1,
  ...strokeStyle1,
};

const style5 = {
  ...defaultStyle,
  ...strokeStyle,
  strokeDasharray: 'none',
};
const style4 = {
  ...defaultStyle,
  fontSize: '21.0016px',
  fontFamily: 'SF Sports Night NS',
  ...strokeStyle,
};

export function Logo() {
  return (
    <svg
   width="200.845mm"
   height="44.030998mm"
   viewBox="0 0 199.845 43.811769"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg">
  <defs
     id="defs1">
    <rect
       x="55.358624"
       y="19.255173"
       width="657.08276"
       height="220.23105"
       id="rect13" />
    <rect
       x="193.15617"
       y="62.645245"
       width="193.15617"
       height="97.883194"
       id="rect1" />
  </defs>
  <g
     id="layer1"
     transform="translate(-5.5949847,-55.371955)">
    <path
       style={style1}
       d="M 37.436221,24.935599 175.38924,24.804367 163.28987,37.97116 49.511326,37.70835 Z"
       id="path1"
       transform="matrix(1.4413966,0,0,0.60994692,-47.838925,58.144696)" />
    <text
       style={style2}
       x="19.264305"
       y="97.363144"
       id="text3"
       transform="scale(1.0013694,0.99863247)"><tspan
         id="tspan3"
         style={style2}
         x="19.264305"
         y="97.363144">177</tspan></text>
    <text
       style={style3}
       x="107.90097"
       y="70.221939"
       id="text3-9"
       transform="scale(0.97343742,1.0272874)"><tspan
         id="tspan3-1"
         style={style3}
         x="107.90097"
         y="70.221939">BOBCAT</tspan></text>
    <text
       style={style3}
       x="96.423225"
       y="93.159386"
       id="text3-9-1"
       transform="scale(0.97343742,1.0272874)"><tspan
         id="tspan3-1-5"
         style={style3}
         x="96.423225"
         y="93.159386">ROBOTICS</tspan></text>
  </g>
</svg>
  );
}
