module.exports = {
  getBoosterResourceCode(resCode, archetype) {
    let prefix =
      resCode == "common_booster"
        ? "BO_" + archetype.toLowerCase() + "_booster"
        : "BO_fine_" + archetype.toLowerCase() + "_booster"
    return prefix
  },
  getSpecialMaterialResourceCode(resCode, baseToon) {
    baseToon = baseToon
      .toLowerCase()
      .replaceAll(".", "")
      .replaceAll("'", "")
      .replaceAll("-", "_")
      .replaceAll(" ", "_")
    return "SM_" + baseToon
  },
  getFormularResourceCode(resCode, rarity) {
    return "FM_" + rarity.toLowerCase() + "_formular"
  },
  getAtomResourceCode(resCode, region) {
    return "AT_atom_" + region.toLowerCase()
  },
  getRegionalResourceCode(resCode, region) {
    let prefix = resCode

    switch (resCode) {
      case "common_regional":
        prefix = "RG_common_"
        break
      case "fine_regional":
        prefix = "RG_fine_"
        break
      case "superior_regional":
        prefix = "RG_superior_"
        break
    }

    let item = region.toLowerCase().replace(" ", "_")
    // switch (region.toLowerCase()) {
    //   case "avalooney":
    //     item = "flower_crown"
    //     break
    //   case "city":
    //     item = "traffic_light"
    //     break
    //   case "desert":
    //     item = "dried_skull"
    //     break
    //   case "farm":
    //     item = "bucket_of_milk"
    //     break
    //   case "forest":
    //     item = "dried_leaf"
    //     break
    //   case "space":
    //     item = "evaporator"
    //     break
    //   case "summit":
    //     item = "mittens"
    //     break
    //   case "tasmania":
    //     item = "skull"
    //     break
    //   case "town":
    //     item = "hydrant"
    //     break
    //   case "wb studios":
    //     item = "movie_camera"
    //     break
    // }

    return prefix + item
  },

  getResourceIcon(resCode) {
    let file = resCode
    let title = resCode
    switch (resCode.toLowerCase()) {
      case "rg_common_avalooney":
        file = "flower_crown.webp"
        title = "Common flower crown"
        break
      case "rg_common_city":
        file = "traffic_light.webp"
        title = "Common traffic light"
        break
      case "rg_common_desert":
        file = "dried_skull.webp"
        title = "Common dried skull"
        break
      case "rg_common_farm":
        file = "bucket_of_milk.webp"
        title = "Common bucket of milk"
        break
      case "rg_common_forest":
        file = "dry_leaf.webp"
        title = "Common dry leaf"
        break
      case "rg_common_space":
        file = "evaporator.webp"
        title = "Common evaporator leaf"
        break
      case "rg_common_summit":
        file = "mittens.webp"
        title = "Common mittens"
        break
      case "rg_common_tasmania":
        file = "skull.webp"
        title = "Common skull"
        break
      case "rg_common_town":
        file = "hydrant.webp"
        title = "Common hydrant"
        break
      case "rg_common_wb_studios":
        file = "movie_camera.webp"
        title = "Common Movie Camera"
        break
      case "rg_fine_avalooney":
        file = "fine_flower_crown.webp"
        title = "Fine flower crown"
        break
      case "rg_fine_city":
        file = "fine_traffic_light.webp"
        title = "Fine traffic light"
        break
      case "rg_fine_desert":
        file = "fine_dried_skull.webp"
        title = "Fine dried skull"
        break
      case "rg_fine_farm":
        file = "fine_bucket_of_milk.webp"
        title = "Fine bucket of milk"
        break
      case "rg_fine_forest":
        file = "fine_dry_leaf.webp"
        title = "Fine dry leaf"
        break
      case "rg_fine_space":
        file = "fine_evaporator.webp"
        title = "Fine evaporator leaf"
        break
      case "rg_fine_summit":
        file = "fine_mittens.webp"
        title = "Fine mittens"
        break
      case "rg_fine_tasmania":
        file = "fine_skull.webp"
        title = "Fine skull"
        break
      case "rg_fine_town":
        file = "fine_hydrant.webp"
        title = "Fine hydrant"
        break
      case "rg_fine_wb_studios":
        file = "fine_movie_camera.webp"
        title = "Fine Movie Camera"
        break
      case "rg_superior_avalooney":
        file = "superior_flower_crown.webp"
        title = "Fine flower crown"
        break
      case "rg_superior_city":
        file = "superior_traffic_light.webp"
        title = "Fine traffic light"
        break
      case "rg_superior_desert":
        file = "superior_dried_skull.webp"
        title = "Fine dried skull"
        break
      case "rg_superior_farm":
        file = "superior_bucket_of_milk.webp"
        title = "Fine bucket of milk"
        break
      case "rg_superior_forest":
        file = "superior_dry_leaf.webp"
        title = "Fine dry leaf"
        break
      case "rg_superior_space":
        file = "superior_evaporator.webp"
        title = "Fine evaporator leaf"
        break
      case "rg_superior_summit":
        file = "superior_mittens.webp"
        title = "Fine mittens"
        break
      case "rg_superior_tasmania":
        file = "superior_skull.webp"
        title = "Fine skull"
        break
      case "rg_superior_town":
        file = "superior_hydrant.webp"
        title = "Fine hydrant"
        break
      case "rg_superior_wb_studios":
        file = "superior_movie_camera.webp"
        title = "Fine Movie Camera"
        break

      case "bo_attacker_booster":
        file = "attacker_booster.webp"
        title = "Attacker Booster"
        break
      case "bo_defender_booster":
        file = "defender_booster.webp"
        title = "Defender Booster"
        break
      case "bo_support_booster":
        file = "support_booster.webp"
        title = "Support Booster"
        break
      case "bo_fine_attacker_booster":
        file = "fine_attacker_booster.webp"
        title = "Fine attacker Booster"
        break
      case "bo_fine_defender_booster":
        file = "fine_defender_booster.webp"
        title = "Fine defender Booster"
        break
      case "bo_fine_support_booster":
        file = "fine_support_booster.webp"
        title = "Fine support Booster"
        break
      case "fm_common_formular":
        file = "FM_beta.jpg"
        title = "Beta Formula"
        break
      case "fm_rare_formular":
        file = "FM_alpha.png"
        title = "Beta Formula"
        break
      case "fm_epic_formular":
        file = "FM_omega.png"
        title = "Omega Formula"
        break
      case "fm_legendary_formular":
        file = "FM_infinity.png"
        title = "Infinity Formula"
        break
      case "at_atom_avalooney":
        file = "atom_avalooney.png"
        title = "Avalooney Atom "
        break
      case "at_atom_city":
        file = "atom_city.png"
        title = "City Atom "
        break
      case "at_atom_desert":
        file = "atom_desert.png"
        title = "Desert Atom "
        break
      case "at_atom_farm":
        file = "atom_farm.png"
        title = "Farm Atom "
        break
      case "at_atom_forest":
        file = "atom_forest.png"
        title = "Forest Atom "
        break
      case "at_atom_space":
        file = "atom_space.png"
        title = "Space Atom "
        break
      case "at_atom_summit":
        file = "atom_summit.png"
        title = "Summit Atom "
        break
      case "at_atom_tasmania":
        file = "atom_tasmania.png"
        title = "Tasmania Atom "
        break
      case "at_atom_town":
        file = "atom_town.png"
        title = "Town Atom "
        break
      case "at_atom_wb_studios":
        file = "atom_web_studios.png"
        title = "WB Studios Atom "
        break
      // toons

      case "sm_barnyard_dawg":
        file = "SM_barnyard_dawg.webp"
        title = "Dog Collar"
        break

      case "sm_bugs_bunny":
        file = "SM_bugs_bunny.webp"
        title = "Carrot"
        break
      case "sm_daffy_duck":
        file = "SM_daffy_duck.webp"
        title = "Mirror"
        break
      case "sm_dr_frankenbeans":
        file = "SM_dr_frankenbeans.webp"
        title = "Old Switch"
        break
      case "sm_elmer_fudd":
        file = "SM_elmer_fudd.webp"
        title = "Hunting Hat"
        break
      case "sm_egghead_jr":
        file = "SM_egghead_jr.webp"
        title = "Pencil"
        break

      case "sm_foghorn_leghorn":
        file = "SM_foghorn_leghorn.webp"
        title = "Baseball"
        break
      case "sm_gossamer":
        file = "SM_gossamer.webp"
        title = "Hair Shampoo"
        break

      case "sm_granny":
        file = "SM_granny.webp"
        title = "Glasses"
        break

      case "sm_hector":
        file = "SM_hector.webp"
        title = "Blue Ball"
        break

      case "sm_henery_hawk":
        file = "SM_henery_hawk.webp"
        title = "Cutlery"
        break
      case "sm_hippety_hopper":
        file = "SM_hippety_hopper.webp"
        title = "Boxing Gloves"
        break

      case "sm_hugo":
        file = "SM_hugo.webp"
        title = "George"
        break

      case "sm_k_9":
        file = "SM_k_9.webp"
        title = "Biscuit"
        break

      case "sm_lebron_james":
        file = "SM_lebron_james.png"
        title = "Basketball"
        break
      case "sm_lola":
        file = "SM_lola.webp"
        title = "Scrunchy"
        break
      case "sm_marvin":
        file = "SM_marvin.png"
        title = "Sneaker Shoes"
        break
      case "sm_melissa":
        file = "SM_melissa.png"
        title = "Pocket Mirror"
        break

      case "sm_miss_prissy":
        file = "SM_miss_prissy.webp"
        title = "Chicken Nest"
        break

      case "sm_nasty_canasta":
        file = "SM_nasty_canasta.png"
        title = "Vile Cocktail"
        break

      case "sm_omike":
        file = "SM_omike.webp"
        title = "Clover"
        break

      case "sm_opat":
        file = "SM_opat.webp"
        title = "Clover"
        break

      case "sm_penelope":
        file = "SM_penelope.webp"
        title = "Gas Mask"
        break

      case "sm_pepe_le_pew":
        file = "SM_pepe_le_pew.webp"
        title = "Bottle of Perfume"
        break

      case "sm_petunia_pig":
        file = "SM_petunia_pig.webp"
        title = "Red Bow"
        break
      case "sm_porky_pig":
        file = "SM_porky_pig.png"
        title = "Watering Can"
        break
      case "sm_ralph_wolf":
        file = "SM_ralph_wolf.webp"
        title = "ACME Catalog"
        break
      case "sm_road_runner":
        file = "SM_road_runner.webp"
        title = "Bird Seed"
        break
      case "sm_sam_sheepdog":
        file = "SM_sam_sheepdog.webp"
        title = "Red Punching Clokc"
        break
      case "sm_speedy_gonzales":
        file = "SM_speedy_gonzales.webp"
        title = "Cheese"
        break
      case "sm_sylvester":
        file = "SM_sylvester.webp"
        title = "Bird Cage"
        break

      case "sm_sylvester_jr":
        file = "SM_sylvester_jr.webp"
        title = "Paper Bag"
        break

      case "sm_tasmanian_she_devil":
        file = "SM_tasmanian_she_devil.png"
        title = "Tasty Meat"
        break

      case "sm_taz":
        file = "SM_taz.png"
        title = "Tasty Meat"
        break
      case "sm_the_crusher":
        file = "SM_the_crusher.png"
        title = "Champion's Belt"
        break
      case "sm_the_mighty_angelo":
        file = "SM_the_mighty_angelo.png"
        title = "Weights"
        break

      case "sm_toro":
        file = "SM_toro.webp"
        title = "Nose Ring"
        break

      case "sm_tweety":
        file = "SM_tweety.webp"
        title = "Bird Perch"
        break

      case "sm_yosemite_sam":
        file = "SM_yosemite_sam.webp"
        title = "Comb"
        break

      case "sm_witch_hazel":
        file = "SM_witch_hazel.webp"
        title = "Potion Book"
        break

      case "sm_wille_e_coyote":
        file = "SM_wille_e_coyote.webp"
        title = "ACME Catalog"
        break
    }

    return `<img src="./assets/images/resources/${file}" title="${title}" class="resource-icon">`
  },
  
  
  
  getToonIcon(toonName)   {
    let file = toonName.toLowerCase()
      .replaceAll(".", "")
      .replaceAll("'", "")
      .replaceAll("-", "_")
      .replaceAll(" ", "_")
      
    file += '.webp'
    return `<img src="./assets/images/toons/${file}" title="${toonName}" class="toon-icon">`
  }
}
