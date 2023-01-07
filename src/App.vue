<template>
  <div class="icon-wrapper">
    <CpuIcon :health="health.cpuHealth"></CpuIcon>
    <HddIcon :health="health.hddHealth"></HddIcon>
    <RamIcon :health="health.ramHealth"></RamIcon>
  </div>
  <div class="control-wrapper">
    <label class="control-label" for="cpu-input"
      >CPU toggle
      <input
        v-model="health.cpuHealth"
        type="checkbox"
        name="cpu"
        id="cpu-input"
      />
    </label>
    <label class="control-label" for="hdd-input"
      >HDD toggle
      <input
        v-model="health.hddHealth"
        type="checkbox"
        name="hdd"
        id="hdd-input"
      />
    </label>
    <label class="control-label" for="ram-input"
      >RAM toggle
      <input
        v-model="health.ramHealth"
        type="checkbox"
        name="ram"
        id="ram-input"
      />
    </label>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import CpuIcon from "./components/CpuIcon.vue";
import HddIcon from "./components/HddIcon.vue";
import RamIcon from "./components/RamIcon.vue";
const health = reactive({
  cpuHealth: true,
  hddHealth: true,
  ramHealth: true,
});
</script>

<style scoped>
.icon-wrapper,
.control-wrapper {
  margin: 0 auto;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}
.control-label {
  cursor: pointer;
}
</style>
