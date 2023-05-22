import React, { useState } from "react";
import bitcoin from "../../Assets/bitcoin.svg";
import "./crypto-stats.css";
import { SideBar } from "../side-bar/side-bar";
import { cryptoStats } from "../../mock-response/crypto-response";
import upper from "../../Assets/upper-triangle.svg";
import down from "../../Assets/down-triangle.svg";

export const CryptoStats = () => {
  const [selectedCard, setSelectedCard] = useState("");

  const highlightCard = (abbv: string) => {
    setSelectedCard(abbv);
    console.log(abbv);
  };
  return (
    <>
      <div className="d-flex crypto-bg-image">
        <SideBar sendAbbv={highlightCard} />
        <div className="d-flex flex-column p-4">
          <div className="d-flex align-items-center mb-4">
            <img src={bitcoin} className="me-2" alt=""/>
            <span className="crypto-stat-text">My Cryptos</span>
          </div>
          <div className="d-flex flex-wrap crypto-stat-gap">
            {cryptoStats.map((item, index) => {
              return (
                <div
                  className={`crypto-stats-container p-4 ${item.abbv === selectedCard ? "box-shadow" : ""
                    }`}
                >
                  <div className="d-flex align-items-center">
                    <img src={item.image} className="image-margin" alt=""/>
                    <div className="d-flex flex-column ms-3">
                      <span className="crypto-stat-text mb-1">
                        {item.fullForm}
                      </span>
                      <span className="full-form-stat-text">{item.abbv}</span>
                      <div className="d-flex align-items-center flex-wrap mt-2">
                        <span
                          className={
                            item.change < 0
                              ? "negative-change "
                              : "positive-change"
                          }
                        >
                          {item.change}
                        </span>
                        <span
                          className={
                            item.change < 0
                              ? "negative-percentage-change mt-1 ms-1"
                              : "positive-percentage-change mt-1 ms-1"
                          }
                        >
                          ({item.percentageChange})
                        </span>
                        {item.change < 0 ? (
                          <img src={down} className="mt-1 ms-1" alt=""/>
                        ) : (
                          <img src={upper} className="mt-1 ms-1" alt=""/>
                        )}
                      </div>
                      <span className="change-text mt-1">CHANGE</span>
                      <div className="horizontal-crypto-stat mt-3 mb-2"></div>
                      <div className="d-flex align-items-center flex-wrap">
                        <div className="d-flex flex-column">
                          <span className="buy-text">{item.buy}</span>
                          <span className="change-text">Buy</span>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="d-flex flex-column ms-3">
                          <span className="buy-text">{item.sell}</span>
                          <span className="change-text">Sell</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
