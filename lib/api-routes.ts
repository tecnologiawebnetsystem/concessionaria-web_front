// Rotas da API

// Base URL
export const API_BASE_URL = "/api"

// Rotas de autenticação
export const AUTH_ROUTES = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  REFRESH_TOKEN: `${API_BASE_URL}/auth/refresh-token`,
  FORGOT_PASSWORD: `${API_BASE_URL}/auth/forgot-password`,
  RESET_PASSWORD: `${API_BASE_URL}/auth/reset-password`,
  ME: `${API_BASE_URL}/auth/me`,
}

// Rotas de veículos
export const VEHICLE_ROUTES = {
  BASE: `${API_BASE_URL}/vehicles`,
  GET_ALL: `${API_BASE_URL}/vehicles`,
  GET_BY_ID: (id: string) => `${API_BASE_URL}/vehicles/${id}`,
  CREATE: `${API_BASE_URL}/vehicles`,
  UPDATE: (id: string) => `${API_BASE_URL}/vehicles/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/vehicles/${id}`,
  UPLOAD_IMAGE: (id: string) => `${API_BASE_URL}/vehicles/${id}/images`,
  DELETE_IMAGE: (id: string, imageId: string) => `${API_BASE_URL}/vehicles/${id}/images/${imageId}`,
}

// Rotas de concessionárias
export const DEALERSHIP_ROUTES = {
  BASE: `${API_BASE_URL}/dealerships`,
  GET_ALL: `${API_BASE_URL}/dealerships`,
  GET_BY_ID: (id: string) => `${API_BASE_URL}/dealerships/${id}`,
  CREATE: `${API_BASE_URL}/dealerships`,
  UPDATE: (id: string) => `${API_BASE_URL}/dealerships/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/dealerships/${id}`,
  UPLOAD_LOGO: (id: string) => `${API_BASE_URL}/dealerships/${id}/logo`,
}

// Rotas de vendas
export const SALE_ROUTES = {
  BASE: `${API_BASE_URL}/sales`,
  GET_ALL: `${API_BASE_URL}/sales`,
  GET_BY_ID: (id: string) => `${API_BASE_URL}/sales/${id}`,
  CREATE: `${API_BASE_URL}/sales`,
  UPDATE: (id: string) => `${API_BASE_URL}/sales/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/sales/${id}`,
}

// Rotas de funcionários
export const EMPLOYEE_ROUTES = {
  BASE: `${API_BASE_URL}/employees`,
  GET_ALL: `${API_BASE_URL}/employees`,
  GET_BY_ID: (id: string) => `${API_BASE_URL}/employees/${id}`,
  CREATE: `${API_BASE_URL}/employees`,
  UPDATE: (id: string) => `${API_BASE_URL}/employees/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/employees/${id}`,
}

// Rotas de clientes
export const CUSTOMER_ROUTES = {
  BASE: `${API_BASE_URL}/customers`,
  GET_ALL: `${API_BASE_URL}/customers`,
  GET_BY_ID: (id: string) => `${API_BASE_URL}/customers/${id}`,
  CREATE: `${API_BASE_URL}/customers`,
  UPDATE: (id: string) => `${API_BASE_URL}/customers/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/customers/${id}`,
}

// Rotas de usuários
export const USER_ROUTES = {
  BASE: `${API_BASE_URL}/users`,
  GET_ALL: `${API_BASE_URL}/users`,
  GET_BY_ID: (id: string) => `${API_BASE_URL}/users/${id}`,
  CREATE: `${API_BASE_URL}/users`,
  UPDATE: (id: string) => `${API_BASE_URL}/users/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/users/${id}`,
}

// Rotas de relatórios
export const REPORT_ROUTES = {
  SALES_BY_PERIOD: `${API_BASE_URL}/reports/sales-by-period`,
  SALES_BY_EMPLOYEE: `${API_BASE_URL}/reports/sales-by-employee`,
  SALES_BY_VEHICLE: `${API_BASE_URL}/reports/sales-by-vehicle`,
  INVENTORY_STATUS: `${API_BASE_URL}/reports/inventory-status`,
}

// Rotas de configurações
export const SETTINGS_ROUTES = {
  GET: `${API_BASE_URL}/settings`,
  UPDATE: `${API_BASE_URL}/settings`,
}

