<script setup lang="ts">
import { VPdfViewer } from "@vue-pdf-viewer/viewer";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";
const pdfSource =
  "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf";
</script>
<template>
  <!-- PDF works with client side only -->
  <ClientOnly>
    <div :style="{ width: '1028px', height: '700px' }">
      <VPdfViewer :workerUrl="pdfWorker" :src="pdfSource" />
    </div>
  </ClientOnly>
</template>
