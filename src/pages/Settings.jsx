import React, { useState } from 'react'
import EditProfile from '../components/settings/EditProfile'
import Preference from '../components/settings/Preferences'
import Security from '../components/settings/Security'
import Layout from '../layout/Layout'

const tabs = ['Edit Profile', 'Preference', 'Security']

export default function Settings() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <Layout>
      <div >
        <h1 className="text-2xl font-semibold text-[#2E3360] mb-6">Settings</h1>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium ${activeTab === tab
                  ? 'text-[#2E3360] border-b-2 border-[#2E3360]'
                  : 'text-[#9DA2C6]'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'Edit Profile' && <EditProfile />}
        {activeTab === 'Preference' && <Preference />}
        {activeTab === 'Security' && <Security />}
      </div>
    </Layout>
  )
}
