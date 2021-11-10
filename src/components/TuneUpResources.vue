<template>
  <div>
    <div class="p-2 m-2 card col-11">
      {{ getResources }}

      <div v-if="false">
        {{ toon }}
        {{ resources }}
      </div>

      <div class="table-responsive">
        <!-- TuneUpResourceTable :resourcesList="resources" /> --->
        <table class="table table-condensed table-bordered resources">
          <thead>
            <tr>
              <th rowspan="2">Gold</th>
              <th colspan="3">Dynamite</th>
              <th colspan="2">Anvil</th>
              <th colspan="3">Regional</th>
              <th colspan="2">Booster</th>
              <th rowspan="2">Spec. Mat.</th>
              <th colspan="4">Formular</th>
              <th rowspan="2">Secret Stuff</th>
              <th rowspan="2">Atom</th>
            </tr>
            <tr>
              <th>Cmn.</th>
              <th>Fine</th>
              <th>Spr.</th>
              <th>Cmn.</th>
              <th>Fine</th>
              <th>Cmn.</th>
              <th>Fine</th>
              <th>Spr.</th>
              <th>Cmn.</th>
              <th>Fine</th>

              <th>β</th>
              <th>α</th>
              <th>ω</th>
              <th>∞</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ _long(resources.gold) }}</td>
              <td>{{ _long(resources.common_dynamite) }}</td>
              <td>{{ _long(resources.fine_dynamite) }}</td>
              <td>{{ _long(resources.superior_dynamite) }}</td>
              <td>{{ _long(resources.common_anvil) }}</td>
              <td>{{ _long(resources.fine_anvil) }}</td>
              <td>
                <div v-html="_group(_filter(resources.RG, 'RG_common'))" />
              </td>
              <td>
                <div v-html="_group(_filter(resources.RG, 'RG_fine'))" />
              </td>
              <td>
                <div v-html="_group(_filter(resources.RG, 'RG_superior'))" />
              </td>

              <td>
                <div v-html="_group(_filter(resources.BO, 'BO_', '_fine_'))" />
              </td>
              <td>
                <div v-html="_group(_filter(resources.BO, 'BO_fine'))" />
              </td>

              <td>
                <div v-html="_group(resources.SM)" />
              </td>

              <td>
                <div v-html="_group(_filter(resources.FM, 'FM_common'))" />
              </td>
              <td>
                <div v-html="_group(_filter(resources.FM, 'FM_rare'))" />
              </td>
              <td>
                <div v-html="_group(_filter(resources.FM, 'FM_epic'))" />
              </td>
              <td>
                <div v-html="_group(_filter(resources.FM, 'FM_legendary'))" />
              </td>

              <td>{{ _long(resources.secret_stuff) }}</td>

              <td>
                <div v-html="_group(resources.AT)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
table.resources {
  border-collapse: collapse;
}

.table-condensed {
  font-size: 12px !important;
}

table.resources th,
table.resources td {
  font-size: 8;
}
</style>

<script>
import {
  getSpecialMaterialResourceCode,
  getFormularResourceCode,
  getAtomResourceCode,
  getBoosterResourceCode,
  getRegionalResourceCode,
  getResourceIcon,
} from "@/helpers/tuneUpResources.js"

// import TuneUpResourceTable from "@/components/TuneUpResourceTable.vue"

export default {
  name: "TuneUpResources",
  components: {
    //  TuneUpResourceTable,
  },
  props: ["toon", "currentTuneUp", "preferredTuneUp", "isHidden"],
  data() {
    return {
      toonDetail: {},
      resources: {},
    }
  },
  mounted() {
    console.log("mounted")

    this.toonDetail = this.toon
  },
  computed: {
    getResources: function () {
      this.calculateResource()
      return ""
    },
  },
  emits: ["update"],
  methods: {
    _long(value, emptyText = "-") {
      if (value == undefined || value.isNaN || value == 0) {
        return emptyText
      }
      return Intl.NumberFormat("en-US").format(value)
    },
    _filter(resGroup, searchText, notContainText = null) {
      let out = {}
      for (let key in resGroup) {
        if (key.indexOf(searchText) >= 0) {
          if (notContainText === null || key.indexOf(notContainText) < 0) {
            out[key] = resGroup[key]
          }
        }
      }
      return out
    },
    _group(resGroup, showAsIcon = true, emptyText = "-") {
      if (resGroup === undefined) {
        return emptyText
      }
      let returnText = []
      for (let key in resGroup) {
        if (
          resGroup[key] === undefined ||
          isNaN(resGroup[key]) ||
          resGroup[key] <= 0
        ) {
          continue
        }
        let out = showAsIcon
          ? `${resGroup[key]} x ${getResourceIcon(key)}`
          : `${resGroup[key]} x ${key}`
        returnText.push(out)
      }

      if (returnText.length === 0) {
        return emptyText
      }
      return returnText.join("\n")
    },

    calculateResource() {
      console.log("calculateResource()")
      this.resources = {}

      let tuneUpMap = this.$store.state.tuneUpResources.tuneups

      for (let key in Object.keys(tuneUpMap)) {
        if (
          parseInt(tuneUpMap[key].level) <= parseInt(this.currentTuneUp) ||
          parseInt(tuneUpMap[key].level) > parseInt(this.preferredTuneUp)
        ) {
          continue
        }

        // looping through object
        for (let res in tuneUpMap[key]) {
          if (res == "level") {
            continue
          }

          // plain items those need no conversion
          if (
            res == "gold" ||
            res == "common_anvil" ||
            res == "fine_anvil" ||
            res == "common_dynamite" ||
            res == "fine_dynamite" ||
            res == "superior_dynamite" ||
            res == "secret_stuff"
          ) {
            if (this.resources[res] === undefined) {
              this.resources[res] = 0
            }

            this.resources[res] += tuneUpMap[key][res]
          } else {
            let updatedRes = res

            if (
              res == "common_regional" ||
              res == "fine_regional" ||
              res == "superior_regional"
            ) {
              updatedRes = getRegionalResourceCode(res, this.toon.region)
              if (this.resources["RG"] === undefined) {
                this.resources["RG"] = {}
              }
              if (this.resources["RG"][updatedRes] === undefined) {
                this.resources["RG"][updatedRes] = 0
              }
              this.resources["RG"][updatedRes] += tuneUpMap[key][res]
            } else if (res == "common_booster" || res == "fine_booster") {
              updatedRes = getBoosterResourceCode(res, this.toon.type)
              if (this.resources["BO"] === undefined) {
                this.resources["BO"] = {}
              }
              if (this.resources["BO"][updatedRes] === undefined) {
                this.resources["BO"][updatedRes] = 0
              }
              this.resources["BO"][updatedRes] += tuneUpMap[key][res]
            } else if (res == "atom") {
              updatedRes = getAtomResourceCode(res, this.toon.region)

              if (this.resources["AT"] === undefined) {
                this.resources["AT"] = {}
              }
              if (this.resources["AT"][updatedRes] === undefined) {
                this.resources["AT"][updatedRes] = 0
              }
              this.resources["AT"][updatedRes] +=
                tuneUpMap[key][res][this.toon.rarity.toLowerCase()]
            } else if (res == "formular") {
              updatedRes = getFormularResourceCode(res, this.toon.rarity)
              if (this.resources["FM"] === undefined) {
                this.resources["FM"] = {}
              }
              if (this.resources["FM"][updatedRes] === undefined) {
                this.resources["FM"][updatedRes] = 0
              }
              this.resources["FM"][updatedRes] += tuneUpMap[key][res]
            } else if (res == "special_material") {
              updatedRes = getSpecialMaterialResourceCode(res, this.toon.base)
              if (this.resources["SM"] === undefined) {
                this.resources["SM"] = {}
              }
              if (this.resources["SM"][updatedRes] === undefined) {
                this.resources["SM"][updatedRes] = 0
              }
              this.resources["SM"][updatedRes] += tuneUpMap[key][res]
            }
          }
        }
      } // end level loop

      this.$emit("update", this.resources)
      this.$store.dispatch("updateSelection", {
        toonName: this.toon.name,
        resources: this.resources,
      })
    },
  },
}
</script>
