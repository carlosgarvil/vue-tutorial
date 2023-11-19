<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <template #heading>Calling WelcomeItem component</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Components</template>
    WelcomeItem allows you to create a list of items with a heading and an icon.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Slots</template>
    <p>Slots are used to pass content from the parent component to the child component.</p>
  </WelcomeItem>




</template>
