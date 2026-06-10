<script setup lang="ts">
import { DataService } from "@/services/dataService";
import { onMounted, ref } from "vue";
import type { GuestType } from "./types/guestType";


const dataService = new DataService();
const guestData = ref<GuestType[]>([]);
const loadingData = ref(false);

const loadGuestData = async () => {
  loadingData.value = true;
  try {
    const data = await dataService.getData();
    guestData.value = data.sort((a, b) => b.Total - a.Total);
  } catch (error) {
    alert(error);
  } finally {
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
    <div class="main-body" v-if="!loadingData && guestData.length > 0">
      <div v-if="guestData[0]" class="nesn-card ns-shadow ns-rounded nesn-cardlist">
        <div class="nesn-medal ns-gold-medal">
          <p class="text-title">1º</p>
        </div>
        <div class="nesn-cardlist-name">
          <h3>
            {{ guestData[0].Nome }}
          </h3>
          <p>{{ guestData[0].Total }} Pontos</p>
        </div>
      </div>
      <div v-if="guestData[1]" class="nesn-card ns-shadow ns-rounded nesn-cardlist">
        <div class="nesn-medal ns-silver-medal">
          <p class="text-title">2º</p>
        </div>
        <div class="nesn-cardlist-name">
          <h3>
            {{ guestData[1].Nome }}
          </h3>
          <p>{{ guestData[1].Total }} Pontos</p>
        </div>
      </div>
      <div v-if="guestData[2]" class="nesn-card ns-shadow ns-rounded nesn-cardlist">
        <div class="nesn-medal ns-bronze-medal">
          <p class="text-title">3º</p>
        </div>
        <div class="nesn-cardlist-name">
          <h3>
            {{ guestData[2].Nome }}
          </h3>
          <p>{{ guestData[2].Total }} Pontos</p>
        </div>
      </div>
      <div v-if="guestData.length > 3" v-for="(guest, index) in guestData.slice(3)" :key="index"
        class="nesn-card ns-rounded nesn-cardlist">
        <div class="nesn-cardlist-name">
          <p class="text-title">{{ guest.Nome }}</p>
          <p>{{ guest.Total }} Pontos</p>
        </div>
      </div>
    </div>
    <div v-else-if="loadingData" class="main-body">
      <h2>Carregando...</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 25vh;
  gap: 20px;

  &-header {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
}

.nesn {
  &-cardlist {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 10px;
  }
}
</style>