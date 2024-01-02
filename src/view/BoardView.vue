<script setup lang="ts">
  import BoardComponent from '../components/BoardComponent.vue'
  import Board from '../domain/entity/Board';
  import { useRoute } from 'vue-router'
  import { inject, onMounted, reactive } from 'vue'
import ServiceFactory from '../factory/Service.factory';
import DomainEvent from '../event/DomainEvent';

  const state = reactive({
    board: new Board('')
  })

  const route = useRoute()

  onMounted(async () => {
    const serviceFactory: ServiceFactory = inject("serviceFactory")!
    const boardService = serviceFactory.createBoardService()
    const board = await boardService.getBoardById(route.params.idBoard.toString())
    board.on("moveCard", function(event: DomainEvent) {
      console.log(event)
    })
    board.on("addCard", function(event: DomainEvent) {
      console.log(event)
      boardService.addCard(board.name, event.data.idColumn, event.data)      
    })
    board.on("addColumn", function(event: DomainEvent) {
      console.log(event)
      
    })
    
    state.board = board
  })

</script>

<template>
  <BoardComponent :board="state.board" />
</template>

<style scoped>
</style>
