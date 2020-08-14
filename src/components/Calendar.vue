<template>
  <div id="calendar">
    <b-card :title="monthName + ' ' + year">
        
        <template v-if="events.length > 0">
          
          <template v-for="event in events">
            <DayRecord 
              v-bind:key="event.day" 
              :day="event.day" 
              :dayName="event.day_of_week"
              :event="event.event_name"
            ></DayRecord>
          </template>
          
          
        </template>

    </b-card>
  </div>
</template>

<script>

import DayRecord from '@/components/DayRecord.vue'
import {mapState} from "vuex";

export default {
  name: 'Calendar',
  components: {
    DayRecord,
  },
  computed: mapState("event", [
    "loading",
    "hasErrors",
    "errorMessage",
    "events",
    "monthName",
    "year"
  ]),
  created: function() {
    this.$store.commit("event/setMonthName");
    this.$store.commit("event/clearList");
    this.$store.dispatch("event/getEventList");
  },
}

</script>