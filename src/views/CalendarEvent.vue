<template>
  <div class="row">
    <div class="col-4 p-5">
      <EventForm></EventForm>
    </div>
    <div class="col-8 pt-5 pr-5">
      <Calendar></Calendar>
    </div>
  </div>
</template>

<script>

import EventForm from '@/components/EventForm.vue'
import Calendar from '@/components/Calendar.vue'

export default {
  name: 'CalendarEvent',
  components: {
    Calendar,
    EventForm
  }
}
</script>
