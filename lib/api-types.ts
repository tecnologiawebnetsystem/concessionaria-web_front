// Tipos para API

// Resposta padrão da API
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Parâmetros de paginação
export interface PaginationParams {
  page?: number
  limit?: number
  sort?: string
  order?: "asc" | "desc"
}

// Parâmetros de filtro para veículos
export interface VehicleFilterParams extends PaginationParams {
  brand?: string
  model?: string
  yearMin?: string
  yearMax?: string
  priceMin?: number
  priceMax?: number
  mileageMin?: number
  mileageMax?: number
  fuel?: string
  transmission?: string
  status?: "available" | "reserved" | "sold"
  dealershipId?: string
}

// Parâmetros de filtro para vendas
export interface SaleFilterParams extends PaginationParams {
  customerId?: string
  sellerId?: string
  vehicleId?: string
  dealershipId?: string
  dateStart?: string
  dateEnd?: string
  status?: "pending" | "processing" | "completed" | "cancelled"
}

// Parâmetros de filtro para funcionários
export interface EmployeeFilterParams extends PaginationParams {
  name?: string
  role?: string
  department?: string
  dealershipId?: string
  status?: "active" | "inactive"
}

// Parâmetros de filtro para clientes
export interface CustomerFilterParams extends PaginationParams {
  name?: string
  email?: string
  phone?: string
  dealershipId?: string
  status?: "active" | "inactive"
}

// Resposta paginada
export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

