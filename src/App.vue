<template>
  <div class="container">
    <div class="menu" :class="{mobile: !this.lg}">
      <div class="container-fluid" v-if="this.lg">
        <div class="row mt-3">
          <div class="col-12 d-flex justify-content-center title align-items-end">
            <div class="name">TIAO</div>
            <div class="version">v.1.0.1</div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 d-flex align-items-center" v-for="(link, index) in links" :key="index">
            <router-link :to="link.href" class="link">
              <i :class="link.icon"/>
              <span>
              {{ link.name }}
            </span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="container-fluid" v-if="!this.lg">
        <div class="row mt-1">
          <div class="col-12 d-flex justify-content-between align-items-center">
            <div class="title">
              <div class="name">TIAO</div>
              <div class="version">v.1.0.1</div>
            </div>
            <div class="switch">
              <i class="bi bi-list"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content" :class="{mobile: !this.lg}">
      <router-view>

      </router-view>
    </div>
  </div>
</template>

<script>
/* TIME IS ALWAYS ORGANIZED */

import '@/assets/style/default.scss';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      links: [
        {
          name: 'Meine Aufgaben',
          icon: 'bi bi-clipboard-check',
          href: '/my-tasks',
        },
        {
          name: 'Personen',
          icon: 'bi bi-people',
          href: '/people',
        },
        {
          name: 'Auswertung',
          icon: 'bi bi-bar-chart-line',
          href: '/evaluation',
        },
        {
          name: 'Account',
          icon: 'bi bi-person',
          href: '/account',
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
div.menu {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 320px;
  background: var(--first);

  &.mobile {
    left: 0;
    right: 0;
    top: 0;
    height: 80px;
    width: unset;

    .switch {
      i {
        font-size: 32px;
        color: var(--bright-contrast-1);
        cursor: pointer;
        transition: .3s;

        &:hover {
          color: var(--bright-contrast-3);
        }
      }
    }

  }

  div.title {
    div.name {
      color: var(--bright-contrast-1);
      font-size: 32px;
      font-weight: bold;
    }

    div.version {
      color: var(--bright-contrast-2);
      font-size: 12px;
      margin-bottom: 6px;
      margin-left: 4px;
    }
  }

  a.link {
    text-decoration: none;
    width: 100%;
    margin: 10px;
    padding: 20px;
    cursor: pointer;

    &.active{
      border-left: 3px solid var(--third);
    }

    i {
      font-size: 20px;
      color: var(--bright-contrast-2);
    }

    span {
      margin-left: 10px;
      color: var(--bright-contrast-1);
    }

    &:hover {
      background: var(--third);
      border-radius: 10px;

      i {
        color: var(--dark-contrast-3);
      }

      span {
        color: var(--dark-contrast-2);
      }
    }
  }

}

div.content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 320px;
  background: var(--fourth);
  padding: 20px;

  &.mobile {
    left: 0;
    right: 0;
    top: 80px;
    bottom: 0;
  }
}
</style>
