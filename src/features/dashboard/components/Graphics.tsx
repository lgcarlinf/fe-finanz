import { useMemo } from "react";
import { Line, Pie } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";
import { useFinanceSummary } from "../hooks/useFinanceSummary";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export const Graphics = () => {

    const { financeSummary } = useFinanceSummary()

    const incomeData = financeSummary?.incomes;
    const expendData = financeSummary?.expenses;

    const dates = useMemo(
        () => incomeData?.map((entry) =>
            new Date(entry.updatedAt).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            })
        ),
        [incomeData]
    );
    const incomeAmounts = useMemo(
        () => incomeData?.map((entry) => entry.ammount || 0),
        [incomeData]
    );
    const expendAmounts = useMemo(
        () => expendData?.map((entry) => entry.ammount || 0),
        [expendData]
    );
    const profitAmounts = useMemo(
        () =>
            incomeAmounts?.map((income, index) => income - (expendAmounts?.[index] ?? 0) || 0),
        [incomeAmounts, expendAmounts]
    );

    const incomeNames = useMemo(
        () => incomeData?.map((entry) => entry.description),
        [incomeData]
    );
    const expendNames = useMemo(
        () => expendData?.map((entry) => entry.description),
        [expendData]
    );

    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top" as const },
            title: {
                display: true,
                text: `Ingresos: ${financeSummary?.total.totalIncome}  |  Egresos: ${financeSummary?.total.totalExpense}  |  Ganancias: ${financeSummary?.profit}`,
            },
        },
        layout: {
            padding: 30,
        },
    };

    const PieChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom" as const,
                labels: {
                    font: {
                        size: 10,
                    },
                    boxWidth: 10,
                },
            },
            tooltip: {
                bodyFont: {
                    size: 12,
                },
            },
        },
        layout: {
            padding: 5,
        },
    };

    const incomePieOptions = {
        ...PieChartOptions,
        plugins: {
            ...PieChartOptions.plugins,
            title: {
                display: true,
                text: "Ingresos",
                font: {
                    size: 12,
                },
            },
        },
    };

    const expendPieOptions = {
        ...PieChartOptions,
        plugins: {
            ...PieChartOptions.plugins,
            title: {
                display: true,
                text: "Egresos",
                font: {
                    size: 12,
                },
            },
        },
    };

    const profitPieOptions = {
        ...PieChartOptions,
        plugins: {
            ...PieChartOptions.plugins,
            title: {
                display: true,
                text: "Ganancias",
                font: {
                    size: 12,
                },
            },
        },
    };

    const incomePieData = {
        labels: incomeNames,
        datasets: [
            {
                label: "Ingresos",
                data: incomeAmounts,
                backgroundColor: [
                    "#FF9F40",
                    "#FF6F91",
                    "#36A2EB",
                    "#4BC0C0",
                    "#FFCE56",
                    "#A38BDA",
                    "#F15BB5",
                    "#6BCB77",
                ],
            },
        ],
    };

    const expendPieData = {
        labels: expendNames,
        datasets: [
            {
                label: "Egresos",
                data: expendAmounts,
                backgroundColor: [
                    "#FF9F40",
                    "#FF6F91",
                    "#36A2EB",
                    "#4BC0C0",
                    "#FFCE56",
                    "#A38BDA",
                    "#F15BB5",
                    "#6BCB77",
                ],
            },
        ],
    };

    const profitPieData = {
        labels: dates,
        datasets: [
            {
                label: "Ganancias",
                data: profitAmounts,
                backgroundColor: [
                    "#FF9F40",
                    "#FF6F91",
                    "#36A2EB",
                    "#4BC0C0",
                    "#FFCE56",
                    "#A38BDA",
                    "#F15BB5",
                    "#6BCB77",
                ],
            },
        ],
    };

    const combinedLineData = {
        labels: dates,
        datasets: [
            {
                label: "Ingresos",
                data: incomeAmounts,
                borderColor: "#26FF2A",
                backgroundColor: "rgba(38, 255, 42, 0.3)",
                fill: false,
            },
            {
                label: "Egresos",
                data: expendAmounts,
                borderColor: "#FF1A1A",
                backgroundColor: "rgba(255, 26, 26, 0.3)",
                fill: false,
            },
            {
                label: "Ganancias",
                data: profitAmounts,
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.3)",
                fill: false,
            },
        ],
    };

    return (
        <div className="w-full h-full relative p-4">
            <div className="bg-slate-200 h-1/2 w-full mb-4 rounded-2xl shadow-md shadow-gray-300">
                <Line options={lineChartOptions} data={combinedLineData} />
            </div>

            <div className="grid grid-cols-3 gap-4 h-2/5">
                <div className="bg-slate-200 h-full rounded-2xl shadow-md shadow-gray-300">
                    <Pie options={incomePieOptions} data={incomePieData} />
                </div>
                <div className="bg-slate-200 h-full rounded-2xl shadow-md shadow-gray-300">
                    <Pie options={expendPieOptions} data={expendPieData} />
                </div>
                <div className="bg-slate-200 h-full rounded-2xl shadow-md shadow-gray-300">
                    <Pie options={profitPieOptions} data={profitPieData} />
                </div>
            </div>
        </div>
    );
};