<template>
    <div class="player-card__comb">
        <div
            v-for="cube in comboBoxList"
            :id="cube.id"
            :style="{ background: cube.color }"
            :class="{ 'player-card__cube--selected': cube.selected }"
            @click="selectCubes($event)"
            class="player-card__cube"
        ></div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    comboBoxList: Array,
});

const emit = defineEmits(['selectCubeEvent']);
function selectCubes(e) {
    emit('selectCubeEvent', Number(e.target.id));
}
</script>

<style lang="scss">
.player-card {
    &__comb {
        border-radius: 8px;
        border: 1px solid #000;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px 20px;
    }

    &__cube {
        border-radius: 8px;
        width: 40px;
        height: 40px;
        border: 3px solid transparent;

        &--selected {
            border-color: #000;
        }

        &:nth-child(-n + 4) {
            margin-bottom: 12px;
        }
    }
}
</style>
