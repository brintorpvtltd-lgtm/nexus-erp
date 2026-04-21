import { motion } from 'motion/react';
import { Package, AlertCircle, TrendingUp, Search } from 'lucide-react';

const inventoryItems = [
  { name: 'Enterprise Server X1', category: 'Hardware', stock: 12, value: '$4,500', status: 'In Stock' },
  { name: 'Network Switch L3', category: 'Hardware', stock: 2, value: '$1,200', status: 'Low Stock' },
  { name: 'Security License Pro', category: 'Software', stock: 150, value: '$50', status: 'In Stock' },
  { name: 'Backup Power Supply', category: 'Power', stock: 0, value: '$800', status: 'Out of Stock' },
  { name: 'Workstation Hub', category: 'Desktop', stock: 45, value: '$300', status: 'In Stock' },
];

export default function Inventory() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-on-surface">Inventory Management</h1>
          <p className="text-sm text-on-surface-variant">Track hardware and software assets across all locations.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search items..." 
            className="h-10 w-64 rounded-md border border-outline-variant bg-surface-container-lowest pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-8">
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant opacity-40 mb-1">Total Assets</div>
            <div className="text-2xl font-bold text-on-surface">1,482</div>
          </div>
          <div className="rounded-lg bg-surface-container p-3 text-primary">
            <Package className="h-6 w-6" />
          </div>
        </div>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant opacity-40 mb-1">Critical Alerts</div>
            <div className="text-2xl font-bold text-error">14</div>
          </div>
          <div className="rounded-lg bg-error-container p-3 text-on-error-container">
            <AlertCircle className="h-6 w-6" />
          </div>
        </div>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant opacity-40 mb-1">Asset Value</div>
            <div className="text-2xl font-bold text-on-surface">$2.4M</div>
          </div>
          <div className="rounded-lg bg-emerald-100 p-3 text-emerald-600">
            <TrendingUp className="h-6 w-6" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-60">Item Name</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-60">Category</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-60">Stock</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-60">Unit Value</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-60">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {inventoryItems.map((item, i) => (
              <motion.tr 
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="hover:bg-surface-container-low transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-on-surface">{item.name}</td>
                <td className="px-6 py-4 text-sm text-on-surface-variant opacity-70">{item.category}</td>
                <td className="px-6 py-4 text-sm font-bold text-on-surface">{item.stock}</td>
                <td className="px-6 py-4 text-sm text-on-surface">{item.value}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    item.status === 'In Stock' ? 'text-emerald-600' :
                    item.status === 'Low Stock' ? 'text-amber-600' : 'text-error'
                  }`}>
                    <div className={`h-1.5 w-1.5 rounded-full ${
                      item.status === 'In Stock' ? 'bg-emerald-600' :
                      item.status === 'Low Stock' ? 'bg-amber-600' : 'bg-error'
                    }`} />
                    {item.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
