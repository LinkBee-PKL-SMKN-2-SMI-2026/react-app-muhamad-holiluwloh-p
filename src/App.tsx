import EmployeeCard from "./components/EmployeeCard"

const employees = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Frontend Developer",
    isActive: true,
    department: "IT",
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "HR Specialist",
    isActive: true,
    department: "HR",
  },
  {
    id: 3,
    name: "Agus Pratama",
    role: "Financial Analyst",
    isActive: false,
    department: "Finance",
  },
  {
    id: 4,
    name: "Dina Lestari",
    role: "Marketing Specialist",
    isActive: true,
    department: "Marketing",
  },
  {
    id: 5,
    name: "Rizky Maulana",
    role: "Operations Manager",
    isActive: false,
    department: "Operations",
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Employee List
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
            isActive={employee.isActive}
            department={employee.department}
          />
        ))}
      </div>
    </div>
  )
}