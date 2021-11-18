<template>
  <div>
    
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
    {{ getTotal }}
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
import { getResourceIcon } from "@/helpers/tuneUpResources.js"
export default {
  name: "TuneUpResourceTable",
  data() {
    return {
      resources: {},
    }
  },
  computed: {
    getTotal() {
      console.log("getTotal")
      this.countTotal()
      return "✓"
    },
  },

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
          ? `${this._long(resGroup[key])} x ${getResourceIcon(key)}`
          : `${this._long(resGroup[key])} x ${key}`
        returnText.push(out)
      }

      if (returnText.length === 0) {
        return emptyText
      }
      return returnText.join("\n")
    },

    countTotal() {
      console.log("countTotal()...")
      let total = {}
      let resourceList = this.$store.state.selectedToons

      for (let i in resourceList) {
        
        if(resourceList[i].isHidden) {
          continue 
        }
        
        for (let key in resourceList[i].resources) {
          console.log(key)
          if (
            key == "gold" ||
            key == "common_dynamite" ||
            key == "fine_dynamite" ||
            key == "fine_dynamite" ||
            key == "common_anvil" ||
            key == "fine_anvil" ||
            key == "secret_stuff"
          ) {
            if (total[key] === undefined) {
              total[key] = 0
            }
            console.log(resourceList[i].resources[key])
            total[key] += resourceList[i].resources[key]
          } else if (
            key == "BO" ||
            key == "RG" ||
            key == "SM" ||
            key == "FM" ||
            key == "AT"
          ) {
            if (total[key] === undefined) {
              total[key] = {}
            }

            for (let res in resourceList[i].resources[key]) {
              console.log("BREAK HERE?")
              console.log(res)
              if (total[key][res] == undefined) {
                total[key][res] = 0
              }
              total[key][res] += resourceList[i].resources[key][res]
            }
          }
        }
      }
      console.log("TOTALLLLLLL")
      console.log(total)
      this.resources = total
    },
  },
}
</script>
