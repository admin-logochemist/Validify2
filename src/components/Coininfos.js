import axios from "axios";
import { useEffect, useState } from "react";
import {  HistoricalCharts } from "../config/api";
import { Line } from "react-chartjs-2";
import BtcCoinPage from './BtcCoinPage';
import {
  CircularProgress,
  createTheme,
  // makeStyles,
  // ThemeProvider,
} from "@material-ui/core";
import SelectButton from "./SelectButton";
import { chartDays } from "../config/data";
import { CryptoState } from "../CryptoContext";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { CoinsTable } from "./CoinsTable";
const CoinInfos = ({ id }) => {
  
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const [flag,setflag] = useState(false);

  // const useStyles = makeStyles((theme) => ({
  //   container: {
  //     width: "75%",
  //     // display: "flex",
  //     // flexDirection: "column",
  //     // alignItems: "center",
  //     // justifyContent: "center",
  //     // marginTop: 25,
  //     // padding: 40,
  //     [theme.breakpoints.down("md")]: {
  //       width: "100%",
  //       marginTop: 0,
  //       padding: 0,
  //       paddingTop: 0,
  //       color:"white"
  //     },
  //   },
  // }));

  // const classes = useStyles();

      const fetchHistoricData = async () => {
        const { data } = await axios.get(HistoricalCharts(id,days));
        setflag(true);
        setHistoricData(data.prices);
      };
      console.log("histo",historicData);
      useEffect(() => {
        fetchHistoricData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [days]);

      const darkTheme = createTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
      });
      return (
    // <ThemeProvider theme={darkTheme}>

    // </ThemeProvider>
    <div className="col-lg-6 responsive_col">
      <BtcCoinPage id={id}/>
    {!historicData | flag===false ? (
      <CircularProgress
        style={{ color: "gold" }}
        size={250}
        thickness={1}
      />
    ) : (
      <>
      <Line style={{color:"white"}}
      data={{
        labels:historicData.map(coin=>{
          let date=new Date(coin[0]);
          let time =
          date.getHours() > 12
            ? `${date.getHours() - 12}:${date.getMinutes()} PM`
            : `${date.getHours()}:${date.getMinutes()} AM`;
            return days === 1 ? time : date.toLocaleDateString();
        }),
        datasets: [
          {
            data: historicData.map((coin) => coin[1]),
            label: `Price ( Past ${days} Days ) in ${currency}`,
            borderColor: "#EEBC1D",
          },
        ]
      }}
      options={{
        elements: {
          point: {
            radius: 1,
          },
        },
      }}
      />
        {/* <Line
          data={{
            labels: historicData.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicData.map((coin) => coin[1]),
                label: `Price ( Past ${days} Days ) in ${currency}`,
                borderColor: "#EEBC1D",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        /> */}
          {chartDays.map((day) => (
            <SelectButton 
              key={day.value}
              onClick={() => {setDays(day.value);
                setflag(false);
              }}
              selected={day.value === days}
            >
              {day.label}
            </SelectButton>
          ))}
      </>
    )} 
    <CoinsTable/>  
    </div>
  );
};

export default CoinInfos;