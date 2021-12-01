<template>
  <article class="card">
    <aside class="card__aside">
      <figure class="card__figure">
        <!-- RECUPERER L'image avec l'index -->
       <!-- <img :src="require(`../assets/products/product_${index}.jpg`)" :alt="content.title"> -->
      </figure>
    </aside>
    <header class="card__header">
      <p class="card__title">{{content[0].title}}</p>
      <p class="card__price">{{content[0].price}}</p>
    </header>
    <div class="card__body">
      <p class="card__copy">
        excerpt
      </p>
    </div>
  </article>

</template>

<script>
export default {
  props: ['content'],
};

</script>

<style>

</style>
