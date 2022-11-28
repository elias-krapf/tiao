<template>
  <panel-page title="Account">
    <div class="row">
      <div class="col-12 d-flex justify-content-center avatar">
        <div class="person">
          <img src="@/assets/images/avatar.png" alt="">
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center mt-2">
        <div class="name">
          Elias Krapf
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <div class="container">
          <div class="row">
            <div class="col-3">
              <div class="link" @click="index = 0">
                Stammdaten
              </div>
            </div>
            <div class="col-3">
              <div class="link" @click="index = 1">
                Sicherheit
              </div>
            </div>
            <div class="col-3">
              <div class="link" @click="index = 2">
                Einstellungen
              </div>
            </div>
            <div class="col-3">
              <div class="link" @click="index = 3">
                Abmelden
              </div>
            </div>
          </div>
          <div class="row">
            <div class="slide-progress" :style="getSliderX">

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3" v-if="index === 0">
      asdf
    </div>
  </panel-page>
</template>

<script>
import PanelPage from "@/components/view/panel/page/PanelPage";

export default {
  name: "AccountOverview",
  components: {PanelPage},
  computed: {
    getSliderX() {
      return {
        'margin-left': `${this.index * 25}%`,
      }
    }
  },
  data() {
    return {
      index: 0,
    }
  }
}
</script>

<style lang="scss" scoped>
div.avatar {
  margin-top: 20px;

  img {
    height: 280px;
    border-radius: 50%;
  }
}

div.name {
  font-size: 22px;
  color: var(--dark-contrast-1);
}

div.link {
  padding: 15px;
  color: var(--first);
  font-weight: bold;
  text-align: center;
  cursor: pointer;
}

div.slide-progress {
  width: 25%;
  height: 4px;
  background: var(--third);
  transition: .3s;
}
</style>