// import router from '@/router';
import store from '@/store'
import axios from 'axios'


store.subscribe((mutation)=>{
    // console.log('subscribe');
    switch(mutation.type){
        case 'auth/SET_TOKEN':
            if(mutation.payload){
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`;
                localStorage.setItem('token', mutation.payload);
            } else {
                axios.defaults.headers.common['Authorization'] = null;
                localStorage.removeItem('token');
            }
            break;
    }
})