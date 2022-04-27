import React from 'react';
import BarChart from '../_update/charts/barchart';
import Chart from '../_update/charts/chart';
import Chart1 from '../_update/charts/chart1';
import OrderRow from './orderRow';
export default ()=>{
    return <>
     <div className='main-div'>
       <div className="hdsf0s-sadmsa mt-3">
              <h3 className="lsjadf-sadnsd">
                <span>Hi Tam Tran,</span>
              </h3>
              <h3>Welcome back👋</h3>
              </div>
       </div>
       <div className="d-flex flex-wrap my-5" >
              <div className="njadfskdfns-dsfsad">
              <Chart1 label="Inprogress" value="04" color={"#FCCE40"} strokeColor="#E1A902"/>

              </div>
              <div className="njadfskdfns-dsfsad">
              <Chart1 label="Completed" value="10" color={"#03BCD4"} strokeColor="#0BACC0"/>

              </div>
              <div className="njadfskdfns-dsfsad">
              <Chart1 label="Total Bookings" value="15" color={"#5469C9"} strokeColor="#2C42A5"/>

              </div>
              </div>
      <div>
      <div className="d-flex w-100 kafsdfidsa-fen">
            <div className="w-100 kdsafjdas-sadn">
                <h5 className="jdiofsdf-fndsf">Daily Sales Activity</h5>
                  <div className="odsafoskdf-dsnaier">
                  <Chart/>
                  </div>
              </div>
              <div className="w-100 diafdsfi-dsaf">
                <h5 className="jdiofsdf-fndsf">Weekly Status</h5>
                  <div className="odsafoskdf-dsnaier">
                    <h5 className="sanfkf-dafn">From Jan 10-18</h5>
                  <BarChart/>
                  <div className="d-flex justify-content-between jasfidsf-afnesf3">
                    <div>
                      <span>Minimum</span>
                      <h5>04 Bookings</h5>
                    </div>
                    <div>
                      <span>Maximum</span>
                      <h5>08 Bookings</h5>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
      </div>
    </>
}