import { GuestsObject } from "components/HeroSearchForm/type";
import NcInputNumber from "components/NcInputNumber/NcInputNumber";
import React, { useEffect, useState } from "react";
import { FC } from "react";
export interface GuestsInputProps {
  defaultValue?: GuestsObject;
  onChange?: (data: GuestsObject) => void;
  className?: string;
}

const GuestsInput: FC<GuestsInputProps> = ({
  defaultValue,
  onChange,
  className = "",
}) => {
  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(
    defaultValue?.guestAdults || 0
  );
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(
    defaultValue?.guestChildren || 0
  );
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(
    defaultValue?.guestInfants || 0
  );

  useEffect(() => {
    setGuestAdultsInputValue(defaultValue?.guestAdults || 0);
  }, [defaultValue?.guestAdults]);
  useEffect(() => {
    setGuestChildrenInputValue(defaultValue?.guestChildren || 0);
  }, [defaultValue?.guestChildren]);
  useEffect(() => {
    setGuestInfantsInputValue(defaultValue?.guestInfants || 0);
  }, [defaultValue?.guestInfants]);

  const handleChangeData = (value: number, type: keyof GuestsObject) => {
    let newValue = {
      guestAdults: guestAdultsInputValue,
      guestChildren: guestChildrenInputValue,
      guestInfants: guestInfantsInputValue,
    };
    if (type === "guestAdults") {
      setGuestAdultsInputValue(value);
      newValue.guestAdults = value;
    }
    if (type === "guestChildren") {
      setGuestChildrenInputValue(value);
      newValue.guestChildren = value;
    }
    onChange && onChange(newValue);
  };

  return (
    <div className={`flex flex-col relative p-5 ${className}`}>
      <span className="mb-5 block font-semibold text-xl sm:text-2xl">
        {`Persone`}
      </span>
      <NcInputNumber
        className="w-full"
        defaultValue={guestAdultsInputValue}
        onChange={(value) => handleChangeData(value, "guestAdults")}
        max={20}
        label="Adulti"
        desc="Età 18 o superiore"
      />
      <NcInputNumber
        className="w-full mt-6"
        defaultValue={guestChildrenInputValue}
        onChange={(value) => handleChangeData(value, "guestChildren")}
        max={20}
        label="Bambini"
        desc="Età 0–17"
      />
    </div>
  );
};

export default GuestsInput;
