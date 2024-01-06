"use client";

import { useState, useEffect } from "react";
import MainNavbar from "@/components/MainNavbar";
import ControlPanel from "@/components/ControlPanel";
import BChart from "./charts/BChart";
import SChart from "./charts/speedChart";
import TChart from "./charts/TemperatureChart";
import DChart from "./charts/DChart";
import MRChart from "./charts/MRChart";
import { BChartOptions } from "@/components/BChartOptions";

const Page = () => {
  const [startDate, setStartDate] = useState("2022-10-02");
  const [endDate, setEndDate] = useState("2022-10-10");
  const [bSelection, setBSelection] = useState("B");
  const [sunData, setSunData] = useState([]);

  // Fetch sunData from API
  useEffect(() => {
    fetch("/api/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setSunData(json))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [startDate, endDate]);

  // Handlers for buttons
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  const handleBSelectionChange = (value) => {
    setBSelection(value);
  };
  let fixedBSelection = bSelection.toUpperCase();

  // Filter data by date
  function filtrarPorFecha(datos, fechaInicio, fechaFin) {
    let inicio = new Date(fechaInicio);
    let fin = new Date(fechaFin);
    return datos.filter((d) => {
      let fecha = new Date(d.datetime);
      return fecha >= inicio && fecha <= fin;
    });
  }

  // Count Trues
  function contarTrues(datos, fechaInicio, fechaFin) {
    let datosFiltrados = filtrarPorFecha(datos, fechaInicio, fechaFin);

    // Luego, contamos el número de Trues
    let contador = 0;
    for (let dato of datosFiltrados) {
      if (dato.Rm_ind1 === "True") {
        contador++;
      }
    }

    return contador;
  }

  // Calculate total Magnetic Reconnection Events
  let TotalMRS = contarTrues(sunData, startDate, endDate);

  return (
    <div className="flex flex-col min-h-screen">
      {/*Navbar*/}
      <MainNavbar />

      {/* First section of the dashboard */}
      <div
        id="firstSectionDashboard"
        className="sectionDashboard pt-16 px-4 md:px-10"
      >
        {/* Control panel to pick the date range */}
        <ControlPanel
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
        />

        {/* Here is where the principalChart go. It's like a grid */}
        <div
          id="chartsContainer"
          className="flex flex-col md:flex-row w-full md:h-[75vh] mt-10 gap-2"
        >
          {/* The principal chart container is to content the BChart componente and it's description */}
          <div
            id="principalChartContainer"
            className="flex flex-col w-full md:w-4/5 h-full bg-surface rounded-xl px-4 pt-5 gap-1"
          >
            <div
              id="principalChartHeader"
              className="flex flex-row w-full md:h-1/5"
            >
              <div className="flex flex-col md:flex-row principalChartHeaderText w-full justify-between">
                <div className="chartHeaderText">
                  <h2 className="text-onBackground text-xl font-medium mb-2">
                    Interplanetary Magnetic Field (IMF)
                  </h2>
                  <p
                    id="miniDescriptionPrincipalChart"
                    className="text-secondary text-sm"
                  >
                    {" "}
                    The IMF is a vector (
                    <span className="text-[#557FFF]">B</span>) that can be
                    characterized by three independent components (
                    <span className="text-[#936BFF]">BX</span>,{" "}
                    <span className="text-[#FFC530]">BY</span>,{" "}
                    <span className="text-[#FF6384]">BZ</span>). In the
                    Geocentric Solar Magnetospheric (GSM) Coordinate System, the
                    X-axis points from Earth to the Sun. The Y-axis is defined
                    to be perpendicular to the Earth&apos;s magnetic dipole so
                    that the X-Z plane contains the Earth&apos;s dipole axis.{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* Here is where BChart go */}
            <div id="principalChart" className="w-[100%] md:h-4/5 relative">
              <BChartOptions onBSelectionChange={handleBSelectionChange} />
              <BChart
                BData={filtrarPorFecha(sunData, startDate, endDate)}
                selectedGraph={fixedBSelection}
              />
            </div>
          </div>
          {/* This is te container for the complementary charts as Speed Chart, Temperature Chart and Density Chart */}
          <div
            id="secondChartsContainer"
            className="flex flex-col md:w-1/5 h-full gap-2"
          >
            {/* Container for the speed chart */}
            <div
              className="flex flex-col w-full h-1/3 bg-surface rounded-xl gap-2"
              id="speedChartContainer"
            >
              <div id="speedChartHeader" className="w-full h-[10%] p-2">
                <h4 className="text-onBackground text-sm">Speed (Km/s)</h4>
              </div>
              <div id="speedChart" className="w-full h-[90%] p-2">
                <SChart BData={filtrarPorFecha(sunData, startDate, endDate)} />
              </div>
            </div>

            {/* Container for the temperature chart */}
            <div
              className="w-full h-1/3 bg-surface rounded-xl p-2"
              id="temperatureChart"
            >
              <div id="speedChartHeader" className="w-full h-[10%]">
                <h4 className="text-onBackground text-sm">
                  Temperature (Kelvin degrees)
                </h4>
              </div>
              <div id="speedChart" className="w-full h-[90%] pt-2">
                <TChart BData={filtrarPorFecha(sunData, startDate, endDate)} />
              </div>
            </div>

            {/* Container for the density chart */}
            <div
              className="w-full h-1/3 bg-surface rounded-xl p-2"
              id="densityChart"
            >
              <div id="speedChartHeader" className="w-full h-[10%]">
                <h4 className="text-onBackground text-sm">Density (n/cc)</h4>
              </div>
              <div id="speedChart" className="w-full h-[90%]">
                <DChart BData={filtrarPorFecha(sunData, startDate, endDate)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Here starts the section of the dashboard where the conclusions are */}
      <h3 className="md:relative top-8 left-0 text-4xl md:text-5xl font-semibold text-[#D8D9C5] pt-9 pl-4 md:pl-10">
        Conclutions
      </h3>
      <br />
      <p className="text-outline text-base mt-8 pl-10 w-[85vw] italic">
        Once the data is plotted, calculations are performed to identify
        instances where the interplanetary magnetic field time series exhibits
        an opposite direction to Earth&apos;s magnetic field, which naturally
        points toward the geographic north pole. <br />
        <br />
        <span className="text-outline">
          These calculations provide statistical information to determine when
          an event might be considered a magnetic reconnection scenario.
          Additionally, specific thresholds are applied to further refine the
          data.
        </span>
      </p>
      <div
        id="conclutionSection"
        className="flex flex-col w-full h-[50vh] md:h-[75vh] justify-center place-items-center md:px-10 overflow-hidden"
      >
        <div
          id="conclutionContainer"
          className="relative flex flex-col md:flex-row w-fit h-fit gap-4 z-10 px-4"
        >
          {/* <div id="decorationLine" className="w-32 h-[0.1rem] bg-white pr-2 hidden md:flex "></div> */}

          <div className="text-white font-medium text-xl md:text-6xl md:w-[60vw]">
            Based on the data, we calculate that a total of{" "}
            <span className="text-[#C7000E]">
              <span className="font-extrabold">{TotalMRS}</span> magnetic
              reconnections
            </span>{" "}
            occurred in the established time range.
          </div>
        </div>
      </div>
      <div className="secondChartContainer flex flex-col w-full h-[70vh] md:h-fit bg-[#0E0E0E] rounded-xl px-4 md:px-10 pt-8 pb-8">
        <div id="secondChartHeader" className="flex flex-row w-full h-1/5 mb-4">
          <div className="flex secondChartHeaderText w-full justify-between">
            <div className="chartHeaderText">
              <h2 className="text-[#EAE1D9] text-3xl md:text-5xl font-medium ">
                Estimated Number of Magnetic Reconection events
              </h2>

              <p
                id="miniDescriptionPrincipalChart"
                className="text-[#9C8F80] text-sm mt-2 md:w-[60rem]"
              >
                Based on the data we select those events in which the direction
                of the z-component of the interplanetary magnetic field is
                opposite to the direction of the earth&apos;s magnetic field and
                we use an additional threshold to restrict those events whose
                velocity, density and temperature exceed a minimum level (the
                average in the selected period).
              </p>
            </div>
          </div>
        </div>
        <div className="displayCharAndDescription w-full flex h-4/5">
          <div
            id="secondChart"
            className="w-[100vw] h-[70vh] flex justify-center place-items-center"
          >
            <MRChart
              datos={sunData}
              fechaInicio={startDate}
              fechaFin={endDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
