"use client";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Select from "../select";
export default function DOB() {
    
    const [dob, setDob] = useState<{
        date: number;
        month: number;
        year: number;
    }>({ date: 1, month: 1, year: 1 });

    const handleChange: ChangeEventHandler<HTMLOptionElement> = (event) => {
        console.log(event.target.value)
        setDob(prev=>{
            return {...prev,[event.target.id]:event.target.value};
        });
    };

    return (
        <div className="my-3 space-y-1">
            <p className="text-sm">Date of Birth</p>
            <p className="text-xs text-grey">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business or a collector.
            </p>
            <div className="flex space-x-2">
                <Select
                    placeholder="Month"
                    value={dob.month}
                    onChangeHandler={handleChange}
                >
                    {Array(12)
                        .fill(0)
                        .map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {new Date(2000, i).toLocaleString("en-US", {month: "long"})}
                            </option>
                        ))}
                </Select>
                <Select
                    placeholder="Date"
                    value={dob.date}
                    onChangeHandler={handleChange}
                >
                    {Array(new Date(dob.year, dob.month, 0).getDate())
                        .fill(0)
                        .map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                </Select>
                <Select
                    placeholder="Year"
                    value={dob.year}
                    onChangeHandler={handleChange}
                >
                    {Array(120)
                        .fill(0)
                        .map((_, i) => (
                            <option key={new Date().getFullYear() - 6 - i} value={new Date().getFullYear() - 6 - i}>
                                {new Date().getFullYear() - 6 - i}
                            </option>
                        ))}
                </Select>
            </div>
        </div>
    );
}
