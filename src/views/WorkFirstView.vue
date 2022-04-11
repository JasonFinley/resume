<template>
  <div>
    <WorkFirst msg="Welcome to First Work"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkFirst from '@/components/WorkFirst.vue'

export default {
  name: 'WorkFirstView',
  components: {
    WorkFirst
  }
}
</script>
