import React from 'react';
import BarChart from '../_update/charts/barchart';
import Chart from '../_update/charts/chart';
import Chart1 from '../_update/charts/chart1';
import OrderRow from './orderRow';
export default ()=>{
    return <>
     <div className="main-div">
        <div className="hdsf0s-sadmsa mt-3">
          <h3 className="lsjadf-sadnsd">
            <span>Hi Tam Tran,</span>
          </h3>
          <h3>Welcome back👋</h3>
        </div>
      </div>

      <div className="my-5">
        <h5 className="jdiofsdf-fndsf my-2">Daily Orders</h5>

        <div className="d-flex flex-wrap ">
          <div className="njadfskdfns-dsfsad">
            <Chart1
              label="Inprogress"
              value="04"
              color={"#FCCE40"}
              strokeColor="#E1A902"
            />
          </div>
          <div className="njadfskdfns-dsfsad">
            <Chart1
              label="Completed"
              value="10"
              color={"#03BCD4"}
              strokeColor="#0BACC0"
            />
          </div>
          <div className="njadfskdfns-dsfsad">
            <Chart1
              label="Total Bookings"
              value="15"
              color={"#5469C9"}
              strokeColor="#2C42A5"
            />
          </div>
        </div>
      </div>
      <h5 className="jdiofsdf-fndsf my-2">Users / Categories</h5>

      <div className="my-5">

        <div className="d-flex jkdacs-3je8w">
          <div className=" ">
            <div className="njadfskdfns-dsfsad">
              <BarChart />
            </div>
            <div className="njadfskdfns-dsfsad">
              <Chart1
                label="Categories"
                value="10"
                color={"#03BCD4"}
                strokeColor="#0BACC0"
              />
            </div>
          </div>
          <div className="lsakdlsa-dakd">

            <div className="mx-5 w-100 box-shadow nvsdc-amwdi">
          <p>Recent Invoices</p>
              <OrderRow
                price={180}
                date="April, 09, 2022"
                invoiceNumber="INV-#kd0s03d"
              />
              <OrderRow
                price={180}
                date="April, 09, 2022"
                invoiceNumber="INV-#kd0s03d"
              />
              <OrderRow
                price={180}
                date="April, 09, 2022"
                invoiceNumber="INV-#kd0s03d"
              />
              <OrderRow
                price={180}
                date="April, 09, 2022"
                invoiceNumber="INV-#kd0s03d"
              />
              <OrderRow
                price={180}
                date="April, 09, 2022"
                invoiceNumber="INV-#kd0s03d"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex w-100 kafsdfidsa-fen">
          <div className="w-100 kdsafjdas-sadn">
            <h5 className="jdiofsdf-fndsf">Daily Sales Activity</h5>
            <div className="odsafoskdf-dsnaier box-shadow">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </>
}