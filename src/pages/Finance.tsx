import { motion } from 'motion/react';
import { CreditCard, ArrowUpRight, ArrowDownRight, DollarSign, PieChart } from 'lucide-react';

const transactions = [
  { id: 'TX-901', client: 'Acme Corp', amount: '$12,450.00', status: 'Completed', date: 'Oct 12, 2023' },
  { id: 'TX-902', client: 'Global Tech', amount: '$8,200.00', status: 'Pending', date: 'Oct 11, 2023' },
  { id: 'TX-903', client: 'Nexus Inc', amount: '$43,000.00', status: 'Completed', date: 'Oct 10, 2023' },
  { id: 'TX-904', client: 'Cloud Systems', amount: '$1,500.00', status: 'Failed', date: 'Oct 09, 2023' },
  { id: 'TX-905', client: 'Starlight Co', amount: '$2,800.00', status: 'Completed', date: 'Oct 08, 2023' },
];

export default function Finance() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-on-surface">Financial Operations</h1>
        <p className="text-sm text-on-surface-variant">Account receivables, payables and cashflow monitoring.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
              <DollarSign className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-on-surface">Net Profit</h3>
          </div>
          <div className="text-3xl font-bold text-on-surface">$1,240,500.00</div>
          <div className="mt-2 flex items-center gap-1 text-xs font-bold text-emerald-600">
            <ArrowUpRight className="h-3 w-3" />
            +18.4% from last quarter
          </div>
        </div>

        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-blue-100 p-2 text-blue-600">
              <PieChart className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-on-surface">Operating Expenses</h3>
          </div>
          <div className="text-3xl font-bold text-on-surface">$430,200.00</div>
          <div className="mt-2 flex items-center gap-1 text-xs font-bold text-error">
            <ArrowDownRight className="h-3 w-3" />
            +4.2% increase
          </div>
        </div>

        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-amber-100 p-2 text-amber-600">
              <CreditCard className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-on-surface">Pending Invoices</h3>
          </div>
          <div className="text-3xl font-bold text-on-surface">$82,400.00</div>
          <div className="mt-2 text-xs font-bold text-on-surface-variant opacity-60">
            12 invoices overdue
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-outline-variant bg-surface-container-lowest overflow-hidden">
        <div className="border-b border-outline-variant p-6">
          <h3 className="font-semibold text-on-surface">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-60">ID</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-60">Client</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-60">Amount</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-60">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-60">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary">#{tx.id}</td>
                  <td className="px-6 py-4 text-sm text-on-surface">{tx.client}</td>
                  <td className="px-6 py-4 text-sm font-bold text-on-surface">{tx.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      tx.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                      tx.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-error-container text-on-error-container'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant opacity-60">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
