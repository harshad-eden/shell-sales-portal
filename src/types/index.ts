// Local types for Sales Portal

export interface Quote {
  id: string
  customerId: string
  customerName: string
  policyType: string
  premium: number
  status: 'draft' | 'pending' | 'approved' | 'rejected'
  createdAt: string
  expiresAt: string
}

export interface Policy {
  id: string
  customerId: string
  customerName: string
  policyType: string
  premium: number
  status: 'active' | 'expired' | 'cancelled'
  startDate: string
  endDate: string
  coverage: {
    type: string
    amount: number
  }[]
}