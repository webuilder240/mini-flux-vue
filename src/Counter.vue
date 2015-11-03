<template>
  <div>
    <button @click="tick()">Count Up</button>
    <p>
      Count: {{ count }}
    </p>
  </div>
</template>

<script>
  "use strict";
  import ActionCreator from "./ActionCreator";
  import Store from "./Store";
  import EventEmitter from "./EventEmitter";
  var dispatcher = new EventEmitter();
  var action = new ActionCreator(dispatcher);
  var store = new Store(dispatcher);
  export default {
    data (){
      return {
        count: ''
      }
    },
    created (){
      this.count = store.getCount();
      store.on('CHANGE', () => {
        this._onChange();
      });
    },
    methods: {
      tick (){
        action.countUp(this.count + 1);
      },
      _onChange (){
        this.count = store.getCount();
      }
    }
  }
</script>
