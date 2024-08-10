<template>
    <div class="container">
      <h1>Attendance Monitoring</h1>
      <NameInput />
      <AttendanceTable />
    </div>
  </template>
  
  <script setup>
  import NameInput from '~/components/NameInput.vue'
  import AttendanceTable from '~/components/AttendanceTable.vue'
  </script>
  
  <style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  </style>
  