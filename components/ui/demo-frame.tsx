"use client"

import * as React from "react"
import { Toggle } from "@/components/ui/toggle"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ToggleLeft, Radio, Info } from "lucide-react"

const DemoFrame = () => {
  const formSchema = z.object({
    username: z.string().min(2, "Username must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    // Missing role and aria-label for the container
    <div className="w-full min-h-[800px] border rounded-lg bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="p-8 border-b bg-white">
        <h2 className="text-2xl font-bold text-gray-800">Interactive Components</h2>
        <p className="text-gray-600 mt-2">Demonstration of various UI elements with accessibility issues</p>
      </div>

      <div className="p-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Toggle Button Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="mb-4">
              <ToggleLeft className="w-8 h-8 mb-2 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Toggle Controls</h3>
            </div>
            <div className="space-y-4">
              <Toggle className="w-full justify-center py-2">Toggle Button</Toggle>
              <Switch className="mx-auto" />
            </div>
          </div>

          {/* Radio Group Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <Radio className="w-8 h-8 mb-2 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Selection Options</h3>
            <RadioGroup defaultValue="option-1" className="space-y-3">
              <div className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                <RadioGroupItem value="option-1" />
                <span>First Choice</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                <RadioGroupItem value="option-2" />
                <span>Second Choice</span>
              </div>
            </RadioGroup>
          </div>

          {/* List Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Content Structure</h3>
            <div className="pl-4">
              <div className="mb-2">Main Item 1</div>
              <div className="pl-4 mb-4">
                <div className="text-gray-600">Sub Item 1.1</div>
                <div className="text-gray-600">Sub Item 1.2</div>
              </div>
              <div>Main Item 2</div>
            </div>
          </div>

          {/* Table Card - Full width on all screens */}
          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow md:col-span-2 lg:col-span-3">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Data Display</h3>
            <div className="overflow-x-auto">
              <div className="min-w-full divide-y divide-gray-200">
                <div className="bg-gray-50">
                  <div className="grid grid-cols-3 p-4 font-medium text-gray-700">
                    <div>Name</div>
                    <div>Age</div>
                    <div>Role</div>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-3 p-4 text-gray-600">
                    <div>John Smith</div>
                    <div>25</div>
                    <div>Developer</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 text-gray-600 bg-gray-50">
                    <div>Jane Doe</div>
                    <div>28</div>
                    <div>Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">User Input</h3>
            <div className="space-y-4">
              <div>
                <Input 
                  placeholder="Enter username" 
                  className="mb-2" 
                />
                <p className="text-xs text-gray-500">Minimum 2 characters required</p>
              </div>
              <div>
                <Input 
                  placeholder="Enter email" 
                  className="mb-4"
                />
              </div>
              <button 
                className="w-full py-2 px-4 rounded-lg text-white" 
                style={{ backgroundColor: 'blue' }}
              >
                Submit Form
              </button>
            </div>
          </div>

          {/* Aside Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Info</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p style={{ fontSize: '8px' }}>Supplementary content and information about the demo components.</p>
            </div>
            <div className="mt-4">
              <button style={{ cursor: 'pointer' }} className="p-2 rounded bg-gray-100">
                <Info className="w-4 h-4 text-gray-600" />
              </button>
              <a href="#" style={{ color: '#777' }} className="ml-2">Click here</a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t">
          <p style={{ color: '#999' }} className="text-center">Demo Footer © 2024</p>
        </div>
      </div>
    </div>
  )
}

export default DemoFrame