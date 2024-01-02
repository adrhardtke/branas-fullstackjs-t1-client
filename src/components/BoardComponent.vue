<script setup lang="ts">

import { ref } from 'vue';
import Board from '../domain/entity/Board';
import ColumnComponent from './ColumnComponent.vue';
import CardComponent from './CardComponent.vue';

const columnName = ref("")

defineProps({
  board: {
    type: Board,
    required: true,
  }
})

</script>

<template>
  <h1>{{ board.name }}</h1>
  <h3>{{  $i18n.translate('boards') }}</h3>
  <div>
    <span id="estimative">
      {{ board.getEstimative() }}
    </span>
  </div>
  <br/>
  <ColumnComponent v-for="column in board.columns" :column="column" :board="board" @dragover="board.moveTo(column)">
    <div v-for="card in column.cards">
      <CardComponent :card="card" :column="column" :board="board" />
    </div>
  </ColumnComponent>
  <br/>
  <input id="new-column-input" type="text" v-model="columnName" />
  <button id="new-column-button" @click="board.addColumn(undefined, columnName)">Add</button>
</template>

<style scoped>
  

</style>
