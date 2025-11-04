<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content_en'));
const { data: files } = await useAsyncData('search', () => queryCollectionSearchSections('content_en'));

console.log('NAVIGATION: ', JSON.stringify(navigation.value, null, 2));
console.log('FILES:', files.value);

const searchTerm = ref('');
</script>

<template>
  <UContentSearchButton variant="subtle" />
  <UContentSearch
    v-model:search-term="searchTerm"
    :files="files"
    :navigation="navigation"
    :fuse="{ resultLimit: 42 }"
  />
</template>
