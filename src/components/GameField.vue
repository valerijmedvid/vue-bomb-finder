<template>
  <table class="border-solid border-grey-100 border-2 mt-5 m-auto">
    <tr v-for="row in coordinates" :key="row">
      <td class="p-0" v-for="column in row" :key="column">
        <ButtonField :bomb="column" @show-fields="showAllBlanketFields($event)" @show-bomb="showAllBombs($event)" />
      </td>
    </tr>
  </table>
  <div class="w-80 mt-10 m-auto">left click => show field <br />right click => set flag</div>
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

  coordinates[row][column].valueShown = true
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

function showAllBombs() {
  coordinates.forEach(row => {
    row.forEach(field => {
      if (field.isBomb) {
        field.valueShown = true
        console.log(field.valueShown)
      }
    })
  })
}
</script>
