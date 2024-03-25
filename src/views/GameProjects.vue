<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 30px;">
      The following are some stuff I've made or heavily contributed to.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      There are other small games in <a target="_blank" href="https://github.com/PabloGlezAlv">my GitHub</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
