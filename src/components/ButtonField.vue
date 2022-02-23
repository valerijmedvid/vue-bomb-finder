<template>
  <button
    @click="makeClick"
    class="w-7 border border-slate-500 rounded"
    :class="[
      {
        ' bg-red-200 ': looseGame,

        ' bg-gray-300 ': !shownField && !props.bomb.valueShown,
      },
    ]"
  >
    <template v-if="props.bomb.isBomb"> 💣 </template>
    <template v-else-if="props.bomb.value"> {{ bomb.value }} </template>
    <template v-else> &nbsp; </template>
  </button>
</template>

<script setup>
import { ref, watch } from "vue"

let props = defineProps(["bomb"])
let emit = defineEmits(["searchOther"])

let looseGame = ref(false)
let shownField = ref(false)

watch(
  () => props.bomb.valueShown,
  () => {
    emit("searchOther", props.bomb)
  }
)

const makeClick = () => {
  if (props.bomb.isBomb) {
    looseGame.value = true
    shownField.value = true
    alert("Loose Game!!!")
  } else {
    shownField.value = true

    if (props.bomb.value == 0) {
      emit("searchOther", props.bomb)
    }
  }
}
</script>

<style lang="scss" scoped></style>
