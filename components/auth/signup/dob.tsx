"use client";
import { ChangeEventHandler, useReducer, useState } from "react";
import { DOBInputType } from "../reducers";
import Select from '../../ui/inputs/select';
export default function DOB({
  handleChange,
  DOB,
}: {
  handleChange: ChangeEventHandler<HTMLOptionElement>;
  DOB: DOBInputType;
}) {
  const years = (
    <>
      {Array(120)
        .fill(0)
        .map((_, i) => (
          <option
            key={new Date().getFullYear() - 6 - i}
            value={new Date().getFullYear() - 6 - i}
          >
            {new Date().getFullYear() - 6 - i}
          </option>
        ))}
    </>
  );
  const month = (
    <>
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {new Date(2000, i).toLocaleString("en-US", { month: "long" })}
          </option>
        ))}
    </>
  );
  const date = (
    <>
      {Array(new Date(DOB.year, DOB.month, 0).getDate())
        .fill(0)
        .map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
    </>
  );
  return (
    <div className="flex space-x-2 w-full">
      <Select
        placeholder="Month"
        value={DOB.month}
        onChangeHandler={handleChange}
        className="w-1/3"
        label="Month"
      >
        {month}
      </Select>
      <Select
        placeholder="Date"
        value={DOB.date}
        onChangeHandler={handleChange}
        className="w-1/3"
        label="Date"
      >
        {date}
      </Select>
      <Select
        placeholder="Year"
        value={DOB.year}
        onChangeHandler={handleChange}
        className="w-1/3"
        label="Year"
      >
        {years}
      </Select>
    </div>
  );
}
