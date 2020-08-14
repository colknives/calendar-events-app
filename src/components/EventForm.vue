<template>
  <div id="event-form">
    <b-card title="Event Form">

        <b-form v-on:submit.prevent="onSubmit">
            <b-form-group
                label="Event Name:"
                label-for="event-name"
            >
                <b-form-input
                    id="event-name"
                    type="text"
                    required
                    placeholder="Enter event name"
                    v-model="form.event_name"
                ></b-form-input>
            </b-form-group>

            <b-form-group
                label="From:"
                label-for="date-from"
            >
                <b-form-datepicker 
                    id="date-from" 
                    class="mb-2"
                    v-model="form.event_from"
                    :state="state.event_from"
                    @click="clearState('event_from')"
                ></b-form-datepicker>
            </b-form-group>

            <b-form-group
                label="To:"
                label-for="date-to"
            >
                <b-form-datepicker 
                    id="date-to" 
                    class="mb-2"
                    v-model="form.event_to"
                    :state="state.event_to"
                    @click="clearState('event_to')"
                ></b-form-datepicker>
            </b-form-group>

            <b-form-group label="Specific Days">
                <b-form-checkbox-group
                    :options="options"
                    name="radio-options"
                    v-model="form.days"
                ></b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </b-card>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: 'EventForm',
  computed: mapState("event", [
    "loading",
    "hasErrors",
    "errorMessage",
    "form"
  ]),
  data() {
    return {
      state: {
          event_from: null,
          event_to: null
      },
      options: [
            { text: 'Monday', value: 'monday' },
            { text: 'Tuesday', value: 'tuesday' },
            { text: 'Wednesday', value: 'wednesday' },
            { text: 'Thursday', value: 'thursday' },
            { text: 'Friday', value: 'friday' },
            { text: 'Saturday', value: 'saturday' },
            { text: 'Sunday', value: 'sunday' }
        ]
    }
  },
  methods: {
    clearState(name){
        this.state[name] = null;
    },
    async onSubmit() {

        this.state.event_from = null;
        this.state.event_to = null;

        if( this.form.event_from == "" ){
            this.state.event_from = false;
        }
        
        if( this.form.event_to == "" ){
            this.state.event_to = false;
        }

        if( this.form.event_to != "" && this.form.event_from != "" && this.form.event_name != "" ){
            this.$store.dispatch("event/addEvents");
        }

        
    }
  }
}
</script>