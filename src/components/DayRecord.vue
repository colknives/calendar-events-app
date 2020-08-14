<template>

    <div v-bind:class="[event ? 'with-event' : '', 'day-record row']">

        <div class="col-2">
            {{ day }} {{ dayName }}
        </div>

        <div class="col-8">
            {{ event }}
        </div>

    </div>

</template>

<script>

export default {
  name: 'DayRecord',
  props: {
    day: String,
    dayName: String,
    event: String
  }
}

</script>