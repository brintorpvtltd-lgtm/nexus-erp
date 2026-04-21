import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  MoreHorizontal, 
  UserPlus
} from 'lucide-react';

const employees = [
  {
    name: 'Marcus Chen',
    role: 'Senior Cloud Engineer',
    department: 'Engineering',
    location: 'San Francisco',
    email: 'm.chen@nexus-erp.com',
    status: 'ACTIVE',
    onboarded: '2 years ago',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    name: 'Elena Rodriguez',
    role: 'VP of Marketing',
    department: 'Sales & Marketing',
    location: 'New York (HQ)',
    email: 'e.rod@nexus-erp.com',
    status: 'ACTIVE',
    onboarded: '5 years ago',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    name: 'David Sterling',
    role: 'Product Manager',
    department: 'Product Management',
    location: 'London',
    email: 'd.sterling@nexus-erp.com',
    status: 'ON LEAVE',
    onboarded: 'Returning next week',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Senior UI Designer',
    department: 'Engineering',
    location: 'Remote',
    email: 's.jenkins@nexus-erp.com',
    status: 'ACTIVE',
    onboarded: '1 year ago',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    name: 'James Wilson',
    role: 'Frontend Developer',
    department: 'Engineering',
    location: 'New York (HQ)',
    email: 'j.wilson@nexus-erp.com',
    status: 'TRAINING',
    onboarded: 'Orientation period',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    name: 'Maya Patel',
    role: 'Director of Operations',
    department: 'HR & Operations',
    location: 'London',
    email: 'm.patel@nexus-erp.com',
    status: 'ACTIVE',
    onboarded: '3 years ago',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200',
  },
];

export default function HR() {
  return (
    <div className="p-8">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-on-surface">Employee Directory</h1>
          <p className="text-sm text-on-surface-variant">Manage corporate personnel and organizational structure.</p>
        </div>
        <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-on-primary hover:bg-primary/90 transition-colors">
          <UserPlus className="h-4 w-4" />
          Hire New Employee
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-semibold text-on-surface">Filters</h3>
              <button className="text-xs font-bold text-primary hover:underline">Reset</button>
            </div>

            <div className="space-y-6">
              <div>
                <span className="mb-3 block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-70">
                  Department
                </span>
                <div className="space-y-2">
                  {[
                    { label: 'Engineering', count: 42, checked: true },
                    { label: 'Sales & Marketing', count: 28 },
                    { label: 'Product Management', count: 12, checked: true },
                    { label: 'HR & Operations', count: 8 },
                    { label: 'Customer Success', count: 15 },
                  ].map((dept) => (
                    <label key={dept.label} className="flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        checked={dept.checked}
                        className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary"
                        readOnly
                      />
                      <span className="text-sm text-on-surface">{dept.label}</span>
                      <span className="ml-auto text-xs font-medium text-on-surface-variant opacity-60">
                        {dept.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-outline-variant pt-6">
                <span className="mb-3 block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-70">
                  Office Location
                </span>
                <div className="space-y-2">
                  {[
                    { label: 'New York (HQ)', checked: true },
                    { label: 'San Francisco' },
                    { label: 'London' },
                    { label: 'Remote' },
                  ].map((loc) => (
                    <label key={loc.label} className="flex cursor-pointer items-center gap-3">
                      <input
                        type="radio"
                        name="location"
                        checked={loc.checked}
                        className="h-4 w-4 border-outline-variant text-primary focus:ring-primary"
                        readOnly
                      />
                      <span className="text-sm text-on-surface">{loc.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-outline-variant pt-6">
                <span className="mb-3 block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-70">
                  Skills
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'Python', 'Strategy', 'UI Design', 'SQL'].map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-surface-container px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {employees.map((emp) => (
              <motion.div
                key={emp.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="group rounded-xl border border-outline-variant bg-surface-container-lowest p-5 hover:border-primary transition-all duration-300"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="h-14 w-14 overflow-hidden rounded-full border border-outline-variant">
                    <img
                      src={emp.image}
                      alt={emp.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <button className="text-on-surface-variant opacity-40 hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>

                <div>
                  <h3 className="font-bold text-primary group-hover:text-primary-container transition-colors">
                    {emp.name}
                  </h3>
                  <p className="text-xs font-semibold text-on-surface-variant opacity-70">{emp.role}</p>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Building2 className="h-3.5 w-3.5 opacity-60" />
                    <span>{emp.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <MapPin className="h-3.5 w-3.5 opacity-60" />
                    <span>{emp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Mail className="h-3.5 w-3.5 opacity-60" />
                    <span>{emp.email}</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-outline-variant pt-4 flex gap-2">
                  <div className={`mt-1 h-2 w-2 rounded-full ${
                    emp.status === 'ACTIVE' ? 'bg-emerald-500' : 
                    emp.status === 'ON LEAVE' ? 'bg-amber-500' : 'bg-primary-fixed-dim'
                  }`} />
                  <div>
                    <div className={`text-[10px] font-bold uppercase tracking-wider ${
                      emp.status === 'ACTIVE' ? 'text-emerald-600' : 
                      emp.status === 'ON LEAVE' ? 'text-amber-600' : 'text-primary'
                    }`}>
                      {emp.status}
                    </div>
                    <div className="text-[10px] text-on-surface-variant opacity-60">
                      {emp.onboarded}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="text-xs text-on-surface-variant opacity-60">
              Showing 6 of 115 employees
            </div>
            <div className="flex items-center gap-1">
              <button className="flex items-center justify-center rounded border border-outline-variant px-3 py-2 text-xs font-semibold hover:bg-surface-container transition-colors">
                Previous
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded bg-primary text-xs font-bold text-on-primary">
                1
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded border border-outline-variant text-xs font-semibold hover:bg-surface-container transition-colors">
                2
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded border border-outline-variant text-xs font-semibold hover:bg-surface-container transition-colors">
                3
              </button>
              <span className="px-1 text-on-surface-variant opacity-40">...</span>
              <button className="flex h-8 w-8 items-center justify-center rounded border border-outline-variant text-xs font-semibold hover:bg-surface-container transition-colors">
                20
              </button>
              <button className="flex items-center justify-center rounded border border-outline-variant px-3 py-2 text-xs font-semibold hover:bg-surface-container transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
