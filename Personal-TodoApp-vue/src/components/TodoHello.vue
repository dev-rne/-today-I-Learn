<template>
  <div class="hello">
    <div class="guide">
      <span class="guide-text">Nice to meet you!</span>
      <span class="guide-text">I’m going to remember your tasks.</span>
    </div>
    <div class="ask">
      What is your name?
    </div>

    <label for="user">Name</label>
    <div class="userInputbox">
      <input
        type="text"
        placeholder="Let me know your name"
        id="user-name"
        class="userInput"
        v-model="userName"
        @keypress.enter="setUserName(userName)"
      />
      <button class="helloBtn">
        <span>Enter</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      userName: '',
    };
  },
  methods: {
    ...mapMutations({
      setUserName: 'addUserName',
    }),
  },
};
</script>

<style></style>
