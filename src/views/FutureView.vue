<template>
  <div>
    <Future msg="Welcome to Future"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Future from '@/components/Future.vue'

export default {
  name: 'FutureView',
  components: {
    Future
  }
}
</script>
