<template>
  <div
    class="input-dialog__box"
    :class="{ 'align-right': align == 'right', 'align-left': align == 'left' }"
    :style="{ left: posX, top: posY, width: `${inputDialogWidth}px` }"
  >
    <div class="input-dialog__box_left">
      <select v-model="label" id="input-dialog" class="input-dialog">
        <option value="" disabled>Select a label</option>
        <option v-for="label in labels" :value="label.label" :key="label.id">
          {{ label.label }}
        </option>
      </select>
      <div class="underline" :style="{ borderColor: annotationBgColor }"></div>
    </div>
    <button
      class="add-annotation-button"
      @click="addAnnotation"
      :style="{
        backgroundColor: annotationBgColor,
        color: annotationTextColor,
      }"
    >
      <span>ADD</span>
    </button>
  </div>
</template>

<script lang="ts">
import { Label } from "@/type";
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
@Component
export default class InputDialog extends Vue {
  @Prop({ required: true }) posX!: string;
  @Prop({ required: true }) posY!: string;
  @Prop({ required: true }) annotationTextColor!: string;
  @Prop({ required: true }) annotationBgColor!: string;
  @Prop({ required: true }) align!: string;
  @Prop({ required: true }) inputDialogWidth!: number;
  @Prop({ default: [] }) labels!: Array<Label>;

  label = "";

  @Emit()
  addAnnotation(): string {
    return this.label;
  }
}
</script>

<style lang="scss" scoped>


.input-dialog__box {
  position: fixed;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  display: flex;
  padding: 10px;
  line-height: 1;
  justify-content: center;
  box-sizing: border-box;
  z-index: 1;
  &_left {
    flex-grow: 1;
  }
  &.align-right {
    &::before {
      right: 10px;
    }
  }
  &.align-left {
    &::before {
      left: 10px;
    }
  }
  &::before {
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    top: -7px;
    position: absolute;
    background-color: #fff;
    transform: rotate(45deg);
    border-left: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
  }
  &_left {
    .input-dialog {
      width: 100%;
      border: none;
      outline: none;
      box-sizing: border-box;
      background: none;
      height: 20px;
      margin-bottom: 2px;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px white inset !important;
      }
    }
    .underline {
      position: relative;
      border-top: 1px solid;
    }
  }
  .add-annotation-button {
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    padding: 0px;
    font-size: 13px;
    height: 22px;
    width: 42px;
    opacity: 90%;
    margin-left: 5px;
    cursor: pointer;
    font-weight: bold;
  }
}

</style>
