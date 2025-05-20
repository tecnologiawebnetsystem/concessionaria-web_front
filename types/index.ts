// Tipos para veículos
export interface Vehicle {
  id: string
  brand: string
  model: string
  year: string
  color: string
  price: number
  priceFormatted: string
  mileage: number
  mileageFormatted: string
  fuel: string
  transmission: string
  features: string[]
  images: string[]
  status: "available" | "reserved" | "sold"
  statusFormatted: string
  dealershipId: string
  createdAt: Date
  updatedAt: Date
}

// Tipos para usuários
export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "manager" | "salesperson" | "customer"
  dealershipId?: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

// Tipos para concessionárias
export interface Dealership {
  id: string
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  phone: string
  email: string
  website?: string
  logo?: string
  description?: string
  createdAt: Date
  updatedAt: Date
}

// Tipos para vendas
export interface Sale {
  id: string
  vehicleId: string
  vehicle: Vehicle
  customerId: string
  customer: User
  sellerId: string
  seller: User
  dealershipId: string
  dealership: Dealership
  price: number
  priceFormatted: string
  date: Date
  dateFormatted: string
  paymentMethod: string
  status: "pending" | "processing" | "completed" | "cancelled"
  statusFormatted: string
  createdAt: Date
  updatedAt: Date
}

// Tipos para funcionários
export interface Employee {
  id: string
  userId: string
  user: User
  dealershipId: string
  dealership: Dealership
  role: "manager" | "salesperson" | "mechanic" | "receptionist"
  department: string
  hireDate: Date
  salary: number
  status: "active" | "inactive"
  createdAt: Date
  updatedAt: Date
}

// Tipos para clientes
export interface Customer {
  id: string
  userId: string
  user: User
  phone: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  document?: string
  birthDate?: Date
  lastPurchase?: Date
  status: "active" | "inactive"
  createdAt: Date
  updatedAt: Date
}

