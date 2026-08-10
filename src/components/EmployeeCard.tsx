interface EmployeeProps {
  name: string
  role: string
  isActive: boolean
  department: string
}

const departmentColors: Record<string, string> = {
  IT: "border-blue-500",
  HR: "border-green-500",
  Finance: "border-yellow-500",
  Marketing: "border-pink-500",
  Operations: "border-purple-500",
}

export default function EmployeeCard({
  name,
  role,
  isActive,
  department,
}: EmployeeProps) {
  const borderColor =
    departmentColors[department] ?? "border-gray-400"

  return (
    <div className={`border-2 ${borderColor} rounded-lg p-4`}>
      <h2 className="text-xl font-bold">
        {name}
      </h2>

      <p className="text-gray-600">
        {role}
      </p>

      <p className="text-sm">
        Department: {department}
      </p>

      <span
        className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
          isActive
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {isActive ? "Active" : "Inactive"}
      </span>
    </div>
  )
}