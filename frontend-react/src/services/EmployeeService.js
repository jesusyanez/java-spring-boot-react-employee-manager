import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/employee";

class EmployeeService {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL + "/all");
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL + "/add", employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_BASE_REST_API_URL + "/find/" + employeeId);
  }

  updateEmployee(employeeId, employee) {
    return axios.put(
      EMPLOYEE_BASE_REST_API_URL + "/update/" + employeeId,
      employee
    );
  }

  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/delete/" + employeeId);
  }
}

export default new EmployeeService();
