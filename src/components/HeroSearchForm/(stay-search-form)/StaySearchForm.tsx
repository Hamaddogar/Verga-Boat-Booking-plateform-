import React, { FC, useState, useEffect } from "react";
import LocationInput from "../LocationInput";
import GuestsInput from "../GuestsInput";
/* import StayDatesRangeInput from "./StayDatesRangeInput"; */
import StayDateSingleInput from "./StayDateSingleInput";
import { useFormContext } from "../../../FormContext";

const StaySearchForm: FC<{}> = () => {
  const [locations, setLocations] = useState([]);
  /* const [formState, setFormState] = useFormContext(); */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://monkfish-app-9gnoq.ondigitalocean.app/tourtypes');
        const jsonData = await response.json();
        setLocations(jsonData);
        /* setFormState((prev: any) => ({ ...prev, locations: jsonData })); */
      } catch (error) {
        console.error('Errore durante il caricamento dei dati:', error);
      }
    };

    fetchData();
  }, []);

  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 flex rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 ">
        <LocationInput locations={locations} className="flex-[1.5]" />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        {/* <StayDatesRangeInput className="flex-1" /> */}
        <StayDateSingleInput hasButtonSubmit={false} selectsRange={false} className="flex-1" />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <GuestsInput className="flex-1" />
      </form>
    );
  };

  return renderForm();
};

export default StaySearchForm;
