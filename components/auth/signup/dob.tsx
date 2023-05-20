"use client";
import { ChangeEventHandler, useReducer, useState } from "react";
import Select from "../select";
import { DOBInputType } from "../reducers";
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
    <div className="my-3 space-y-1">
      <p className="text-sm">Date of Birth</p>
      <p className="text-xs text-grey">
        This will not be shown publicly. Confirm your own age, even if this
        account is for a business or a collector.
      </p>
      <div className="flex space-x-2">
        <Select
          placeholder="Month"
          value={DOB.month}
          onChangeHandler={handleChange}
        >
          {month}
        </Select>
        <Select
          placeholder="Date"
          value={DOB.date}
          onChangeHandler={handleChange}
        >
          {date}
        </Select>
        <Select
          placeholder="Year"
          value={DOB.year}
          onChangeHandler={handleChange}
        >
          {years}
        </Select>
      </div>
    </div>
  );
}
