<template>
  <panel-page title="Meine Aufgaben">
    <div class="row">
      <div class="col-12">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-12 d-flex justify-content-between align-items-center mt-2">
                      <div class="list-name" style="padding: 15px; color: var(--first)">
                        <label>
                          <input type="text" placeholder="Suchen..." style="width: 280px" v-model="filter">
                          <i class="bi bi-search" style="margin-left: -30px"/>
                        </label>
                      </div>
                      <div class="create-task d-flex">
                        <div class="interact">
                          <i class="bi bi-funnel"></i>
                        </div>
                        <div class="interact" style="margin-left: 10px">
                          <i class="bi bi-star"></i>
                        </div>
                        <div class="interact" style="margin-left: 10px">
                          <i class="bi bi-plus-lg"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-3 category" v-for="(category, index) in getFilteredCategories" :key="index">
                    <div class="col-12 d-flex justify-content-between category-head"
                         @click="category.unfolded = !category.unfolded">
                      <div class="category-name d-flex">
                        <i class="bi bi-caret-down" v-if="category.unfolded"></i>
                        <i class="bi bi-caret-right" v-else></i>
                        <span class="name">{{ category.name }}</span><span class="count">{{
                          category.tasks.length
                        }}</span>
                      </div>
                      <div class="category-settings">
                        <i class="bi bi-three-dots"></i>
                      </div>
                    </div>
                    <div class="col-12 tasks" v-if="category.unfolded">
                      <div class="task done" v-for="(task, taskIndex) in category.tasks" :key="taskIndex">
                        <div class="done">
                          <input type="checkbox">
                        </div>
                        <div class="name d-flex">
                          <div class="naming">
                            {{ task.name }}
                          </div>
                          <div class="label" v-for="(label, labelIndex) in task.labels" :key="labelIndex" :style="{background: label.color}">
                            {{ label.name }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </panel-page>
</template>

<script>
import PanelPage from "@/components/view/panel/page/PanelPage";

export default {
  name: "MyTaskOverview",
  components: {PanelPage},
  computed: {
    getFilteredCategories() {

      if (this.filter.trim().length === 0) {
        return this.categories;
      }

      let result = [];
      for (let category of this.categories) {

        let categories = [];
        for (let task of category.tasks) {
          let taskName = task.name;
          if (this.matchSearch(taskName, this.filter)) {
            categories.push(task);
          }
        }

        if (categories.length > 0) {
          result.push({
            name: category.name,
            tasks: categories,
            unfolded: category.unfolded,
          })
        }
      }

      return result;
    },
  },
  methods: {
    matchSearch(input, value) {
      return new RegExp(value.toLowerCase()).test(input.toLowerCase());
    }
  },
  data() {
    return {
      filter: '',
      categories: [
        {
          name: 'Haushalt',
          unfolded: true,
          tasks: [
            {
              name: 'Küche putzen',
              done: 'false',
            },
            {
              name: 'WC wischen',
              done: 'false',
              labels: [
                {
                  name: 'Priorität',
                  color: 'var(--third)',
                }
              ]
            },
            {
              name: 'Kabel neu verlegen',
              done: 'false',
            }
          ]
        },
        {
          name: 'Arbeit',
          unfolded: true,
          tasks: [
            {
              name: 'Arbeitsplatz reinigen',
              done: 'false',
            },
            {
              name: 'Wöchentliche Zusammenfassung',
              done: 'false',
              labels: [
                {
                  name: 'Wichtig',
                  color: 'darkred',
                }
              ]
            }
          ]
        },
        {
          name: 'Rechnungen',
          unfolded: true,
          tasks: [
            {
              name: 'Handyrechnung bezahlten',
              done: 'false',
              labels: [
                {
                  name: 'Überfällig',
                  color: '#d2d250',
                }
              ]
            },
            {
              name: 'Monatliche Auswertung aller Ausgaben',
              done: 'false',
            },
            {
              name: 'Echtzeitüberweisung einrichten',
              done: 'false',
            },
            {
              name: 'Netflix Geld kontrollieren',
              done: 'false',
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
div.card {
  margin-top: 100px;
  width: 100%;
  min-height: 600px;
  border-radius: 25px;

  div.category {
    padding: 10px;

    div.tasks {
      div.task {
        margin: 5px;
        padding: 8px 25px;
        font-size: 14px;
        display: flex;
        align-items: center;
        color: var(--dark-contrast-2);

        div.done {
          margin-right: 5px;
        }

        &.done {
          background: var(--bright-contrast-2);
          border-radius: 10px;
        }

        div.name {

          div.naming {
            display: flex;
            align-items: center
          }

          div.label {
            margin-left: 10px;
            padding: 4px;
            border-radius: 5px;
            color: var(--bright-contrast-1);
          }
        }
      }
    }

    div.category-settings {
      color: var(--dark-contrast-2);
      cursor: pointer;
    }

    div.category-head {

      div.category-name {
        cursor: pointer;
        color: var(--dark-contrast-2);
        align-items: end;
        font-size: 18px;

        span.name {
          margin: 0 10px;
          font-weight: bold;
        }

        span.count {
          margin-bottom: 3px;
          font-size: 12px;
          color: var(--dark-contrast-1);
        }
      }
    }
  }

}
</style>