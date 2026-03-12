<template>
  <div class="game-popup">
	<div class="game-popup__info">
	  <p class="game-popup__text"> {{winnerName}}</p>
	  <p class="game-popup__text"> Победил!</p>
	</div>
	<div class="game-popup__winner">
		<div class="game-popup__crown">
			<img src="../../../images/crown.png" alt="crown" class="game-popup__image">
		</div>

	  <img :src="winnerImage" :alt="winnerName" class="game-popup__image">
	</div>
    <router-link
        to="/"
        class="button game-popup__button"
    >
      Ура, супер!
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps({
	winnerName: String,
	winnerImage: String
});
</script>

<style scoped lang="scss">
	.game-popup {
	  $self: &;
	  border-radius: 8px;
	  background: #fff;
	  margin: auto;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  width: 700px;
	  height: 700px;
	  background: url('../../../images/salut.gif') 50% 50% / 100% 100%;

	  &__text {
      margin: 0;
      font-size: 40px;
      text-align: center;
	  }

	  &__image {
      width: 100%;
      height: auto;
      user-select: none;
	  }

	  &__crown {
		  position: absolute;
		  z-index: 2;
		  top: -30px;
		  right: 45px;
		  max-width: 150px;
		  transform: rotate(-20deg);
	  }

	  &__winner {
		  max-width:  300px;
		  width: 100%;
		  margin-top: 30px;
		  position: relative;
	  }

	  &__button {
      max-width: 320px;
      width: 100%;
      background: #bfff00;
      font-size: 40px;
      padding: 10px 20px;
      margin-top: 30px;

      &:hover {
        background: yellow;
      }

      &:active {
        background: #ffd400;
      }
	  }
	}
</style>


