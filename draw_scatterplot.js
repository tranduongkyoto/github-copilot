import d3 from 'd3';
import { arch } from 'os';

const drawScatterplot = (data, height, width) => {
  const svg = d3
    .select('#scatterplot')
    .append('svg')
    .attr('height', height)
    .attr('width', width);
  svg
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)
    .attr('r', (d) => d.r);
};
