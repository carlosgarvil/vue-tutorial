<script>
export default {
  props: {
    msg: String
  }
}
</script>

<template>
  <h2>{{ msg || 'No props passed yet' }} (in Child template)</h2>
</template>