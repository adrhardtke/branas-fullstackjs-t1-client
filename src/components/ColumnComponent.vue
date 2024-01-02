<script setup lang="ts">
    import { reactive } from 'vue';
import Board from '../domain/entity/Board';
    import Column from '../domain/entity/Column';
import Card from '../domain/entity/Card';

    // defineProps(["column","board"]) //forma 1

    //forma2
    // defineProps({
    //     board: Board,
    //     column: Column
    // })

    // forma3
    const props = defineProps({
        board: {
            type: Board,
            required: true
        },
        column: {
            type: Column,
            required: true
        }
    })
    console.log(props.board)

    const newCard = reactive<Card>(new Card("",0))

</script>

<template>
    <div class="column">
        {{  column.name }} <span class="delete-column" @click="board.deleteColumn(column)">(X)</span>
        <br/>
        <div v-if="column.hasEstimative">
            <span class="estimative">
                {{  column.getEstimative() }}
            </span>
        </div>
        <hr/>
        <!-- <div v-for="card in column.cards">
            <CardComponent :card="card" :column="column" />
        </div> -->
        <slot /> <!-- semelhante ao children -->
        <div class="new-card">
          <input class="new-card-input" type="text" v-model="newCard.title" @keyup.enter="board.addCard(column.name, newCard.title, 0)" placeholder="Titlte" />
        </div>
    </div>
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
  
  .new-card {
    width: 100px;
    background-color: #fff;
    margin-bottom: 5px;
    border: 1px dashed #000;
  }

  .new-card input {
    max-width: 100%;
  }

</style>
