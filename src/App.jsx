import { useState, useEffect } from 'react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const trafficData = [
  { time: '9AM', visitors: 120, conversions: 8 },
  { time: '10AM', visitors: 280, conversions: 22 },
  { time: '11AM', visitors: 420, conversions: 35 },
  { time: '12PM', visitors: 380, conversions: 28 },
  { time: '1PM', visitors: 310, conversions: 24 },
  { time: '2PM', visitors: 450, conversions: 38 },
  { time: '3PM', visitors: 520, conversions: 42 },
  { time: '4PM', visitors: 480, conversions: 36 },
  { time: '5PM', visitors: 350, conversions: 25 },
  { time: '6PM', visitors: 220, conversions: 15 },
]
const revenueData = [
  { month: 'Jan', revenue: 12400 },
  { month: 'Feb', revenue: 15800 },
  { month: 'Mar', revenue: 14200 },
  { month: 'Apr', revenue: 18600 },
  { month: 'May', revenue: 22100 },
  { month: 'Jun', revenue: 19800 },
  { month: 'Jul', revenue: 24500 },
  { month: 'Aug', revenue: 28200 },
]
const topPages = [
  { page: '/products', views: 12840, bounce: '32%' },
  { page: '/pricing', views: 8420, bounce: '28%' },
  { page: '/about', views: 6230, bounce: '45%' },
  { page: '/blog/react-tips', views: 5810, bounce: '22%' },
  { page: '/contact', views: 4120, bounce: '38%' },
  { page: '/docs/getting-started', views: 3890, bounce: '18%' },
]
export default function App() {
  const [activeVisitors, setActiveVisitors] = useState(47)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVisitors(prev => Math.max(20, prev + Math.floor(Math.random()*5) - 2))
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="min-h-screen bg-teal-50/30">
      <header className="bg-white border-b border-teal-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">BP</div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">BizPulse</h1>
              <p className="text-xs text-slate-400">Business Analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-semibold text-teal-700">
              <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>{activeVisitors} online
            </span>
            <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-xs font-bold text-teal-600">A</div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <div className="rounded-2xl bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 p-8 text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/3 translate-x-1/4"></div>
          <h2 className="text-2xl font-bold">Business Intelligence Dashboard</h2>
          <p className="mt-2 text-teal-100 max-w-lg text-sm">Monitor your business metrics in real-time. Track visitors, revenue, conversions, and user engagement from one unified view.</p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-semibold">📈 Traffic Analytics</span>
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-semibold">💰 Revenue Tracking</span>
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-semibold">🎯 Conversion Rates</span>
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-semibold">🌍 Geo Insights</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-teal-100 p-5 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Visitors</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">24,831</p>
            <p className="mt-1 text-xs text-teal-600 font-semibold">+18% from last month</p>
          </div>
          <div className="bg-white rounded-xl border border-teal-100 p-5 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Revenue</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">$28,200</p>
            <p className="mt-1 text-xs text-teal-600 font-semibold">+24% from last month</p>
          </div>
          <div className="bg-white rounded-xl border border-teal-100 p-5 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Conversion Rate</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">3.8%</p>
            <p className="mt-1 text-xs text-teal-600 font-semibold">+0.4% from last month</p>
          </div>
          <div className="bg-white rounded-xl border border-teal-100 p-5 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Avg Session</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">4m 32s</p>
            <p className="mt-1 text-xs text-teal-600 font-semibold">+12% engagement</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-teal-100 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900">Today's Traffic</h3>
            <p className="text-xs text-slate-400 mt-1">Visitors by hour</p>
            <div style={{width:'100%',height:'250px'}} className="mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="time" tick={{fill:'#64748b',fontSize:11}} />
                  <YAxis tick={{fill:'#64748b',fontSize:11}} />
                  <Tooltip contentStyle={{borderRadius:'8px',border:'1px solid #99f6e4'}} />
                  <Area type="monotone" dataKey="visitors" stroke="#0d9488" fill="#ccfbf1" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-teal-100 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900">Monthly Revenue</h3>
            <p className="text-xs text-slate-400 mt-1">Revenue trend (USD)</p>
            <div style={{width:'100%',height:'250px'}} className="mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" tick={{fill:'#64748b',fontSize:11}} />
                  <YAxis tick={{fill:'#64748b',fontSize:11}} tickFormatter={v=>'$'+(v/1000).toFixed(0)+'k'} />
                  <Tooltip contentStyle={{borderRadius:'8px',border:'1px solid #99f6e4'}} formatter={v=>'$'+v.toLocaleString()} />
                  <Bar dataKey="revenue" fill="#0d9488" radius={[4,4,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-teal-100 shadow-sm">
          <div className="p-6 border-b border-teal-50">
            <h3 className="text-sm font-bold text-slate-900">Top Pages</h3>
            <p className="text-xs text-slate-400 mt-1">Most visited pages this month</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs uppercase text-slate-400 tracking-wider">
                <tr>
                  <th className="text-left px-6 py-3 border-b border-teal-50">Page</th>
                  <th className="text-left px-6 py-3 border-b border-teal-50">Views</th>
                  <th className="text-left px-6 py-3 border-b border-teal-50">Bounce Rate</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map(page=>(
                  <tr key={page.page} className="hover:bg-teal-50/50 transition-colors">
                    <td className="px-6 py-3.5 font-mono text-teal-700 font-medium">{page.page}</td>
                    <td className="px-6 py-3.5 font-bold text-slate-800">{page.views.toLocaleString()}</td>
                    <td className="px-6 py-3.5 text-slate-500">{page.bounce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <footer className="text-center text-xs text-slate-400 py-4 border-t border-teal-100">
          BizPulse — Business Analytics Platform • © 2025 aiStreams LLC
        </footer>
      </main>
    </div>
  )
}
