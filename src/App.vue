<script setup lang="ts">
  import { inject, onMounted, reactive, ref } from 'vue'
  import Card from './domain/entity/Card'
  import Board from './domain/entity/Board';
  import ServiceFactory from './factory/Service.factory'

  const state = reactive({
    board: new Board('')
  })
  const columnName = ref("")
  const newCard = reactive<Card>(new Card("",0))

  onMounted(async () => {
    const serviceFactory: ServiceFactory = inject("serviceFactory")!
    const board = await serviceFactory.createBoardService().getBoardById('1')
    state.board = board

  })

</script>

<template>
  <h1>{{ state.board.name }}</h1>
  {{ state.board.getEstimative() }}
  <br/>
  <div class="column" v-for="column in state.board.columns">
    {{  column.name }} <span @click="state.board.deleteColumn(column)">(X)</span>
    <br/>
    <div v-if="column.hasEstimative">
      {{  column.getEstimative() }}
    </div>
    <hr/>
    <div class="card" v-for="card in column.cards">
      {{ card.title }} <span @click="column.deleteCard(card)">(x)</span>
      <br/>
      <div class="estimative" v-show="column.hasEstimative">
        <span class="btn-estimative" @click="card.decreaseEstimative()">-</span>{{ card.estimative }} <span class="btn-estimative" @click="card.increaseEstimative()">+</span>
      </div>
    </div>
    <div class="new-card">
      <input type="text" v-model="newCard.title" @keyup.enter="column.addCard(newCard.title, 0)" placeholder="Titlte" />
    </div>
  </div>
  <br/>
  <input type="text" v-model="columnName" />
  <button @click="state.board.addColumn(columnName)">Add</button>
</template>

<style scoped>
  .column {
    display: inline-block;
    width: 110px;
    background-color: #eee;
    min-height: 200px;
    border: 1px solid #000;
    text-align: center;
    font-size: 14px;
    margin-right: 1px;
    vertical-align: top;
    padding: 5px;
  }
  .card {
    width: 100px;
    background-color: #fff;
    margin-bottom: 5px;
    border: 1px solid #000;
  }
  .new-card {
    width: 100px;
    background-color: #fff;
    margin-bottom: 5px;
    border: 1px dashed #000;
  }

  .new-card input {
    max-width: 100%;
  }

  .btn-estimative {
    border-radius: 100%;
    padding: 6px;
    font-size: 24px;
    margin: 4px;
    background-color: #000;
    color: #fff;
    width: 12px;
    height: 12px;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .estimative {
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
