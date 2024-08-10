<template>
    <div class="input-container">
      <input
        type="text"
        v-model="name"
        placeholder="Enter your name"
        required
      />
      <select v-model="selectedStatus">
        <option value="Present">Present</option>
        <option value="Late">Late</option>
        <option value="Absent">Absent</option>
      </select>
      <button @click="handleSubmit">Submit</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useAttendance } from '~/composables/useAttendance'
  
  const name = ref('')
  const selectedStatus = ref('Present')
  const { addStudent } = useAttendance()
  
  const handleSubmit = () => {
    if (name.value.trim()) {
      addStudent(name.value, selectedStatus.value)
      name.value = ''
      selectedStatus.value = 'Present'
    }
  }
  </script>
  
  <style>
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input, select {
    width: 80%;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #42b883;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  