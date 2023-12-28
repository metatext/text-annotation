<template>
    

  <span
    class="text-annotation"
    :data-entity="labels.findIndex(i => i.label == textAnnotation.label).toString()"
  >
    <span class="text-annotation__wordx">
      {{ textAnnotation.text }}
    </span>
    <span
      class="text-annotation__annotationx entities-type"
    >
      <b>{{ textAnnotation.label }}</b>
    </span>
    <button v-if="!readonly" class="text-annotation__delete" @click="deleteAnnotation">x</button>
  </span>
</template>
<script lang="ts">
import { Annotation, Label } from "@/type";
import { Vue, Prop, Component, Emit } from "vue-property-decorator";
@Component
export default class TextAnnotation extends Vue {
  @Prop({ required: true }) readonly textAnnotation!: Annotation;
  @Prop({ required: true }) readonly annotationBgColor!: string;
  @Prop({ required: true }) readonly annotationTextColor!: string;
  @Prop({ default: [] }) readonly labels!: Array<Label>;
  @Prop({ required: false }) readonly readonly!: boolean;
  
  @Emit()
  deleteAnnotation(): number {
    return this.textAnnotation.start;
  }
}
</script>
<style lang="scss" scoped>
.text-annotation {
  margin-right: 3px;
  line-height: 1.3;
  border: 2px solid;
  display: inline-block;
  position: relative;
  cursor: pointer;

  &:hover &__delete {
    display: block;
  }

  &__word {
    float: left;
    height: 1.3em;
    line-height: 1.3;
    overflow: hidden;
    padding-left: 2px;
    padding-right: 2px;

    &-top,
    &-bottom {
      height: 1.3em;
      text-align: center;
      display: block;
      transition: margin-top 0.3s;
    }
  }

  &__annotation {
    display: inline-block;
    font-weight: 700;
    height: 1.3em;
    padding-left: 2px;
  }

  &__delete {
    font-size: 16px;
    color: #fff;
    top: -9px;
    left: -9px;
    position: absolute;
    text-align: center;
    display: none;
    border-radius: 50%;
    line-height: 1;
    padding: 0px;
    width: 16px;
    height: 16px;
    background-color: rgba(0, 0, 0, 0.54);
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
}



.ml11 {
    font-weight: 700;
    font-size: 5em;
  }
  
  .ml11 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }
  
  .ml11 .line {
    opacity: 0;
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: #fff;
    transform-origin: 0 50%;
  }
  
  .ml11 .line1 { 
    top: 0; 
    left: 0;
  }
  
  .ml11 .letter {
    display: inline-block;
    line-height: 1em;
  }
  .entities {
       line-height: 2; 
  }
  
  [data-entity] {
       padding: 0.25em 0.35em;
       margin: 0px 0.25em;
       line-height: 1;
       display: inline-block;
       border-radius: 0.25em;
       border: 1px solid; 
  }
  .entities-type {
       /* box-sizing: border-box; */
       /*attr(data-entity);*/
       font-size: 0.6em;
       line-height: 1;
       padding: 0em;
       border-radius: 0.35em;
       text-transform: uppercase;
       display: inline-block;
       vertical-align: middle;
       margin: 0px 0px 0rem 0.5rem; 
  }


  [data-entity][data-entity="0"] {
    background: rgba(67, 198, 252, 0.2);
    border-color: rgb(67, 198, 252);
}

[data-entity][data-entity="0"]::after {
    background: rgb(67, 198, 252);
}

  [data-entity][data-entity="1"] {
    background: rgba(166, 226, 45, 0.2);
    border-color: rgb(166, 226, 45);
}

[data-entity][data-entity="1"]::after {
    background: rgb(166, 226, 45);
}



[data-entity][data-entity="2"] {
    background: rgba(224, 0, 132, 0.2);
    border-color: rgb(224, 0, 132);
}

[data-entity][data-entity="2"]::after {
    background: rgb(224, 0, 132);
}


[data-entity][data-entity="3"] {
    background: rgba(45, 90, 226, 0.2);
    border-color: rgb(45, 126, 226);
}

[data-entity][data-entity="3"]::after {
    border-color: rgb(45, 126, 226);
}


[data-entity][data-entity="4"] {
    background: rgba(67, 198, 252, 0.2);
    border-color: rgb(67, 198, 252);
}

[data-entity][data-entity="4"]::after {
    background: rgb(67, 198, 252);
}

[data-entity][data-entity="5"] {
    background: rgba(253, 151, 32, 0.2);
    border-color: rgb(253, 151, 32);
}

[data-entity][data-entity="5"]::after {
    background: rgb(253, 151, 32);
}

[data-entity][data-entity="6"] {
    background: rgba(253, 151, 32, 0.2);
    border-color: rgb(253, 151, 32);
}

[data-entity][data-entity="6"]::after {
    background: rgb(253, 151, 32);
}

[data-entity][data-entity="7"] {
    background: rgba(253, 151, 32, 0.2);
    border-color: rgb(253, 151, 32);
}

[data-entity][data-entity="7"]::after {
    background: rgb(253, 151, 32);
}

[data-entity][data-entity="8"] {
    background: rgba(253, 151, 32, 0.2);
    border-color: rgb(253, 151, 32);
}

[data-entity][data-entity="8"]::after {
    background: rgb(253, 151, 32);
}

[data-entity][data-entity="9"] {
    background: rgba(142, 125, 255, 0.2);
    border-color: rgb(142, 125, 255);
}

[data-entity][data-entity="9"]::after {
    background: rgb(142, 125, 255);
}

[data-entity][data-entity="10"] {
    background: rgba(255, 204, 0, 0.2);
    border-color: rgb(255, 204, 0);
}

[data-entity][data-entity="10"]::after {
    background: rgb(255, 204, 0);
}

[data-entity][data-entity="11"] {
    background: rgba(255, 204, 0, 0.2);
    border-color: rgb(255, 204, 0);
}

[data-entity][data-entity="11"]::after {
    background: rgb(255, 204, 0);
}

[data-entity][data-entity="12"] {
    background: rgba(255, 204, 0, 0.2);
    border-color: rgb(255, 204, 0);
}

[data-entity][data-entity="12"]::after {
    background: rgb(255, 204, 0);
}

[data-entity][data-entity="13"] {
    background: rgba(255, 204, 0, 0.2);
    border-color: rgb(255, 204, 0);
}

[data-entity][data-entity="13"]::after {
    background: rgb(255, 204, 0);
}

[data-entity][data-entity="14"] {
    background: rgba(47, 187, 171, 0.2);
    border-color: rgb(47, 187, 171);
}

[data-entity][data-entity="14"]::after {
    background: rgb(47, 187, 171);
}

[data-entity][data-entity="15"] {
    background: rgba(47, 187, 171, 0.2);
    border-color: rgb(47, 187, 171);
}

[data-entity][data-entity="15"]::after {
    background: rgb(47, 187, 171);
}

[data-entity][data-entity="16"] {
    background: rgba(153, 153, 153, 0.2);
    border-color: rgb(153, 153, 153);
}

[data-entity][data-entity="16"]::after {
    background: rgb(153, 153, 153);
}

[data-entity][data-entity="17"] {
    background: rgba(153, 153, 153, 0.2);
    border-color: rgb(153, 153, 153);
}

[data-entity][data-entity="17"]::after {
    background: rgb(153, 153, 153);
}

[data-entity][data-entity="18"] {
    background: rgba(153, 153, 153, 0.2);
    border-color: rgb(153, 153, 153);
}

[data-entity][data-entity="18"]::after {
    background: rgb(153, 153, 153);
}

[data-entity][data-entity="19"] {
    background: rgba(153, 153, 153, 0.2);
    border-color: rgb(153, 153, 153);
}

[data-entity][data-entity="19"]::after {
    background: rgb(153, 153, 153);
}
  
  
  .arrow {
    border-color:transparent;
    border-style:solid;
    border-width:0 2em;
    display:block;
    height:0;
    margin:10em auto;
    opacity:0.4;
    text-indent:-9999px;
    transform-origin: 50% 50%;
    width:0;
  }
  .up {
    border-bottom:2em solid #00b6f1;
  }
  .down {
    border-top:2em solid #00b6f1;
  }
  
</style>
