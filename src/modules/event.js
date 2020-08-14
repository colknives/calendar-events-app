import eventApi from '../services/event';

export default {
    namespaced: true,
    state: {
        hasErrors: false,
        errorMessage: '',
        isSuccess: false,
        successMessage: '',
        loading: false,
        events: [],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'],
        month: new Date().getMonth(),
        monthName: '',
        year: new Date().getFullYear(),
        form: {
            event_name: '',
            event_from: '',
            event_to: '',
            days: []
        }
    },
    mutations: {
        errors(state, errors) {
            state.errorMessage = errors.errors.message;
            state.hasErrors = true;
            state.loading = false;
        },
        success(state, success) {
            state.successMessage = success.message;
            state.isSuccess = true;
            state.loading = false;
        },
        loading(state) {
            state.hasErrors = false;
            state.loading = true;
        },
        unloading(state) {
            state.loading = false;
        },
        clearForm(state){
            state.form.event_name = '';
            state.form.event_from = '';
            state.form.event_to = '';
            state.form.days = [];
        },
        clearList(state){
            state.events = [];
        },
        setMonthName(state){
            state.monthName = state.monthNames[state.month];
        },
        setEventList(state, list){
            state.events = list;
        }
    },
    actions: {
        getEventList: async ({ commit, state }) => {
            commit("loading");  

            try {
                let response = await eventApi.getEventList(state.month + 1, state.year);

                commit("unloading");

                if( response ){
                    commit('setEventList', response.events);
                }
            } catch (errors) {
                commit("unloading");
                commit("errors", errors);

                // notification.error(errors.errors.message);
            }
        },
        addEvents: async ({ commit, state, dispatch }) => {
            commit("loading");  

            try {

                let response = await eventApi.addEvents(
                    state.monthNames[state.month],
                    state.form.event_name,
                    state.form.event_from,
                    state.form.event_to,
                    state.form.days
                );

                commit("unloading");

                if( response ){
                    commit("clearForm");
                    commit("success", response);
                    dispatch("getEventList");
                }
            } catch (errors) {
                commit("unloading");
                commit("errors", errors);
            }
        }
    }
}
