<script setup lang="ts">
    import Board from '../domain/entity/Board';
import Card from '../domain/entity/Card';
import Column from '../domain/entity/Column';

    defineProps({
        board: {
            type: Board,
            required: true
        },
        card: {
            type: Card,
            required: true
        },
        column: {
            type: Column,
            required: true
        }
    })

</script>

<template>
    <div 
        class="card"
        draggable="true" 
        @dragstart="board.selectCard(column, card)" 
        @dragend="board.resetCard()"
        @dragover="board.swap(card)"
    >
        {{ card.title }} <span @click="column.deleteCard(card)">(x)</span>
        <br/>
        <div class="estimative" v-show="column.hasEstimative">
          <span class="btn-estimative" @click="card.decreaseEstimative()">-</span>{{ card.estimative }} <span class="btn-estimative" @click="card.increaseEstimative()">+</span>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 100px;
    background-color: #fff;
    margin-bottom: 5px;
    border: 1px solid #000;
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