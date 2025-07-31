/* Create an SVG element */
const svgNS = "http://www.w3.org/2000/svg";
const width = 100;
const height = 100;

/* Create SVG Element using createElementNS */
const svg = document.createElementNS(svgNS, 'svg');
svg.setAttribute('xmlns', svgNS);
svg.setAttribute('viewBox', `0,0 ${width} ${height}`);
svg.setAttribute('width', width);
svg.setAttribute('height', height);

/* Append SVG to Body */
document.body.appendChild(svg);
