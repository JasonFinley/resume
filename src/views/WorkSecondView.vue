<template>
  <div>
    <WorkSecond msg="Welcome to Second Work"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkSecond from '@/components/WorkSecond.vue'

export default {
  name: 'WorkSecondView',
  components: {
    WorkSecond
  }
}
</script>
