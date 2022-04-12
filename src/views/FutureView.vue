<template>
  <div>
    <Future msg="Welcome to Second Work"/>
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
