import React from 'react'

function DonutChart() {
    return (
        <div>
          {/* DONUT CHART */}
<div className="card card-danger">
  <div className="card-header">
    <h3 className="card-title">Donut Chart</h3>
    <div className="card-tools">
      <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
      </button>
      <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
    </div>
  </div>
  <div className="card-body">
    <canvas id="donutChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
  </div>
  {/* /.card-body */}
</div>
{/* /.card */}

        </div>
    )
}

export default DonutChart
