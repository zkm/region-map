/**
 * JQVMap
 * Documentation: https://github.com/manifestinteractive/jqvmap
 */

$(document).ready(function () {
  var $vmap = $("#vmap"),
    $regionEast = $(".region_east"),
    $regionWest = $(".region_west"),
    $regionCentral = $(".region_central"),
    $regionMidwest = $(".region_midwest"),
    $regionSouth = $(".region_south"),
    vmapBgColor = "#fafafa",
    vmapHoverColor = "#9fcb80",
    vmapSelectedColor = "rgb(116, 176, 74)",
    vmapColor = "rgb(115, 115, 115)",
    selectedStates = [],
    regions = {
      east: {
        status: false,
        states: [
          { code: "CT", name: "Connecticut" },
          { code: "DE", name: "Delaware" },
          { code: "ME", name: "Maine" },
          { code: "MD", name: "Maryland" },
          { code: "MA", name: "Massachusetts" },
          { code: "NH", name: "New Hampshire" },
          { code: "NJ", name: "New Jersey" },
          { code: "NY", name: "New York" },
          { code: "OH", name: "Ohio" },
          { code: "PA", name: "Pennsylvania" },
          { code: "RI", name: "Rhode Island" },
          { code: "VT", name: "Vermont" },
          { code: "VA", name: "Virginia" },
          { code: "WV", name: "West Virginia" },
          { code: "DC", name: "District of Columbia" },
        ],
      },
      west: {
        status: false,
        states: [
          { code: "AK", name: "Alaska" },
          { code: "AZ", name: "Arizona" },
          { code: "CA", name: "California" },
          { code: "HI", name: "Hawaii" },
          { code: "ID", name: "Idaho" },
          { code: "NV", name: "Nevada" },
          { code: "OR", name: "Oregon" },
          { code: "UT", name: "Utah" },
          { code: "WA", name: "Washington" },
        ],
      },
      central: {
        status: false,
        states: [
          { code: "CO", name: "Colorado" },
          { code: "KS", name: "Kansas" },
          { code: "NE", name: "Nebraska" },
          { code: "NM", name: "New Mexico" },
          { code: "ND", name: "North Dakota" },
          { code: "MT", name: "Montana" },
          { code: "OK", name: "Oklahoma" },
          { code: "SD", name: "South Dakota" },
          { code: "TX", name: "Texas" },
          { code: "WY", name: "Wyoming" },
        ],
      },
      midwest: {
        status: false,
        states: [
          { code: "AR", name: "Arkansas" },
          { code: "IL", name: "Illinois" },
          { code: "IN", name: "Indiana" },
          { code: "IA", name: "Iowa" },
          { code: "KY", name: "Kentucky" },
          { code: "MI", name: "Michigan" },
          { code: "MN", name: "Minnesota" },
          { code: "MO", name: "Missouri" },
          { code: "TN", name: "Tennessee" },
          { code: "WI", name: "Wisconsin" },
        ],
      },
      south: {
        status: false,
        states: [
          { code: "AL", name: "Alabama" },
          { code: "FL", name: "Florida" },
          { code: "GA", name: "Georgia" },
          { code: "LA", name: "Louisiana" },
          { code: "MS", name: "Mississippi" },
          { code: "NC", name: "North Carolina" },
          { code: "SC", name: "South Carolina" },
        ],
      },
    };

  function toggleRegion(event) {
    var action,
      region = event.data;

    region.status = !region.status;
    action = region.status ? "select" : "deselect";

    region.states.forEach(function (state) {
      if (action === "select" || stateSelected(state.name)) {
        $vmap.vectorMap(action, state.code);
      }
    });

    addOrRemoveStates(region.states, action);
  }

  function stateSelected(stateName) {
    return selectedStates.indexOf(stateName) >= 0;
  }

  function toggleState(stateName) {
    if (stateSelected(stateName)) {
      disableState(stateName);
    } else {
      enableState(stateName);
    }
  }

  function disableState(stateName) {
    if (stateSelected(stateName)) {
      var index = selectedStates.indexOf(stateName);
      selectedStates.splice(index, 1);
    }
  }

  function enableState(stateName) {
    var index = selectedStates.indexOf(stateName);
    if (index < 0) {
      selectedStates.push(stateName);
    }
  }

  function addOrRemoveStates(states, action) {
    if (action === "select") {
      addStates(states);
    } else {
      removeStates(states);
    }
  }

  function addStates(states) {
    states.forEach(function (state) {
      enableState(state.name);
    });
  }

  function removeStates(states) {
    states.forEach(function (state) {
      if (stateSelected(state.name)) {
        var index = selectedStates.indexOf(state.name);
        selectedStates.splice(index, 1);
      }
    });
  }

  if ($vmap.length > 0) {
    $vmap.vectorMap({
      map: "usa_en",
      multiSelectRegion: true,
      backgroundColor: vmapBgColor,
      borderColor: vmapBgColor,
      hoverColor: vmapHoverColor,
      selectedColor: vmapSelectedColor,
      color: vmapColor,
      onLoad: function () {
        $regionEast.on("click", regions.east, toggleRegion);
        $regionWest.on("click", regions.west, toggleRegion);
        $regionCentral.on("click", regions.central, toggleRegion);
        $regionMidwest.on("click", regions.midwest, toggleRegion);
        $regionSouth.on("click", regions.south, toggleRegion);
      },
      onRegionClick: function (event, code, stateName) {
        toggleState(stateName);
      },
    });
  }
});
