import { ref } from 'vue'

const students = ref([])

export function useAttendance() {
  const addStudent = (name, status) => {
    const now = new Date()
    const student = {
      id: Date.now(),
      name,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      status
    }
    students.value.push(student)
  }

  return {
    students,
    addStudent,
  }
}
