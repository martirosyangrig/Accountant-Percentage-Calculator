import React, { useState } from "react";
import styles from "./app.module.css";

function App() {
    const [days, setDays] = useState<number | "">("");
    const [percent, setPercent] = useState<number | string>("");
    const [money, setMoney] = useState<number | "">("");
    const [result, setResult] = useState<number | "">("");

    const onDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setDays(value === "" ? "" : parseInt(value));
        }
    };

    const onPercentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let result = value.replace(/[^0-9.]/g, "");
        result = result.replace(/\.(?=.*\.)/g, "");

        setPercent(result);
    };

    const onManyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMoney(value === "" ? "" : parseFloat(value));
    };

    const calculate = () => {
        if (!days || !percent || !money) return;

        let sum = money;

        for (let i = 1; i <= days; i++) {
            sum += sum * (+percent / 100);
        }

        setResult(sum);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Percent Counter</h1>
                <input
                    type="text"
                    placeholder="Enter days"
                    onChange={onDaysChange}
                    value={days === "" ? "" : days.toString()}
                />
                <input
                    type="text"
                    placeholder="Enter percentage"
                    onChange={onPercentChange}
                    value={percent === "" ? "" : percent.toString()}
                />
                <input
                    type="number"
                    placeholder="Enter money"
                    onChange={onManyChange}
                    value={money === "" ? "" : money.toString()}
                />
                <button onClick={calculate}>Submit</button>
                <span>The result is - {result}</span>
            </div>
        </div>
    );
}

export default App;
