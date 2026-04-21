import { motion } from 'motion/react';
import { TrendingUp, Target, BarChart3, Users, ChevronRight } from 'lucide-react';

const regions = [
  { name: 'North America', sales: '$1,290,000', growth: '+14%', performance: 85 },
  { name: 'Europe', sales: '$840,000', growth: '+8%', performance: 72 },
  { name: 'Asia Pacific', sales: '$920,000', growth: '+22%', performance: 94 },
  { name: 'Latin America', sales: '$310,000', growth: '-2%', performance: 45 },
];

export default function Sales() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-on-surface">Sales Performance</h1>
        <p className="text-sm text-on-surface-variant">Global sales metrics and regional performance tracking.</p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
        {[
          { label: 'Q3 Pipeline', value: '$8.4M', icon: TrendingUp, color: 'text-primary' },
          { label: 'Target Achievement', value: '78%', icon: Target, color: 'text-emerald-600' },
          { label: 'Active Leads', value: '432', icon: Users, color: 'text-blue-600' },
          { label: 'Conversion Rate', value: '14.2%', icon: BarChart3, color: 'text-amber-600' },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm"
          >
            <div className={`mb-3 rounded-lg p-2 w-fit bg-surface-container ${item.color}`}>
              <item.icon className="h-5 w-5" />
            </div>
            <div className="text-2xl font-bold text-on-surface">{item.value}</div>
            <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant opacity-40">{item.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
          <h3 className="mb-6 font-semibold text-on-surface">Regional Breakdown</h3>
          <div className="space-y-6">
            {regions.map((region) => (
              <div key={region.name} className="group cursor-pointer">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-on-surface">{region.name}</span>
                    <span className={`ml-2 text-[10px] font-bold ${
                      region.growth.startsWith('+') ? 'text-emerald-600' : 'text-error'
                    }`}>
                      {region.growth}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-on-surface">{region.sales}</span>
                </div>
                <div className="relative h-2 w-full rounded-full bg-surface-container">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${region.performance}%` }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
          <h3 className="mb-6 font-semibold text-on-surface">Top Sales Representatives</h3>
          <div className="space-y-4">
            {[
              { name: 'Alice Johnson', sales: '$420k', target: '105%', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100' },
              { name: 'Robert Smith', sales: '$385k', target: '98%', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100' },
              { name: 'Wei Zhang', sales: '$350k', target: '112%', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100' },
            ].map((rep) => (
              <div key={rep.name} className="flex items-center gap-4 rounded-lg p-2 hover:bg-surface-container-low transition-colors">
                <img src={rep.img} alt={rep.name} className="h-10 w-10 rounded-full object-cover border border-outline-variant" referrerPolicy="no-referrer" />
                <div className="flex-1">
                  <div className="text-sm font-bold text-on-surface">{rep.name}</div>
                  <div className="text-[10px] uppercase font-bold text-on-surface-variant opacity-40">Regional Lead</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-primary">{rep.sales}</div>
                  <div className="text-[10px] font-bold text-emerald-600">{rep.target} vs Target</div>
                </div>
                <ChevronRight className="h-4 w-4 text-on-surface-variant opacity-40" />
              </div>
            ))}
          </div>
          <button className="mt-6 w-full rounded-md py-2 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary/5 transition-colors">
            View All Performance
          </button>
        </div>
      </div>
    </div>
  );
}
