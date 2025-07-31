/* Create an SVG element using createElementNS */
const svgNS = "http://www.w3.org/2000/svg";

/* Create SVG Element */
const svg = document.createElementNS(svgNS, 'svg');
svg.setAttribute('xmlns', svgNS);
svg.setAttribute('viewBox', '0 0 100 100');
svg.setAttribute('width', 100);
svg.setAttribute('height', 100);

/* Create Line Element */
const line = document.createElementNS(svgNS, 'line');
line.setAttribute('x1', 10);
line.setAttribute('y1', 10);
line.setAttribute('x2', 50);
line.setAttribute('y2', 10);

/* Add Path Element to SVG */
svg.appendChild(line);

/* Append SVG to Body */
document.body.appendChild(svg);

console.log(line.getTotalLength());
