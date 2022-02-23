<template>
  <table class="border-solid border-grey-100 border-2 mt-5 m-auto">
    <tr v-for="row in coordinates" :key="row">
      <td class="p-0" v-for="column in row" :key="column">
        <ButtonField :bomb="column" @search-other="showAllBlanketFields($event)" />
      </td>
    </tr>
  </table>
</template>

<script setup>
import { reactive } from "vue"
import ButtonField from "./ButtonField.vue"
import { generateField } from "@/gamefield"

const fieldSize = 10
const bombCount = 10
let coordinates = reactive(generateField(fieldSize, bombCount))

function showAllBlanketFields(bomb) {
  let row = bomb.coordinates.row
  let column = bomb.coordinates.column

  if (bomb.value == 0) {
    if (row > 0) {
      coordinates[row - 1][column].valueShown = true
    }
    if (column > 0) {
      coordinates[row][column - 1].valueShown = true
    }
    if (row < coordinates.length - 1) {
      coordinates[row + 1][column].valueShown = true
    }
    if (column < coordinates.length - 1) {
      coordinates[row][column + 1].valueShown = true
    }
  }
}
</script>
