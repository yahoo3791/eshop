<template>
  <div class="position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>
<script>
import ToastMessages from '@/components/ToastMessages.vue';
import emitter from '@/methods/emitter';

export default {
  components: { ToastMessages },
  provide() {
    return { emitter };
  },
};
</script>
