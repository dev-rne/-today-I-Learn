<template>
  <div class="title">
    <div class="title-text">
      <span title-message> Good {{ message }}, </span>
      <span
        class="title-user"
        contenteditable="true"
        @blur="handleBlur"
        @keyup.enter="handleEnter"
        ref="test"
      >
        {{ this.userName }}
      </span>
    </div>
  </div>
</template>

<script>
import getDate from '@/components/common/getDate.js';

export default {
  data() {
    return {
      message: '',
      userName: this.$store.state.userName,
    };
  },
  methods: {
    handleBlur(e) {
      const original = this.userName;
      const newName = e.target.innerText;

      if (newName !== original) {
        if (newName === '') {
          e.target.innerText = original;
        } else {
          this.$store.commit('addUserName', newName);
        }
      }
    },
    handleEnter() {
      this.$refs.test.blur();
    },
  },
  mounted() {
    this.message = getDate().now;
  },
};
</script>

<style></style>
