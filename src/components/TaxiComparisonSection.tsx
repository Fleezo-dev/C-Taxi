import React from 'react';

export const TaxiComparisonSection: React.FC = () => {
  return (
    <section className="comparison-section" id="taxi-comparison">
      <div className="container">
        <div className="section-title-wrap">
          <span className="badge" style={{ background: '#fef2f2', color: '#d90429', border: '1px solid #fecaca' }}>
            Transparent Rates in Coimbatore
          </span>
          <h2 className="section-title">
            Why Choose <span>C Taxi</span> in Coimbatore?
          </h2>
          <p className="section-desc">
            Comparing Coimbatore's top taxi services: Get transparent fares, zero peak surge multipliers, and instant 1-click booking without mandatory app installs.
          </p>
        </div>

        <div className="comparison-card">
          <div className="comparison-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="col-feature">Service Feature</th>
                  <th className="col-ctaxi">🚕 C Taxi</th>
                  <th className="col-appcabs">🚖 App Cabs & Other Taxis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>1-Click Instant Booking</strong>
                  </td>
                  <td>
                    <span className="comp-check">✔ Yes (Call 9089223344 / Web / WhatsApp)</span>
                  </td>
                  <td>
                    <span className="comp-cross">✖ App Only (No Direct Web/WhatsApp)</span>
                  </td>
                </tr>
                <tr className="comp-highlight">
                  <td>
                    <strong>Peak Hour Surge Pricing</strong>
                  </td>
                  <td>
                    <span className="comp-check">✔ ZERO Peak Surge (Flat Transparent Rates)</span>
                  </td>
                  <td>
                    <span className="comp-cross">✖ 1.2x – 1.8x Dynamic Surge in Traffic/Rains</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Coimbatore Airport Drops</strong>
                  </td>
                  <td>
                    <span className="comp-check">✔ Transparent Fixed Rates (From ₹250)</span>
                  </td>
                  <td>
                    <span className="comp-cross">✖ Dynamic Meter Rates + Extra Surge</span>
                  </td>
                </tr>
                <tr className="comp-highlight">
                  <td>
                    <strong>Outstation Oneway Cabs</strong>
                  </td>
                  <td>
                    <span className="comp-check">✔ True 1-Way Billing (Save 40% across South India)</span>
                  </td>
                  <td>
                    <span className="comp-cross">✖ Meter Billing or Return Minimum KM</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Pickup Speed Guarantee</strong>
                  </td>
                  <td>
                    <span className="comp-check">✔ 5 - 10 Mins across entire Coimbatore</span>
                  </td>
                  <td>
                    <span className="comp-check">✔ 5 - 15 Mins dependent on driver availability</span>
                  </td>
                </tr>
                <tr className="comp-highlight">
                  <td>
                    <strong>Driver Cancellation Rate</strong>
                  </td>
                  <td>
                    <span className="comp-check">✔ 0% (Assigned trips are 100% fulfilled)</span>
                  </td>
                  <td>
                    <span className="comp-cross">✖ Common driver cancellations on busy routes</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Local Kovai Hill Drivers</strong>
                  </td>
                  <td>
                    <span className="comp-check">✔ 100% Expert Western Ghats & Hill Chauffeurs</span>
                  </td>
                  <td>
                    <span className="comp-cross">✖ City-only drivers unfamiliar with steep hairpins</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
