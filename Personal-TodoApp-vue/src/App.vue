<template>
  <div id="app">
    <div class="top">
      <TodoHeader />
      <div>
        <TodoTitle />
        <TodoInput />
      </div>

      <div>
        <TodoHello />
      </div>
    </div>

    <div class="bottom"></div>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoTitle from '@/components/TodoTitle.vue';
import TodoHello from '@/components/TodoHello.vue';
import TodoInput from '@/components/TodoInput.vue';

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoTitle,
    TodoHello,
    TodoInput,
  },
};
</script>

<style></style>
