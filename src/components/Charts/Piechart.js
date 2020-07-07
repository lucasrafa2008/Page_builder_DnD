import React from 'react'

function Piechart() {
    return (
        <div>
        <div>
  {/* PIE CHART */}
  <div className="card card-danger">
    <div className="card-header">
      <h3 className="card-title">Pie Chart</h3>
      <div className="card-tools">
        <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
        </button>
        <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
      </div>
    </div>
    <div className="card-body">
      <canvas id="pieChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
    </div>
    {/* /.card-body */}
  </div>
  {/* /.card */}
  {/* /.col (LEFT) */}
  <div className="col-md-6">
    
    {/* BAR CHART */}
    <div className="card card-success">
      <div className="card-header">
        <h3 className="card-title">Bar Chart</h3>
        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
        </div>
      </div>
      <div className="card-body">
        <div className="chart">
          <canvas id="barChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
        </div>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </div></div>


        </div>
    )
}

export default Piechart
