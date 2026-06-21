'use client'

import React from 'react'
import {
  FileText, Clock, CheckCircle2, TrendingUp, Plus, Search, Bell, ArrowRight
} from 'lucide-react'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const stats = [
  { label: 'Active Cases', value: '3', icon: FileText, color: 'text-[#1A3A8F]', bg: 'bg-[#1A3A8F]/10' },
  { label: 'Pending Review', value: '1', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { label: 'Completed', value: '7', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Success Rate', value: '100%', icon: TrendingUp, color: 'text-[#C9A227]', bg: 'bg-[#C9A227]/10' },
]

const recentCases = [
  { id: 'SG-2024-00123', service: 'Work Permit', country: 'Germany', status: 'in_progress' as const, date: '12 Jan 2024' },
  { id: 'SG-2024-00098', service: 'Study Abroad', country: 'United Kingdom', status: 'completed' as const, date: '5 Jan 2024' },
  { id: 'SG-2023-00887', service: 'Visit Visa', country: 'France', status: 'completed' as const, date: '28 Nov 2023' },
  { id: 'SG-2024-00211', service: 'EU Employment', country: 'Netherlands', status: 'pending' as const, date: '18 Jan 2024' },
]

const statusBadge = {
  pending: 'warning' as const,
  in_progress: 'primary' as const,
  completed: 'success' as const,
  rejected: 'error' as const,
}

const statusLabel = {
  pending: 'Pending',
  in_progress: 'In Progress',
  completed: 'Completed',
  rejected: 'Rejected',
}

const quickActions = [
  { label: 'New Case', icon: Plus, href: '/contact', desc: 'Start a new application' },
  { label: 'Track Case', icon: Search, href: '/track', desc: 'Check case status' },
  { label: 'Ask NORIA', icon: Bell, href: '/noria', desc: 'Get AI guidance' },
]

export default function DashboardPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-10">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-[28px] leading-[36px] font-extrabold text-[#202124]">Dashboard</h1>
            <p className="text-sm text-[#5F6368] mt-1">Welcome back. Here is an overview of your cases.</p>
          </div>
          <Link href="/contact">
            <Button variant="primary" size="md">
              <Plus size={16} /> New Case
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map(({ label, value, icon: Icon, color, bg }) => (
            <Card key={label} className="p-5">
              <div className={`w-11 h-11 rounded-2xl ${bg} flex items-center justify-center mb-4`}>
                <Icon size={20} className={color} />
              </div>
              <p className="text-2xl font-extrabold text-[#202124]">{value}</p>
              <p className="text-xs text-[#5F6368] mt-0.5">{label}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent cases */}
          <div className="lg:col-span-2">
            <Card className="p-0 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#DADCE0]">
                <h2 className="font-bold text-[#202124]">Recent Cases</h2>
                <Link href="/track" className="text-[#1A3A8F] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  View all <ArrowRight size={14} />
                </Link>
              </div>
              <div className="divide-y divide-[#DADCE0]">
                {recentCases.map((c) => (
                  <div key={c.id} className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="text-sm font-semibold text-[#202124]">{c.id}</p>
                      <p className="text-xs text-[#5F6368] mt-0.5">{c.service} — {c.country}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={statusBadge[c.status]}>{statusLabel[c.status]}</Badge>
                      <p className="text-xs text-[#9AA0A6] mt-1.5">{c.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick actions */}
          <div>
            <h2 className="font-bold text-[#202124] mb-4 px-1">Quick Actions</h2>
            <div className="space-y-3">
              {quickActions.map(({ label, icon: Icon, href, desc }) => (
                <Link key={label} href={href}>
                  <Card className="flex items-center gap-4 p-5 hover:border-[#1A3A8F]/30 border border-transparent transition-colors">
                    <div className="w-11 h-11 rounded-2xl bg-[#1A3A8F]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[#1A3A8F]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#202124] text-sm">{label}</p>
                      <p className="text-xs text-[#5F6368]">{desc}</p>
                    </div>
                    <ArrowRight size={16} className="text-[#DADCE0] ml-auto" />
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
