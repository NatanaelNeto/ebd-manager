<script setup lang="ts">
import { DataService } from "@/services/dataService";

const teste = import.meta.env.VITE_TEST_ENV;

const dataService = new DataService();
dataService.getData();
</script>
<template>
  <h1>{{ teste }}</h1>
</template>

<style scoped lang="sass">
</style>