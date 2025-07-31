/* Create an SVG element with a circle inside */
const svgNS = "http://www.w3.org/2000/svg";

/* Create SVG Element */
const svg = document.createElementNS(svgNS, 'svg');
svg.setAttribute('xmlns', svgNS);
svg.setAttribute('viewBox', '0 0 100 100');
svg.setAttribute('width', 100);
svg.setAttribute('height', 100);

/* Create Circle Group */
const circleNode = document.createElementNS(svgNS, 'g');
circleNode.setAttribute('style', `color:${safeColorIndex[circle.i]}`);
circleNode.setAttribute('class', 'circleGroup');

/* Create Circle Element */
const circle = document.createElementNS(svgNS, 'circle');
circle.setAttribute('cx', circle.cx);
circle.setAttribute('cy', circle.cy);
circle.setAttribute('r', circle.r);
circle.setAttribute('fill', circle.fill);
circleNode.appendChild(circle);

/* Add Circle Element to SVG */
svg.appendChild(circleNode);

/* Append SVG to Body */
document.body.appendChild(svg);
