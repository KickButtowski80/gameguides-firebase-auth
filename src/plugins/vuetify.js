import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
                primary: '#6691e8',
                happy: "#FFDAB9", 
                secondary: '#2B2B2B',
                white: '#ffffff',
                orange: '#FC6D2B',
                darkgrey: '#707070',
                complete: '#2BFC83',
                inprogress: '#FF8936',
                incomplete: '#FF1212',
                Unstarted: '#FF1212',
                lightgrey: '#cacaca'
            }
        }
    }
});
