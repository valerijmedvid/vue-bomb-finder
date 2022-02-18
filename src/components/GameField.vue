<template>
  <table>
    <tr v-for="row in coordinates" :key="row">
      <td class="border-solid border-grey border-2" v-for="column in row" :key="column">
        <span v-if="column.isBomb" class="px-1">💣</span>
        <span v-else-if="column.value > 0" class="px-1">{{ column.value }}</span>
        <span v-else class="px-3"> &nbsp; </span>
      </td>
    </tr>
  </table>
</template>

<script setup>
import { generateField } from "./gamefield"

const fieldSize = 10
const bombCount = 10

let coordinates = generateField(fieldSize, bombCount)
</script>
