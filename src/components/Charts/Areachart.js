import React from 'react'

function Areachart() {
    return (
        <div>
            {/* AREA CHART */}
<div className="card card-primary">
  <div className="card-header">
    <h3 className="card-title">Area Chart</h3>
    <div className="card-tools">
      <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
      </button>
      <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
    </div>
  </div>
  <div className="card-body">
    <div className="chart">
      <canvas id="areaChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
    </div>
  </div>
  {/* /.card-body */}
</div>
{/* /.card */}

        </div>
    )
}

export default Areachart

