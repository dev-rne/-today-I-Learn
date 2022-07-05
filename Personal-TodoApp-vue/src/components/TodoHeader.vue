<template>
  <div class="header">
    <h1 class="logo">
      My Todo
    </h1>
    <div class="date">
      {{ date }}
    </div>
  </div>
</template>

<script>
import getDate from './common/getDate';
export default {
  data() {
    return {
      date: '',
    };
  },
  created() {
    this.date = `${getDate().month}/${getDate().day}  ${getDate().week}`;
  },
};
</script>

<style></style>
