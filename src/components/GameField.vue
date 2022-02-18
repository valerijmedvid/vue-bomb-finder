<template>
  <table>
    <tr v-for="row in coordinates" :key="row">
      <td class="border-solid border-grey border-2" v-for="column in row" :key="column">
        <span class="px-2">{{ column }}</span>
      </td>
    </tr>
  </table>
</template>

<script setup>
import { generateField } from "./gamefield"

const fieldSize = 10
const bombCount = 6

const coordinates = generateField(fieldSize, bombCount)
</script>
