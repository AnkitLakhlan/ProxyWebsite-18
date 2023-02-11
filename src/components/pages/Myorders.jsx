import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';

const Wrapper = styled.div`
    .tableContainer {
      width: 95%;
      margin: 100px auto 30px auto;
      background-color: #ffffff;
      box-shadow: 0 0 3px 0 rgb(0 0 0 / 10%);
      padding: 30px;
      border-radius: 12px;
    }

    .tableContainer .tableHeading {
      width: 100%;
      text-align: center;
    }

    .tableContainer .tableHeading h3 {
      font-size: 30rem;
    }

    .tableContainer table {
      width: 100%;
      border-collapse: collapse;
      background-color: white;
      text-align: center;
      color: black;
      overflow-y: scroll;
      margin: 20px 0px;
    }

      .tableContainer thead {
      box-shadow: 0 5px 10px #111;
    }

      .tableContainer th {
      padding: 8px 16px;
      letter-spacing: 0.1px;
      font-size: 12.8rem;
      font-weight: 900;
    }

      .tableContainer td {
      padding: 0.8px 2px;
      font-size: 0.89rem;
      text-align: center;
    }

    .tableContainer tbody {
      height: 20vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .tableContainer .textBox {
      position: absolute;
      left: 45%;
      top: 42%;
      transform: translateY(-50%)
    }

    .tableContainer .textBox p {
        font-weight: bold;
        font-size: 20rem;
    }

`;

function Myorders() {
  return (
    <>
      <Wrapper>
        <div className="tableContainer">
          <div className="tableHeading text">
            <h3>Order History</h3>
          </div>

          <table>
            <thead>
              <tr>
                <th>Order_ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <div className="textBox">
                <p>No History Available</p>
              </div>
            </tbody>
          </table>
        </div>
      </Wrapper>
    </>
  )
}

export default Myorders
