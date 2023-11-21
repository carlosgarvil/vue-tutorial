<script setup>
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/step4">Event Listeners</router-link>
      <router-link to="/step5">Form bindings</router-link>
      <router-link to="/step6">Conditional rendering</router-link>
      <router-link to="/step7">List rendering</router-link>
      <router-link to="/step8">Computed Property</router-link>
      <router-link to="/step9">Lifecycle and Template Refs</router-link>
      <router-link to="/step10">Watchers</router-link>
      <router-link to="/step11">Components</router-link>
      <router-link to="/step12">Props</router-link>
      <router-link to="/step13">Emits</router-link>
      <router-link to="/step14">Slots</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border: 1px solid lightsalmon;
  gap: 1rem;
  padding: 10px;
}
nav > a{
  padding: 5px ;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    grid-column: 1 / span 2;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
