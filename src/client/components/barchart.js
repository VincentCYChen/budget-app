import React, { Component } from "react";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
import * as d3 from "d3";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }
  componentDidMount() {
    this.createBarChart();
  }
  componentDidUpdate() {
    this.createBarChart();
  }
  createBarChart() {
    const node = this.node;
    const dataMax = max(this.props.data);
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

   //  select(node)
   //    .selectAll("rect")
   //    .data(this.props.data)
   //    .enter()
   //    .append("rect")
   //    .style("fill", "#fe9922")
   //    .attr("x", (d, i) => ((i+1) * (this.props.size[0] / this.props.data.length)))
   //    .attr("y", d => this.props.size[1] - yScale(d))
   //    .attr("height", d => yScale(d))
   //    .attr("width", 50);
   
      select(node)
         .selectAll("text")
         .data(this.props.data)
         .enter()
         .append("text")
         .text(d => d)
         .attr("x", (d, i) => ((this.props.size[0]-100) / this.props.data.length) * (i + 1))
         .attr("y", (d, i) => 100)
         .attr("height", d => yScale(d))
         .attr("width", 30);
      select(node)
         .selectAll("text")
         .data(this.props.months)
         .enter()
         .append("text")
         .text(d => d)
         .attr("x", (d, i) => ((this.props.size[0]-100) / this.props.data.length) * (i + 1))
         .attr("y", (d, i) => 200)
         .attr("height", d => yScale(d))
         .attr("width", 30);
   }
  render() {
    return (
      <svg
        ref={node => (this.node = node)}
        width={this.props.size[0]}
        height={this.props.size[1]}
        style={{ marginLeft: 100 }}
      ></svg>
    );
  }
}

export default BarChart;
