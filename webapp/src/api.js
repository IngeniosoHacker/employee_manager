const API_BASE = '/api';

export async function fetchEmployees() {
  try {
    const response = await fetch('http://localhost:3000/api/employees/listemp');
    if (!response.ok) {
      throw new Error('Failed to fetch employees');
    }
    const employees = await response.json();
    return employees;
  } catch (error) {
    console.error('Error fetching employees:', error);
    return [];
  }
}

export const saveEmployee = async (employee) => {
    const response = await fetch(`${API_BASE}/employees/saveemp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
    });
    return response.json();
};

export const updateEmployee = async (id, employee) => {
    const response = await fetch(`${API_BASE}/employees/updateemp:${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
    });
    return response.json();
};

export const deleteEmployee = async (id) => {
    const response = await fetch(`${API_BASE}/employees/deleteemp:${id}`, {
        method: 'DELETE',
    });
    return response.json();
};

export const fetchDepartments = async () => {
    const response = await fetch(`${API_BASE}/departments/listdeps`);
    return response.json();
};

export const saveDepartment = async (department) => {
    const response = await fetch(`${API_BASE}/departments/newdep`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(department),
    });
    return response.json();
};

export const updateDepartment = async (id, department) => {
    const response = await fetch(`${API_BASE}/departments/updatedep:${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(department),
    });
    return response.json();
};

export const deleteDepartment = async (id) => {
    const response = await fetch(`${API_BASE}/departments/deletedep:${id}`, {
        method: 'DELETE',
    });
    return response.json();
};

