<script setup lang="ts">
import { DataService } from "@/services/dataService";
import { onMounted, ref } from "vue";
import type { GuestType } from "./types/guestType";


const dataService = new DataService();
const data = ref<GuestType[]>([]);
const loadingData = ref(false);

const loadGuestData = async () => {
  try {
    data.value = await dataService.getData();
    loadingData.value = false;
  } catch (error) {
    alert(error);
    loadingData.value = false;
  }
}

onMounted(() => {
  loadGuestData();
});

</script>
<template>
  <div class="main">
    <div class="main-header">
      <h1 class="main-header-title">
        EBD 7-8 Anos
      </h1>
      <p class="main-header-subtitle">
        As Crianças da Bíblia
      </p>
    </div>
    <div class="main-body">
      <div class="nesn-card ns-shadow ns-rounded">
        <div class="nesn-medal ns-gold-medal">
          <p class="text-title">1º</p>
        </div>
      </div>
      <div class="nesn-card ns-shadow ns-rounded">
        <div class="nesn-medal ns-silver-medal">
          <p class="text-title">2º</p>
        </div>
      </div>
      <div class="nesn-card ns-shadow ns-rounded">
        <div class="nesn-medal ns-bronze-medal">
          <p class="text-title">3º</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &-header {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
}
</style>