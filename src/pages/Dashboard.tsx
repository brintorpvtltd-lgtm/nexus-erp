import { motion } from 'motion/react';
import { 
  Users, 
  TrendingUp, 
  CreditCard, 
  Package, 
  ArrowUpRight, 
  ArrowDownRight 
} from 'lucide-react';

const stats = [
  { label: 'Total Employees', value: '1,284', change: '+12%', trend: 'up', icon: Users },
  { label: 'Active Projects', value: '43', change: '+3', trend: 'up', icon: Package },
  { label: 'Monthly Revenue', value: '$432,000', change: '-2%', trend: 'down', icon: CreditCard },
  { label: 'Sales Growth', value: '24%', change: '+4%', trend: 'up', icon: TrendingUp },
];

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-on-surface">Executive Overview</h1>
        <p className="text-sm text-on-surface-variant">Real-time performance metrics across the enterprise.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-lg bg-surface-container p-2 text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${
                stat.trend === 'up' ? 'text-emerald-600' : 'text-error'
              }`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-on-surface">{stat.value}</div>
              <div className="text-xs text-on-surface-variant opacity-60 font-medium">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="col-span-2 rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
          <h3 className="mb-4 font-semibold text-on-surface">Revenue Forecast</h3>
          <div className="flex h-64 items-end gap-2 px-2">
            {[40, 60, 45, 90, 65, 80, 50, 75, 40, 30, 85, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex-1 rounded-t bg-primary/20 hover:bg-primary transition-colors cursor-pointer relative group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-surface-inverse px-2 py-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  ${h}k
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-40">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>

        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
          <h3 className="mb-4 font-semibold text-on-surface">Department Allocations</h3>
          <div className="space-y-4">
            {[
              { label: 'Engineering', value: 45, color: 'bg-primary' },
              { label: 'Marketing', value: 25, color: 'bg-primary-fixed-dim' },
              { label: 'Operations', value: 20, color: 'bg-emerald-500' },
              { label: 'Other', value: 10, color: 'bg-surface-container-high' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-on-surface">{item.label}</span>
                  <span className="text-on-surface-variant opacity-60">{item.value}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-surface-container">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    className={`h-full rounded-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
