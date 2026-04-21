import { 
  Building2, 
  LayoutDashboard, 
  CreditCard, 
  Package, 
  Users, 
  TrendingUp, 
  LifeBuoy, 
  LogOut, 
  Search, 
  Bell, 
  CircleHelp, 
  Settings, 
  MessageSquare 
} from 'lucide-react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <nav className="fixed left-0 top-0 hidden h-screen w-sidebar-width flex-col border-r border-outline-variant bg-surface-container-low lg:flex">
        <div className="flex items-center gap-3 px-6 py-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Building2 className="text-on-primary h-6 w-6" />
          </div>
          <div>
            <div className="text-xl font-bold tracking-tight text-primary">Nexus ERP</div>
            <div className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold opacity-70">
              Enterprise Suite
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-1">
          {[
            { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
            { icon: CreditCard, label: 'Finance', to: '/finance' },
            { icon: Package, label: 'Inventory', to: '/inventory' },
            { icon: Users, label: 'HR', to: '/hr' },
            { icon: TrendingUp, label: 'Sales', to: '/sales' },
          ].map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-l-[3px] border-primary bg-primary/10 text-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="border-t border-outline-variant py-4 space-y-1">
          <button className="flex w-full items-center gap-3 px-6 py-3 text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors text-on-surface">
            <LifeBuoy className="h-5 w-5 text-on-surface-variant" />
            Support
          </button>
          <button 
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-6 py-3 text-sm font-medium text-error hover:bg-error-container transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 lg:pl-[260px]">
        {/* Top bar */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-outline-variant bg-surface-container-lowest/80 px-8 backdrop-blur-md">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
            <input
              type="text"
              placeholder="Find people by name or skill..."
              className="h-10 w-full rounded-md bg-surface-container px-10 text-sm focus:ring-2 focus:ring-primary/20 bg-transparent border border-outline-variant"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <CircleHelp className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            <div className="ml-2 h-8 w-8 overflow-hidden rounded-full border border-outline-variant">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80"
                alt="User"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </header>

        <div className="min-h-[calc(100vh-64px)]">
          <Outlet />
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary shadow-xl hover:scale-105 active:scale-95 transition-all">
        <MessageSquare className="h-6 w-6" />
      </button>
    </div>
  );
}
