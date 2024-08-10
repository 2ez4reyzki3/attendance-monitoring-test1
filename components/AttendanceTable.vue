<template>
  <table class="attendance-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{ student.name }}</td>
        <td>{{ student.date }}</td>
        <td>{{ student.time }}</td>
        <td>{{ student.status }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useAttendance } from '~/composables/useAttendance'

const { students } = useAttendance()
</script>

<style>
.attendance-table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

.attendance-table th, .attendance-table td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
}
</style>
