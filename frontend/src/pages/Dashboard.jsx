import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 400 },
  { name: "Feb", revenue: 700 },
  { name: "Mar", revenue: 300 },
  { name: "Apr", revenue: 900 },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard title="Revenue" value="$12,000" />
        <StatCard title="Reports" value="34" />
        <StatCard title="Growth" value="+18%" />
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </DashboardLayout>
  );
}