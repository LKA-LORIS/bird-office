<template>
  <div class="nav__cart">
    <ul class="nav__cart__inner">
      <li>
        <svg width="28" height="25">
          <use v-bind="{ 'xlink:href': require('../assets/icons/sprite.svg') + '#cart' }">
          </use>
        </svg>
      </li>

      <li>
        <p>Shopping-cart</p>
      </li>

      <li>
        <span>0</span>
      </li>
    </ul>
  </div>

</template>

<script>
export default {

};

</script>

<style lang="scss" scoped>
  .nav__cart {
    padding: 0 18px;

    &__inner {
      position: relative;
      display: flex;
      align-items: center;
      height:100%;
      list-style: none;
      padding: 0 18px;
      cursor: pointer;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        height: 4.8rem;
        width: 0.1rem;
        background-color: var(--yellow);
        opacity: 0.1;
      }

      li+li {
        margin-left: 18px;
      }

      li {
        p {
          font-size: 1.2rem;
          color: var(--grey-100);
        }

        &:last-child {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 3.6rem;
          width: 3.6rem;
          border-radius: 3.6rem;
          background-color: var(--yellow);

          span {
            color: var(--white);
            font-weight: 500;
          }
        }
      }
    }

  }

</style>
