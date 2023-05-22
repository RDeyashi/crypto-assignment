import bitCoin from "../Assets/bitcoin.svg";
import ethereum from "../Assets/ethereum.svg";
import apple from "../Assets/apple.svg";
import alphabet from "../Assets/alphabet.svg";
import amazon from "../Assets/amazon.svg";
import commerzb from "../Assets/commerzb.svg";
import bitCoinCard from "../Assets/bitcoin-card.svg";
import ethereumCard from "../Assets/ethereum-card.svg";
import appleCard from "../Assets/apple-card.svg";
import alphabetCard from "../Assets/alphabet-card.svg";
import amazonCard from "../Assets/amazon-card.svg";
import commerzbCard from "../Assets/commerzb-card.svg";
import sample from "../Assets/sample.svg";

export interface CryptoSideBar {
  abbv: string;
  fullForm: string;
  image: any;
}

export const cryptoSideBar: CryptoSideBar[] = [
  {
    abbv: "BTC",
    fullForm: "Bitcoin",
    image: bitCoin,
  },
  {
    abbv: "ETH",
    fullForm: "Ethereum",
    image: ethereum,
  },
  {
    abbv: "AAPL",
    fullForm: "Apple",
    image: apple,
  },
  {
    abbv: "GOOG",
    fullForm: "Alphabet",
    image: alphabet,
  },
  {
    abbv: "AMZN",
    fullForm: "Amazon",
    image: amazon,
  },
  {
    abbv: "CBK.DE",
    fullForm: "Commerzb",
    image: commerzb,
  },
  {
    abbv: "TSCO.L",
    fullForm: "Tesco",
    image: sample,
  },
  {
    abbv: "SMPL1",
    fullForm: "Sample1",
    image: sample,
  },
  {
    abbv: "SMPL2",
    fullForm: "Sample2",
    image: sample,
  },
  {
    abbv: "SMPL3",
    fullForm: "Sample3",
    image: sample,
  },
];

export interface CryptoStats {
  abbv: string;
  fullForm: string;
  buy: number;
  sell: number;
  change: number;
  percentageChange: number;
  image: any;
}

export const cryptoStats: CryptoStats[] = [
  {
    abbv: "BTC",
    fullForm: "Bitcoin",
    buy: 4324.75,
    sell: 4668.93,
    change: 2280.66,
    percentageChange: 5.19,
    image: bitCoinCard,
  },
  {
    abbv: "ETH",
    fullForm: "Ethereum",
    buy: 312.2938,
    sell: 321.9382,
    change: 194.234,
    percentageChange: 6.19,
    image: ethereumCard,
  },
  {
    abbv: "AAPL",
    fullForm: "Apple",
    buy: 4324.75,
    sell: 4668.93,
    change: -8.41,
    percentageChange: -0.49,
    image: appleCard,
  },
  {
    abbv: "GOOG",
    fullForm: "Alphabet",
    buy: 4324.75,
    sell: 4668.93,
    change: 5480.66,
    percentageChange: 5.19,
    image: alphabetCard,
  },
  {
    abbv: "AMZN",
    fullForm: "Amazon",
    buy: 312.2938,
    sell: 321.9382,
    change: 124.234,
    percentageChange: 6.19,
    image: amazonCard,
  },
  {
    abbv: "CBK.DE",
    fullForm: "Commerzb",
    buy: 4324.75,
    sell: 4668.93,
    change: -0.49,
    percentageChange: -0.49,
    image: commerzbCard,
  },
];
