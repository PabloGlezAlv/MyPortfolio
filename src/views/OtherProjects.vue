<template>
  <div>
    <h1>Other Projects</h1>

    <div style="margin-bottom: 30px;">
     Here are some projects that don't fall directly into the category of traditional video games but are related to them in some way.
    </div>
    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      There are other projects in <a target="_blank" href="https://github.com/PabloGlezAlv">my GitHub</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
