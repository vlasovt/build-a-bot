<template>
  <div>
    <div class="top-row">
      <div class="top part">
        <img :src="robotParts.heads[selectedHeadIndex].src" title="head"/>
        <button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="robotParts.arms[selectedArmIndex].src" title="left arm"/>
        <button @click="selectPreviousArm()" class="prev-selector">&#9668;</button>
        <button @click="selectNextArm()" class="next-selector">&#9658;</button>
      </div>
      <div class="center part">
        <img :src="robotParts.torsos[selectedTorsoIndex].src" title="left arm"/>
        <button @click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button @click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="robotParts.arms[selectedArmIndex].src" title="left arm"/>
        <button @click="selectPreviousArm()" class="prev-selector">&#9668;</button>
        <button @click="selectNextArm()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="robotParts.bases[selectedBaseIndex].src" title="left arm"/>
        <button @click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button @click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>
</template>

<script>
import robotParts from '../data/parts';

function selectNextValidIndex(selectedIndex, partsLength) {
  const limitIndex = partsLength - 1;
  return selectedIndex < limitIndex ? selectedIndex + 1 : selectedIndex;
}

function selectPreviousValidIndex(selectedIndex) {
  return selectedIndex > 0 ? selectedIndex - 1 : selectedIndex;
}

export default {
  name: 'RobotBuilder',
  props: {},
  data() {
    return {
      robotParts,
      selectedHeadIndex: 0,
      selectedArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedBaseIndex: 0,
    };
  },
  methods: {
    selectNextHead() {
      this.selectedHeadIndex = selectNextValidIndex(this.selectedHeadIndex,
        this.robotParts.heads.length);
    },
    selectPreviousHead() {
      this.selectedHeadIndex = selectPreviousValidIndex(this.selectedHeadIndex);
    },
    selectNextArm() {
      this.selectedArmIndex = selectNextValidIndex(this.selectedArmIndex,
        this.robotParts.arms.length);
    },
    selectPreviousArm() {
      this.selectedArmIndex = selectPreviousValidIndex(this.selectedArmIndex);
    },
    selectNextTorso() {
      this.selectedTorsoIndex = selectNextValidIndex(this.selectedTorsoIndex,
        this.robotParts.torsos.length);
    },
    selectPreviousTorso() {
      this.selectedTorsoIndex = selectPreviousValidIndex(this.selectedTorsoIndex);
    },
    selectNextBase() {
      this.selectedBaseIndex = selectNextValidIndex(this.selectedBaseIndex,
        this.robotParts.bases.length);
    },
    selectPreviousBase() {
      this.selectedBaseIndex = selectPreviousValidIndex(this.selectedBaseIndex);
    },
  },
};
</script>

<style>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}

</style>
