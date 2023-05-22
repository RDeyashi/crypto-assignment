import React, { useState } from "react";
import backIcon from "../../Assets/back-icon.svg";
import searchIcon from "../../Assets/search-icon.svg";
import {
  CryptoSideBar,
  cryptoSideBar,
} from "../../mock-response/crypto-response";
import "./side-bar.css";

export interface SideBarProps {
  sendAbbv: (data: string) => void;
}
export const SideBar: React.FC<SideBarProps> = ({ sendAbbv }) => {
  const [filteredSideBar, setFilteredSideBar] = useState<CryptoSideBar[]>([]);
  const [selectedCard, setSelectedCard] = useState("");

  const highlightCard = (abbv: string) => {
    sendAbbv(abbv);
    setSelectedCard(abbv);
  };

  const searchCrypto = (event: any) => {
    sendAbbv("");
    const searchValue = event.target.value;
    const filteredOptions = cryptoSideBar.filter(
      (ele: any) =>
        ele.fullForm.toLowerCase().startsWith(searchValue.toLowerCase()) ||
        ele.abbv.toLowerCase().startsWith(searchValue.toLowerCase())
    );
    setFilteredSideBar(filteredOptions);
  };

  return (
    <>
      <div className="d-flex flex-column side-bar-container p-4 pb-3">
        <div className="d-flex align-items-center mb-3 ms-3">
          <img src={backIcon} className="me-3" alt=""/>
          <span className="crypto-text">
            Cryptos (
            {!filteredSideBar.length
              ? cryptoSideBar.length
              : filteredSideBar.length}
            )
          </span>
        </div>
        <div className="search-bar ps-2 d-flex align-items-center mb-3">
          <img src={searchIcon} alt=""/>
          <input
            className="search-input-control ms-2 mb-1"
            placeholder="Search"
            onKeyUp={searchCrypto}
          />
        </div>

        {!filteredSideBar.length &&
          cryptoSideBar.map((item, index) => {
            return (
              <div
                className={`side-bar-wrapper  ${
                  item.abbv === selectedCard ? "side-bar-highlight" : ""
                }`}
                key={index}
                onClick={() => highlightCard(item.abbv)}
              >
                <div className="horizontal-line mb-3"></div>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <img src={item.image} className="crypto-image mb-3" alt=""/>

                    <div className="d-flex flex-column ms-2">
                      <span className="abbv-text fw-bolder">{item.abbv}</span>
                      <span className="fullform-text">{item.fullForm}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        {filteredSideBar.length ? (
          <>
            {filteredSideBar.map((item, index) => {
              return (
                <div
                  className="side-bar-wrapper p-2"
                  key={index}
                  onClick={() => highlightCard(item.abbv)}
                >
                  <div className="horizontal-line mb-3"></div>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center">
                      <img src={item.image} className="crypto-image mb-3" alt=""/>

                      <div className="d-flex flex-column ms-2">
                        <span className="abbv-text fw-bolder">{item.abbv}</span>
                        <span className="fullform-text">{item.fullForm}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
