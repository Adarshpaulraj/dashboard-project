import React from "react";
import { Table } from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <div className=" container-fluid  ">
        <div className="top">
          <div className="searchbox">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" className="search" />
          </div>
          <div className="alert">
            <i class="fa-regular fa-bell"></i>
          </div>
        </div>
        <div>
          <h2>Sales Information</h2>
          <form action="form" className="details">
            <div>
              <label htmlFor="Name">Name</label>
              <br />
              <input type="text" placeholder="Enter Customer Name" id="Name" />
            </div>
            <div>
              <label htmlFor="invoice">Invoice ID</label>
              <br />
              <input type="text" placeholder="Enter Invoice ID" id="invoie" />
            </div>
            <div>
              <label htmlFor="startdate">Start Date</label>
              <br />
              <input type="text" placeholder="Start Date" id="startdate" />
            </div>
            <div>
              <label htmlFor="enddate">End Date</label>
              <br />
              <input type="text" placeholder="End Date" id="enddate" />
            </div>
          </form>
        </div>
        <div className="container-fluid">
          <Table className="table">
            <tbody>
              <tr style={{ color: "#000000" }}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>InVoice ID</td>
                <td>Date</td>
                <td>Customer</td>
                <td>Payable Amount</td>
                <td>Paid Amount</td>
                <td>Due</td>
              </tr>
              <tr >
                <td>
                  <input type="checkbox" />
                </td>
                <td style={{color:'blue'}}>#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$1000</td>
              </tr>
              <tr >
                <td>
                  <input type="checkbox" />
                </td>
                <td style={{color:'blue'}}>#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$1000</td>
              </tr>
              <tr >
                <td>
                  <input type="checkbox" />
                </td>
                <td style={{color:'blue'}}>#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$1000</td>
              </tr>
              <tr >
                <td>
                  <input type="checkbox" />
                </td>
                <td style={{color:'blue'}}>#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$1000</td>
              </tr>
              <tr >
                <td>
                  <input type="checkbox" />
                </td>
                <td style={{color:'blue'}}>#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$1000</td>
              </tr>
              <tr >
                <td>
                  <input type="checkbox" />
                </td>
                <td style={{color:'blue'}}>#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$1000</td>
              </tr>
              <tr >
                <td>
                  <input type="checkbox" />
                </td>
                <td style={{color:'blue'}}>#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$1000</td>
              </tr>
              <tr >
                <td>
                  <input type="checkbox" />
                </td>
                <td style={{color:'blue'}}>#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$1000</td>
              </tr>
              <tr >
                <td>
                  <input type="checkbox" />
                </td>
                <td style={{color:'blue'}}>#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$1000</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
