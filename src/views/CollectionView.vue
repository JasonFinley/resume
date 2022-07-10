<template>
  <div>
    <Collection msg="Welcome to My Collection"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Collection from '@/components/Collection.vue'

export default {
  name: 'CollectionView',
  components: {
    Collection
  }
}
</script>
